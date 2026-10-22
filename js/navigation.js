/**
 * navigation.js - Chức năng chỉ dẫn đường đi và định vị độ chính xác cao
 */

const Navigation = {
  /**
   * Tạo chuỗi truy vấn địa chỉ đầy đủ để tìm kiếm hoặc chỉ đường chính xác nhất
   */
  buildAddressQuery(item) {
    if (typeof item === 'string') return item;
    const parts = [];
    if (item.ten) parts.push(item.ten);
    if (item.tenXaPhuong && item.ten !== item.tenXaPhuong) parts.push(item.tenXaPhuong);
    if (item.tenDonVi && item.ten !== item.tenDonVi) parts.push(item.tenDonVi);
    parts.push('Vĩnh Long', 'Việt Nam');
    return parts.join(', ');
  },

  /**
   * Mở Google Maps chỉ dẫn đường đi
   * Ưu tiên dùng địa chỉ đầy đủ (Semantic Query) để Google Maps phân giải chính xác điểm mốc của ấp/đường
   * Nếu có GPS tọa độ thực tế (custom GPS) thì dùng trực tiếp tọa độ
   */
  navigateFromCurrentLocation(destLat, destLng, addressQuery) {
    let destParam = '';
    
    // Nếu có query địa chỉ cụ thể (cho Ấp, Đường), dùng query để Google Maps tìm đúng vị trí mốc của ấp
    if (addressQuery && typeof addressQuery === 'string' && addressQuery.trim().length > 0) {
      destParam = encodeURIComponent(addressQuery);
    } else if (destLat && destLng) {
      destParam = `${destLat},${destLng}`;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${destParam}/@${latitude},${longitude},14z?entry=ttu`;
          window.open(url, '_blank');
        },
        () => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${destParam}&travelmode=driving`;
          window.open(url, '_blank');
        },
        { enableHighAccuracy: true, timeout: 6000 }
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destParam}&travelmode=driving`;
      window.open(url, '_blank');
    }
  },

  /**
   * Mở bản đồ Google Maps xem vị trí theo tên địa chỉ chuẩn hoặc tọa độ
   */
  openMap(lat, lng, label, addressQuery) {
    let query = addressQuery || label;
    if (!query && lat && lng) {
      query = `${lat},${lng}`;
    }
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  /**
   * Mở xem trên OpenStreetMap (bản đồ mở, thể hiện rõ ranh giới tự nhiên)
   */
  openOpenStreetMap(lat, lng, addressQuery) {
    if (lat && lng) {
      const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;
      window.open(url, '_blank');
    } else {
      const url = `https://www.openstreetmap.org/search?query=${encodeURIComponent(addressQuery || 'Vĩnh Long')}`;
      window.open(url, '_blank');
    }
  },

  /**
   * Chia sẻ vị trí qua Web Share API hoặc Copy link
   */
  shareLocation(lat, lng, label, addressQuery) {
    const query = addressQuery || label || `${lat},${lng}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    
    if (navigator.share) {
      navigator.share({
        title: label || 'Địa điểm Vĩnh Long',
        text: `Xem vị trí: ${query}`,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('Đã sao chép liên kết vị trí vào bộ nhớ đệm!');
      }).catch(() => {
        prompt('Sao chép link vị trí:', url);
      });
    }
  },

  /**
   * Lấy vị trí GPS thực tế từ cảm biến điện thoại (Độ chính xác cao - High Accuracy)
   */
  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Thiết bị không hỗ trợ GPS'));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy) // Sai số tính bằng mét
        }),
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
      );
    });
  },

  /**
   * Tính khoảng cách giữa 2 điểm (km)
   */
  calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(2);
  }
};

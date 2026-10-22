/**
 * saved-places.js - Quản lý lưu địa điểm với hỗ trợ GPS độ chính xác cao
 */

const SavedPlaces = {
  STORAGE_KEY: 'vinhlong_saved_places',

  // Lấy tất cả địa điểm đã lưu
  getAll() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Lưu một địa điểm mới
  save(place) {
    const places = this.getAll();
    place.id = Date.now().toString();
    place.savedAt = new Date().toISOString();
    if (!place.diaChiDayDu) {
      place.diaChiDayDu = Navigation.buildAddressQuery(place);
    }
    places.push(place);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(places));
    return place;
  },

  // Xóa một địa điểm
  remove(id) {
    let places = this.getAll();
    places = places.filter(p => p.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(places));
  },

  // Cập nhật ghi chú cho địa điểm
  updateNote(id, note) {
    const places = this.getAll();
    const place = places.find(p => p.id === id);
    if (place) {
      place.note = note;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(places));
    }
  },

  // Cập nhật tọa độ GPS chuẩn từ thực địa (độ chính xác cao từ điện thoại)
  updateGps(id, lat, lng, accuracy) {
    const places = this.getAll();
    const place = places.find(p => p.id === id);
    if (place) {
      place.toa_do = { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)) };
      place.isVerifiedGps = true;
      place.gpsAccuracy = accuracy; // Sai số mét
      place.verifiedAt = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(places));
      return place;
    }
    return null;
  },

  // Tìm kiếm trong địa điểm đã lưu
  search(keyword) {
    const places = this.getAll();
    const kw = keyword.toLowerCase();
    return places.filter(p =>
      p.ten.toLowerCase().includes(kw) ||
      (p.diaChiDayDu && p.diaChiDayDu.toLowerCase().includes(kw)) ||
      (p.note && p.note.toLowerCase().includes(kw))
    );
  },

  // Xóa tất cả
  clearAll() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  // Xuất dữ liệu
  exportData() {
    const places = this.getAll();
    const blob = new Blob([JSON.stringify(places, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vinhlong_diadiem_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  // Nhập dữ liệu
  importData(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      if (Array.isArray(imported)) {
        const existing = this.getAll();
        const merged = [...existing, ...imported];
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(merged));
        return true;
      }
      return false;
    } catch (e) {
      console.error('Lỗi nhập dữ liệu:', e);
      return false;
    }
  }
};

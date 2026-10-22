/**
 * search.js - Chức năng tìm kiếm địa điểm độ chính xác cao
 */

const SearchEngine = {
  // Tìm kiếm tổng hợp trong tất cả dữ liệu
  search(keyword) {
    if (!keyword || keyword.trim().length === 0) return [];
    
    const kw = keyword.toLowerCase().trim();
    const results = [];

    VINH_LONG_DATA.don_vi.forEach(donVi => {
      // Tìm trong tên huyện/thành phố/thị xã
      if (donVi.ten.toLowerCase().includes(kw)) {
        results.push({
          loai: 'don_vi',
          ten: donVi.ten,
          tenDonVi: donVi.ten,
          diaChiDayDu: `${donVi.ten}, Vĩnh Long`,
          toa_do: donVi.toa_do,
          icon: this.getIcon(donVi.loai)
        });
      }

      // Tìm trong đường
      if (donVi.duong) {
        donVi.duong.forEach(duong => {
          if (duong.toLowerCase().includes(kw)) {
            results.push({
              loai: 'duong',
              ten: duong,
              tenDonVi: donVi.ten,
              diaChiDayDu: `${duong}, ${donVi.ten}, Vĩnh Long`,
              toa_do: donVi.toa_do,
              icon: '🛣️'
            });
          }
        });
      }

      // Tìm trong xã/phường
      if (donVi.xa_phuong) {
        donVi.xa_phuong.forEach(xp => {
          if (xp.ten.toLowerCase().includes(kw)) {
            results.push({
              loai: 'xa_phuong',
              ten: xp.ten,
              tenDonVi: donVi.ten,
              diaChiDayDu: `${xp.ten}, ${donVi.ten}, Vĩnh Long`,
              toa_do: xp.toa_do,
              icon: this.getIcon(xp.loai)
            });
          }

          // Tìm trong ấp
          if (xp.ap) {
            xp.ap.forEach(ap => {
              if (ap.toLowerCase().includes(kw)) {
                results.push({
                  loai: 'ap',
                  ten: ap,
                  tenXaPhuong: xp.ten,
                  tenDonVi: donVi.ten,
                  diaChiDayDu: `${ap}, ${xp.ten}, ${donVi.ten}, Vĩnh Long`,
                  toa_do: xp.toa_do, // Tọa độ tham khảo trung tâm xã
                  isCentroid: true,  // Đánh dấu là tọa độ ước lượng của xã
                  icon: '🏘️'
                });
              }
            });
          }
        });
      }
    });

    return results;
  },

  // Lấy icon theo loại
  getIcon(loai) {
    const icons = {
      thanh_pho: '🏙️',
      thi_xa: '🏛️',
      huyen: '🏢',
      phuong: '📍',
      xa: '🏡',
      thi_tran: '🏘️',
      ap: '🏘️',
      duong: '🛣️'
    };
    return icons[loai] || '📌';
  },

  // Lấy tất cả huyện/thành phố
  getAllDonVi() {
    return VINH_LONG_DATA.don_vi.map(dv => ({
      ten: dv.ten,
      loai: dv.loai,
      toa_do: dv.toa_do,
      soXaPhuong: dv.xa_phuong ? dv.xa_phuong.length : 0
    }));
  },

  // Lấy xã/phường của một đơn vị
  getXaPhuong(tenDonVi) {
    const donVi = VINH_LONG_DATA.don_vi.find(dv => dv.ten === tenDonVi);
    return donVi ? donVi.xa_phuong : [];
  },

  // Lấy đường của một đơn vị
  getDuong(tenDonVi) {
    const donVi = VINH_LONG_DATA.don_vi.find(dv => dv.ten === tenDonVi);
    return donVi ? donVi.duong : [];
  },

  // Thống kê
  getStats() {
    let totalXaPhuong = 0;
    let totalAp = 0;
    let totalDuong = 0;

    VINH_LONG_DATA.don_vi.forEach(dv => {
      if (dv.xa_phuong) {
        totalXaPhuong += dv.xa_phuong.length;
        dv.xa_phuong.forEach(xp => {
          if (xp.ap) totalAp += xp.ap.length;
        });
      }
      if (dv.duong) totalDuong += dv.duong.length;
    });

    return {
      soDonVi: VINH_LONG_DATA.don_vi.length,
      soXaPhuong: totalXaPhuong,
      soAp: totalAp,
      soDuong: totalDuong
    };
  }
};

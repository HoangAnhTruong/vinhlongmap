/**
 * app.js - Logic chính của ứng dụng bản đồ Vĩnh Long (Độ chính xác cao)
 */

const App = {
  currentPage: 'home',
  currentDonVi: null,
  currentXaPhuong: null,

  init() {
    this.renderHome();
    this.setupSearch();
    this.setupNavigation();
    this.updateStats();
  },

  // ============ NAVIGATION TABS ============
  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        this.switchPage(page);
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  },

  switchPage(page) {
    this.currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    switch(page) {
      case 'home':
        document.getElementById('page-home').classList.add('active');
        this.renderHome();
        break;
      case 'browse':
        document.getElementById('page-browse').classList.add('active');
        this.renderBrowse();
        break;
      case 'saved':
        document.getElementById('page-saved').classList.add('active');
        this.renderSaved();
        break;
      case 'info':
        document.getElementById('page-info').classList.add('active');
        break;
    }
  },

  // ============ HOME PAGE ============
  renderHome() {
    this.updateStats();
  },

  updateStats() {
    const stats = SearchEngine.getStats();
    const statsEl = document.getElementById('stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="stat-item">
          <div class="stat-number">${stats.soDonVi}</div>
          <div class="stat-label">Huyện / TP / TX</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${stats.soXaPhuong}</div>
          <div class="stat-label">Xã / Phường / TT</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${stats.soAp}</div>
          <div class="stat-label">Ấp / Khóm / KP</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${stats.soDuong}</div>
          <div class="stat-label">Tên đường</div>
        </div>
      `;
    }
  },

  // ============ SEARCH ============
  setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const keyword = e.target.value;
        if (keyword.length >= 1) {
          const results = SearchEngine.search(keyword);
          this.renderSearchResults(results);
        } else {
          searchResults.innerHTML = '';
          searchResults.classList.remove('show');
        }
      }, 250);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('show');
      }
    });
  },

  renderSearchResults(results) {
    const container = document.getElementById('search-results');
    
    if (results.length === 0) {
      container.innerHTML = '<div class="search-result-item no-result">Không tìm thấy địa điểm phù hợp</div>';
      container.classList.add('show');
      return;
    }

    container.innerHTML = results.slice(0, 25).map(r => {
      const fullAddress = r.diaChiDayDu || Navigation.buildAddressQuery(r);
      const safeData = JSON.stringify(r).replace(/"/g, '&quot;');
      
      return `
        <div class="search-result-item" onclick="App.handleSearchSelect(${safeData})">
          <span class="result-icon">${r.icon}</span>
          <div class="result-info">
            <div class="result-name">${r.ten}</div>
            <div class="result-sub">${fullAddress}</div>
          </div>
          <div class="result-actions">
            <button class="btn-icon" onclick="event.stopPropagation(); Navigation.navigateFromCurrentLocation(${r.toa_do?.lat || 0}, ${r.toa_do?.lng || 0}, '${fullAddress}')" title="Chỉ đường chuẩn">
              🧭
            </button>
            <button class="btn-icon" onclick="event.stopPropagation(); App.savePlace(${safeData})" title="Lưu lại">
              💾
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (results.length > 25) {
      container.innerHTML += `<div class="search-result-item no-result">Còn ${results.length - 25} kết quả nữa...</div>`;
    }
    
    container.classList.add('show');
  },

  handleSearchSelect(result) {
    document.getElementById('search-results').classList.remove('show');
    document.getElementById('search-input').value = result.ten;
    this.showPlaceDetail(result);
  },

  // ============ BROWSE PAGE ============
  renderBrowse() {
    const container = document.getElementById('browse-content');
    const donViList = SearchEngine.getAllDonVi();
    
    container.innerHTML = `
      <div class="browse-header">
        <h3>📋 Đơn vị hành chính cũ tỉnh Vĩnh Long</h3>
        <p class="browse-subtitle">Bao gồm 8 huyện/thị/thành phố và toàn bộ xã, ấp, đường trước sáp nhập</p>
      </div>
      <div class="don-vi-list">
        ${donViList.map(dv => `
          <div class="don-vi-card" onclick="App.showDonViDetail('${dv.ten}')">
            <div class="don-vi-icon">${SearchEngine.getIcon(dv.loai)}</div>
            <div class="don-vi-info">
              <div class="don-vi-name">${dv.ten}</div>
              <div class="don-vi-count">${dv.soXaPhuong} xã/phường/thị trấn</div>
            </div>
            <div class="don-vi-arrow">›</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  showDonViDetail(tenDonVi) {
    const container = document.getElementById('browse-content');
    const xaPhuong = SearchEngine.getXaPhuong(tenDonVi);
    const duong = SearchEngine.getDuong(tenDonVi);
    const donVi = VINH_LONG_DATA.don_vi.find(dv => dv.ten === tenDonVi);
    const queryDonVi = `${tenDonVi}, Vĩnh Long`;
    
    container.innerHTML = `
      <div class="detail-header">
        <button class="btn-back" onclick="App.renderBrowse()">← Trở lại danh sách</button>
        <h3>${SearchEngine.getIcon(donVi.loai)} ${tenDonVi}</h3>
        <div class="detail-actions">
          <button class="btn-action" onclick="Navigation.openMap(${donVi.toa_do.lat}, ${donVi.toa_do.lng}, '${tenDonVi}', '${queryDonVi}')">
            🗺️ Mở bản đồ
          </button>
          <button class="btn-action" onclick="Navigation.navigateFromCurrentLocation(${donVi.toa_do.lat}, ${donVi.toa_do.lng}, '${queryDonVi}')">
            🧭 Chỉ đường
          </button>
        </div>
      </div>

      <div class="detail-tabs">
        <button class="tab-btn active" onclick="App.showTab('tab-xaphuong', this)">
          Xã / Phường (${xaPhuong.length})
        </button>
        <button class="tab-btn" onclick="App.showTab('tab-duong', this)">
          Tên đường (${duong.length})
        </button>
      </div>

      <!-- Tab Xã / Phường -->
      <div id="tab-xaphuong" class="tab-content active">
        ${xaPhuong.map(xp => {
          const queryXp = `${xp.ten}, ${tenDonVi}, Vĩnh Long`;
          return `
            <div class="xa-phuong-card">
              <div class="xa-phuong-header" onclick="App.toggleAp(this)">
                <span>${SearchEngine.getIcon(xp.loai)} <strong>${xp.ten}</strong> (${xp.ap ? xp.ap.length : 0} ấp)</span>
                <div class="xa-phuong-actions">
                  <button class="btn-icon-sm" onclick="event.stopPropagation(); Navigation.navigateFromCurrentLocation(${xp.toa_do.lat}, ${xp.toa_do.lng}, '${queryXp}')" title="Chỉ đường">🧭</button>
                  <button class="btn-icon-sm" onclick="event.stopPropagation(); App.savePlace({ten: '${xp.ten}', tenDonVi: '${tenDonVi}', diaChiDayDu: '${queryXp}', toa_do: {lat: ${xp.toa_do.lat}, lng: ${xp.toa_do.lng}}, loai: '${xp.loai}'})" title="Lưu">💾</button>
                  <span class="ap-toggle">▼</span>
                </div>
              </div>
              <div class="ap-list hidden">
                ${xp.ap.map(ap => {
                  const queryAp = `${ap}, ${xp.ten}, ${tenDonVi}, Vĩnh Long`;
                  return `
                    <div class="ap-item">
                      <div class="ap-title">
                        <span>🏘️ ${ap}</span>
                      </div>
                      <div class="ap-buttons">
                        <button class="btn-icon-sm" onclick="Navigation.navigateFromCurrentLocation(0, 0, '${queryAp}')" title="Chỉ đường Google Maps độ chính xác cao">🧭</button>
                        <button class="btn-icon-sm" onclick="Navigation.openMap(0, 0, '${ap}', '${queryAp}')" title="Xem trên bản đồ">🗺️</button>
                        <button class="btn-icon-sm" onclick="App.savePlace({ten: '${ap}', tenXaPhuong: '${xp.ten}', tenDonVi: '${tenDonVi}', diaChiDayDu: '${queryAp}', toa_do: {lat: ${xp.toa_do.lat}, lng: ${xp.toa_do.lng}}, isCentroid: true, loai: 'ap'})" title="Lưu vào danh sách">💾</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Tab Đường -->
      <div id="tab-duong" class="tab-content">
        ${duong.map(d => {
          const queryDuong = `${d}, ${tenDonVi}, Vĩnh Long`;
          return `
            <div class="duong-item">
              <span>🛣️ ${d}</span>
              <div style="display:flex; gap:6px;">
                <button class="btn-icon-sm" onclick="Navigation.navigateFromCurrentLocation(0, 0, '${queryDuong}')" title="Chỉ đường">🧭</button>
                <button class="btn-icon-sm" onclick="Navigation.openMap(0, 0, '${d}', '${queryDuong}')" title="Xem bản đồ">🗺️</button>
                <button class="btn-icon-sm" onclick="App.savePlace({ten: '${d}', tenDonVi: '${tenDonVi}', diaChiDayDu: '${queryDuong}', toa_do: {lat: ${donVi.toa_do.lat}, lng: ${donVi.toa_do.lng}}, loai: 'duong'})" title="Lưu">💾</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  showTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
  },

  toggleAp(headerEl) {
    const apList = headerEl.nextElementSibling;
    const toggle = headerEl.querySelector('.ap-toggle');
    apList.classList.toggle('hidden');
    toggle.textContent = apList.classList.contains('hidden') ? '▼' : '▲';
  },

  // ============ SAVED PLACES ============
  renderSaved() {
    const container = document.getElementById('saved-content');
    const places = SavedPlaces.getAll();

    if (places.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📌</div>
          <h3>Chưa có địa điểm đã lưu</h3>
          <p>Tìm kiếm hoặc duyệt danh mục ấp, xã, đường rồi nhấn biểu tượng 💾 để lưu trữ dễ dàng!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="saved-header">
        <div>
          <h3>📌 Địa điểm đã lưu (${places.length})</h3>
          <small style="color:var(--text-secondary)">Hỗ trợ lưu tọa độ GPS thực địa chính xác cao</small>
        </div>
        <div class="saved-actions">
          <button class="btn-small" onclick="SavedPlaces.exportData()">📥 Xuất JSON</button>
          <button class="btn-small btn-danger" onclick="if(confirm('Bạn có chắc muốn xóa tất cả địa điểm đã lưu?')) { SavedPlaces.clearAll(); App.renderSaved(); }">🗑️ Xóa hết</button>
        </div>
      </div>
      <div class="saved-list">
        ${places.map(p => {
          const address = p.diaChiDayDu || Navigation.buildAddressQuery(p);
          const hasGps = p.isVerifiedGps;
          return `
            <div class="saved-card">
              <div class="saved-info">
                <div class="saved-name">
                  ${SearchEngine.getIcon(p.loai || 'ap')} ${p.ten}
                  ${hasGps ? `<span class="badge badge-success">🎯 GPS chuẩn (±${p.gpsAccuracy || 5}m)</span>` : `<span class="badge badge-warning">📍 Định vị địa chỉ</span>`}
                </div>
                <div class="saved-address">${address}</div>
                ${p.toa_do ? `<div class="saved-coords">🌐 GPS: ${p.toa_do.lat}, ${p.toa_do.lng}</div>` : ''}
                ${p.note ? `<div class="saved-note">📝 ${p.note}</div>` : ''}
                <div class="saved-date">Lưu lúc: ${new Date(p.savedAt).toLocaleString('vi-VN')}</div>
              </div>
              <div class="saved-card-actions">
                <button class="btn-icon" onclick="Navigation.navigateFromCurrentLocation(${p.toa_do?.lat || 0}, ${p.toa_do?.lng || 0}, '${address}')" title="Chỉ đường Google Maps">🧭</button>
                <button class="btn-icon" onclick="Navigation.openMap(${p.toa_do?.lat || 0}, ${p.toa_do?.lng || 0}, '${p.ten}', '${address}')" title="Xem trên Google Maps">🗺️</button>
                <button class="btn-icon" onclick="Navigation.openOpenStreetMap(${p.toa_do?.lat || 0}, ${p.toa_do?.lng || 0}, '${address}')" title="Xem trên OpenStreetMap">🌍</button>
                <button class="btn-icon" onclick="App.captureRealGps('${p.id}')" title="Lấy GPS thực tế từ điện thoại khi đang ở đây">🎯</button>
                <button class="btn-icon" onclick="Navigation.shareLocation(${p.toa_do?.lat || 0}, ${p.toa_do?.lng || 0}, '${p.ten}', '${address}')" title="Chia sẻ">📤</button>
                <button class="btn-icon" onclick="App.editNote('${p.id}')" title="Ghi chú">📝</button>
                <button class="btn-icon btn-delete" onclick="if(confirm('Xóa địa điểm này?')) { SavedPlaces.remove('${p.id}'); App.renderSaved(); }" title="Xóa">❌</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  savePlace(placeData) {
    SavedPlaces.save(placeData);
    this.showToast(`Đã lưu: ${placeData.ten}`);
  },

  editNote(id) {
    const places = SavedPlaces.getAll();
    const place = places.find(p => p.id === id);
    const note = prompt('Nhập ghi chú cho địa điểm này (ví dụ: nhà người thân, bưu điện, ngã ba...):', place?.note || '');
    if (note !== null) {
      SavedPlaces.updateNote(id, note);
      if (this.currentPage === 'saved') {
        this.renderSaved();
      }
    }
  },

  // Cập nhật GPS thực tế từ điện thoại của người dùng khi đứng tại vị trí ấp
  async captureRealGps(id) {
    this.showToast('Đang quét vệ tinh GPS thiết bị...');
    try {
      const pos = await Navigation.getCurrentPosition();
      SavedPlaces.updateGps(id, pos.lat, pos.lng, pos.accuracy);
      this.showToast(`✅ Đã ghim GPS thành công! Sai số ±${pos.accuracy}m`);
      if (this.currentPage === 'saved') {
        this.renderSaved();
      }
    } catch (err) {
      alert('Không thể lấy tọa độ GPS từ điện thoại. Hãy chắc chắn bạn đã bật định vị (Location Services) trên thiết bị.');
    }
  },

  // ============ PLACE DETAIL MODAL ============
  showPlaceDetail(place) {
    const modal = document.getElementById('place-modal');
    const content = document.getElementById('modal-content');
    const address = place.diaChiDayDu || Navigation.buildAddressQuery(place);
    const isCentroid = place.isCentroid;

    content.innerHTML = `
      <div class="modal-header">
        <h3>${place.icon || '📍'} ${place.ten}</h3>
        <button class="btn-close" onclick="App.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <p class="modal-address">📍 <strong>Địa chỉ:</strong> ${address}</p>
        <p class="modal-accuracy-info">
          ${isCentroid 
            ? 'ℹ️ <em>Chế độ dẫn đường: Sử dụng cơ sở dữ liệu định vị Google Maps kết hợp tên Ấp/Xã chính xác để xác định tâm điểm ấp.</em>' 
            : 'ℹ️ <em>Độ chính xác cao theo hệ thống danh bạ bưu chính và địa bạ hành chính Vĩnh Long.</em>'}
        </p>
        ${place.toa_do ? `<p class="modal-coords">🌐 Tọa độ tham chiếu: ${place.toa_do.lat}, ${place.toa_do.lng}</p>` : ''}
        
        <div class="modal-actions">
          <button class="btn-primary" onclick="Navigation.navigateFromCurrentLocation(${place.toa_do?.lat || 0}, ${place.toa_do?.lng || 0}, '${address}')">
            🧭 Chỉ đường Google Maps (Chính xác cao)
          </button>
          <button class="btn-secondary" onclick="Navigation.openMap(${place.toa_do?.lat || 0}, ${place.toa_do?.lng || 0}, '${place.ten}', '${address}')">
            🗺️ Xem trên Google Maps
          </button>
          <button class="btn-secondary" onclick="Navigation.openOpenStreetMap(${place.toa_do?.lat || 0}, ${place.toa_do?.lng || 0}, '${address}')">
            🌍 Xem trên OpenStreetMap (Ranh giới địa phương)
          </button>
          <button class="btn-secondary" onclick="App.savePlace(${JSON.stringify(place).replace(/"/g, '&quot;')}); App.closeModal();">
            💾 Lưu địa điểm này
          </button>
          <button class="btn-secondary" onclick="Navigation.shareLocation(${place.toa_do?.lat || 0}, ${place.toa_do?.lng || 0}, '${place.ten}', '${address}')">
            📤 Chia sẻ cho bạn bè
          </button>
        </div>
      </div>
    `;
    
    modal.classList.add('show');
  },

  closeModal() {
    document.getElementById('place-modal').classList.remove('show');
  },

  // ============ TOAST ============
  showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
};

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

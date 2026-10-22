# Vĩnh Long Maps 🗺️

Ứng dụng web tra cứu thông tin địa điểm hành chính cũ tỉnh Vĩnh Long (trước sáp nhập).

## Tính năng

- 🔍 **Tìm kiếm** ấp, xã, phường, tên đường
- 📋 **Duyệt** danh sách theo huyện/thành phố/thị xã
- 🧭 **Chỉ đường** tích hợp Google Maps
- 💾 **Lưu** địa điểm yêu thích
- 📤 **Chia sẻ** vị trí
- 📱 **PWA** - cài đặt trên điện thoại như ứng dụng
- 🌙 **Dark mode** tự động

## Cấu trúc thư mục

```
vinhlong-map/
├── index.html              # Trang chính
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (offline)
├── README.md               # Hướng dẫn
├── css/
│   └── style.css           # Giao diện CSS (mobile-first)
├── js/
│   ├── app.js              # Logic chính ứng dụng
│   ├── search.js           # Chức năng tìm kiếm
│   ├── navigation.js       # Chỉ dẫn đường đi
│   └── saved-places.js     # Quản lý địa điểm đã lưu
├── data/
│   └── vinhlong-data.js    # Dữ liệu hành chính cũ Vĩnh Long
├── img/                    # Icons & hình ảnh
│   ├── icon-192.png
│   └── icon-512.png
└── pages/                  # Trang phụ (nếu cần)
```

## Dữ liệu hành chính

- **TP. Vĩnh Long**: 11 phường/xã
- **TX. Bình Minh**: 8 phường/xã
- **Huyện Long Hồ**: 14 xã/thị trấn
- **Huyện Mang Thít**: 12 xã/thị trấn
- **Huyện Vũng Liêm**: 19 xã/thị trấn
- **Huyện Tam Bình**: 16 xã/thị trấn
- **Huyện Bình Tân**: 11 xã/thị trấn
- **Huyện Trà Ôn**: 13 xã/thị trấn

## Cách sử dụng

1. Mở file `index.html` trên trình duyệt điện thoại
2. Hoặc deploy lên hosting (GitHub Pages, Netlify, Vercel...)
3. Trên điện thoại: Menu → "Thêm vào màn hình chính"

## Chạy local server

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

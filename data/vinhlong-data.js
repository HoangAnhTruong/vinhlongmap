/**
 * DỮ LIỆU HÀNH CHÍNH CŨ TỈNH VĨNH LONG
 * (Trước khi sáp nhập theo Nghị quyết của Ủy ban Thường vụ Quốc hội)
 * Bao gồm: Thành phố, thị xã, huyện, xã, phường, thị trấn, ấp, đường
 */

const VINH_LONG_DATA = {
  tinh: "Vĩnh Long",
  don_vi: [
    // ============================================================
    // 1. THÀNH PHỐ VĨNH LONG
    // ============================================================
    {
      ten: "Thành phố Vĩnh Long",
      loai: "thanh_pho",
      toa_do: { lat: 10.2538, lng: 105.9722 },
      xa_phuong: [
        {
          ten: "Phường 1",
          loai: "phuong",
          toa_do: { lat: 10.2560, lng: 105.9680 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4", "Khu phố 5"]
        },
        {
          ten: "Phường 2",
          loai: "phuong",
          toa_do: { lat: 10.2545, lng: 105.9710 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4"]
        },
        {
          ten: "Phường 3",
          loai: "phuong",
          toa_do: { lat: 10.2530, lng: 105.9750 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4", "Khu phố 5"]
        },
        {
          ten: "Phường 4",
          loai: "phuong",
          toa_do: { lat: 10.2510, lng: 105.9690 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4"]
        },
        {
          ten: "Phường 5",
          loai: "phuong",
          toa_do: { lat: 10.2500, lng: 105.9720 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4", "Khu phố 5"]
        },
        {
          ten: "Phường 8",
          loai: "phuong",
          toa_do: { lat: 10.2480, lng: 105.9760 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3"]
        },
        {
          ten: "Phường 9",
          loai: "phuong",
          toa_do: { lat: 10.2570, lng: 105.9650 },
          ap: ["Khu phố 1", "Khu phố 2", "Khu phố 3", "Khu phố 4"]
        },
        {
          ten: "Phường Tân Ngãi",
          loai: "phuong",
          toa_do: { lat: 10.2620, lng: 105.9580 },
          ap: ["Ấp Tân Bình", "Ấp Tân Hưng", "Ấp Tân Phú", "Ấp Tân Thuận", "Ấp Tân An"]
        },
        {
          ten: "Phường Tân Hòa",
          loai: "phuong",
          toa_do: { lat: 10.2490, lng: 105.9800 },
          ap: ["Ấp Tân Phong", "Ấp Tân Quới", "Ấp Tân Lộc"]
        },
        {
          ten: "Phường Tân Hội",
          loai: "phuong",
          toa_do: { lat: 10.2600, lng: 105.9850 },
          ap: ["Ấp Tân Hội A", "Ấp Tân Hội B", "Ấp Tân Lập"]
        },
        {
          ten: "Xã Trường An",
          loai: "xa",
          toa_do: { lat: 10.2450, lng: 105.9630 },
          ap: ["Ấp An Bình", "Ấp An Hòa", "Ấp An Phú", "Ấp An Thạnh", "Ấp An Lạc"]
        }
      ],
      duong: [
        "Đường 3 Tháng 2", "Đường Nguyễn Huệ", "Đường Trần Phú", "Đường Phạm Thái Bường",
        "Đường Phạm Hùng", "Đường Nguyễn Thị Minh Khai", "Đường Lê Thái Tổ",
        "Đường Hưng Đạo Vương", "Đường Đinh Tiên Hoàng", "Đường Tô Thị Huỳnh",
        "Đường 1 Tháng 5", "Đường Lê Lợi", "Đường Nguyễn Trãi", "Đường Hùng Vương",
        "Đường Nguyễn Du", "Đường Lý Thường Kiệt", "Đường Trần Hưng Đạo",
        "Đường Phan Bội Châu", "Đường Hoàng Thái Hiếu", "Đường Võ Văn Kiệt",
        "Đường Phó Cơ Điều", "Đường Nguyễn Văn Thảnh", "Đường Mậu Thân",
        "Đường 30 Tháng 4", "Đường Lưu Văn Liệt", "Đường Ký Con",
        "Đường Nguyễn Chí Thanh", "Đường Nguyễn Văn Tư"
      ]
    },

    // ============================================================
    // 2. THỊ XÃ BÌNH MINH
    // ============================================================
    {
      ten: "Thị xã Bình Minh",
      loai: "thi_xa",
      toa_do: { lat: 10.0750, lng: 105.8200 },
      xa_phuong: [
        {
          ten: "Phường Cái Vồn",
          loai: "phuong",
          toa_do: { lat: 10.0780, lng: 105.8220 },
          ap: ["Khu phố Bình Đức 1", "Khu phố Bình Đức 2", "Khu phố Bình Hòa", "Khu phố Bình Thạnh"]
        },
        {
          ten: "Phường Đông Thuận",
          loai: "phuong",
          toa_do: { lat: 10.0810, lng: 105.8280 },
          ap: ["Ấp Đông An", "Ấp Đông Bình", "Ấp Đông Hòa", "Ấp Đông Thạnh"]
        },
        {
          ten: "Phường Thành Phước",
          loai: "phuong",
          toa_do: { lat: 10.0690, lng: 105.8150 },
          ap: ["Ấp Phước Hòa", "Ấp Phước Thạnh", "Ấp Phước An"]
        },
        {
          ten: "Xã Đông Thạnh",
          loai: "xa",
          toa_do: { lat: 10.0850, lng: 105.8350 },
          ap: ["Ấp Đông Hưng", "Ấp Đông Lợi", "Ấp Đông Phú", "Ấp Đông Thới"]
        },
        {
          ten: "Xã Đông Thành",
          loai: "xa",
          toa_do: { lat: 10.0900, lng: 105.8100 },
          ap: ["Ấp Đông Bình A", "Ấp Đông Bình B", "Ấp Đông Mỹ"]
        },
        {
          ten: "Xã Đông Bình",
          loai: "xa",
          toa_do: { lat: 10.0650, lng: 105.8050 },
          ap: ["Ấp Bình An", "Ấp Bình Hòa", "Ấp Bình Lợi", "Ấp Bình Phú"]
        },
        {
          ten: "Xã Mỹ Hòa",
          loai: "xa",
          toa_do: { lat: 10.0600, lng: 105.8300 },
          ap: ["Ấp Mỹ An", "Ấp Mỹ Phú", "Ấp Mỹ Thạnh", "Ấp Mỹ Thuận"]
        },
        {
          ten: "Xã Thuận An",
          loai: "xa",
          toa_do: { lat: 10.0550, lng: 105.8400 },
          ap: ["Ấp An Hòa", "Ấp An Lạc", "Ấp An Phú", "Ấp An Thạnh"]
        }
      ],
      duong: [
        "Đường Quốc lộ 1A", "Đường Võ Văn Kiệt", "Đường 3 Tháng 2",
        "Đường Trần Hưng Đạo", "Đường Nguyễn Huệ", "Đường Cái Vồn - Bình Minh",
        "Đường Lê Lợi", "Đường Phan Chu Trinh"
      ]
    },

    // ============================================================
    // 3. HUYỆN LONG HỒ
    // ============================================================
    {
      ten: "Huyện Long Hồ",
      loai: "huyen",
      toa_do: { lat: 10.2200, lng: 106.0000 },
      xa_phuong: [
        {
          ten: "Thị trấn Long Hồ",
          loai: "thi_tran",
          toa_do: { lat: 10.2250, lng: 106.0050 },
          ap: ["Ấp Long Thuận", "Ấp Long Phú", "Ấp Long An"]
        },
        {
          ten: "Xã An Bình",
          loai: "xa",
          toa_do: { lat: 10.2400, lng: 105.9900 },
          ap: ["Ấp An Hòa", "Ấp An Thuận", "Ấp Bình An", "Ấp Bình Hòa", "Ấp Bình Thuận"]
        },
        {
          ten: "Xã Bình Hòa Phước",
          loai: "xa",
          toa_do: { lat: 10.2350, lng: 106.0200 },
          ap: ["Ấp Bình Phước", "Ấp Bình Thuận", "Ấp Hòa Bình", "Ấp Phước Hòa"]
        },
        {
          ten: "Xã Đồng Phú",
          loai: "xa",
          toa_do: { lat: 10.2100, lng: 106.0300 },
          ap: ["Ấp Phú An", "Ấp Phú Hòa", "Ấp Phú Lợi", "Ấp Phú Thạnh"]
        },
        {
          ten: "Xã Hòa Ninh",
          loai: "xa",
          toa_do: { lat: 10.2000, lng: 106.0100 },
          ap: ["Ấp Hòa An", "Ấp Hòa Lợi", "Ấp Hòa Phú", "Ấp Ninh An"]
        },
        {
          ten: "Xã Long An",
          loai: "xa",
          toa_do: { lat: 10.2150, lng: 105.9850 },
          ap: ["Ấp Long Bình", "Ấp Long Hòa", "Ấp Long Thuận", "Ấp An Lạc"]
        },
        {
          ten: "Xã Long Phước",
          loai: "xa",
          toa_do: { lat: 10.2300, lng: 106.0100 },
          ap: ["Ấp Long Hưng", "Ấp Long Thạnh", "Ấp Phước An", "Ấp Phước Lộc"]
        },
        {
          ten: "Xã Lộc Hòa",
          loai: "xa",
          toa_do: { lat: 10.2080, lng: 105.9950 },
          ap: ["Ấp Hòa Lộc", "Ấp Hòa Phú", "Ấp Lộc An", "Ấp Lộc Thuận"]
        },
        {
          ten: "Xã Phú Đức",
          loai: "xa",
          toa_do: { lat: 10.1950, lng: 106.0200 },
          ap: ["Ấp Phú An", "Ấp Phú Hòa", "Ấp Đức An", "Ấp Đức Hòa"]
        },
        {
          ten: "Xã Phú Quới",
          loai: "xa",
          toa_do: { lat: 10.2050, lng: 106.0400 },
          ap: ["Ấp Phú Bình", "Ấp Phú Lợi", "Ấp Quới An", "Ấp Quới Hòa"]
        },
        {
          ten: "Xã Phước Hậu",
          loai: "xa",
          toa_do: { lat: 10.1900, lng: 106.0050 },
          ap: ["Ấp Phước An", "Ấp Phước Hòa", "Ấp Hậu Lộc", "Ấp Hậu Thạnh"]
        },
        {
          ten: "Xã Tân Hạnh",
          loai: "xa",
          toa_do: { lat: 10.2500, lng: 105.9950 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Tân Phú", "Ấp Hạnh Phước"]
        },
        {
          ten: "Xã Thanh Đức",
          loai: "xa",
          toa_do: { lat: 10.1850, lng: 106.0350 },
          ap: ["Ấp Thanh An", "Ấp Thanh Bình", "Ấp Đức Thuận", "Ấp Đức Lợi"]
        },
        {
          ten: "Xã Thạnh Quới",
          loai: "xa",
          toa_do: { lat: 10.2180, lng: 106.0450 },
          ap: ["Ấp Thạnh An", "Ấp Thạnh Hòa", "Ấp Quới An", "Ấp Quới Thiện"]
        }
      ],
      duong: [
        "Đường Tỉnh lộ 902", "Đường Tỉnh lộ 903", "Đường Long Hồ - Phú Quới",
        "Đường Liên xã An Bình", "Đường Long Hồ"
      ]
    },

    // ============================================================
    // 4. HUYỆN MANG THÍT
    // ============================================================
    {
      ten: "Huyện Mang Thít",
      loai: "huyen",
      toa_do: { lat: 10.1700, lng: 106.0500 },
      xa_phuong: [
        {
          ten: "Thị trấn Cái Nhum",
          loai: "thi_tran",
          toa_do: { lat: 10.1750, lng: 106.0550 },
          ap: ["Ấp Nhum An", "Ấp Nhum Hòa", "Ấp Nhum Thạnh"]
        },
        {
          ten: "Xã An Phước",
          loai: "xa",
          toa_do: { lat: 10.1800, lng: 106.0700 },
          ap: ["Ấp An Hòa", "Ấp An Thạnh", "Ấp Phước An", "Ấp Phước Lộc"]
        },
        {
          ten: "Xã Bình Phước",
          loai: "xa",
          toa_do: { lat: 10.1600, lng: 106.0400 },
          ap: ["Ấp Bình An", "Ấp Bình Hòa", "Ấp Phước Bình", "Ấp Phước Thạnh"]
        },
        {
          ten: "Xã Chánh An",
          loai: "xa",
          toa_do: { lat: 10.1550, lng: 106.0650 },
          ap: ["Ấp Chánh Hòa", "Ấp Chánh Phú", "Ấp An Bình", "Ấp An Lạc"]
        },
        {
          ten: "Xã Chánh Hội",
          loai: "xa",
          toa_do: { lat: 10.1650, lng: 106.0800 },
          ap: ["Ấp Hội An", "Ấp Hội Phú", "Ấp Chánh Thuận"]
        },
        {
          ten: "Xã Long Mỹ",
          loai: "xa",
          toa_do: { lat: 10.1850, lng: 106.0600 },
          ap: ["Ấp Long An", "Ấp Long Hòa", "Ấp Mỹ An", "Ấp Mỹ Phú"]
        },
        {
          ten: "Xã Mỹ An",
          loai: "xa",
          toa_do: { lat: 10.1500, lng: 106.0500 },
          ap: ["Ấp An Hưng", "Ấp An Phú", "Ấp Mỹ Hòa", "Ấp Mỹ Thuận"]
        },
        {
          ten: "Xã Mỹ Phước",
          loai: "xa",
          toa_do: { lat: 10.1900, lng: 106.0450 },
          ap: ["Ấp Mỹ An", "Ấp Mỹ Hòa", "Ấp Phước An", "Ấp Phước Hòa"]
        },
        {
          ten: "Xã Nhơn Phú",
          loai: "xa",
          toa_do: { lat: 10.1750, lng: 106.0350 },
          ap: ["Ấp Nhơn An", "Ấp Nhơn Hòa", "Ấp Phú An", "Ấp Phú Lộc"]
        },
        {
          ten: "Xã Tân An Hội",
          loai: "xa",
          toa_do: { lat: 10.1680, lng: 106.0250 },
          ap: ["Ấp Tân An", "Ấp Tân Hội", "Ấp An Phú", "Ấp Hội An"]
        },
        {
          ten: "Xã Tân Long",
          loai: "xa",
          toa_do: { lat: 10.1600, lng: 106.0700 },
          ap: ["Ấp Tân Hòa", "Ấp Tân Phú", "Ấp Long An", "Ấp Long Hòa"]
        },
        {
          ten: "Xã Tân Long Hội",
          loai: "xa",
          toa_do: { lat: 10.1550, lng: 106.0550 },
          ap: ["Ấp Tân An", "Ấp Long Bình", "Ấp Hội Phú", "Ấp Hội An"]
        }
      ],
      duong: [
        "Đường Tỉnh lộ 901", "Đường Tỉnh lộ 904", "Đường Cái Nhum",
        "Đường Liên xã Mang Thít"
      ]
    },

    // ============================================================
    // 5. HUYỆN VŨNG LIÊM
    // ============================================================
    {
      ten: "Huyện Vũng Liêm",
      loai: "huyen",
      toa_do: { lat: 10.1200, lng: 106.1600 },
      xa_phuong: [
        {
          ten: "Thị trấn Vũng Liêm",
          loai: "thi_tran",
          toa_do: { lat: 10.1250, lng: 106.1650 },
          ap: ["Ấp Trung Hiệp", "Ấp Trung Hòa", "Ấp Trung An"]
        },
        {
          ten: "Xã Hiếu Phụng",
          loai: "xa",
          toa_do: { lat: 10.1350, lng: 106.1500 },
          ap: ["Ấp Hiếu An", "Ấp Hiếu Hòa", "Ấp Phụng An", "Ấp Phụng Hòa"]
        },
        {
          ten: "Xã Hiếu Thành",
          loai: "xa",
          toa_do: { lat: 10.1400, lng: 106.1550 },
          ap: ["Ấp Hiếu Bình", "Ấp Hiếu Thuận", "Ấp Thành An", "Ấp Thành Hòa"]
        },
        {
          ten: "Xã Hiếu Thuận",
          loai: "xa",
          toa_do: { lat: 10.1100, lng: 106.1700 },
          ap: ["Ấp Thuận An", "Ấp Thuận Hòa", "Ấp Thuận Phú"]
        },
        {
          ten: "Xã Hiếu Nhơn",
          loai: "xa",
          toa_do: { lat: 10.1300, lng: 106.1800 },
          ap: ["Ấp Nhơn An", "Ấp Nhơn Hòa", "Ấp Nhơn Phú", "Ấp Nhơn Thạnh"]
        },
        {
          ten: "Xã Quới An",
          loai: "xa",
          toa_do: { lat: 10.1150, lng: 106.1450 },
          ap: ["Ấp Quới Hòa", "Ấp Quới Phú", "Ấp An Bình", "Ấp An Lạc"]
        },
        {
          ten: "Xã Quới Thiện",
          loai: "xa",
          toa_do: { lat: 10.1050, lng: 106.1400 },
          ap: ["Ấp Quới An", "Ấp Quới Hòa", "Ấp Thiện An", "Ấp Thiện Hòa"]
        },
        {
          ten: "Xã Thanh Bình",
          loai: "xa",
          toa_do: { lat: 10.1000, lng: 106.1550 },
          ap: ["Ấp Thanh An", "Ấp Thanh Hòa", "Ấp Bình An", "Ấp Bình Phú"]
        },
        {
          ten: "Xã Trung An",
          loai: "xa",
          toa_do: { lat: 10.1200, lng: 106.1750 },
          ap: ["Ấp Trung Bình", "Ấp Trung Hòa", "Ấp An Lộc", "Ấp An Phú"]
        },
        {
          ten: "Xã Trung Chánh",
          loai: "xa",
          toa_do: { lat: 10.1100, lng: 106.1900 },
          ap: ["Ấp Trung An", "Ấp Trung Hưng", "Ấp Chánh An", "Ấp Chánh Hòa"]
        },
        {
          ten: "Xã Trung Hiếu",
          loai: "xa",
          toa_do: { lat: 10.1350, lng: 106.1650 },
          ap: ["Ấp Trung Phú", "Ấp Trung Thuận", "Ấp Hiếu An", "Ấp Hiếu Hòa"]
        },
        {
          ten: "Xã Trung Hiệp",
          loai: "xa",
          toa_do: { lat: 10.1280, lng: 106.1550 },
          ap: ["Ấp Trung An", "Ấp Trung Hòa", "Ấp Hiệp An", "Ấp Hiệp Phú"]
        },
        {
          ten: "Xã Trung Ngãi",
          loai: "xa",
          toa_do: { lat: 10.1150, lng: 106.2000 },
          ap: ["Ấp Ngãi An", "Ấp Ngãi Hòa", "Ấp Trung Bình", "Ấp Trung Phú"]
        },
        {
          ten: "Xã Trung Nghĩa",
          loai: "xa",
          toa_do: { lat: 10.1050, lng: 106.1850 },
          ap: ["Ấp Nghĩa An", "Ấp Nghĩa Hòa", "Ấp Trung An", "Ấp Trung Lộc"]
        },
        {
          ten: "Xã Trung Thành",
          loai: "xa",
          toa_do: { lat: 10.0950, lng: 106.1700 },
          ap: ["Ấp Thành An", "Ấp Thành Hòa", "Ấp Trung Phú", "Ấp Trung Lợi"]
        },
        {
          ten: "Xã Trung Thành Đông",
          loai: "xa",
          toa_do: { lat: 10.0900, lng: 106.1800 },
          ap: ["Ấp Đông An", "Ấp Đông Hòa", "Ấp Thành Đông", "Ấp Thành Lợi"]
        },
        {
          ten: "Xã Trung Thành Tây",
          loai: "xa",
          toa_do: { lat: 10.0950, lng: 106.1600 },
          ap: ["Ấp Tây An", "Ấp Tây Hòa", "Ấp Thành Tây", "Ấp Thành Phú"]
        },
        {
          ten: "Xã Tân An Luông",
          loai: "xa",
          toa_do: { lat: 10.0850, lng: 106.1500 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Luông An", "Ấp Luông Hòa"]
        },
        {
          ten: "Xã Tân Quới Trung",
          loai: "xa",
          toa_do: { lat: 10.1350, lng: 106.1350 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Quới An", "Ấp Trung An"]
        }
      ],
      duong: [
        "Đường Quốc lộ 53", "Đường Tỉnh lộ 901", "Đường Tỉnh lộ 906",
        "Đường Vũng Liêm", "Đường Liên xã Vũng Liêm"
      ]
    },

    // ============================================================
    // 6. HUYỆN TAM BÌNH
    // ============================================================
    {
      ten: "Huyện Tam Bình",
      loai: "huyen",
      toa_do: { lat: 10.1000, lng: 105.9600 },
      xa_phuong: [
        {
          ten: "Thị trấn Tam Bình",
          loai: "thi_tran",
          toa_do: { lat: 10.1050, lng: 105.9650 },
          ap: ["Ấp Bình An", "Ấp Bình Hòa", "Ấp Bình Phú"]
        },
        {
          ten: "Xã Bình Ninh",
          loai: "xa",
          toa_do: { lat: 10.1150, lng: 105.9700 },
          ap: ["Ấp Bình An", "Ấp Bình Hòa", "Ấp Ninh An", "Ấp Ninh Hòa"]
        },
        {
          ten: "Xã Hậu Lộc",
          loai: "xa",
          toa_do: { lat: 10.1200, lng: 105.9500 },
          ap: ["Ấp Hậu An", "Ấp Hậu Hòa", "Ấp Lộc An", "Ấp Lộc Hòa"]
        },
        {
          ten: "Xã Hoà Hiệp",
          loai: "xa",
          toa_do: { lat: 10.0900, lng: 105.9550 },
          ap: ["Ấp Hòa An", "Ấp Hòa Phú", "Ấp Hiệp An", "Ấp Hiệp Hòa"]
        },
        {
          ten: "Xã Hoà Lộc",
          loai: "xa",
          toa_do: { lat: 10.0850, lng: 105.9700 },
          ap: ["Ấp Hòa An", "Ấp Hòa Bình", "Ấp Lộc An", "Ấp Lộc Bình"]
        },
        {
          ten: "Xã Hoà Thạnh",
          loai: "xa",
          toa_do: { lat: 10.0800, lng: 105.9450 },
          ap: ["Ấp Hòa An", "Ấp Hòa Phú", "Ấp Thạnh An", "Ấp Thạnh Hòa"]
        },
        {
          ten: "Xã Loan Mỹ",
          loai: "xa",
          toa_do: { lat: 10.1100, lng: 105.9800 },
          ap: ["Ấp Loan An", "Ấp Loan Hòa", "Ấp Mỹ An", "Ấp Mỹ Hòa"]
        },
        {
          ten: "Xã Long Phú",
          loai: "xa",
          toa_do: { lat: 10.0950, lng: 105.9350 },
          ap: ["Ấp Long An", "Ấp Long Hòa", "Ấp Phú An", "Ấp Phú Hòa"]
        },
        {
          ten: "Xã Mỹ Lộc",
          loai: "xa",
          toa_do: { lat: 10.1050, lng: 105.9900 },
          ap: ["Ấp Mỹ An", "Ấp Mỹ Hòa", "Ấp Lộc An", "Ấp Lộc Phú"]
        },
        {
          ten: "Xã Mỹ Thạnh Trung",
          loai: "xa",
          toa_do: { lat: 10.0900, lng: 105.9800 },
          ap: ["Ấp Mỹ Phú", "Ấp Mỹ Thuận", "Ấp Thạnh An", "Ấp Trung An"]
        },
        {
          ten: "Xã Ngãi Tứ",
          loai: "xa",
          toa_do: { lat: 10.1200, lng: 105.9400 },
          ap: ["Ấp Ngãi An", "Ấp Ngãi Hòa", "Ấp Tứ An", "Ấp Tứ Hòa"]
        },
        {
          ten: "Xã Phú Lộc",
          loai: "xa",
          toa_do: { lat: 10.0750, lng: 105.9600 },
          ap: ["Ấp Phú An", "Ấp Phú Hòa", "Ấp Lộc An", "Ấp Lộc Thuận"]
        },
        {
          ten: "Xã Phú Thịnh",
          loai: "xa",
          toa_do: { lat: 10.0700, lng: 105.9500 },
          ap: ["Ấp Phú An", "Ấp Phú Bình", "Ấp Thịnh An", "Ấp Thịnh Hòa"]
        },
        {
          ten: "Xã Song Phú",
          loai: "xa",
          toa_do: { lat: 10.1100, lng: 105.9550 },
          ap: ["Ấp Song An", "Ấp Song Hòa", "Ấp Phú An", "Ấp Phú Bình"]
        },
        {
          ten: "Xã Tân Lộc",
          loai: "xa",
          toa_do: { lat: 10.0850, lng: 105.9350 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Lộc An", "Ấp Lộc Hòa"]
        },
        {
          ten: "Xã Tường Lộc",
          loai: "xa",
          toa_do: { lat: 10.0950, lng: 105.9750 },
          ap: ["Ấp Tường An", "Ấp Tường Hòa", "Ấp Lộc An", "Ấp Lộc Bình"]
        }
      ],
      duong: [
        "Đường Quốc lộ 1A", "Đường Tỉnh lộ 903", "Đường Tỉnh lộ 904",
        "Đường Tam Bình", "Đường Liên xã Tam Bình"
      ]
    },

    // ============================================================
    // 7. HUYỆN BÌNH TÂN
    // ============================================================
    {
      ten: "Huyện Bình Tân",
      loai: "huyen",
      toa_do: { lat: 10.1500, lng: 105.8500 },
      xa_phuong: [
        {
          ten: "Thị trấn Tân Quới",
          loai: "thi_tran",
          toa_do: { lat: 10.1550, lng: 105.8550 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Quới An"]
        },
        {
          ten: "Xã Mỹ Thuận",
          loai: "xa",
          toa_do: { lat: 10.1600, lng: 105.8700 },
          ap: ["Ấp Mỹ An", "Ấp Mỹ Hòa", "Ấp Thuận An", "Ấp Thuận Hòa"]
        },
        {
          ten: "Xã Nguyễn Văn Thảnh",
          loai: "xa",
          toa_do: { lat: 10.1700, lng: 105.8600 },
          ap: ["Ấp Thảnh An", "Ấp Thảnh Hòa", "Ấp Thảnh Phú", "Ấp Thảnh Lợi"]
        },
        {
          ten: "Xã Tân An Thạnh",
          loai: "xa",
          toa_do: { lat: 10.1400, lng: 105.8400 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Thạnh An", "Ấp Thạnh Hòa"]
        },
        {
          ten: "Xã Tân Bình",
          loai: "xa",
          toa_do: { lat: 10.1350, lng: 105.8550 },
          ap: ["Ấp Bình An", "Ấp Bình Hòa", "Ấp Tân Phú", "Ấp Tân Thạnh"]
        },
        {
          ten: "Xã Tân Hưng",
          loai: "xa",
          toa_do: { lat: 10.1650, lng: 105.8450 },
          ap: ["Ấp Tân Hưng A", "Ấp Tân Hưng B", "Ấp Hưng An", "Ấp Hưng Hòa"]
        },
        {
          ten: "Xã Tân Lược",
          loai: "xa",
          toa_do: { lat: 10.1450, lng: 105.8650 },
          ap: ["Ấp Tân Lược A", "Ấp Tân Lược B", "Ấp Lược An", "Ấp Lược Hòa"]
        },
        {
          ten: "Xã Tân Thành",
          loai: "xa",
          toa_do: { lat: 10.1500, lng: 105.8350 },
          ap: ["Ấp Tân An", "Ấp Tân Phú", "Ấp Thành An", "Ấp Thành Hòa"]
        },
        {
          ten: "Xã Thành Đông",
          loai: "xa",
          toa_do: { lat: 10.1300, lng: 105.8700 },
          ap: ["Ấp Đông An", "Ấp Đông Hòa", "Ấp Thành Lợi", "Ấp Thành Phú"]
        },
        {
          ten: "Xã Thành Lợi",
          loai: "xa",
          toa_do: { lat: 10.1250, lng: 105.8500 },
          ap: ["Ấp Lợi An", "Ấp Lợi Hòa", "Ấp Thành An", "Ấp Thành Bình"]
        },
        {
          ten: "Xã Thành Trung",
          loai: "xa",
          toa_do: { lat: 10.1550, lng: 105.8400 },
          ap: ["Ấp Trung An", "Ấp Trung Hòa", "Ấp Thành An", "Ấp Thành Phú"]
        }
      ],
      duong: [
        "Đường Quốc lộ 54", "Đường Tỉnh lộ 907", "Đường Tỉnh lộ 908",
        "Đường Bình Tân", "Đường Liên xã Bình Tân"
      ]
    },

    // ============================================================
    // 8. HUYỆN TRÀ ÔN
    // ============================================================
    {
      ten: "Huyện Trà Ôn",
      loai: "huyen",
      toa_do: { lat: 10.0200, lng: 105.9400 },
      xa_phuong: [
        {
          ten: "Thị trấn Trà Ôn",
          loai: "thi_tran",
          toa_do: { lat: 10.0250, lng: 105.9450 },
          ap: ["Ấp Trà An", "Ấp Trà Hòa", "Ấp Trà Phú"]
        },
        {
          ten: "Xã Hòa Bình",
          loai: "xa",
          toa_do: { lat: 10.0350, lng: 105.9500 },
          ap: ["Ấp Hòa An", "Ấp Hòa Phú", "Ấp Bình An", "Ấp Bình Hòa"]
        },
        {
          ten: "Xã Hựu Thành",
          loai: "xa",
          toa_do: { lat: 10.0150, lng: 105.9350 },
          ap: ["Ấp Hựu An", "Ấp Hựu Hòa", "Ấp Thành An", "Ấp Thành Hòa"]
        },
        {
          ten: "Xã Lục Sỹ Thành",
          loai: "xa",
          toa_do: { lat: 10.0100, lng: 105.9500 },
          ap: ["Ấp Lục An", "Ấp Sỹ An", "Ấp Thành An", "Ấp Thành Phú"]
        },
        {
          ten: "Xã Nhơn Bình",
          loai: "xa",
          toa_do: { lat: 10.0300, lng: 105.9600 },
          ap: ["Ấp Nhơn An", "Ấp Nhơn Hòa", "Ấp Bình An", "Ấp Bình Phú"]
        },
        {
          ten: "Xã Phú Thành",
          loai: "xa",
          toa_do: { lat: 10.0050, lng: 105.9300 },
          ap: ["Ấp Phú An", "Ấp Phú Hòa", "Ấp Thành An", "Ấp Thành Lợi"]
        },
        {
          ten: "Xã Thiện Mỹ",
          loai: "xa",
          toa_do: { lat: 10.0200, lng: 105.9200 },
          ap: ["Ấp Thiện An", "Ấp Thiện Hòa", "Ấp Mỹ An", "Ấp Mỹ Phú"]
        },
        {
          ten: "Xã Thuận Thới",
          loai: "xa",
          toa_do: { lat: 10.0400, lng: 105.9350 },
          ap: ["Ấp Thuận An", "Ấp Thuận Hòa", "Ấp Thới An", "Ấp Thới Hòa"]
        },
        {
          ten: "Xã Tân Mỹ",
          loai: "xa",
          toa_do: { lat: 10.0100, lng: 105.9600 },
          ap: ["Ấp Tân An", "Ấp Tân Hòa", "Ấp Mỹ An", "Ấp Mỹ Hòa"]
        },
        {
          ten: "Xã Tích Thiện",
          loai: "xa",
          toa_do: { lat: 10.0300, lng: 105.9250 },
          ap: ["Ấp Tích An", "Ấp Tích Hòa", "Ấp Thiện An", "Ấp Thiện Phú"]
        },
        {
          ten: "Xã Trà Côn",
          loai: "xa",
          toa_do: { lat: 10.0000, lng: 105.9450 },
          ap: ["Ấp Trà An", "Ấp Trà Hòa", "Ấp Côn An", "Ấp Côn Hòa"]
        },
        {
          ten: "Xã Vĩnh Xuân",
          loai: "xa",
          toa_do: { lat: 10.0450, lng: 105.9500 },
          ap: ["Ấp Vĩnh An", "Ấp Vĩnh Hòa", "Ấp Xuân An", "Ấp Xuân Hòa"]
        },
        {
          ten: "Xã Xuân Hiệp",
          loai: "xa",
          toa_do: { lat: 10.0350, lng: 105.9150 },
          ap: ["Ấp Xuân An", "Ấp Xuân Hòa", "Ấp Hiệp An", "Ấp Hiệp Hòa"]
        }
      ],
      duong: [
        "Đường Quốc lộ 54", "Đường Tỉnh lộ 901", "Đường Tỉnh lộ 909",
        "Đường Trà Ôn", "Đường Liên xã Trà Ôn"
      ]
    }
  ]
};

// Export cho module nếu cần
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VINH_LONG_DATA;
}

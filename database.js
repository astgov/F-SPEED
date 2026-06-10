// ==========================================================================
// F SPEED ENGINE - DATABASE ĐỘ NHẠY FULL CÁC DÒNG SAMSUNG (ANDROID 14 - 16)
// Powered by AST Studio // Tối ưu hóa thuật toán ghim tâm kéo headshot Free Fire
// ==========================================================================

const fSpeedDatabase = {
    "SAMSUNG": {
        // --- DÒNG GALAXY A (DÒNG CỎ / GIÁ RẺ ĐẾN TẦM TRUNG) ---
        "Galaxy A05 / A05s": { g: 100, r: 98, x2: 95, x4: 92, a: 50, l: 70, dpi: "Nút: 42% | DPI: 530 (Tăng tốc độ vuốt)" },
        "Galaxy A14 / A14 5G": { g: 100, r: 96, x2: 94, x4: 90, a: 48, l: 65, dpi: "Nút: 44% | DPI: 520" },
        "Galaxy A15 / A15 5G": { g: 100, r: 96, x2: 92, x4: 88, a: 45, l: 65, dpi: "Nút: 44% | DPI: 510 (Mượt sâu cảm ứng)" },
        "Galaxy A16 / A16 5G": { g: 99, r: 95, x2: 92, x4: 89, a: 43, l: 62, dpi: "Nút: 45% | DPI: 500 (Phản hồi chạm Android 16)" },
        "Galaxy A24 / A25 5G": { g: 98, r: 94, x2: 90, x4: 86, a: 45, l: 60, dpi: "Nút: 46% | DPI: 495" },
        "Galaxy A34 / A35 5G": { g: 96, r: 92, x2: 89, x4: 85, a: 40, l: 60, dpi: "Nút: 46% | DPI: 490 (Tối ưu màn 120Hz)" },
        "Galaxy A54 / A55 5G": { g: 95, r: 91, x2: 88, x4: 84, a: 42, l: 58, dpi: "Nút: 47% | DPI: 480" },
        "Galaxy A73 5G": { g: 94, r: 91, x2: 87, x4: 83, a: 40, l: 55, dpi: "Nút: 48% | DPI: 475" },

        // --- DÒNG GALAXY M & F (DÒNG PIN TRÂU, CẤU HÌNH KHỎE) ---
        "Galaxy M14 / M15 5G": { g: 100, r: 97, x2: 93, x4: 89, a: 46, l: 66, dpi: "Nút: 43% | DPI: 525" },
        "Galaxy M34 / M35 5G": { g: 97, r: 93, x2: 90, x4: 86, a: 44, l: 62, dpi: "Nút: 45% | DPI: 500" },
        "Galaxy M54 / M55 5G": { g: 95, r: 92, x2: 88, x4: 85, a: 42, l: 58, dpi: "Nút: 47% | DPI: 485" },
        "Galaxy F15 / F55 5G": { g: 98, r: 94, x2: 91, x4: 87, a: 45, l: 60, dpi: "Nút: 46% | DPI: 490" },

        // --- DÒNG GALAXY S BẢN THƯỜNG / PLUS / FE (CẬP NHẬT ANDROID ĐỜI MỚI) ---
        "Galaxy S21 / S21+ / S21 Ultra": { g: 94, r: 91, x2: 88, x4: 84, a: 40, l: 55, dpi: "Nút: 47% | DPI: 470" },
        "Galaxy S21 FE / S23 FE": { g: 95, r: 92, x2: 89, x4: 85, a: 42, l: 56, dpi: "Nút: 46% | DPI: 480" },
        "Galaxy S22 / S22+ 5G": { g: 93, r: 90, x2: 86, x4: 82, a: 38, l: 54, dpi: "Nút: 48% | DPI: 465" },
        "Galaxy S23 / S23+ 5G": { g: 94, r: 90, x2: 86, x4: 82, a: 40, l: 55, dpi: "Nút: 47% | DPI: 470" },
        "Galaxy S24 / S24+ 5G": { g: 92, r: 89, x2: 85, x4: 81, a: 36, l: 52, dpi: "Nút: 48% | DPI: 460" },
        "Galaxy S25 / S25+ 5G": { g: 91, r: 88, x2: 84, x4: 80, a: 35, l: 50, dpi: "Nút: 48% | DPI: 455 (Cảm ứng siêu nhạy)" },

        // --- DÒNG GALAXY S ULTRA (SIÊU CAO CẤP, CHỐNG SƯỢNG TÂM) ---
        "Galaxy S22 Ultra 5G": { g: 92, r: 89, x2: 85, x4: 82, a: 40, l: 50, dpi: "Nút: 46% | DPI: 460" },
        "Galaxy S23 Ultra 5G": { g: 91, r: 88, x2: 85, x4: 81, a: 36, l: 52, dpi: "Nút: 45% | DPI: 460" },
        "Galaxy S24 Ultra 5G": { g: 90, r: 87, x2: 84, x4: 80, a: 35, l: 50, dpi: "Nút: 45% | DPI: 450 (Thuật toán Android 16)" },
        "Galaxy S25 Ultra 5G": { g: 89, r: 86, x2: 83, x4: 79, a: 32, l: 48, dpi: "Nút: 44% | DPI: 445 (Ghim tâm tối đa)" },

        // --- DÒNG GALAXY Z (MÀN HÌNH GẬP ĐỘC LẠ) ---
        "Galaxy Z Fold 4 / Z Flip 4": { g: 90, r: 86, x2: 82, x4: 80, a: 35, l: 50, dpi: "Nút: 49% | DPI: Mặc định" },
        "Galaxy Z Fold 5 / Z Flip 5": { g: 88, r: 85, x2: 80, x4: 78, a: 30, l: 45, dpi: "Nút: 50% | DPI: Mặc định" },
        "Galaxy Z Fold 6 / Z Flip 6": { g: 87, r: 84, x2: 79, x4: 76, a: 28, l: 42, dpi: "Nút: 51% | DPI: 440" },

        // --- DÒNG GALAXY TAB (MÀN HÌNH LỚN / MÁY TÍNH BẢNG) ---
        "Galaxy Tab S8 / S9 Series": { g: 82, r: 78, x2: 75, x4: 70, a: 25, l: 40, dpi: "Nút: 55% | DPI: Mặc định (Vuốt tâm diện tích rộng)" },
        "Galaxy Tab A9 / A9+ / SE": { g: 88, r: 84, x2: 80, x4: 76, a: 30, l: 45, dpi: "Nút: 52% | DPI: Mặc định" }
    }
};


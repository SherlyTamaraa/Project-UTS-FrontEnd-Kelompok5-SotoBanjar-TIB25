const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
};

let uploadedMenuImageBase64 = "";

window.toggleAdminPasswordVisibility = function() {
    const input = document.getElementById("admin-pass");
    const icon = document.getElementById("eye-icon-admin");
    const text = document.getElementById("eye-text-admin");

    if (!input) return;

    if (input.type === "password") {
        input.type = "text";
        if (icon) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
        if (text) text.textContent = "Hide";
    } else {
        input.type = "password";
        if (icon) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
        if (text) text.textContent = "Show";
    }
};

const defaultMenuData = [
    { id: 1, name: "Soto Banjar Otentik", category: "makanan", price: 38000, badge: "Authentic", badgeColor: "bg-info text-dark", description: "Menu legendaris soto khas Kalimantan Selatan dengan racikan rempah murni pilihan.", image: "../assets/soto-banjar.jpeg" },
    { id: 2, name: "Soto Banjar (Ketupat)", category: "makanan", price: 35000, badge: "Best Seller", badgeColor: "bg-danger", description: "Soto khas Kalsel berkuah rempah susu/kentang, suwiran ayam, telur bebek rebus, soun, dan ketupat.", image: "../assets/soto-ketupat.jpeg" },
    { id: 3, name: "Soto Banjar Nasi", category: "makanan", price: 35000, badge: "Best Seller", badgeColor: "bg-danger", description: "Soto Banjar hangat kaya rempah disajikan bersama nasi putih pulen hangat.", image: "../assets/soto-nasi.jpeg" },
    { id: 4, name: "Sop Banjar Spesial", category: "makanan", price: 36000, badge: "Populer", badgeColor: "bg-warning text-dark", description: "Sop kuah bening kaya rempah pilihan khas Banjar dengan potongan ayam kampung.", image: "../assets/sop-banjar.jpeg" },
    { id: 5, name: "Sop Banjar (Nasi Terpisah)", category: "makanan", price: 35000, badge: "Best Seller", badgeColor: "bg-danger", description: "Racikan sop ayam kampung rempah otentik disajikan dengan nasi putih terpisah di piring.", image: "../assets/sop-banjar-nasi.jpeg" },
    { id: 6, name: "Nasi Sop Banjar (Campur)", category: "makanan", price: 32000, badge: "Authentic", badgeColor: "bg-info text-dark", description: "Penyajian praktis khas lokal, nasi putih langsung dicampur di dalam mangkuk kuah sop hangat.", image: "../assets/sop-banjar-nasi-campur.jpeg" },
    { id: 7, name: "Ekstra Ketupat Lembut", category: "pendamping", price: 5000, badge: null, badgeColor: null, description: "Ketupat matang pulen berbungkus daun pisang yang legit.", image: "../assets/ketupat.jpeg" },
    { id: 8, name: "Sate Ayam Bumbu Banjar (10 Tusuk)", category: "pendamping", price: 30000, badge: "Best Seller", badgeColor: "bg-danger", description: "Sate ayam dengan baluran bumbu merah khas Banjar yang manis, gurih, dan legit.", image: "../assets/sate-banjar.jpg" },
    { id: 9, name: "Sate Ayam Bumbu Banjar (5 Tusuk)", category: "pendamping", price: 16000, badge: "Populer", badgeColor: "bg-warning text-dark", description: "Porsi setengah untuk pelengkap makan soto Anda.", image: "../assets/sate-5-tusuk.png" },
    { id: 10, name: "Perkedel Singkong / Kentang", category: "pendamping", price: 4000, badge: null, badgeColor: null, description: "Perkedel otentik dari singkong atau kentang tumbuk halus yang digoreng gurih.", image: "../assets/perkedel.jpg" },
    { id: 11, name: "Ekstra Telur Bebek Rebus", category: "pendamping", price: 6000, badge: null, badgeColor: null, description: "1 butir telur bebek rebus gurih pelengkap kelezatan kuah soto.", image: "../assets/telur-bebek.jpg" },
    { id: 12, name: "Ekstra Suwiran Ayam Kampung", category: "pendamping", price: 12000, badge: null, badgeColor: null, description: "Porsi ekstra suwiran daging ayam kampung empuk dan manis gurih.", image: "../assets/ayam-suwir.png" },
    { id: 13, name: "Kerupuk Udang", category: "pendamping", price: 5000, badge: null, badgeColor: null, description: "Kerupuk udang renyah gurih pelengkap kuah soto.", image: "../assets/kerupuk-udang.jpg" },
    { id: 14, name: "Emping", category: "pendamping", price: 5000, badge: null, badgeColor: null, description: "emping melinjo gurih pelengkap kuah soto.", image: "../assets/emping.jpeg" },
    { id: 15, name: "Es / Hangat Jeruk Limau Kuit", category: "minuman", price: 12000, badge: "Best Seller", badgeColor: "bg-danger", description: "Minuman jeruk khas Kalimantan dengan aroma harum yang sangat spesifik dan menyegarkan.", image: "../assets/jeruk-limau-kuit.jpeg" },
    { id: 16, name: "Es Sirup Limau Kuit", category: "minuman", price: 14000, badge: null, badgeColor: null, description: "Paduan sirup manis dengan perasan jeruk limau kuit segar khas Banjar.", image: "../assets/sirup-limau-kuit.jpg" },
    { id: 17, name: "Es / Hangat Teh Ahmad", category: "minuman", price: 6000, badge: null, badgeColor: null, description: "Teh lokal legendaris dengan aroma dan kepekatan rasa yang khas.", image: "../assets/es-teh.jpeg" },
    { id: 18, name: "Air Mineral Botol", category: "minuman", price: 5000, badge: null, badgeColor: null, description: "Air mineral higienis dingin atau suhu ruangan (600ml).", image: "../assets/mineral-water.jpg" },
    { id: 19, name: "Bingka Banjar (Original Kentang)", category: "hidangan-penutup", price: 15000, badge: "Authentic", badgeColor: "bg-info text-dark", description: "Kue basah tradisional bertekstur lembut dan legit dengan rasa manis gurih yang pas (per potong).", image: "../assets/bingka-banjar.jpeg" },
    { id: 20, name: "Amparan Tatak Pisang", category: "hidangan-penutup", price: 12000, badge: "Best Seller", badgeColor: "bg-danger", description: "Kue khas berbahan tepung beras, santan, dan potongan pisang talas yang manis lembut.", image: "../assets/amparan-tatak-pisang.png" },
    { id: 21, name: "Lumpur Surga", category: "hidangan-penutup", price: 14000, badge: null, badgeColor: null, description: "Kue tradisional lapis hijau pandan gurih berpadu vla santan manis yang lumer di mulut.", image: "../assets/lumpur-surga.jpeg" },
    { id: 22, name: "Lempeng Pisang", category: "hidangan-penutup", price: 14000, badge: "Populer", badgeColor: "bg-warning text-dark", description: "Kue dadar pisang khas Banjar yang manis alami, beraroma harum pisang matang, dan bertekstur lembut di setiap gigitan.", image: "../assets/lempeng-pisang.jpeg" }
];

const defaultCategories = [
    { key: "makanan", label: "Hidangan Utama" },
    { key: "pendamping", label: "Lauk Pendamping & Ekstra" },
    { key: "minuman", label: "Minuman Segar" },
    { key: "hidangan-penutup", label: "Hidangan Penutup" }
];

const CURRENT_DATA_VERSION = "v3_banjar_full";

function getStoredCategories() {
    try {
        const version = localStorage.getItem("sotoBanjarCatVersion");
        const saved = localStorage.getItem("sotoBanjarCategories");
        if (version === CURRENT_DATA_VERSION && saved) {
            return JSON.parse(saved);
        }
    } catch (e) {}
    localStorage.setItem("sotoBanjarCategories", JSON.stringify(defaultCategories));
    localStorage.setItem("sotoBanjarCatVersion", CURRENT_DATA_VERSION);
    return defaultCategories;
}

function getStoredMenu() {
    try {
        const version = localStorage.getItem("sotoBanjarMenuVersion");
        const saved = localStorage.getItem("sotoBanjarMenu");
        if (version === CURRENT_DATA_VERSION && saved) {
            return JSON.parse(saved);
        }
    } catch (e) {}
    localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    localStorage.setItem("sotoBanjarMenuVersion", CURRENT_DATA_VERSION);
    return defaultMenuData;
}

let menuList = getStoredMenu();
let currentCategories = getStoredCategories();

function populateCategoryDropdown(selectedKey = "") {
    const catSelect = document.getElementById("menu-category");
    if (!catSelect) return;
    catSelect.innerHTML = "";

    currentCategories = getStoredCategories();

    currentCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.key;
        opt.textContent = cat.label;
        if (cat.key === selectedKey) opt.selected = true;
        catSelect.appendChild(opt);
    });

    const optNew = document.createElement("option");
    optNew.value = "TAMBAH_BARU";
    optNew.textContent = "+ Tambah Kategori Baru...";
    catSelect.appendChild(optNew);
}

window.handleCategorySelectChange = function() {
    const catSelect = document.getElementById("menu-category");
    const wrapper = document.getElementById("new-category-wrapper");
    if (catSelect.value === "TAMBAH_BARU") {
        wrapper.classList.remove("d-none");
        document.getElementById("new-category-name").focus();
    } else {
        wrapper.classList.add("d-none");
    }
};

window.handleBadgeSelectChange = function() {
    const badgeSelect = document.getElementById("menu-badge-select");
    const customWrap = document.getElementById("custom-badge-wrapper");
    const colorWrap = document.getElementById("badge-color-wrapper");

    if (badgeSelect.value === "CUSTOM") {
        customWrap.classList.remove("d-none");
        if (colorWrap) colorWrap.classList.remove("d-none");
        document.getElementById("custom-badge-text").focus();
    } else if (badgeSelect.value === "") {
        customWrap.classList.add("d-none");
        if (colorWrap) colorWrap.classList.add("d-none");
    } else {
        customWrap.classList.add("d-none");
        if (colorWrap) colorWrap.classList.remove("d-none");
    }
};

function renderMenuTable() {
    const tbody = document.getElementById("menu-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    menuList.forEach((item, index) => {
        const foundCat = currentCategories.find(c => c.key === item.category);
        const catLabel = foundCat ? foundCat.label : (item.category || "Menu");

        const badgeColorClass = item.badgeColor ? item.badgeColor : "bg-warning text-dark";
        const badgeHTML = item.badge
            ? `<span class="badge ${badgeColorClass}">${item.badge}</span>`
            : '<span class="text-muted">-</span>';

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${item.name}" class="menu-thumb"></td>
            <td><strong>${item.name}</strong><div class="small text-muted" style="font-size: 0.78rem;">${item.description || "-"}</div></td>
            <td><span class="badge bg-light text-dark border">${catLabel}</span></td>
            <td class="price-col" style="white-space: nowrap;"><strong>Rp ${Number(item.price).toLocaleString("id-ID")}</strong></td>
            <td>${badgeHTML}</td>
            <td>
                <button class="btn btn-sm btn-edit" onclick="editMenu(${item.id})"><i class="fa-solid fa-pen-to-square"></i> Edit</button> 
                <button class="btn btn-sm btn-delete" onclick="deleteMenu(${item.id})"><i class="fa-solid fa-trash"></i> Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const totalMenuEl = document.getElementById("total-menu-count");
    if (totalMenuEl) totalMenuEl.textContent = menuList.length;
}

window.editMenu = function(id) {
    const item = menuList.find(m => m.id === id);
    if (item) {
        document.getElementById("menu-id").value = item.id;
        document.getElementById("menu-name").value = item.name;
        document.getElementById("menu-price").value = item.price;
        document.getElementById("menu-desc").value = item.description || "";
        document.getElementById("modal-title").textContent = "Edit Menu & Harga";

        uploadedMenuImageBase64 = "";
        const fileInp = document.getElementById("menu-image-file");
        if (fileInp) fileInp.value = "";
        
        document.getElementById("menu-image-data").value = item.image || "";

        const prevWrap = document.getElementById("menu-image-preview-wrapper");
        const prevImg = document.getElementById("menu-image-preview");
        if (prevWrap && prevImg && item.image) {
            prevImg.src = item.image;
            prevWrap.classList.remove("d-none");
        } else if (prevWrap) {
            prevWrap.classList.add("d-none");
        }

        populateCategoryDropdown(item.category);

        const badgeSelect = document.getElementById("menu-badge-select");
        const customWrap = document.getElementById("custom-badge-wrapper");
        const customInput = document.getElementById("custom-badge-text");
        const colorWrap = document.getElementById("badge-color-wrapper");
        const colorSelect = document.getElementById("menu-badge-color");

        if (item.badge) {
            const presetValues = ["Best Seller", "Populer", "Authentic", "New"];
            if (presetValues.includes(item.badge)) {
                badgeSelect.value = item.badge;
                customWrap.classList.add("d-none");
            } else {
                badgeSelect.value = "CUSTOM";
                customWrap.classList.remove("d-none");
                customInput.value = item.badge;
            }
            if (colorWrap) colorWrap.classList.remove("d-none");
        } else {
            badgeSelect.value = "";
            customWrap.classList.add("d-none");
            if (colorWrap) colorWrap.classList.add("d-none");
        }

        if (item.badgeColor && colorSelect) colorSelect.value = item.badgeColor;

        toggleModal("add-menu-modal");
    }
};

window.deleteMenu = function(id) {
    if (confirm("Hapus menu ini dari katalog?")) {
        menuList = menuList.filter(item => item.id !== id);
        localStorage.setItem("sotoBanjarMenu", JSON.stringify(menuList));
        renderMenuTable();
    }
};

window.toggleModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.toggle("active");
    if (!modal.classList.contains("active")) {
        const form = document.getElementById("menu-form");
        if (form && modalId === "add-menu-modal") {
            form.reset();
            document.getElementById("menu-id").value = "";
            document.getElementById("new-category-wrapper").classList.add("d-none");
            document.getElementById("custom-badge-wrapper").classList.add("d-none");
            document.getElementById("badge-color-wrapper").classList.add("d-none");
            document.getElementById("modal-title").textContent = "Tambah Menu Baru";

            uploadedMenuImageBase64 = "";
            const prevWrap = document.getElementById("menu-image-preview-wrapper");
            if (prevWrap) prevWrap.classList.add("d-none");
            const fileInput = document.getElementById("menu-image-file");
            if (fileInput) fileInput.value = "";
            const hiddenData = document.getElementById("menu-image-data");
            if (hiddenData) hiddenData.value = "";

            populateCategoryDropdown();
        }
    }
};

window.switchTab = function(tabId, element) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    const navItems = document.querySelectorAll('.sidebar-menu .nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active-tab');
    if (element) element.classList.add('active');

    const pageTitle = document.getElementById('page-title');
    const pageSub = document.getElementById('page-sub');

    if (tabId === 'dashboard') {
        if (pageTitle) pageTitle.textContent = "Dashboard Kelola Toko";
        if (pageSub) pageSub.textContent = "Ringkasan aktivitas toko dan pesanan online Jabodetabek.";
    } else if (tabId === 'kelola-menu') {
        if (pageTitle) pageTitle.textContent = "Kelola Menu Kuliner";
        if (pageSub) pageSub.textContent = "Tambah, ubah harga, foto, kategori, dan warna badge menu.";
        renderMenuTable();
        populateCategoryDropdown();
    } else if (tabId === 'riwayat-login') {
        if (pageTitle) pageTitle.textContent = "Riwayat Aktivitas Login";
        if (pageSub) pageSub.textContent = "Pencatatan sesi masuk customer dan pengelola admin.";
        renderLoginHistoryTable();
    }
};

function checkAdminAuth() {
    const isLogged = sessionStorage.getItem("sotoBanjarAdminAuth");
    const lockOverlay = document.getElementById("admin-login-lock");
    const mainWrapper = document.getElementById("admin-main-wrapper");

    if (isLogged === "true") {
        if (lockOverlay) lockOverlay.classList.add("d-none");
        if (mainWrapper) mainWrapper.classList.remove("d-none");
        renderMenuTable();
        populateCategoryDropdown();
        renderLoginHistoryTable();
    } else {
        if (lockOverlay) lockOverlay.classList.remove("d-none");
        if (mainWrapper) mainWrapper.classList.add("d-none");
    }
}

window.logoutAdmin = function() {
    sessionStorage.removeItem("sotoBanjarAdminAuth");
    window.location.reload();
};

function renderLoginHistoryTable() {
    const tbody = document.getElementById("login-history-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const history = JSON.parse(localStorage.getItem("sotoBanjarLoginHistory") || "[]");
    if (history.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color: var(--text-muted); padding: 30px;">Belum ada riwayat aktivitas login.</td></tr>';
        return;
    }

    history.forEach(log => {
        const timeFormatted = new Date(log.time).toLocaleString("id-ID", { dateStyle: 'medium', timeStyle: 'short' });
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${log.id}</code></td>
            <td><i class="fa-regular fa-clock me-1 text-muted"></i> ${timeFormatted}</td>
            <td><strong>${log.username}</strong></td>
            <td><span class="badge ${log.role === 'Admin' ? 'bg-danger' : 'bg-info'}">${log.role}</span></td>
            <td><span class="badge ${log.status.includes('Berhasil') ? 'bg-success' : 'bg-warning'}">${log.status}</span></td>
            <td><small class="text-muted">${log.ip}</small></td>
        `;
        tbody.appendChild(tr);
    });
}

window.clearLoginHistory = function() {
    if (confirm("Hapus seluruh catatan riwayat login?")) {
        localStorage.removeItem("sotoBanjarLoginHistory");
        renderLoginHistoryTable();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    checkAdminAuth();

    const menuFileInput = document.getElementById("menu-image-file");
    if (menuFileInput) {
        menuFileInput.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    uploadedMenuImageBase64 = evt.target.result;
                    document.getElementById("menu-image-data").value = uploadedMenuImageBase64;
                    const prevWrap = document.getElementById("menu-image-preview-wrapper");
                    const prevImg = document.getElementById("menu-image-preview");
                    if (prevWrap && prevImg) {
                        prevImg.src = uploadedMenuImageBase64;
                        prevWrap.classList.remove("d-none");
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const adminLoginForm = document.getElementById("admin-login-form");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const u = document.getElementById("admin-user").value.trim();
            const p = document.getElementById("admin-pass").value.trim();
            const errEl = document.getElementById("admin-login-error");

            if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
                sessionStorage.setItem("sotoBanjarAdminAuth", "true");
                
                const history = JSON.parse(localStorage.getItem("sotoBanjarLoginHistory") || "[]");
                history.unshift({
                    id: "LOG-" + Math.floor(1000 + Math.random() * 9000),
                    username: "Admin Utama (" + u + ")",
                    role: "Admin",
                    time: new Date().toISOString(),
                    status: "Berhasil",
                    ip: "127.0.0.1 (Panel Dashboard)"
                });
                localStorage.setItem("sotoBanjarLoginHistory", JSON.stringify(history));

                checkAdminAuth();
            } else {
                errEl.classList.remove("d-none");
            }
        });
    }

    const menuForm = document.getElementById("menu-form");
    if (menuForm) {
        menuForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const id = document.getElementById("menu-id").value;
            const name = document.getElementById("menu-name").value.trim();
            const price = parseInt(document.getElementById("menu-price").value, 10);
            const description = document.getElementById("menu-desc").value.trim() || "-";

            let image = document.getElementById("menu-image-data").value || uploadedMenuImageBase64;
            if (!image) {
                alert("Harap pilih dan upload file gambar menu terlebih dahulu!");
                return;
            }

            let category = document.getElementById("menu-category").value;
            if (category === "TAMBAH_BARU") {
                const newCatName = document.getElementById("new-category-name").value.trim();
                if (newCatName) {
                    const newKey = newCatName.toLowerCase().replace(/\s+/g, '-');
                    currentCategories.push({ key: newKey, label: newCatName });
                    localStorage.setItem("sotoBanjarCategories", JSON.stringify(currentCategories));
                    category = newKey;
                } else {
                    category = "makanan";
                }
            }

            const badgeSelect = document.getElementById("menu-badge-select").value;
            let badge = badgeSelect;
            if (badgeSelect === "CUSTOM") {
                badge = document.getElementById("custom-badge-text").value.trim();
            }
            if (!badge) badge = null;

            const badgeColor = badge ? document.getElementById("menu-badge-color").value : null;

            if (id) {
                const index = menuList.findIndex(item => item.id == id);
                if (index !== -1) {
                    menuList[index] = { 
                        ...menuList[index], 
                        name, image, category, price, badge, badgeColor, description 
                    };
                }
            } else {
                const newId = menuList.length > 0 ? Math.max(...menuList.map(item => item.id)) + 1 : 1;
                menuList.push({
                    id: newId, name, image, category, price, badge, badgeColor, description
                });
            }

            localStorage.setItem("sotoBanjarMenu", JSON.stringify(menuList));
            renderMenuTable();
            populateCategoryDropdown();
            toggleModal("add-menu-modal");
        });
    }
});
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
};

let uploadedMenuImageBase64 = "";

//Toggle Show Hide Password Admin
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

// 23 menu
const defaultMenuData = [
    {
        id: 1,
        name: "Soto Banjar Otentik",
        category: "makanan",
        price: 32000,
        badge: "Authentic",
        badgeColor: "bg-info text-dark",
        description: "Menu legendaris soto khas Kalimantan Selatan dengan racikan rempah murni pilihan.",
        image: "../assets/soto-banjar.jpeg"
    },
    {
        id: 2,
        name: "Soto Banjar (Ketupat)",
        category: "makanan",
        price: 35000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Soto khas Kalsel berkuah rempah susu/kentang, suwiran ayam, telur bebek rebus, soun, dan ketupat.",
        image: "../assets/soto-ketupat.jpeg"
    },
    {
        id: 3,
        name: "Soto Banjar Nasi",
        category: "makanan",
        price: 35000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Soto Banjar hangat kaya rempah disajikan bersama nasi putih pulen hangat.",
        image: "../assets/soto-nasi.jpeg"
    },
    {
        id: 4,
        name: "Sop Banjar Spesial",
        category: "makanan",
        price: 32000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Sop kuah bening kaya rempah pilihan khas Banjar dengan potongan ayam kampung.",
        image: "../assets/sop-banjar.jpeg"
    },
    {
        id: 5,
        name: "Sop Banjar (Nasi Terpisah)",
        category: "makanan",
        price: 35000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Racikan sop ayam kampung rempah otentik disajikan dengan nasi putih terpisah di piring.",
        image: "../assets/sop-banjar-nasi.jpeg"
    },
    {
        id: 6,
        name: "Nasi Sop Banjar (Campur)",
        category: "makanan",
        price: 35000,
        badge: "Authentic",
        badgeColor: "bg-info text-dark",
        description: "Penyajian praktis khas lokal, nasi putih langsung dicampur di dalam mangkuk kuah sop hangat.",
        image: "../assets/sop-banjar-nasi-campur.jpeg"
    },
    {
        id: 7,
        name: "Ekstra Ketupat Lembut",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Ketupat matang pulen berbungkus daun pisang yang legit.",
        image: "../assets/ketupat.jpeg"
    },
    {
        id: 8,
        name: "Ekstra Nasi Putih Pulen",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Nasi putih pulen yang lembut dan harum.",
        image: "../assets/nasi-putih.jpg"
    },
    {
        id: 9,
        name: "Sate Ayam Bumbu Banjar (10 Tusuk)",
        category: "pendamping",
        price: 25000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Sate ayam dengan baluran bumbu merah khas Banjar yang manis, gurih, dan legit.",
        image: "../assets/sate-banjar.jpg"
    },
    {
        id: 10,
        name: "Sate Ayam Bumbu Banjar (5 Tusuk)",
        category: "pendamping",
        price: 15000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Porsi setengah untuk pelengkap makan soto Anda.",
        image: "../assets/sate-5-tusuk.png"
    },
    {
        id: 11,
        name: "Perkedel Singkong / Kentang",
        category: "pendamping",
        price: 4000,
        badge: null,
        badgeColor: null,
        description: "Perkedel otentik dari singkong atau kentang tumbuk halus yang digoreng gurih.",
        image: "../assets/perkedel.jpg"
    },
    {
        id: 12,
        name: "Ekstra Telur Bebek Rebus",
        category: "pendamping",
        price: 6000,
        badge: null,
        badgeColor: null,
        description: "1 butir telur bebek rebus gurih pelengkap kelezatan kuah soto.",
        image: "../assets/telur-bebek.jpg"
    },
    {
        id: 13,
        name: "Ekstra Suwiran Ayam Kampung",
        category: "pendamping",
        price: 10000,
        badge: null,
        badgeColor: null,
        description: "Porsi ekstra suwiran daging ayam kampung empuk dan manis gurih.",
        image: "../assets/ayam-suwir.png"
    },
    {
        id: 14,
        name: "Kerupuk Udang",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Kerupuk udang renyah gurih pelengkap kuah soto.",
        image: "../assets/kerupuk-udang.jpg"
    },
    {
        id: 15,
        name: "Emping",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "emping melinjo gurih pelengkap kuah soto.",
        image: "../assets/emping.jpeg"
    },
    {
        id: 16,
        name: "Es / Hangat Jeruk Limau Kuit",
        category: "minuman",
        price: 12000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Minuman jeruk khas Kalimantan dengan aroma harum yang sangat spesifik dan menyegarkan.",
        image: "../assets/jeruk-limau-kuit.jpeg"
    },
    {
        id: 17,
        name: "Es Sirup Limau Kuit",
        category: "minuman",
        price: 14000,
        badge: null,
        badgeColor: null,
        description: "Paduan sirup manis dengan perasan jeruk limau kuit segar khas Banjar.",
        image: "../assets/sirup-limau-kuit.jpg"
    },
    {
        id: 18,
        name: "Es / Hangat Teh Ahmad",
        category: "minuman",
        price: 6000,
        badge: null,
        badgeColor: null,
        description: "Teh lokal legendaris dengan aroma dan kepekatan rasa yang khas.",
        image: "../assets/es-teh.jpeg"
    },
    {
        id: 19,
        name: "Air Mineral Botol",
        category: "minuman",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Air mineral higienis dingin atau suhu ruangan (600ml).",
        image: "../assets/mineral-water.jpg"
    },
    {
        id: 20,
        name: "Bingka Banjar (Original Kentang)",
        category: "hidangan-penutup",
        price: 15000,
        badge: "Authentic",
        badgeColor: "bg-info text-dark",
        description: "Kue basah tradisional bertekstur lembut dan legit dengan rasa manis gurih yang pas (per potong).",
        image: "../assets/bingka-banjar.jpeg"
    },
    {
        id: 21,
        name: "Amparan Tatak Pisang",
        category: "hidangan-penutup",
        price: 12000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Kue khas berbahan tepung beras, santan, dan potongan pisang talas yang manis lembut.",
        image: "../assets/amparan-tatak-pisang.png"
    },
    {
        id: 22,
        name: "Lumpur Surga",
        category: "hidangan-penutup",
        price: 14000,
        badge: null,
        badgeColor: null,
        description: "Kue tradisional lapis hijau pandan gurih berpadu vla santan manis yang lumer di mulut.",
        image: "../assets/lumpur-surga.jpeg"
    },
    {
        id: 23,
        name: "Lempeng Pisang",
        category: "hidangan-penutup",
        price: 20000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Kue dadar pisang khas Banjar yang manis alami, beraroma harum pisang matang, dan bertekstur lembut di setiap gigitan.",
        image: "../assets/lempeng-pisang.jpeg"
    }
];

const defaultCategories = [
    { key: "makanan", label: "Hidangan Utama" },
    { key: "pendamping", label: "Lauk Pendamping & Ekstra" },
    { key: "minuman", label: "Minuman Segar" },
    { key: "hidangan-penutup", label: "Hidangan Penutup" }
];

const defaultOngkirList = [
    { id: 1, name: "Jakarta", price: 10000 },
    { id: 2, name: "Tangerang / Tangsel", price: 15000 },
    { id: 3, name: "Depok / Bekasi", price: 18000 },
    { id: 4, name: "Bogor", price: 24000 }
];

const defaultHeroText = {
    badge: "Khusus Pesan Online • Area Jabodetabek",
    title: "Keharuman Rempah Autentik Khas Banjar Langsung ke Rumahmu",
    highlight: "Khas Banjar",
    desc: "Pesan Soto Banjar hangat kaldu ayam kampung murni berpadu kayu manis, kapulaga, cengkeh, dan bunga lawang khas Kalimantan Selatan. Dikemas higienis, anti tumpah, dan cepat sampai tujuan.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80"
};

const defaultAboutContent = {
    badge: "FILOSOFI RASA",
    title: "Warisan Cita Rasa Hangat dari Bumi Kalimantan",
    highlight: "Bumi Kalimantan",
    p1: "Soto Banjar Selera Nusantara berakar dari kecintaan kami melestarikan kuliner legendaris khas Banjarmasin. Kunci kelezatan sup kami terletak pada simfoni rempah aromatik pilihan: kayu manis, cengkeh, kapulaga, pala, dan bunga lawang yang ditumis harum dengan mentega berkualitas sebelum dipadukan ke dalam rebusan kaldu murni.",
    p2: "Kami hanya menggunakan 100% ayam kampung segar yang menghasilkan kaldu gurih alami tanpa bahan pengawet. Disajikan lengkap bersama ketupat lembut, perkedel kentang legit, suwiran ayam tebal, telur bebek rebus, serta kucuran perasan jeruk kuit khas yang harum menyegarkan.",
    feat1_title: "Ayam Kampung Asli",
    feat1_desc: "Daging manis alami berpadu kaldu gurih kaya nutrisi rempah.",
    feat2_title: "Jeruk Kuit Segar",
    feat2_desc: "Aroma sitrus khas Banjar yang autentik dan menyegarkan.",
    image: "../assets/header.jpg"
};

const defaultFaqData = {
    badge: "TANYA JAWAB",
    title: "Pertanyaan Umum (FAQ)",
    desc: "Punya pertanyaan seputar cara pesan, pengiriman, dan kualitas soto kami?",
    items: [
        {
            id: 1,
            question: "Apakah kuah soto dikirim terpisah agar tidak tumpah?",
            answer: "Ya, kuah kaldu rempah dikemas khusus menggunakan mangkuk/standing pouch tahan panas berlapis rapat yang disegel rapi terpisah dari ketupat, suwiran ayam, dan perkedel untuk menjaga kesegaran dan menghindari tumpah di jalan."
        },
        {
            id: 2,
            question: "Berapa lama waktu pengantaran di wilayah Jabodetabek?",
            answer: "Rata-rata pengantaran berkisar antara 30 hingga 45 menit tergantung jarak wilayah pengantaran. Kurir kami akan segera meluncur setelah dapur selesai menyiapkan pesanan Anda."
        },
        {
            id: 3,
            question: "Apakah seluruh menu dijamin 100% Halal?",
            answer: "Semua menu dijamin 100% Halal. Kami menggunakan ayam kampung segar pilihan, rempah alami Nusantara, dan telur bebek berkualitas tanpa bahan pengawet atau non-halal."
        },
        {
            id: 4,
            question: "Metode pembayaran apa saja yang didukung?",
            answer: "Kami melayani pembayaran melalui Virtual Account Bank (BCA, Mandiri) dan Saldo E-Wallet (GoPay, OVO, ShopeePay, DANA) yang diproses secara instan dan otomatis."
        }
    ]
};

const CURRENT_DATA_VERSION = "v3_banjar_full";

function getStoredOngkirList() {
    try {
        const saved = localStorage.getItem("sotoBanjarOngkirList");
        return saved ? JSON.parse(saved) : defaultOngkirList;
    } catch (e) {
        return defaultOngkirList;
    }
}

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

function getStoredOrders() {
    try {
        const saved = localStorage.getItem("sotoBanjarOrders");
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function getStoredReviews() {
    try {
        const saved = localStorage.getItem("sotoBanjarReviews");
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function getStoredHeroText() {
    try {
        const saved = localStorage.getItem("sotoBanjarHeroContent");
        return saved ? JSON.parse(saved) : defaultHeroText;
    } catch (e) {
        return defaultHeroText;
    }
}

function getStoredAboutContent() {
    try {
        const saved = localStorage.getItem("sotoBanjarAboutContent");
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...defaultAboutContent, ...parsed };
        }
        return defaultAboutContent;
    } catch (e) {
        return defaultAboutContent;
    }
}

function getStoredFaqData() {
    try {
        const saved = localStorage.getItem("sotoBanjarFaqContent");
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...defaultFaqData, ...parsed };
        }
        return defaultFaqData;
    } catch (e) {
        return defaultFaqData;
    }
}

let menuList = getStoredMenu();
let orderList = getStoredOrders();
let reviewList = getStoredReviews();
let currentOngkirList = getStoredOngkirList();
let currentCategories = getStoredCategories();
let currentHeroText = getStoredHeroText();
let currentAboutContent = getStoredAboutContent();
let currentFaqData = getStoredFaqData();
let selectedOrderId = null;

function checkAdminAuth() {
    const isLogged = sessionStorage.getItem("sotoBanjarAdminAuth");
    const lockOverlay = document.getElementById("admin-login-lock");
    const mainWrapper = document.getElementById("admin-main-wrapper");

    if (isLogged === "true") {
        if (lockOverlay) lockOverlay.classList.add("d-none");
        if (mainWrapper) mainWrapper.classList.remove("d-none");
        renderMenuTable();
        renderOrderTable();
        renderOngkirDisplay();
        populateCategoryDropdown();
        filterOmsetDashboard();
        renderAdminReviews();
        loadHeaderEditorForm();
        loadAboutEditorForm();
        loadFaqEditorForm();
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
        renderOngkirDisplay();
    } else if (tabId === 'kelola-menu') {
        if (pageTitle) pageTitle.textContent = "Kelola Menu Kuliner";
        if (pageSub) pageSub.textContent = "Tambah, ubah harga, foto, kategori, dan warna badge menu.";
        renderMenuTable();
        populateCategoryDropdown();
    } else if (tabId === 'kelola-pesanan') {
        if (pageTitle) pageTitle.textContent = "Daftar Pesanan Online Masuk";
        if (pageSub) pageSub.textContent = "Pantau rincian alamat pengantaran customer dan update status pengiriman.";
        renderOrderTable();
    } else if (tabId === 'laporan-omset') {
        if (pageTitle) pageTitle.textContent = "Laporan & Rincian Omset";
        if (pageSub) pageSub.textContent = "Penyaringan data omset per periode serta daftar rincian pemesan.";
        filterOmsetDashboard();
    } else if (tabId === 'kelola-review') {
        if (pageTitle) pageTitle.textContent = "Kelola Ulasan Pelanggan";
        if (pageSub) pageSub.textContent = "Pantau ulasan dari customer dan berikan balasan resmi restoran.";
        renderAdminReviews();
    } else if (tabId === 'edit-header') {
        if (pageTitle) pageTitle.textContent = "Edit Header & Konten Web";
        if (pageSub) pageSub.textContent = "Ubah kalimat banner hero, cerita cita rasa, serta daftar tanya jawab (FAQ).";
        loadHeaderEditorForm();
        loadAboutEditorForm();
        loadFaqEditorForm();
    } else if (tabId === 'riwayat-login') {
        if (pageTitle) pageTitle.textContent = "Riwayat Aktivitas Login";
        if (pageSub) pageSub.textContent = "Pencatatan sesi masuk customer dan pengelola admin.";
        renderLoginHistoryTable();
    }
};

window.switchContentSubTab = function(type) {
    const btnHero = document.getElementById("subtab-btn-hero");
    const btnAbout = document.getElementById("subtab-btn-about");
    const btnFaq = document.getElementById("subtab-btn-faq");
    const subHero = document.getElementById("content-sub-hero");
    const subAbout = document.getElementById("content-sub-about");
    const subFaq = document.getElementById("content-sub-faq");

    [btnHero, btnAbout, btnFaq].forEach(b => b && b.classList.remove("active"));
    [subHero, subAbout, subFaq].forEach(s => s && s.classList.remove("active-subtab"));

    if (type === 'hero') {
        if (btnHero) btnHero.classList.add("active");
        if (subHero) subHero.classList.add("active-subtab");
        loadHeaderEditorForm();
    } else if (type === 'about') {
        if (btnAbout) btnAbout.classList.add("active");
        if (subAbout) subAbout.classList.add("active-subtab");
        loadAboutEditorForm();
    } else if (type === 'faq') {
        if (btnFaq) btnFaq.classList.add("active");
        if (subFaq) subFaq.classList.add("active-subtab");
        loadFaqEditorForm();
    }
};

// Kelola Ongkir
function renderOngkirDisplay() {
    const container = document.getElementById("ongkir-display-container");
    if (!container) return;

    currentOngkirList = getStoredOngkirList();
    container.innerHTML = "";

    currentOngkirList.forEach(item => {
        const span = document.createElement("span");
        span.className = "daerah-item";
        span.innerHTML = `<i class="fa-solid fa-location-dot text-danger"></i> ${item.name} (Rp ${Number(item.price).toLocaleString("id-ID")})`;
        container.appendChild(span);
    });
}

window.openOngkirModal = function() {
    renderDynamicOngkirTable();
    toggleModal("edit-ongkir-modal");
};

function renderDynamicOngkirTable() {
    const tbody = document.getElementById("dynamic-ongkir-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    currentOngkirList = getStoredOngkirList();

    currentOngkirList.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>
                <input type="number" class="form-input-custom py-1 px-2" style="max-width: 140px;" value="${item.price}" onchange="updateOngkirPrice(${item.id}, this.value)">
            </td>
            <td style="text-align: center;">
                <button type="button" class="btn btn-sm btn-delete py-1 px-2" onclick="deleteOngkirArea(${item.id})" title="Hapus Daerah"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.updateOngkirPrice = function(id, newPrice) {
    const p = parseInt(newPrice, 10);
    if (isNaN(p) || p < 0) return;
    const item = currentOngkirList.find(o => o.id === id);
    if (item) {
        item.price = p;
        localStorage.setItem("sotoBanjarOngkirList", JSON.stringify(currentOngkirList));
        renderOngkirDisplay();
    }
};

window.addNewOngkirArea = function() {
    const nameInp = document.getElementById("new-ongkir-name");
    const priceInp = document.getElementById("new-ongkir-price");

    const name = nameInp.value.trim();
    const price = parseInt(priceInp.value, 10);

    if (!name || isNaN(price) || price < 0) {
        alert("Harap masukkan nama daerah dan tarif ongkos kirim yang valid!");
        return;
    }

    const newId = currentOngkirList.length > 0 ? Math.max(...currentOngkirList.map(o => o.id)) + 1 : 1;
    currentOngkirList.push({ id: newId, name, price });
    localStorage.setItem("sotoBanjarOngkirList", JSON.stringify(currentOngkirList));

    nameInp.value = "";
    priceInp.value = "";
    renderDynamicOngkirTable();
    renderOngkirDisplay();
};

window.deleteOngkirArea = function(id) {
    if (confirm("Hapus daerah pengiriman ini?")) {
        currentOngkirList = currentOngkirList.filter(o => o.id !== id);
        localStorage.setItem("sotoBanjarOngkirList", JSON.stringify(currentOngkirList));
        renderDynamicOngkirTable();
        renderOngkirDisplay();
    }
};

// Kelola kategori menu
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

function renderOrderTable(data = orderList) {
    const tbody = document.getElementById("order-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; color: var(--text-muted); padding: 35px;">Belum ada pesanan online yang masuk dari customer.</td></tr>';
    } else {
        data.forEach((order) => {
            const orderDate = order.timestamp ? new Date(order.timestamp).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }) : "-";
            let itemsHTML = '<ul class="order-items-list">';
            if (Array.isArray(order.items)) {
                order.items.forEach(item => { itemsHTML += '<li><span class="qty-badge">' + item.qty + 'x</span> ' + item.name + '</li>'; });
            }
            itemsHTML += '</ul>';

            const cust = order.customer || {};
            const city = cust.city || "Jabodetabek";
            const addr = cust.address || "-";
            const noteHTML = (cust.note && cust.note !== "-") ? '<div class="note-driver"><i class="fa-regular fa-comment-dots"></i> <em>Patokan: ' + cust.note + '</em></div>' : '';

            const addressHTML = `
                <div class="cust-address-box">
                    <span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${city}</span>
                    <div class="full-addr">${addr}</div>
                    ${noteHTML}
                </div>
            `;

            const totalPay = order.pricing ? order.pricing.total : (order.total || 0);
            const ongkirPay = order.pricing ? order.pricing.ongkir : 0;
            const currentOrderId = order.orderId || order.id;
            const statusBadgeClass = order.status === 'Selesai' ? 'bg-success' : 'bg-warning';

            const actionBtn = order.status === 'Diproses'
                ? '<button class="btn btn-sm btn-primary" onclick="completeOrder(\'' + currentOrderId + '\')"><i class="fa-solid fa-check"></i> Selesaikan</button>'
                : '<i class="fa-solid fa-circle-check text-success fa-lg"></i>';

            const tr = document.createElement("tr");
            tr.innerHTML = 
                '<td><span class="timestamp-badge"><i class="fa-regular fa-clock"></i> ' + orderDate + ' WIB</span></td>' +
                '<td><strong>#' + currentOrderId + '</strong></td>' +
                '<td><strong>' + (cust.name || "-") + '</strong><div class="small text-muted" style="font-size: 0.8rem;"><i class="fa-solid fa-phone"></i> ' + (cust.phone || "-") + '</div></td>' +
                '<td>' + addressHTML + '</td>' +
                '<td>' + itemsHTML + '</td>' +
                '<td class="price-col" style="white-space: nowrap;"><strong>Rp ' + Number(totalPay).toLocaleString("id-ID") + '</strong><div class="small text-muted" style="font-size: 0.75rem;">Ongkir: Rp ' + Number(ongkirPay).toLocaleString("id-ID") + '</div></td>' +
                '<td><span class="badge badge-payment">' + (order.paymentMethod || "COD") + '</span></td>' +
                '<td><span class="badge ' + statusBadgeClass + '">' + order.status + '</span></td>' +
                '<td>' + actionBtn + '</td>';
            tbody.appendChild(tr);
        });
    }

    const totalOrdersEl = document.getElementById("total-orders-count");
    if (totalOrdersEl) totalOrdersEl.textContent = orderList.length;

    const diprosesCount = orderList.filter(o => o.status === 'Diproses').length;
    const selesaiCount = orderList.filter(o => o.status === 'Selesai').length;
    if (document.getElementById("count-diproses")) document.getElementById("count-diproses").textContent = diprosesCount;
    if (document.getElementById("count-selesai")) document.getElementById("count-selesai").textContent = selesaiCount;

    const totalIncome = orderList.reduce((sum, o) => sum + (o.pricing ? o.pricing.total : (o.total || 0)), 0);
    const totalIncomeEl = document.getElementById("total-income-count");
    if (totalIncomeEl) totalIncomeEl.textContent = 'Rp ' + Number(totalIncome).toLocaleString("id-ID");
}

function filterOmsetDashboard() {
    const filterEl = document.getElementById("omset-filter");
    const period = filterEl ? filterEl.value : "semua";
    const now = new Date();

    const filtered = orderList.filter(order => {
        if (period === "semua") return true;

        const orderDate = order.timestamp ? new Date(order.timestamp) : now;
        if (isNaN(orderDate.getTime())) return true;

        if (period === "hari") {
            return orderDate.toDateString() === now.toDateString();
        } else if (period === "minggu") {
            const diffDays = Math.abs(now.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24);
            return diffDays <= 7;
        } else if (period === "bulan") {
            return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
        } else if (period === "tahun") {
            return orderDate.getFullYear() === now.getFullYear();
        }
        return true;
    });

    const totalOmset = filtered.reduce((sum, o) => sum + (o.pricing ? o.pricing.total : (o.total || 0)), 0);

    let periodName = "Semua Waktu";
    if (period === "hari") periodName = "Hari Ini";
    else if (period === "minggu") periodName = "Minggu Ini (7 Hari)";
    else if (period === "bulan") periodName = "Bulan Ini";
    else if (period === "tahun") periodName = "Tahun Ini";

    const omsetPeriodBadge = document.getElementById("omset-period-badge");
    const omsetOrderCountText = document.getElementById("omset-order-count-text");
    const omsetPeriodTotal = document.getElementById("omset-period-total");

    if (omsetPeriodBadge) omsetPeriodBadge.textContent = periodName;
    if (omsetOrderCountText) omsetOrderCountText.textContent = `Menampilkan ${filtered.length} pesanan`;
    if (omsetPeriodTotal) omsetPeriodTotal.textContent = 'Rp ' + Number(totalOmset).toLocaleString("id-ID");

    const dashboardRecentTbody = document.getElementById("dashboard-recent-orders");
    if (!dashboardRecentTbody) return;
    dashboardRecentTbody.innerHTML = "";

    if (filtered.length === 0) {
        dashboardRecentTbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color: var(--text-muted); padding: 30px;">Tidak ada transaksi pesanan pada periode <strong>${periodName}</strong>.</td></tr>`;
        return;
    }

    filtered.forEach(order => {
        const d = order.timestamp ? new Date(order.timestamp) : now;
        const timeFormatted = d.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }) + ' (' + d.toLocaleDateString("id-ID", { day: 'numeric', month: 'short' }) + ')';
        const cust = order.customer || {};
        const totalPay = order.pricing ? order.pricing.total : (order.total || 0);
        const statusBadge = order.status === 'Selesai' ? 'bg-success' : 'bg-warning';

        let menuItemsBrief = '-';
        if (Array.isArray(order.items) && order.items.length > 0) {
            menuItemsBrief = order.items.map(i => `<span class="qty-badge">${i.qty}x</span> ${i.name}`).join('<br>');
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><span class="timestamp-badge"><i class="fa-regular fa-clock"></i> ${timeFormatted}</span></td>
            <td><strong>#${order.orderId || order.id}</strong></td>
            <td><strong>${cust.name || "-"}</strong></td>
            <td>
                <div class="small text-muted mb-1"><i class="fa-solid fa-phone me-1"></i> ${cust.phone || "-"}</div>
                <span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${cust.city || "Jabodetabek"}</span>
            </td>
            <td style="font-size: 0.84rem; line-height: 1.45;">${menuItemsBrief}</td>
            <td class="price-col" style="white-space: nowrap;"><strong class="text-dark-green">Rp ${Number(totalPay).toLocaleString("id-ID")}</strong></td>
            <td><span class="badge badge-payment">${order.paymentMethod || "COD"}</span></td>
            <td><span class="badge ${statusBadge}">${order.status}</span></td>
        `;
        dashboardRecentTbody.appendChild(tr);
    });
}

function renderAdminReviews() {
    const container = document.getElementById("admin-reviews-container");
    if (!container) return;
    container.innerHTML = "";

    reviewList = getStoredReviews();

    if (reviewList.length === 0) {
        container.innerHTML = '<div class="p-4 text-center text-muted bg-white rounded-3 border">Belum ada ulasan yang masuk dari pelanggan.</div>';
        return;
    }

    reviewList.forEach((rev, index) => {
        const stars = "⭐".repeat(rev.rating || 5);
        const replyBox = rev.reply ? `
            <div class="admin-reply-box-clean">
                <div class="reply-header-line">
                    <span class="reply-label"><i class="fa-solid fa-reply me-1"></i> Balasan Anda (Restoran):</span>
                    <button type="button" class="btn-edit-reply-clean" onclick="openReplyModal(${index})">Edit Balasan</button>
                </div>
                <p class="reply-content-text">${rev.reply}</p>
            </div>
        ` : `
            <div class="reply-btn-wrap">
                <button type="button" class="btn-reply-clean" onclick="openReplyModal(${index})">
                    <i class="fa-solid fa-reply me-1"></i> Balas Ulasan Ini
                </button>
            </div>
        `;

        const card = document.createElement("div");
        card.className = "admin-review-card";
        card.innerHTML = `
            <div class="review-card-top">
                <div class="review-stars">${stars}</div>
                <span class="review-date">${rev.date || "Baru saja"}</span>
            </div>
            <p class="review-comment-text">"${rev.comment}"</p>
            <div class="reviewer-info-row">
                <div class="reviewer-details">
                    <h6 class="reviewer-name">${rev.name}</h6>
                    <small class="reviewer-city"><i class="fa-solid fa-location-dot text-danger me-1"></i>${rev.city}</small>
                </div>
                <button type="button" class="btn-delete-review-red" onclick="deleteReview(${index})" title="Hapus Ulasan">
                    <i class="fa-solid fa-trash-can"></i> Hapus Ulasan
                </button>
            </div>
            ${replyBox}
        `;
        container.appendChild(card);
    });
}

window.openReplyModal = function(index) {
    const rev = reviewList[index];
    if (!rev) return;
    document.getElementById("reply-review-index").value = index;
    document.getElementById("reply-reviewer-name").textContent = `${rev.name} (${rev.city})`;
    document.getElementById("reply-reviewer-comment").textContent = `"${rev.comment}"`;
    document.getElementById("reply-text").value = rev.reply || "";
    toggleModal("reply-review-modal");
};

window.deleteReview = function(index) {
    if (confirm("Hapus ulasan ini secara permanen?")) {
        reviewList.splice(index, 1);
        localStorage.setItem("sotoBanjarReviews", JSON.stringify(reviewList));
        renderAdminReviews();
    }
};

// Header banner & hero content
function loadHeaderEditorForm() {
    currentHeroText = getStoredHeroText();
    const badgeInput = document.getElementById("edit-hero-badge");
    const titleInput = document.getElementById("edit-hero-title");
    const highlightInput = document.getElementById("edit-hero-highlight");
    const descInput = document.getElementById("edit-hero-desc");
    const urlInput = document.getElementById("edit-hero-image-url");

    if (badgeInput) badgeInput.value = currentHeroText.badge;
    if (titleInput) titleInput.value = currentHeroText.title;
    if (highlightInput) highlightInput.value = currentHeroText.highlight || "Khas Banjar";
    if (descInput) descInput.value = currentHeroText.desc;
    if (urlInput) urlInput.value = currentHeroText.image && !currentHeroText.image.startsWith("data:") ? currentHeroText.image : "";

    updateHeroPreview();
}

function updateHeroPreview() {
    const badgeVal = document.getElementById("edit-hero-badge")?.value || defaultHeroText.badge;
    const titleVal = document.getElementById("edit-hero-title")?.value || defaultHeroText.title;
    const highlightVal = document.getElementById("edit-hero-highlight")?.value?.trim() || "";
    const descVal = document.getElementById("edit-hero-desc")?.value || defaultHeroText.desc;
    const imgPreview = document.getElementById("preview-hero-img-display");

    const previewBadge = document.getElementById("preview-badge-display");
    const previewTitle = document.getElementById("preview-title-display");
    const previewDesc = document.getElementById("preview-desc-display");

    if (previewBadge) previewBadge.innerHTML = `<i class="fa-solid fa-motorcycle text-warning me-1"></i> ${badgeVal}`;
    
    if (previewTitle) {
        let formattedTitle = titleVal;
        if (highlightVal && formattedTitle.includes(highlightVal)) {
            formattedTitle = formattedTitle.replace(highlightVal, `<span class="text-gold">${highlightVal}</span>`);
        }
        previewTitle.innerHTML = formattedTitle;
    }
    
    if (previewDesc) previewDesc.textContent = descVal;
    if (imgPreview && currentHeroText.image) {
        imgPreview.src = currentHeroText.image;
    }
}

window.resetHeroText = function() {
    if (confirm("Kembalikan banner header ke pengaturan awal?")) {
        localStorage.setItem("sotoBanjarHeroContent", JSON.stringify(defaultHeroText));
        currentHeroText = defaultHeroText;
        loadHeaderEditorForm();
        alert("Banner header berhasil direset ke default!");
    }
};

// Tentanng Kami
function loadAboutEditorForm() {
    currentAboutContent = getStoredAboutContent();
    const badgeInput = document.getElementById("edit-about-badge");
    const titleInput = document.getElementById("edit-about-title");
    const highlightInput = document.getElementById("edit-about-highlight");
    const p1Input = document.getElementById("edit-about-p1");
    const p2Input = document.getElementById("edit-about-p2");

    const feat1TitleInput = document.getElementById("edit-about-feat1-title");
    const feat1DescInput = document.getElementById("edit-about-feat1-desc");
    const feat2TitleInput = document.getElementById("edit-about-feat2-title");
    const feat2DescInput = document.getElementById("edit-about-feat2-desc");
    const urlInput = document.getElementById("edit-about-image-url");

    if (badgeInput) badgeInput.value = currentAboutContent.badge;
    if (titleInput) titleInput.value = currentAboutContent.title;
    if (highlightInput) highlightInput.value = currentAboutContent.highlight || "Bumi Kalimantan";
    if (p1Input) p1Input.value = currentAboutContent.p1;
    if (p2Input) p2Input.value = currentAboutContent.p2;

    if (feat1TitleInput) feat1TitleInput.value = currentAboutContent.feat1_title || defaultAboutContent.feat1_title;
    if (feat1DescInput) feat1DescInput.value = currentAboutContent.feat1_desc || defaultAboutContent.feat1_desc;
    if (feat2TitleInput) feat2TitleInput.value = currentAboutContent.feat2_title || defaultAboutContent.feat2_title;
    if (feat2DescInput) feat2DescInput.value = currentAboutContent.feat2_desc || defaultAboutContent.feat2_desc;

    if (urlInput) urlInput.value = currentAboutContent.image && !currentAboutContent.image.startsWith("data:") ? currentAboutContent.image : "";

    updateAboutPreview();
}

function updateAboutPreview() {
    const badgeVal = document.getElementById("edit-about-badge")?.value || defaultAboutContent.badge;
    const titleVal = document.getElementById("edit-about-title")?.value || defaultAboutContent.title;
    const highlightVal = document.getElementById("edit-about-highlight")?.value?.trim() || "";
    const p1Val = document.getElementById("edit-about-p1")?.value || defaultAboutContent.p1;
    const p2Val = document.getElementById("edit-about-p2")?.value || defaultAboutContent.p2;

    const feat1TitleVal = document.getElementById("edit-about-feat1-title")?.value || currentAboutContent.feat1_title || defaultAboutContent.feat1_title;
    const feat1DescVal = document.getElementById("edit-about-feat1-desc")?.value || currentAboutContent.feat1_desc || defaultAboutContent.feat1_desc;
    const feat2TitleVal = document.getElementById("edit-about-feat2-title")?.value || currentAboutContent.feat2_title || defaultAboutContent.feat2_title;
    const feat2DescVal = document.getElementById("edit-about-feat2-desc")?.value || currentAboutContent.feat2_desc || defaultAboutContent.feat2_desc;

    const imgPreview = document.getElementById("preview-about-img-display");
    const previewBadge = document.getElementById("preview-about-badge-display");
    const previewTitle = document.getElementById("preview-about-title-display");
    const previewP1 = document.getElementById("preview-about-p1-display");
    const previewP2 = document.getElementById("preview-about-p2-display");

    const previewFeat1Title = document.getElementById("preview-about-feat1-title");
    const previewFeat1Desc = document.getElementById("preview-about-feat1-desc");
    const previewFeat2Title = document.getElementById("preview-about-feat2-title");
    const previewFeat2Desc = document.getElementById("preview-about-feat2-desc");

    if (previewBadge) previewBadge.textContent = badgeVal;

    if (previewTitle) {
        let formatted = titleVal;
        if (highlightVal && formatted.includes(highlightVal)) {
            formatted = formatted.replace(highlightVal, `<span class="text-gold">${highlightVal}</span>`);
        }
        previewTitle.innerHTML = formatted;
    }

    if (previewP1) previewP1.textContent = p1Val;
    if (previewP2) previewP2.textContent = p2Val;

    if (previewFeat1Title) previewFeat1Title.textContent = feat1TitleVal;
    if (previewFeat1Desc) previewFeat1Desc.textContent = feat1DescVal;
    if (previewFeat2Title) previewFeat2Title.textContent = feat2TitleVal;
    if (previewFeat2Desc) previewFeat2Desc.textContent = feat2DescVal;

    if (imgPreview && currentAboutContent.image) {
        imgPreview.src = currentAboutContent.image;
    }
}

window.resetAboutText = function() {
    if (confirm("Kembalikan konten Tentang Kami ke pengaturan awal?")) {
        localStorage.setItem("sotoBanjarAboutContent", JSON.stringify(defaultAboutContent));
        currentAboutContent = defaultAboutContent;
        loadAboutEditorForm();
        alert("Konten Tentang Kami berhasil direset ke default!");
    }
};

// FAQ Admin
function loadFaqEditorForm() {
    currentFaqData = getStoredFaqData();
    const badgeInp = document.getElementById("edit-faq-badge");
    const titleInp = document.getElementById("edit-faq-title");
    const descInp = document.getElementById("edit-faq-desc");

    if (badgeInp) badgeInp.value = currentFaqData.badge || defaultFaqData.badge;
    if (titleInp) titleInp.value = currentFaqData.title || defaultFaqData.title;
    if (descInp) descInp.value = currentFaqData.desc || defaultFaqData.desc;

    renderAdminFaqTable();
    updateFaqPreview();
}

function renderAdminFaqTable() {
    const tbody = document.getElementById("faq-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const items = currentFaqData.items || [];
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color: var(--text-muted); padding: 25px;">Belum ada pertanyaan FAQ. Klik tombol "+ Tambah FAQ Baru".</td></tr>`;
        return;
    }

    items.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${index + 1}</strong></td>
            <td><strong>${item.question}</strong></td>
            <td style="font-size: 0.84rem; color: #475569;">${item.answer}</td>
            <td style="text-align: center; white-space: nowrap;">
                <button type="button" class="btn btn-sm btn-edit py-1 px-2" onclick="editFaq(${item.id})"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                <button type="button" class="btn btn-sm btn-delete py-1 px-2" onclick="deleteFaq(${item.id})"><i class="fa-solid fa-trash"></i> Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Live Preview Sesuai Persis Web Customer
function updateFaqPreview() {
    const badgeVal = document.getElementById("edit-faq-badge")?.value || currentFaqData.badge || "TANYA JAWAB";
    const titleVal = document.getElementById("edit-faq-title")?.value || currentFaqData.title || "Pertanyaan Umum (FAQ)";
    const descVal = document.getElementById("edit-faq-desc")?.value || currentFaqData.desc || "Punya pertanyaan seputar cara pesan, pengiriman, dan kualitas soto kami?";

    const previewBadge = document.getElementById("preview-faq-badge-display");
    const previewTitle = document.getElementById("preview-faq-title-display");
    const previewDesc = document.getElementById("preview-faq-desc-display");
    const previewContainer = document.getElementById("preview-faq-accordion-display");

    if (previewBadge) previewBadge.textContent = badgeVal;
    if (previewTitle) previewTitle.textContent = titleVal;
    if (previewDesc) previewDesc.textContent = descVal;

    if (!previewContainer) return;
    previewContainer.innerHTML = "";

    const items = currentFaqData.items || [];
    if (items.length === 0) {
        previewContainer.innerHTML = '<div class="text-center text-muted small py-3">Belum ada pertanyaan FAQ</div>';
        return;
    }

    items.forEach((item, index) => {
        const isFirst = index === 0;
        const div = document.createElement("div");
        div.className = "preview-mock-accordion-item";
        div.innerHTML = `
            <div class="preview-mock-accordion-header ${isFirst ? 'active' : ''}" onclick="togglePreviewAccordion(this)">
                <span class="preview-mock-q-title">
                    <i class="fa-solid fa-circle-question text-gold me-2"></i> ${item.question}
                </span>
                <i class="fa-solid ${isFirst ? 'fa-chevron-up' : 'fa-chevron-down'} preview-mock-chevron"></i>
            </div>
            <div class="preview-mock-accordion-body ${isFirst ? '' : 'd-none'}">
                ${item.answer}
            </div>
        `;
        previewContainer.appendChild(div);
    });
}

// Klik Buka/Tutup di dalam Mockup Browser
window.togglePreviewAccordion = function(headerEl) {
    const bodyEl = headerEl.nextElementSibling;
    const chevron = headerEl.querySelector(".preview-mock-chevron");
    if (!bodyEl) return;
    
    const isClosed = bodyEl.classList.contains("d-none");
    if (isClosed) {
        bodyEl.classList.remove("d-none");
        headerEl.classList.add("active");
        if (chevron) {
            chevron.classList.remove("fa-chevron-down");
            chevron.classList.add("fa-chevron-up");
        }
    } else {
        bodyEl.classList.add("d-none");
        headerEl.classList.remove("active");
        if (chevron) {
            chevron.classList.remove("fa-chevron-up");
            chevron.classList.add("fa-chevron-down");
        }
    }
};

window.openAddFaqModal = function() {
    document.getElementById("faq-id").value = "";
    document.getElementById("faq-question").value = "";
    document.getElementById("faq-answer").value = "";
    document.getElementById("faq-modal-title").textContent = "Tambah Pertanyaan FAQ Baru";
    toggleModal("faq-modal");
};

window.editFaq = function(id) {
    const found = currentFaqData.items.find(i => i.id === id);
    if (!found) return;
    document.getElementById("faq-id").value = found.id;
    document.getElementById("faq-question").value = found.question;
    document.getElementById("faq-answer").value = found.answer;
    document.getElementById("faq-modal-title").textContent = "Edit Pertanyaan FAQ";
    toggleModal("faq-modal");
};

window.deleteFaq = function(id) {
    if (confirm("Hapus pertanyaan FAQ ini?")) {
        currentFaqData.items = currentFaqData.items.filter(i => i.id !== id);
        localStorage.setItem("sotoBanjarFaqContent", JSON.stringify(currentFaqData));
        renderAdminFaqTable();
        updateFaqPreview();
    }
};

window.resetFaqText = function() {
    if (confirm("Kembalikan seluruh konten FAQ ke pengaturan awal default?")) {
        localStorage.setItem("sotoBanjarFaqContent", JSON.stringify(defaultFaqData));
        currentFaqData = defaultFaqData;
        loadFaqEditorForm();
        alert("FAQ berhasil direset ke default!");
    }
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

window.filterOrders = function() {
    const filterEl = document.getElementById("order-filter");
    if (!filterEl) return;
    const selectedFilter = filterEl.value;
    renderOrderTable(selectedFilter === "Semua" ? orderList : orderList.filter(o => o.status === selectedFilter));
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

window.completeOrder = function(orderId) {
    selectedOrderId = orderId;
    document.getElementById("confirm-order-id").textContent = "#" + orderId;
    document.getElementById("confirm-order-modal").classList.add("active");
};

window.closeConfirmModal = function() {
    selectedOrderId = null;
    document.getElementById("confirm-order-modal").classList.remove("active");
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

    const replyForm = document.getElementById("reply-review-form");
    if (replyForm) {
        replyForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const idx = parseInt(document.getElementById("reply-review-index").value, 10);
            const text = document.getElementById("reply-text").value.trim();

            if (reviewList[idx]) {
                reviewList[idx].reply = text;
                localStorage.setItem("sotoBanjarReviews", JSON.stringify(reviewList));
                renderAdminReviews();
                toggleModal("reply-review-modal");
            }
        });
    }

    const headerEditForm = document.getElementById("header-edit-form");
    if (headerEditForm) {
        ["edit-hero-badge", "edit-hero-title", "edit-hero-highlight", "edit-hero-desc"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", updateHeroPreview);
        });

        const heroUrlInput = document.getElementById("edit-hero-image-url");
        if (heroUrlInput) {
            heroUrlInput.addEventListener("input", function() {
                if (this.value.trim()) {
                    currentHeroText.image = this.value.trim();
                    updateHeroPreview();
                }
            });
        }

        const heroFileInput = document.getElementById("edit-hero-image-file");
        if (heroFileInput) {
            heroFileInput.addEventListener("change", function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        currentHeroText.image = evt.target.result;
                        if (heroUrlInput) heroUrlInput.value = "";
                        updateHeroPreview();
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        headerEditForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const badge = document.getElementById("edit-hero-badge").value.trim();
            const title = document.getElementById("edit-hero-title").value.trim();
            const highlight = document.getElementById("edit-hero-highlight").value.trim();
            const desc = document.getElementById("edit-hero-desc").value.trim();

            currentHeroText.badge = badge;
            currentHeroText.title = title;
            currentHeroText.highlight = highlight;
            currentHeroText.desc = desc;

            localStorage.setItem("sotoBanjarHeroContent", JSON.stringify(currentHeroText));
            updateHeroPreview();
            alert("Banner header & kata highlight berhasil diperbarui!");
        });
    }

    const aboutEditForm = document.getElementById("about-edit-form");
    if (aboutEditForm) {
        [
            "edit-about-badge", "edit-about-title", "edit-about-highlight", 
            "edit-about-p1", "edit-about-p2",
            "edit-about-feat1-title", "edit-about-feat1-desc",
            "edit-about-feat2-title", "edit-about-feat2-desc"
        ].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", updateAboutPreview);
        });

        const aboutUrlInput = document.getElementById("edit-about-image-url");
        if (aboutUrlInput) {
            aboutUrlInput.addEventListener("input", function() {
                if (this.value.trim()) {
                    currentAboutContent.image = this.value.trim();
                    updateAboutPreview();
                }
            });
        }

        const aboutFileInput = document.getElementById("edit-about-image-file");
        if (aboutFileInput) {
            aboutFileInput.addEventListener("change", function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        currentAboutContent.image = evt.target.result;
                        if (aboutUrlInput) aboutUrlInput.value = "";
                        updateAboutPreview();
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        aboutEditForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const badge = document.getElementById("edit-about-badge").value.trim();
            const title = document.getElementById("edit-about-title").value.trim();
            const highlight = document.getElementById("edit-about-highlight").value.trim();
            const p1 = document.getElementById("edit-about-p1").value.trim();
            const p2 = document.getElementById("edit-about-p2").value.trim();

            const feat1_title = document.getElementById("edit-about-feat1-title").value.trim();
            const feat1_desc = document.getElementById("edit-about-feat1-desc").value.trim();
            const feat2_title = document.getElementById("edit-about-feat2-title").value.trim();
            const feat2_desc = document.getElementById("edit-about-feat2-desc").value.trim();

            currentAboutContent.badge = badge;
            currentAboutContent.title = title;
            currentAboutContent.highlight = highlight;
            currentAboutContent.p1 = p1;
            currentAboutContent.p2 = p2;
            currentAboutContent.feat1_title = feat1_title;
            currentAboutContent.feat1_desc = feat1_desc;
            currentAboutContent.feat2_title = feat2_title;
            currentAboutContent.feat2_desc = feat2_desc;

            localStorage.setItem("sotoBanjarAboutContent", JSON.stringify(currentAboutContent));
            updateAboutPreview();
            alert("Konten, keunggulan rasa, dan gambar Tentang Kami berhasil diperbarui!");
        });
    }

    // Submit FAQ untuk update judul, deskripsi, dan pertanyaan FAQ ke localStorage dan terubah di preview
    const faqHeaderForm = document.getElementById("faq-header-form");
    if (faqHeaderForm) {
        ["edit-faq-badge", "edit-faq-title", "edit-faq-desc"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", updateFaqPreview);
        });

        faqHeaderForm.addEventListener("submit", function(e) {
            e.preventDefault();
            currentFaqData.badge = document.getElementById("edit-faq-badge").value.trim();
            currentFaqData.title = document.getElementById("edit-faq-title").value.trim();
            currentFaqData.desc = document.getElementById("edit-faq-desc").value.trim();

            localStorage.setItem("sotoBanjarFaqContent", JSON.stringify(currentFaqData));
            updateFaqPreview();
            alert("Judul & deskripsi section FAQ berhasil disimpan!");
        });
    }

    const faqForm = document.getElementById("faq-form");
    if (faqForm) {
        faqForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const id = document.getElementById("faq-id").value;
            const question = document.getElementById("faq-question").value.trim();
            const answer = document.getElementById("faq-answer").value.trim();

            if (!currentFaqData.items) currentFaqData.items = [];

            if (id) {
                const idx = currentFaqData.items.findIndex(i => i.id == id);
                if (idx !== -1) {
                    currentFaqData.items[idx] = { id: parseInt(id, 10), question, answer };
                }
            } else {
                const newId = currentFaqData.items.length > 0 ? Math.max(...currentFaqData.items.map(i => i.id)) + 1 : 1;
                currentFaqData.items.push({ id: newId, question, answer });
            }

            localStorage.setItem("sotoBanjarFaqContent", JSON.stringify(currentFaqData));
            renderAdminFaqTable();
            updateFaqPreview();
            toggleModal("faq-modal");
        });
    }

    // Submit Selesaikan Pesanan
    const btnConfirmSubmit = document.getElementById("btn-confirm-submit");
    if (btnConfirmSubmit) {
        btnConfirmSubmit.addEventListener("click", () => {
            if (selectedOrderId) {
                const order = orderList.find(o => (o.orderId || o.id) === selectedOrderId);
                if (order) {
                    order.status = "Selesai";
                    localStorage.setItem("sotoBanjarOrders", JSON.stringify(orderList));
                    filterOrders();
                    filterOmsetDashboard();
                }
                closeConfirmModal();
            }
        });
    }
});

// Sinkronisasi Antar Tab Browser
window.addEventListener("storage", (e) => {
    if (e.key === "sotoBanjarOrders") {
        orderList = getStoredOrders();
        filterOrders();
        filterOmsetDashboard();
    }
    if (e.key === "sotoBanjarReviews") {
        reviewList = getStoredReviews();
        renderAdminReviews();
    }
    if (e.key === "sotoBanjarHeroContent") {
        currentHeroText = getStoredHeroText();
        loadHeaderEditorForm();
    }
    if (e.key === "sotoBanjarAboutContent") {
        currentAboutContent = getStoredAboutContent();
        loadAboutEditorForm();
    }
    if (e.key === "sotoBanjarFaqContent") {
        currentFaqData = getStoredFaqData();
        loadFaqEditorForm();
    }
    if (e.key === "sotoBanjarOngkirList") {
        currentOngkirList = getStoredOngkirList();
        renderOngkirDisplay();
    }
    if (e.key === "sotoBanjarCategories") {
        currentCategories = getStoredCategories();
        populateCategoryDropdown();
        renderMenuTable();
    }
});
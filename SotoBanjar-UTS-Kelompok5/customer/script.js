// Toggle show dan hide password
window.toggleCustomerPassword = function(inputId, iconId, textId) {
    var input = document.getElementById(inputId);
    var icon = document.getElementById(iconId);
    var text = document.getElementById(textId);

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

// Navigation
function setupNavbarActiveLinks() {
    var navLinks = document.querySelectorAll(".custom-navbar .navbar-nav .nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(function(l) { l.classList.remove("active"); });
            this.classList.add("active");

            var navCollapse = document.getElementById("navMenu");
            if (navCollapse && navCollapse.classList.contains("show") && typeof bootstrap !== "undefined") {
                var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });
}

// 22 menu
var defaultMenuData = [
    {
        id: 1,
        name: "Soto Banjar Otentik",
        category: "makanan",
        price: 38000,
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
        price: 36000,
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
        price: 32000,
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
        name: "Sate Ayam Bumbu Banjar (10 Tusuk)",
        category: "pendamping",
        price: 30000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Sate ayam dengan baluran bumbu merah khas Banjar yang manis, gurih, dan legit.",
        image: "../assets/sate-banjar.jpg"
    },
    {
        id: 9,
        name: "Sate Ayam Bumbu Banjar (5 Tusuk)",
        category: "pendamping",
        price: 16000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Porsi setengah untuk pelengkap makan soto Anda.",
        image: "../assets/sate-5-tusuk.png"
    },
    {
        id: 10,
        name: "Perkedel Singkong / Kentang",
        category: "pendamping",
        price: 4000,
        badge: null,
        badgeColor: null,
        description: "Perkedel otentik dari singkong atau kentang tumbuk halus yang digoreng gurih.",
        image: "../assets/perkedel.jpg"
    },
    {
        id: 11,
        name: "Ekstra Telur Bebek Rebus",
        category: "pendamping",
        price: 6000,
        badge: null,
        badgeColor: null,
        description: "1 butir telur bebek rebus gurih pelengkap kelezatan kuah soto.",
        image: "../assets/telur-bebek.jpg"
    },
    {
        id: 12,
        name: "Ekstra Suwiran Ayam Kampung",
        category: "pendamping",
        price: 12000,
        badge: null,
        badgeColor: null,
        description: "Porsi ekstra suwiran daging ayam kampung empuk dan manis gurih.",
        image: "../assets/ayam-suwir.png"
    },
    {
        id: 13,
        name: "Kerupuk Udang",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Kerupuk udang renyah gurih pelengkap kuah soto.",
        image: "../assets/kerupuk-udang.jpg"
    },
    {
        id: 14,
        name: "Emping",
        category: "pendamping",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Emping melinjo gurih pelengkap kuah soto.",
        image: "../assets/emping.jpeg"
    },
    {
        id: 15,
        name: "Es / Hangat Jeruk Limau Kuit",
        category: "minuman",
        price: 12000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Minuman jeruk khas Kalimantan dengan aroma harum yang sangat spesifik dan menyegarkan.",
        image: "../assets/jeruk-limau-kuit.jpeg"
    },
    {
        id: 16,
        name: "Es Sirup Limau Kuit",
        category: "minuman",
        price: 14000,
        badge: null,
        badgeColor: null,
        description: "Paduan sirup manis dengan perasan jeruk limau kuit segar khas Banjar.",
        image: "../assets/sirup-limau-kuit.jpg"
    },
    {
        id: 17,
        name: "Es / Hangat Teh Ahmad",
        category: "minuman",
        price: 6000,
        badge: null,
        badgeColor: null,
        description: "Teh lokal legendaris dengan aroma dan kepekatan rasa yang khas.",
        image: "../assets/es-teh.jpeg"
    },
    {
        id: 18,
        name: "Air Mineral Botol",
        category: "minuman",
        price: 5000,
        badge: null,
        badgeColor: null,
        description: "Air mineral higienis dingin atau suhu ruangan (600ml).",
        image: "../assets/mineral-water.jpg"
    },
    {
        id: 19,
        name: "Bingka Banjar (Original Kentang)",
        category: "hidangan-penutup",
        price: 15000,
        badge: "Authentic",
        badgeColor: "bg-info text-dark",
        description: "Kue basah tradisional bertekstur lembut dan legit dengan rasa manis gurih yang pas (per potong).",
        image: "../assets/bingka-banjar.jpeg"
    },
    {
        id: 20,
        name: "Amparan Tatak Pisang",
        category: "hidangan-penutup",
        price: 12000,
        badge: "Best Seller",
        badgeColor: "bg-danger",
        description: "Kue khas berbahan tepung beras, santan, dan potongan pisang talas yang manis lembut.",
        image: "../assets/amparan-tatak-pisang.png"
    },
    {
        id: 21,
        name: "Lumpur Surga",
        category: "hidangan-penutup",
        price: 14000,
        badge: null,
        badgeColor: null,
        description: "Kue tradisional lapis hijau pandan gurih berpadu vla santan manis yang lumer di mulut.",
        image: "../assets/lumpur-surga.jpeg"
    },
    {
        id: 22,
        name: "Lempeng Pisang",
        category: "hidangan-penutup",
        price: 14000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Kue dadar pisang khas Banjar yang manis alami, beraroma harum pisang matang, dan bertekstur lembut di setiap gigitan.",
        image: "../assets/lempeng-pisang.jpeg"
    }
];

var defaultCategories = [
    { key: "makanan", label: "Hidangan Utama" },
    { key: "pendamping", label: "Lauk Pendamping & Ekstra" },
    { key: "minuman", label: "Minuman Segar" },
    { key: "hidangan-penutup", label: "Hidangan Penutup" }
];

var defaultOngkirList = [
    { id: 1, name: "Jakarta", price: 10000 },
    { id: 2, name: "Tangerang / Tangsel", price: 15000 },
    { id: 3, name: "Depok / Bekasi", price: 18000 },
    { id: 4, name: "Bogor", price: 24000 }
];

var defaultReviewData = [
    {
        name: "Josephine Sherly",
        city: "Jakarta Selatan",
        rating: 5,
        date: "2 hari lalu",
        comment: "Kuah kaldunya beneran wangi kayu manis dan kapulaga asli Banjar. Pas sampai di rumah masih panas banget dan kuahnya dipisah rapi, ga tumpah sama sekali!",
        reply: "Terima kasih banyak Kak! Kami selalu memisahkan kuah panas dalam wadah kedap agar rasa rempahnya tetap maksimal."
    },
    {
        name: "Calvin Marcello",
        city: "Tangerang Kota",
        rating: 5,
        date: "Seminggu lalu",
        comment: "Porsi ayamnya melimpah, telur bebek rebusnya gurih berpadu pas dengan perkedel kentang. Pengiriman ke Tangerang cepet banget cuma 35 menitan.",
        reply: null
    },
    {
        name: "Gading Sihol",
        city: "Jakarta Utara",
        rating: 5,
        date: "2 minggu lalu",
        comment: "Rasa autentik nostalgia waktu tugas di Kalsel. Kemasan food grade-nya higienis dan jeruk kuitnya segar banget buat es jeruknya!",
        reply: "Wah senang bisa mengobati rindu cita rasa Kalimantan Selatan, Dok! Ditunggu pesanan berikutnya."
    }
];

var defaultFaqData = {
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

function getStoredMenu() {
    try {
        var version = localStorage.getItem("sotoBanjarMenuVersion");
        var saved = localStorage.getItem("sotoBanjarMenu");
        if (version === CURRENT_DATA_VERSION && saved) {
            return JSON.parse(saved);
        }
    } catch (e) {}
    localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    localStorage.setItem("sotoBanjarMenuVersion", CURRENT_DATA_VERSION);
    return defaultMenuData;
}

function getStoredReviews() {
    var saved = localStorage.getItem("sotoBanjarReviews");
    if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
    }
    return defaultReviewData;
}

function getStoredOngkirList() {
    var saved = localStorage.getItem("sotoBanjarOngkirList");
    if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
    }
    return defaultOngkirList;
}

function getStoredCategories() {
    var saved = localStorage.getItem("sotoBanjarCategories");
    if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
    }
    return defaultCategories;
}

function getStoredFaqData() {
    var saved = localStorage.getItem("sotoBanjarFaqContent");
    if (saved) {
        try {
            var parsed = JSON.parse(saved);
            return { ...defaultFaqData, ...parsed };
        } catch (e) {}
    }
    return defaultFaqData;
}

function getCurrentCustomer() {
    var cur = localStorage.getItem("sotoBanjarCurrentCustomer");
    if (cur) {
        try { return JSON.parse(cur); } catch (e) { return null; }
    }
    return null;
}

function promptCustomerAuth(pesan) {
    showToast(pesan || "Silakan masuk atau buat akun terlebih dahulu!");
    var authModalEl = document.getElementById("authModal");
    if (authModalEl && typeof bootstrap !== "undefined") {
        var authModal = bootstrap.Modal.getOrCreateInstance(authModalEl);
        authModal.show();
    }
}

var menuData = getStoredMenu();
var reviewData = getStoredReviews();
var currentOngkirList = getStoredOngkirList();
var currentCategories = getStoredCategories();
var currentFaqData = getStoredFaqData();
var cart = [];
var SERVICE_FEE = 2000;

var cartDrawerInstance = null;
var orderSuccessModalInstance = null;
var orderHistoryModalInstance = null;
var toastInstance = null;

// Urutan Menu
function sortMenuItems(items) {
    return [...items].sort(function(a, b) {
        function getScore(item) {
            var badge = (item.badge || "").toLowerCase();
            var cat = (item.category || "").toLowerCase();

            if (badge.includes("best seller")) return 1;
            if (badge.includes("populer")) return 2;
            if (badge.includes("authentic") && cat !== "minuman" && cat !== "hidangan-penutup") return 3;
            if (cat === "makanan" || cat === "pendamping") return 4;
            if (cat === "minuman") return 5;
            if (cat === "hidangan-penutup") return 6;
            return 7;
        }
        return getScore(a) - getScore(b);
    });
}

function renderCategoryFilterTabs() {
    var container = document.getElementById("filter-tabs");
    if (!container) return;
    
    container.innerHTML = '<button class="btn btn-outline-dark active" data-category="all">Semua</button>';

    currentCategories = getStoredCategories();
    currentCategories.forEach(function(cat) {
        var btn = document.createElement("button");
        btn.className = "btn btn-outline-dark";
        btn.setAttribute("data-category", cat.key);
        btn.textContent = cat.label;
        container.appendChild(btn);
    });
}

function createMenuCardHTML(item) {
    var badgeColor = item.badgeColor ? item.badgeColor : "bg-warning text-dark";
    var badgeHtml = item.badge ? '<span class="badge ' + badgeColor + ' card-badge position-absolute top-0 start-0 m-3 shadow-xs">' + item.badge + '</span>' : '';
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden menu-card">
                <div class="position-relative">
                    <img src="${item.image}" class="card-img-top menu-img" alt="${item.name}">
                    ${badgeHtml}
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-dark-green mb-1">${item.name}</h5>
                    <p class="card-text text-muted small flex-grow-1">${item.description || ""}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                        <span class="fw-bold fs-5 text-dark-green">Rp ${Number(item.price).toLocaleString("id-ID")}</span>
                        <button type="button" class="btn btn-sm btn-gold px-3 rounded-pill" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-plus me-1"></i> Pesan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu(items) {
    var menuGrid = document.getElementById("menu-grid");
    if (!menuGrid) return;
    menuGrid.innerHTML = "";

    if (!items || items.length === 0) {
        menuGrid.innerHTML = `
            <div class="col-12 text-center py-5 text-muted">
                <i class="fa-solid fa-utensils display-4 mb-3 text-secondary"></i>
                <h5>Tidak ada menu pada kategori ini</h5>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = items.map(createMenuCardHTML).join("");
}

function generateVANumber(channel, phone) {
    var cleanPhone = (phone || "").replace(/[^0-9]/g, '');
    var suffix = cleanPhone.length >= 8 ? cleanPhone.slice(-8) : Math.floor(10000000 + Math.random() * 90000000);

    if (channel.includes("BCA")) return "80777" + suffix;
    if (channel.includes("Mandiri")) return "88708" + suffix;
    if (channel.includes("GoPay")) return "70001" + suffix;
    if (channel.includes("OVO")) return "8099" + suffix;
    if (channel.includes("ShopeePay")) return "12208" + suffix;
    if (channel.includes("DANA")) return "8528" + suffix;
    return "88000" + suffix;
}

window.copyVACode = function() {
    var vaText = document.getElementById("modal-va-number").textContent;
    navigator.clipboard.writeText(vaText).then(function() {
        var btn = document.getElementById("btn-copy-code");
        btn.innerHTML = '<i class="fa-solid fa-check me-1"></i> Tersalin';
        setTimeout(function() {
            btn.innerHTML = '<i class="fa-regular fa-copy me-1"></i> Salin';
        }, 2000);
        showToast("Nomor VA berhasil disalin ke clipboard!");
    });
};

function populateCityDropdown() {
    var citySelect = document.getElementById("cust-city");
    if (!citySelect) return;

    var curVal = citySelect.value;
    citySelect.innerHTML = '<option value="" disabled selected>-- Pilih Wilayah Pengiriman --</option>';

    currentOngkirList = getStoredOngkirList();
    currentOngkirList.forEach(function(item) {
        var opt = document.createElement("option");
        opt.value = item.name;
        opt.textContent = item.name + " (Ongkir: Rp " + Number(item.price).toLocaleString("id-ID") + ")";
        if (item.name === curVal) opt.selected = true;
        citySelect.appendChild(opt);
    });
}

function loadHeroContent() {
    var saved = localStorage.getItem("sotoBanjarHeroContent");
    if (saved) {
        try {
            var data = JSON.parse(saved);
            var badgeEl = document.getElementById("hero-badge-text");
            var titleEl = document.getElementById("hero-title-text");
            var descEl = document.getElementById("hero-desc-text");
            var imgEl = document.getElementById("hero-main-img");

            if (badgeEl && data.badge) badgeEl.textContent = data.badge;
            
            if (titleEl && data.title) {
                var formatted = data.title;
                var highlight = data.highlight || "Khas Banjar";
                if (highlight && formatted.includes(highlight) && !formatted.includes("<span")) {
                    formatted = formatted.replace(highlight, '<span class="text-gold">' + highlight + '</span>');
                }
                titleEl.innerHTML = formatted;
            }
            
            if (descEl && data.desc) descEl.textContent = data.desc;
            if (imgEl && data.image) imgEl.src = data.image;
        } catch (e) {}
    }
}

function loadAboutContent() {
    var saved = localStorage.getItem("sotoBanjarAboutContent");
    if (saved) {
        try {
            var data = JSON.parse(saved);
            var badgeEl = document.getElementById("about-badge-text");
            var titleEl = document.getElementById("about-title-text");
            var p1El = document.getElementById("about-p1-text");
            var p2El = document.getElementById("about-p2-text");
            var imgEl = document.getElementById("about-main-img");

            var feat1TitleEl = document.getElementById("about-feat1-title");
            var feat1DescEl = document.getElementById("about-feat1-desc");
            var feat2TitleEl = document.getElementById("about-feat2-title");
            var feat2DescEl = document.getElementById("about-feat2-desc");

            if (badgeEl && data.badge) badgeEl.textContent = data.badge;

            if (titleEl && data.title) {
                var formatted = data.title;
                var highlight = data.highlight || "Bumi Kalimantan";
                if (highlight && formatted.includes(highlight) && !formatted.includes("<span")) {
                    formatted = formatted.replace(highlight, '<span class="text-gold">' + highlight + '</span>');
                }
                titleEl.innerHTML = formatted;
            }

            if (p1El && data.p1) p1El.textContent = data.p1;
            if (p2El && data.p2) p2El.textContent = data.p2;
            if (imgEl && data.image) imgEl.src = data.image;

            if (feat1TitleEl && data.feat1_title) feat1TitleEl.textContent = data.feat1_title;
            if (feat1DescEl && data.feat1_desc) feat1DescEl.textContent = data.feat1_desc;
            if (feat2TitleEl && data.feat2_title) feat2TitleEl.textContent = data.feat2_title;
            if (feat2DescEl && data.feat2_desc) feat2DescEl.textContent = data.feat2_desc;
        } catch (e) {}
    }
}

function loadFaqContent() {
    var data = getStoredFaqData();
    var badgeEl = document.getElementById("faq-badge-text");
    var titleEl = document.getElementById("faq-title-text");
    var descEl = document.getElementById("faq-desc-text");
    var container = document.getElementById("faqAccordion");

    if (badgeEl && data.badge) badgeEl.textContent = data.badge;
    if (titleEl && data.title) titleEl.textContent = data.title;
    if (descEl && data.desc) descEl.textContent = data.desc;

    if (!container) return;
    container.innerHTML = "";

    var items = data.items || [];
    items.forEach(function(item, index) {
        var isFirst = index === 0;
        var collapseId = "faqCollapse" + item.id;
        var itemDiv = document.createElement("div");
        itemDiv.className = "accordion-item " + (index < items.length - 1 ? "mb-3" : "") + " rounded-3 border shadow-sm overflow-hidden";
        itemDiv.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button ${isFirst ? '' : 'collapsed'} fw-bold text-dark-green" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                    <i class="fa-solid fa-circle-question text-gold me-2"></i> ${item.question}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted small">
                    ${item.answer}
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initBootstrapComponents();
    loadHeroContent();
    loadAboutContent();
    loadFaqContent();
    populateCityDropdown();
    renderCategoryFilterTabs();
    setupNavbarActiveLinks();
    
    renderMenu(sortMenuItems(menuData));
    
    renderReviews();
    checkCurrentUser();
    updateCartUI();
    setupEventListeners();
});

function initBootstrapComponents() {
    var cartDrawerEl = document.getElementById("cartDrawer");
    if (cartDrawerEl && typeof bootstrap !== "undefined") {
        cartDrawerInstance = new bootstrap.Offcanvas(cartDrawerEl);
    }
    var orderModalEl = document.getElementById("orderSuccessModal");
    if (orderModalEl && typeof bootstrap !== "undefined") {
        orderSuccessModalInstance = new bootstrap.Modal(orderModalEl);
    }
    var historyModalEl = document.getElementById("orderHistoryModal");
    if (historyModalEl && typeof bootstrap !== "undefined") {
        orderHistoryModalInstance = new bootstrap.Modal(historyModalEl);
    }
    var toastEl = document.getElementById("actionToast");
    if (toastEl && typeof bootstrap !== "undefined") {
        toastInstance = new bootstrap.Toast(toastEl);
    }
}

function setupEventListeners() {
    var cartToggleBtn = document.getElementById("cart-toggle-btn");
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener("click", function() {
            var user = getCurrentCustomer();
            if (!user) {
                promptCustomerAuth("Silakan masuk atau daftar akun terlebih dahulu untuk melihat keranjang!");
                return;
            }
            if (cartDrawerInstance) cartDrawerInstance.show();
        });
    }

    var filterTabs = document.getElementById("filter-tabs");
    if (filterTabs) {
        filterTabs.addEventListener("click", function(e) {
            var btn = e.target.closest("button");
            if (!btn) return;
            var allBtns = filterTabs.querySelectorAll("button");
            allBtns.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");

            var cat = btn.getAttribute("data-category");

            if (cat === "all") {
                renderMenu(sortMenuItems(menuData));
            } else {
                var filtered = menuData.filter(function(item) {
                    return item.category === cat;
                });
                renderMenu(sortMenuItems(filtered));
            }
        });
    }

    var citySelect = document.getElementById("cust-city");
    if (citySelect) {
        citySelect.addEventListener("change", function() {
            updateCartUI();
        });
    }

    var checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckout);
    }

    var loginForm = document.getElementById("form-login");
    if (loginForm) {
        loginForm.addEventListener("submit", handleCustomerLogin);
    }

    var registerForm = document.getElementById("form-register");
    if (registerForm) {
        registerForm.addEventListener("submit", handleCustomerRegister);
    }

    var reviewForm = document.getElementById("form-add-review");
    if (reviewForm) {
        reviewForm.addEventListener("submit", handleAddReview);
    }
}

function renderReviews() {
    var container = document.getElementById("review-cards-container");
    if (!container) return;
    container.innerHTML = "";

    reviewData = getStoredReviews();

    reviewData.forEach(function(rev) {
        var stars = "⭐".repeat(rev.rating || 5);
        var replyHtml = rev.reply ? `
            <div class="mt-3 p-2 px-3 rounded-3 border-start border-3 border-success bg-white text-start shadow-xs">
                <div class="small fw-bold text-success" style="font-size: 0.78rem;">
                    <i class="fa-solid fa-reply me-1"></i> Respon Pemilik Restoran:
                </div>
                <div class="text-muted extra-small" style="font-size: 0.82rem; line-height: 1.4;">${rev.reply}</div>
            </div>
        ` : '';

        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card h-100 border-0 shadow-sm p-4 rounded-4 review-card">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="text-warning">${stars}</div>
                    <span class="badge bg-light text-muted small">${rev.date || "Baru saja"}</span>
                </div>
                <p class="card-text text-muted small flex-grow-1">"${rev.comment}"</p>
                <div class="d-flex align-items-center gap-3 pt-3 border-top mt-auto">
                    <div class="review-avatar">${rev.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <h6 class="mb-0 fw-bold small text-dark-green">${rev.name}</h6>
                        <small class="text-muted extra-small"><i class="fa-solid fa-location-dot text-danger me-1"></i>${rev.city}</small>
                    </div>
                </div>
                ${replyHtml}
            </div>
        `;
        container.appendChild(col);
    });
}

function addToCart(id) {
    var user = getCurrentCustomer();
    if (!user) {
        promptCustomerAuth("Silakan masuk atau daftar akun terlebih dahulu untuk memesan menu!");
        return;
    }

    var product = menuData.find(function(item) { return item.id === id; });
    if (!product) return;
    var exist = cart.find(function(item) { return item.id === id; });
    if (exist) {
        exist.qty += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    updateCartUI();
    showToast(product.name + " ditambahkan ke pesanan!");
}

function changeQty(id, delta) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].qty += delta;
            if (cart[i].qty <= 0) cart.splice(i, 1);
            break;
        }
    }
    updateCartUI();
}

window.handleOpenReviewModal = function() {
    var user = getCurrentCustomer();
    if (!user) {
        promptCustomerAuth("Silakan masuk atau daftar akun terlebih dahulu untuk memberikan ulasan!");
        return;
    }

    var revNameInput = document.getElementById("rev-name");
    if (revNameInput) revNameInput.value = user.name;

    var addReviewModalEl = document.getElementById("addReviewModal");
    if (addReviewModalEl && typeof bootstrap !== "undefined") {
        var reviewModal = bootstrap.Modal.getOrCreateInstance(addReviewModalEl);
        reviewModal.show();
    }
};

function handleAddReview(e) {
    e.preventDefault();
    var user = getCurrentCustomer();
    if (!user) {
        promptCustomerAuth("Anda harus masuk ke akun untuk mengirimkan ulasan!");
        return;
    }

    var name = user.name;
    var city = document.getElementById("rev-city").value.trim();
    var rating = parseInt(document.getElementById("rev-rating").value, 10);
    var comment = document.getElementById("rev-comment").value.trim();

    reviewData.unshift({
        name: name,
        city: city,
        rating: rating,
        date: "Hari ini",
        comment: comment,
        reply: null
    });
    localStorage.setItem("sotoBanjarReviews", JSON.stringify(reviewData));
    renderReviews();

    var modalInst = bootstrap.Modal.getInstance(document.getElementById("addReviewModal"));
    if (modalInst) modalInst.hide();
    document.getElementById("form-add-review").reset();
    showToast("Terima kasih! Ulasan Anda berhasil diterbitkan.");
}

function getSelectedDeliveryFee() {
    var citySelect = document.getElementById("cust-city");
    if (!citySelect) return 0;
    var cityName = citySelect.value;
    currentOngkirList = getStoredOngkirList();

    var found = currentOngkirList.find(function(o) { return o.name === cityName; });
    return found ? found.price : (currentOngkirList[0] ? currentOngkirList[0].price : 10000);
}

function updateCartUI() {
    var cartBadge = document.getElementById("cart-count-badge");
    var cartItemsContainer = document.getElementById("cart-items-container");
    var cartEmptyState = document.getElementById("cart-empty-state");

    var totalCount = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    if (cartBadge) {
        cartBadge.textContent = totalCount;
        cartBadge.classList.toggle("d-none", totalCount === 0);
    }

    if (cartItemsContainer) {
        cartItemsContainer.querySelectorAll(".cart-item-row").forEach(function(row) { row.remove(); });
        if (cart.length === 0) {
            if (cartEmptyState) cartEmptyState.classList.remove("d-none");
        } else {
            if (cartEmptyState) cartEmptyState.classList.add("d-none");
            cart.forEach(function(item) {
                var div = document.createElement("div");
                div.className = "d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded cart-item-row border";
                div.innerHTML = `
                    <div class="pe-2">
                        <div class="small fw-bold text-dark-green">${item.name}</div>
                        <small class="text-muted">Rp ${(item.price * item.qty).toLocaleString("id-ID")}</small>
                    </div>
                    <div class="btn-group btn-group-sm">
                        <button type="button" class="btn btn-outline-secondary" onclick="changeQty(${item.id}, -1)">-</button>
                        <button type="button" class="btn btn-outline-secondary disabled fw-bold text-dark">${item.qty}</button>
                        <button type="button" class="btn btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(div);
            });
        }
    }

    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
    var ongkir = (cart.length > 0) ? getSelectedDeliveryFee() : 0;
    var service = (cart.length > 0) ? SERVICE_FEE : 0;

    document.getElementById("cart-subtotal").textContent = "Rp " + subtotal.toLocaleString("id-ID");
    document.getElementById("cart-ongkir").textContent = "Rp " + ongkir.toLocaleString("id-ID");
    document.getElementById("cart-service").textContent = "Rp " + service.toLocaleString("id-ID");
    document.getElementById("cart-total").textContent = "Rp " + (subtotal + ongkir + service).toLocaleString("id-ID");
}

function handleCheckout(e) {
    e.preventDefault();

    var user = getCurrentCustomer();
    if (!user) {
        if (cartDrawerInstance) cartDrawerInstance.hide();
        promptCustomerAuth("Silakan masuk atau daftar akun terlebih dahulu untuk melakukan pemesanan!");
        return;
    }

    if (cart.length === 0) {
        showToast("Keranjang belanja masih kosong! Silakan pilih menu terlebih dahulu.");
        return;
    }

    var name = document.getElementById("cust-name").value.trim();
    var phone = document.getElementById("cust-phone").value.trim();
    var city = document.getElementById("cust-city").value;
    var address = document.getElementById("cust-address").value.trim();
    var note = document.getElementById("cust-note").value.trim();
    var paymentChannel = document.getElementById("cust-payment-channel").value;

    if (!city) {
        showToast("Harap pilih wilayah pengantaran terlebih dahulu!");
        return;
    }

    if (!paymentChannel) {
        showToast("Harap pilih metode pembayaran Virtual Account atau E-Wallet!");
        return;
    }

    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
    var ongkir = getSelectedDeliveryFee();
    var totalBayar = subtotal + ongkir + SERVICE_FEE;
    var orderId = "SBN-" + Math.floor(100000 + Math.random() * 900000);

    var vaNumber = generateVANumber(paymentChannel, phone);

    var orderData = {
        orderId: orderId,
        timestamp: new Date().toISOString(),
        customer: {
            name: name,
            phone: phone,
            city: city,
            address: address,
            note: note || "-",
            userEmail: user.email || ""
        },
        items: JSON.parse(JSON.stringify(cart)),
        pricing: { subtotal: subtotal, ongkir: ongkir, serviceFee: SERVICE_FEE, total: totalBayar },
        paymentMethod: paymentChannel,
        vaNumber: vaNumber,
        status: "Diproses"
    };

    var existingOrders = JSON.parse(localStorage.getItem("sotoBanjarOrders") || "[]");
    existingOrders.unshift(orderData);
    localStorage.setItem("sotoBanjarOrders", JSON.stringify(existingOrders));

    document.getElementById("modal-order-id").textContent = "#" + orderId;
    document.getElementById("modal-payment-name").textContent = paymentChannel;
    document.getElementById("modal-va-number").textContent = vaNumber;
    document.getElementById("modal-cust-name").textContent = name;
    document.getElementById("modal-cust-city").textContent = city;
    document.getElementById("modal-cust-address").textContent = address + (note ? " (Patokan: " + note + ")" : "");
    document.getElementById("modal-total-pay").textContent = "Rp " + totalBayar.toLocaleString("id-ID");

    if (cartDrawerInstance) cartDrawerInstance.hide();
    cart = [];
    document.getElementById("checkout-form").reset();
    updateCartUI();

    if (orderSuccessModalInstance) orderSuccessModalInstance.show();
}

window.openOrderHistoryModal = function() {
    var user = getCurrentCustomer();
    if (!user) {
        promptCustomerAuth("Silakan masuk ke akun Anda terlebih dahulu untuk melihat riwayat pesanan!");
        return;
    }

    renderCustomerOrderHistory();
    if (orderHistoryModalInstance) orderHistoryModalInstance.show();
};

function renderCustomerOrderHistory() {
    var container = document.getElementById("customer-order-history-list");
    if (!container) return;
    container.innerHTML = "";

    var user = getCurrentCustomer();
    if (!user) return;

    var allOrders = JSON.parse(localStorage.getItem("sotoBanjarOrders") || "[]");
    
    var myOrders = allOrders.filter(function(o) {
        var cust = o.customer || {};
        return (cust.userEmail && cust.userEmail === user.email) ||
               (cust.phone && user.phone && cust.phone === user.phone) ||
               (cust.name && cust.name.toLowerCase() === user.name.toLowerCase());
    });

    if (myOrders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5 text-muted bg-white rounded-4 border">
                <i class="fa-solid fa-receipt display-4 mb-3 text-secondary"></i>
                <h5 class="fw-bold text-dark">Belum Ada Riwayat Pesanan</h5>
                <p class="small text-muted mb-0">Yuk pilih menu favorit dan nikmati kehangatan Soto Banjar sekarang!</p>
            </div>
        `;
        return;
    }

    myOrders.forEach(function(order) {
        var d = order.timestamp ? new Date(order.timestamp) : new Date();
        var dateFormatted = d.toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }) + ' - ' + d.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }) + ' WIB';
        var statusBadge = order.status === "Selesai" ? "bg-success" : "bg-warning text-dark";
        var totalPay = order.pricing ? order.pricing.total : (order.total || 0);

        var itemsHTML = "";
        if (Array.isArray(order.items)) {
            itemsHTML = order.items.map(function(i) {
                return `<div class="d-flex justify-content-between small text-muted">
                    <span>${i.qty}x ${i.name}</span>
                    <span>Rp ${(i.price * i.qty).toLocaleString("id-ID")}</span>
                </div>`;
            }).join("");
        }

        var vaBoxHTML = order.vaNumber ? `
            <div class="mt-2 p-2 px-3 bg-light rounded-3 border d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="small">
                    <span class="text-muted d-block" style="font-size: 0.72rem;">Metode & Nomor VA:</span>
                    <strong class="text-dark-green">${order.paymentMethod}</strong>: <span class="font-monospace fw-bold">${order.vaNumber}</span>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary py-0 px-2" style="font-size: 0.75rem;" onclick="navigator.clipboard.writeText('${order.vaNumber}'); showToast('Nomor VA berhasil disalin!');">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
            </div>
        ` : '';

        var card = document.createElement("div");
        card.className = "card border-0 shadow-sm rounded-4 overflow-hidden history-order-card bg-white";
        card.innerHTML = `
            <div class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <span class="fw-bold text-dark-green me-2">#${order.orderId || order.id}</span>
                    <small class="text-muted"><i class="fa-regular fa-clock me-1"></i>${dateFormatted}</small>
                </div>
                <span class="badge ${statusBadge} px-3 py-1 rounded-pill">${order.status}</span>
            </div>
            <div class="card-body p-3">
                <div class="mb-2">
                    ${itemsHTML}
                </div>
                ${vaBoxHTML}
                <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-2">
                    <span class="small fw-semibold text-muted">Total Pembayaran:</span>
                    <strong class="text-dark-green fs-5">Rp ${Number(totalPay).toLocaleString("id-ID")}</strong>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.toggleAuthTab = function(type) {
    var formLogin = document.getElementById("form-login");
    var formReg = document.getElementById("form-register");
    var btnLogin = document.getElementById("tab-login-btn");
    var btnReg = document.getElementById("tab-register-btn");

    if (type === 'login') {
        formLogin.classList.remove("d-none");
        formReg.classList.add("d-none");
        btnLogin.classList.add("active");
        btnReg.classList.remove("active");
        document.getElementById("authModalTitle").innerHTML = '<i class="fa-solid fa-user text-gold me-2"></i> Masuk Akun';
    } else {
        formLogin.classList.add("d-none");
        formReg.classList.remove("d-none");
        btnLogin.classList.remove("active");
        btnReg.classList.add("active");
        document.getElementById("authModalTitle").innerHTML = '<i class="fa-solid fa-user-plus text-gold me-2"></i> Daftar Akun Baru';
    }
};

function recordLoginHistory(username, role, status) {
    var history = JSON.parse(localStorage.getItem("sotoBanjarLoginHistory") || "[]");
    history.unshift({
        id: "LOG-" + Math.floor(1000 + Math.random() * 9000),
        username: username,
        role: role,
        time: new Date().toISOString(),
        status: status,
        ip: "127.0.0.1 (Web Local)"
    });
    localStorage.setItem("sotoBanjarLoginHistory", JSON.stringify(history));
}

function handleCustomerLogin(e) {
    e.preventDefault();
    var email = document.getElementById("login-email").value.trim();
    var pass = document.getElementById("login-password").value.trim();

    var users = JSON.parse(localStorage.getItem("sotoBanjarUsers") || "[]");
    var found = users.find(function(u) { return (u.email === email || u.phone === email) && u.password === pass; });

    if (found) {
        localStorage.setItem("sotoBanjarCurrentCustomer", JSON.stringify(found));
        recordLoginHistory(found.name, "Customer", "Berhasil");
        showToast("Selamat datang kembali, " + found.name + "!");
        closeAuthModal();
        checkCurrentUser();

        if (cart.length > 0 && cartDrawerInstance) {
            setTimeout(function() { cartDrawerInstance.show(); }, 400);
        }
    } else {
        recordLoginHistory(email, "Customer", "Gagal (Salah Password)");
        showToast("Email/No HP atau kata sandi salah!");
    }
}

function handleCustomerRegister(e) {
    e.preventDefault();
    var name = document.getElementById("reg-name").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var phone = document.getElementById("reg-phone").value.trim();
    var pass = document.getElementById("reg-password").value.trim();

    var users = JSON.parse(localStorage.getItem("sotoBanjarUsers") || "[]");
    if (users.some(function(u) { return u.email === email; })) {
        showToast("Email sudah terdaftar!");
        return;
    }

    var newUser = { name: name, email: email, phone: phone, password: pass };
    users.push(newUser);
    localStorage.setItem("sotoBanjarUsers", JSON.stringify(users));
    localStorage.setItem("sotoBanjarCurrentCustomer", JSON.stringify(newUser));

    recordLoginHistory(name, "Customer Baru", "Berhasil");
    showToast("Pendaftaran berhasil! Akun Anda langsung aktif.");
    closeAuthModal();
    checkCurrentUser();

    if (cart.length > 0 && cartDrawerInstance) {
        setTimeout(function() { cartDrawerInstance.show(); }, 400);
    }
}

function checkCurrentUser() {
    var userArea = document.getElementById("user-nav-area");
    if (!userArea) return;
    var user = getCurrentCustomer();

    if (user) {
        userArea.innerHTML = `
            <div class="dropdown d-inline-block">
                <button class="btn btn-outline-gold btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-circle-user text-gold me-1"></i> Hai, ${user.name.split(" ")[0]}
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow">
                    <li><h6 class="dropdown-header">${user.name}</h6></li>
                    <li><span class="dropdown-item-text small text-muted">${user.email}</span></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item small" href="javascript:void(0)" onclick="openOrderHistoryModal()"><i class="fa-solid fa-clock-rotate-left me-2 text-primary"></i> Riwayat Pesanan</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger small" href="javascript:void(0)" onclick="logoutCustomer()"><i class="fa-solid fa-right-from-bracket me-2"></i> Keluar</a></li>
                </ul>
            </div>
        `;

        var nameInp = document.getElementById("cust-name");
        var phoneInp = document.getElementById("cust-phone");
        var revNameInp = document.getElementById("rev-name");
        if (nameInp) nameInp.value = user.name;
        if (phoneInp && !phoneInp.value) phoneInp.value = user.phone || "";
        if (revNameInp) revNameInp.value = user.name;
    } else {
        userArea.innerHTML = `
            <button class="btn btn-outline-gold btn-sm" data-bs-toggle="modal" data-bs-target="#authModal">
                <i class="fa-solid fa-user me-1"></i> Masuk / Daftar
            </button>
        `;
    }
}

window.logoutCustomer = function() {
    localStorage.removeItem("sotoBanjarCurrentCustomer");
    checkCurrentUser();
    showToast("Anda telah keluar dari akun.");
};

function closeAuthModal() {
    var modalEl = document.getElementById("authModal");
    var inst = bootstrap.Modal.getInstance(modalEl);
    if (inst) inst.hide();
}

function showToast(msg) {
    var toastMsgEl = document.getElementById("toastMessage");
    if (toastMsgEl) toastMsgEl.textContent = msg;
    if (toastInstance) toastInstance.show();
}

// Sikronisasi data antar tab/browser
window.addEventListener("storage", function(e) {
    if (e.key === "sotoBanjarHeroContent") {
        loadHeroContent();
    }
    if (e.key === "sotoBanjarAboutContent") {
        loadAboutContent();
    }
    if (e.key === "sotoBanjarFaqContent") {
        currentFaqData = getStoredFaqData();
        loadFaqContent();
    }
    if (e.key === "sotoBanjarReviews") {
        reviewData = getStoredReviews();
        renderReviews();
    }
    if (e.key === "sotoBanjarMenu") {
        menuData = getStoredMenu();
        renderMenu(sortMenuItems(menuData));
    }
    if (e.key === "sotoBanjarOngkirList") {
        currentOngkirList = getStoredOngkirList();
        populateCityDropdown();
        updateCartUI();
    }
    if (e.key === "sotoBanjarOrders") {
        renderCustomerOrderHistory();
    }
    if (e.key === "sotoBanjarCategories") {
        currentCategories = getStoredCategories();
        renderCategoryFilterTabs();
    }
});
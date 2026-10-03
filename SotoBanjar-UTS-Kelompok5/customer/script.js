function setupNavbarActiveLinks() {
    var navLinks = document.querySelectorAll(".custom-navbar .navbar-nav .nav-link");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(function(l) { l.classList.remove("active"); });
            this.classList.add("active");
        });
    });
}

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

const CURRENT_DATA_VERSION = "v3_banjar_full";

function getStoredMenu() {
    var saved = localStorage.getItem("sotoBanjarMenu");
    var version = localStorage.getItem("sotoBanjarMenuVersion");
    if (version === CURRENT_DATA_VERSION && saved) {
        try { return JSON.parse(saved); } catch (e) {}
    }
    localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    localStorage.setItem("sotoBanjarMenuVersion", CURRENT_DATA_VERSION);
    return defaultMenuData;
}

function getStoredCategories() {
    var saved = localStorage.getItem("sotoBanjarCategories");
    if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
    }
    localStorage.setItem("sotoBanjarCategories", JSON.stringify(defaultCategories));
    return defaultCategories;
}

var menuData = getStoredMenu();
var currentCategories = getStoredCategories();

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
                        <button type="button" class="btn btn-sm btn-gold px-3 rounded-pill" onclick="alert('Menu dipilih: ${item.name}')">
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
        menuGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted"><h5>Tidak ada menu pada kategori ini</h5></div>';
        return;
    }
    menuGrid.innerHTML = items.map(createMenuCardHTML).join("");
}

document.addEventListener("DOMContentLoaded", function() {
    setupNavbarActiveLinks();
    renderCategoryFilterTabs();
    renderMenu(sortMenuItems(menuData));

    var filterTabs = document.getElementById("filter-tabs");
    if (filterTabs) {
        filterTabs.addEventListener("click", function(e) {
            var btn = e.target.closest("button");
            if (!btn) return;
            filterTabs.querySelectorAll("button").forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            var cat = btn.getAttribute("data-category");
            if (cat === "all") {
                renderMenu(sortMenuItems(menuData));
            } else {
                var filtered = menuData.filter(function(item) { return item.category === cat; });
                renderMenu(sortMenuItems(filtered));
            }
        });
    }
});
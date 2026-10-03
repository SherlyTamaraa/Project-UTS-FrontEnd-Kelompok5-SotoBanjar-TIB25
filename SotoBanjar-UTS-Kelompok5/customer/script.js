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

function showToast(msg) {
    var toastMsgEl = document.getElementById("toastMessage");
    if (toastMsgEl) toastMsgEl.textContent = msg;
    var toastEl = document.getElementById("actionToast");
    if (toastEl && typeof bootstrap !== "undefined") {
        var t = bootstrap.Toast.getOrCreateInstance(toastEl);
        t.show();
    }
}

var menuData = getStoredMenu();
var currentCategories = getStoredCategories();
var cart = [];

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
        menuGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted"><h5>Tidak ada menu pada kategori ini</h5></div>';
        return;
    }
    menuGrid.innerHTML = items.map(createMenuCardHTML).join("");
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
    showToast(product.name + " ditambahkan ke pesanan!");
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
                    <li><a class="dropdown-item text-danger small" href="javascript:void(0)" onclick="logoutCustomer()"><i class="fa-solid fa-right-from-bracket me-2"></i> Keluar</a></li>
                </ul>
            </div>
        `;
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

document.addEventListener("DOMContentLoaded", function() {
    setupNavbarActiveLinks();
    renderCategoryFilterTabs();
    renderMenu(sortMenuItems(menuData));
    checkCurrentUser();

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

    var loginForm = document.getElementById("form-login");
    if (loginForm) loginForm.addEventListener("submit", handleCustomerLogin);

    var registerForm = document.getElementById("form-register");
    if (registerForm) registerForm.addEventListener("submit", handleCustomerRegister);
});
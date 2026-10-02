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

const defaultOngkirList = [
    { id: 1, name: "Jakarta", price: 10000 },
    { id: 2, name: "Tangerang / Tangsel", price: 15000 },
    { id: 3, name: "Depok / Bekasi", price: 18000 },
    { id: 4, name: "Bogor", price: 24000 }
];

const defaultReviewData = [
    { name: "Josephine Sherly", city: "Jakarta Selatan", rating: 5, date: "2 hari lalu", comment: "Kuah kaldunya beneran wangi kayu manis dan kapulaga asli Banjar. Pas sampai di rumah masih panas banget dan kuahnya dipisah rapi, ga tumpah sama sekali!", reply: "Terima kasih banyak Kak! Kami selalu memisahkan kuah panas dalam wadah kedap agar rasa rempahnya tetap maksimal." },
    { name: "Calvin Marcello", city: "Tangerang Kota", rating: 5, date: "Seminggu lalu", comment: "Porsi ayamnya melimpah, telur bebek rebusnya gurih berpadu pas dengan perkedel kentang. Pengiriman ke Tangerang cepet banget cuma 35 menitan.", reply: null },
    { name: "Gading Sihol", city: "Jakarta Utara", rating: 5, date: "2 minggu lalu", comment: "Rasa autentik nostalgia waktu tugas di Kalsel. Kemasan food grade-nya higienis dan jeruk kuitnya segar banget buat es jeruknya!", reply: "Wah senang bisa mengobati rindu cita rasa Kalimantan Selatan, Dok! Ditunggu pesanan berikutnya." }
];

const CURRENT_DATA_VERSION = "v3_banjar_full";

function getStoredOngkirList() {
    try {
        const saved = localStorage.getItem("sotoBanjarOngkirList");
        return saved ? JSON.parse(saved) : defaultOngkirList;
    } catch (e) { return defaultOngkirList; }
}

function getStoredCategories() {
    try {
        const version = localStorage.getItem("sotoBanjarCatVersion");
        const saved = localStorage.getItem("sotoBanjarCategories");
        if (version === CURRENT_DATA_VERSION && saved) { return JSON.parse(saved); }
    } catch (e) {}
    localStorage.setItem("sotoBanjarCategories", JSON.stringify(defaultCategories));
    localStorage.setItem("sotoBanjarCatVersion", CURRENT_DATA_VERSION);
    return defaultCategories;
}

function getStoredMenu() {
    try {
        const version = localStorage.getItem("sotoBanjarMenuVersion");
        const saved = localStorage.getItem("sotoBanjarMenu");
        if (version === CURRENT_DATA_VERSION && saved) { return JSON.parse(saved); }
    } catch (e) {}
    localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    localStorage.setItem("sotoBanjarMenuVersion", CURRENT_DATA_VERSION);
    return defaultMenuData;
}

function getStoredOrders() {
    try {
        const saved = localStorage.getItem("sotoBanjarOrders");
        return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
}

function getStoredReviews() {
    try {
        const saved = localStorage.getItem("sotoBanjarReviews");
        return saved ? JSON.parse(saved) : defaultReviewData;
    } catch (e) { return defaultReviewData; }
}

let menuList = getStoredMenu();
let orderList = getStoredOrders();
let reviewList = getStoredReviews();
let currentOngkirList = getStoredOngkirList();
let currentCategories = getStoredCategories();
let selectedOrderId = null;

// Ongkir
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
            <td><input type="number" class="form-input-custom py-1 px-2" style="max-width: 140px;" value="${item.price}" onchange="updateOngkirPrice(${item.id}, this.value)"></td>
            <td style="text-align: center;"><button type="button" class="btn btn-sm btn-delete py-1 px-2" onclick="deleteOngkirArea(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
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
    if (!name || isNaN(price) || price < 0) { alert("Harap masukkan nama daerah dan tarif yang valid!"); return; }
    const newId = currentOngkirList.length > 0 ? Math.max(...currentOngkirList.map(o => o.id)) + 1 : 1;
    currentOngkirList.push({ id: newId, name, price });
    localStorage.setItem("sotoBanjarOngkirList", JSON.stringify(currentOngkirList));
    nameInp.value = ""; priceInp.value = "";
    renderDynamicOngkirTable(); renderOngkirDisplay();
};

window.deleteOngkirArea = function(id) {
    if (confirm("Hapus daerah pengiriman ini?")) {
        currentOngkirList = currentOngkirList.filter(o => o.id !== id);
        localStorage.setItem("sotoBanjarOngkirList", JSON.stringify(currentOngkirList));
        renderDynamicOngkirTable(); renderOngkirDisplay();
    }
};

// Menu
function populateCategoryDropdown(selectedKey = "") {
    const catSelect = document.getElementById("menu-category");
    if (!catSelect) return;
    catSelect.innerHTML = "";
    currentCategories = getStoredCategories();
    currentCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.key; opt.textContent = cat.label;
        if (cat.key === selectedKey) opt.selected = true;
        catSelect.appendChild(opt);
    });
    const optNew = document.createElement("option");
    optNew.value = "TAMBAH_BARU"; optNew.textContent = "+ Tambah Kategori Baru...";
    catSelect.appendChild(optNew);
}

window.handleCategorySelectChange = function() {
    const catSelect = document.getElementById("menu-category");
    const wrapper = document.getElementById("new-category-wrapper");
    if (catSelect.value === "TAMBAH_BARU") { wrapper.classList.remove("d-none"); document.getElementById("new-category-name").focus(); }
    else { wrapper.classList.add("d-none"); }
};

window.handleBadgeSelectChange = function() {
    const badgeSelect = document.getElementById("menu-badge-select");
    const customWrap = document.getElementById("custom-badge-wrapper");
    const colorWrap = document.getElementById("badge-color-wrapper");
    if (badgeSelect.value === "CUSTOM") {
        customWrap.classList.remove("d-none"); if (colorWrap) colorWrap.classList.remove("d-none");
        document.getElementById("custom-badge-text").focus();
    } else if (badgeSelect.value === "") {
        customWrap.classList.add("d-none"); if (colorWrap) colorWrap.classList.add("d-none");
    } else {
        customWrap.classList.add("d-none"); if (colorWrap) colorWrap.classList.remove("d-none");
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
        const badgeHTML = item.badge ? `<span class="badge ${badgeColorClass}">${item.badge}</span>` : '<span class="text-muted">-</span>';
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${item.name}" class="menu-thumb"></td>
            <td><strong>${item.name}</strong><div class="small text-muted" style="font-size: 0.78rem;">${item.description || "-"}</div></td>
            <td><span class="badge bg-light text-dark border">${catLabel}</span></td>
            <td class="price-col" style="white-space: nowrap;"><strong>Rp ${Number(item.price).toLocaleString("id-ID")}</strong></td>
            <td>${badgeHTML}</td>
            <td><button class="btn btn-sm btn-edit" onclick="editMenu(${item.id})"><i class="fa-solid fa-pen-to-square"></i> Edit</button> <button class="btn btn-sm btn-delete" onclick="deleteMenu(${item.id})"><i class="fa-solid fa-trash"></i> Hapus</button></td>
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
        if (prevWrap && prevImg && item.image) { prevImg.src = item.image; prevWrap.classList.remove("d-none"); }
        else if (prevWrap) { prevWrap.classList.add("d-none"); }
        populateCategoryDropdown(item.category);
        const badgeSelect = document.getElementById("menu-badge-select");
        const customWrap = document.getElementById("custom-badge-wrapper");
        const customInput = document.getElementById("custom-badge-text");
        const colorWrap = document.getElementById("badge-color-wrapper");
        const colorSelect = document.getElementById("menu-badge-color");
        if (item.badge) {
            const presetValues = ["Best Seller", "Populer", "Authentic", "New"];
            if (presetValues.includes(item.badge)) { badgeSelect.value = item.badge; customWrap.classList.add("d-none"); }
            else { badgeSelect.value = "CUSTOM"; customWrap.classList.remove("d-none"); customInput.value = item.badge; }
            if (colorWrap) colorWrap.classList.remove("d-none");
        } else {
            badgeSelect.value = ""; customWrap.classList.add("d-none"); if (colorWrap) colorWrap.classList.add("d-none");
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

// Orders
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
            const addressHTML = `<div class="cust-address-box"><span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${city}</span><div class="full-addr">${addr}</div>${noteHTML}</div>`;
            const totalPay = order.pricing ? order.pricing.total : (order.total || 0);
            const ongkirPay = order.pricing ? order.pricing.ongkir : 0;
            const currentOrderId = order.orderId || order.id;
            const statusBadgeClass = order.status === 'Selesai' ? 'bg-success' : 'bg-warning';
            const actionBtn = order.status === 'Diproses'
                ? '<button class="btn btn-sm btn-primary" onclick="completeOrder(\'' + currentOrderId + '\')"><i class="fa-solid fa-check"></i> Selesaikan</button>'
                : '<i class="fa-solid fa-circle-check text-success fa-lg"></i>';
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><span class="timestamp-badge"><i class="fa-regular fa-clock"></i> ${orderDate} WIB</span></td>
                <td><strong>#${currentOrderId}</strong></td>
                <td><strong>${cust.name || "-"}</strong><div class="small text-muted"><i class="fa-solid fa-phone"></i> ${cust.phone || "-"}</div></td>
                <td>${addressHTML}</td>
                <td>${itemsHTML}</td>
                <td class="price-col" style="white-space: nowrap;"><strong>Rp ${Number(totalPay).toLocaleString("id-ID")}</strong><div class="small text-muted">Ongkir: Rp ${Number(ongkirPay).toLocaleString("id-ID")}</div></td>
                <td><span class="badge badge-payment">${order.paymentMethod || "COD"}</span></td>
                <td><span class="badge ${statusBadgeClass}">${order.status}</span></td>
                <td>${actionBtn}</td>
            `;
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

window.filterOrders = function() {
    const filterEl = document.getElementById("order-filter");
    if (!filterEl) return;
    const selectedFilter = filterEl.value;
    renderOrderTable(selectedFilter === "Semua" ? orderList : orderList.filter(o => o.status === selectedFilter));
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

// Omset & Reviews (Commit 4)
function filterOmsetDashboard() {
    const filterEl = document.getElementById("omset-filter");
    const period = filterEl ? filterEl.value : "semua";
    const now = new Date();
    const filtered = orderList.filter(order => {
        if (period === "semua") return true;
        const orderDate = order.timestamp ? new Date(order.timestamp) : now;
        if (isNaN(orderDate.getTime())) return true;
        if (period === "hari") { return orderDate.toDateString() === now.toDateString(); }
        else if (period === "minggu") {
            const diffDays = Math.abs(now.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24);
            return diffDays <= 7;
        }
        else if (period === "bulan") { return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear(); }
        else if (period === "tahun") { return orderDate.getFullYear() === now.getFullYear(); }
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
            <td><div class="small text-muted"><i class="fa-solid fa-phone"></i> ${cust.phone || "-"}</div><span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${cust.city || "Jabodetabek"}</span></td>
            <td style="font-size: 0.84rem;">${menuItemsBrief}</td>
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
                <button type="button" class="btn-reply-clean" onclick="openReplyModal(${index})"><i class="fa-solid fa-reply me-1"></i> Balas Ulasan Ini</button>
            </div>
        `;
        const card = document.createElement("div");
        card.className = "admin-review-card";
        card.innerHTML = `
            <div class="review-card-top"><div class="review-stars">${stars}</div><span class="review-date">${rev.date || "Baru saja"}</span></div>
            <p class="review-comment-text">"${rev.comment}"</p>
            <div class="reviewer-info-row">
                <div class="reviewer-details"><h6 class="reviewer-name">${rev.name}</h6><small class="reviewer-city"><i class="fa-solid fa-location-dot text-danger me-1"></i>${rev.city}</small></div>
                <button type="button" class="btn-delete-review-red" onclick="deleteReview(${index})" title="Hapus Ulasan"><i class="fa-solid fa-trash-can"></i> Hapus</button>
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
        renderMenuTable(); populateCategoryDropdown();
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
        renderMenuTable(); populateCategoryDropdown(); renderOngkirDisplay(); renderOrderTable(); filterOmsetDashboard(); renderAdminReviews(); renderLoginHistoryTable();
    } else {
        if (lockOverlay) lockOverlay.classList.remove("d-none");
        if (mainWrapper) mainWrapper.classList.add("d-none");
    }
}

window.logoutAdmin = function() {
    sessionStorage.removeItem("sotoBanjarAdminAuth");
    window.location.reload();
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
            populateCategoryDropdown();
        }
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
                    if (prevWrap && prevImg) { prevImg.src = uploadedMenuImageBase64; prevWrap.classList.remove("d-none"); }
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
            } else { errEl.classList.remove("d-none"); }
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
            if (!image) { alert("Harap pilih dan upload file gambar menu terlebih dahulu!"); return; }

            let category = document.getElementById("menu-category").value;
            if (category === "TAMBAH_BARU") {
                const newCatName = document.getElementById("new-category-name").value.trim();
                if (newCatName) {
                    const newKey = newCatName.toLowerCase().replace(/\s+/g, '-');
                    currentCategories.push({ key: newKey, label: newCatName });
                    localStorage.setItem("sotoBanjarCategories", JSON.stringify(currentCategories));
                    category = newKey;
                } else { category = "makanan"; }
            }

            const badgeSelect = document.getElementById("menu-badge-select").value;
            let badge = badgeSelect;
            if (badgeSelect === "CUSTOM") { badge = document.getElementById("custom-badge-text").value.trim(); }
            if (!badge) badge = null;
            const badgeColor = badge ? document.getElementById("menu-badge-color").value : null;

            if (id) {
                const index = menuList.findIndex(item => item.id == id);
                if (index !== -1) {
                    menuList[index] = { ...menuList[index], name, image, category, price, badge, badgeColor, description };
                }
            } else {
                const newId = menuList.length > 0 ? Math.max(...menuList.map(item => item.id)) + 1 : 1;
                menuList.push({ id: newId, name, image, category, price, badge, badgeColor, description });
            }

            localStorage.setItem("sotoBanjarMenu", JSON.stringify(menuList));
            renderMenuTable(); populateCategoryDropdown(); toggleModal("add-menu-modal");
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

    const btnConfirmSubmit = document.getElementById("btn-confirm-submit");
    if (btnConfirmSubmit) {
        btnConfirmSubmit.addEventListener("click", () => {
            if (selectedOrderId) {
                const order = orderList.find(o => (o.orderId || o.id) === selectedOrderId);
                if (order) {
                    order.status = "Selesai";
                    localStorage.setItem("sotoBanjarOrders", JSON.stringify(orderList));
                    renderOrderTable(); filterOmsetDashboard();
                }
                closeConfirmModal();
            }
        });
    }
});
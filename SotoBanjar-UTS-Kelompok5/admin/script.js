// Data Default Menu Toko
const defaultMenuData = [
    {
        id: 1,
        name: "Soto Banjar Spesial Telur Bebek",
        category: "soto",
        price: 38000,
        badge: "Terlaris",
        badgeColor: "bg-danger",
        description: "Suwiran ayam kampung, ketupat, perkedel kentang, soun, dan 1 butir telur bebek rebus.",
        image: "https://awsimages.detik.net.id/community/media/visual/2021/11/26/soto-banjar-di-kedai-samin-banjar.jpeg?w=1200"
    },
    {
        id: 2,
        name: "Soto Banjar Biasa",
        category: "soto",
        price: 30000,
        badge: "Populer",
        badgeColor: "bg-warning text-dark",
        description: "Soto Banjar klasik gurih kaya rempah dengan ketupat atau nasi putih hangat.",
        image: "https://indonesiakaya.com/wp-content/uploads/2023/04/sb_Artboard_5.jpg"
    },
    {
        id: 3,
        name: "Nasi Putih Pulen",
        category: "sampingan",
        price: 6000,
        badge: null,
        description: "Nasi putih hangat yang dimasak dari beras lokal pilihan harum.",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Tempe Goreng Tepung (3 Pcs)",
        category: "sampingan",
        price: 8000,
        badge: "Renyah",
        badgeColor: "bg-success",
        description: "Tempe kedelai segar dibalut adonan tepung gurih daun bawang renyah.",
        image: "https://asset.kompas.com/crops/P9McnIhepGP7MPTUfplFZb6aYxQ=/1x0:617x411/1200x800/data/photo/2021/08/09/6111235a9b7b2.jpg"
    },
    {
        id: 5,
        name: "Es Jeruk Kuit Banjar",
        category: "minuman",
        price: 13000,
        badge: "Khas",
        badgeColor: "bg-success",
        description: "Perasan jeruk kuit khas Kalimantan Selatan dengan wangi sitrus segar autentik.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Es Teh Manis",
        category: "minuman",
        price: 7000,
        badge: null,
        description: "Teh seduh racikan wangi melati, disajikan dingin menyegarkan.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    }
];

function getStoredMenu() {
    try {
        const saved = localStorage.getItem("sotoBanjarMenu");
        return saved ? JSON.parse(saved) : defaultMenuData;
    } catch (e) {
        return defaultMenuData;
    }
}

function getStoredOrders() {
    try {
        const saved = localStorage.getItem("sotoBanjarOrders");
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

let menuList = getStoredMenu();
let orderList = getStoredOrders();
let selectedOrderId = null;

// Navigasi Tab Sidebar (Dashboard, Kelola Menu, Pesanan Masuk)
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
        if (pageSub) pageSub.textContent = "Tambah, ubah harga, foto, dan kategori menu Soto Banjar.";
    } else if (tabId === 'kelola-pesanan') {
        if (pageTitle) pageTitle.textContent = "Daftar Pesanan Online Masuk";
        if (pageSub) pageSub.textContent = "Pantau rincian alamat pengantaran customer dan update status pengiriman.";
    }
};

// Render Tabel Katalog Menu
function renderMenuTable() {
    const tbody = document.getElementById("menu-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    menuList.forEach((item, index) => {
        let catLabel = "Soto & Sup";
        if (item.category === "sampingan") catLabel = "Sate & Sampingan";
        if (item.category === "minuman") catLabel = "Minuman Segar";

        const badgeBg = item.badgeColor ? item.badgeColor : "badge-warning";
        const badgeHTML = item.badge
            ? '<span class="badge ' + badgeBg + '">' + item.badge + '</span>'
            : '<span class="text-muted">-</span>';

        const tr = document.createElement("tr");
        tr.innerHTML = 
            '<td>' + (index + 1) + '</td>' +
            '<td><img src="' + item.image + '" alt="' + item.name + '" class="menu-thumb"></td>' +
            '<td>' +
                '<strong>' + item.name + '</strong>' +
                '<div class="small text-muted" style="font-size: 0.78rem;">' + (item.description || "-") + '</div>' +
            '</td>' +
            '<td><span class="badge badge-info">' + catLabel + '</span></td>' +
            '<td>Rp ' + Number(item.price).toLocaleString("id-ID") + '</td>' +
            '<td>' + badgeHTML + '</td>' +
            '<td>' +
                '<button class="btn btn-sm btn-edit" onclick="editMenu(' + item.id + ')"><i class="fa-solid fa-pen-to-square"></i> Edit</button> ' +
                '<button class="btn btn-sm btn-delete" onclick="deleteMenu(' + item.id + ')"><i class="fa-solid fa-trash"></i> Hapus</button>' +
            '</td>';
        tbody.appendChild(tr);
    });

    const totalMenuEl = document.getElementById("total-menu-count");
    if (totalMenuEl) totalMenuEl.textContent = menuList.length;
}

// Render Tabel Pesanan Masuk
function renderOrderTable(data = orderList) {
    const tbody = document.getElementById("order-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; color: var(--text-muted); padding: 30px;">Belum ada pesanan online yang masuk dari customer.</td></tr>';
    } else {
        data.forEach((order) => {
            const orderDate = order.timestamp
                ? new Date(order.timestamp).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' })
                : "-";

            let itemsHTML = '<ul class="order-items-list">';
            if (Array.isArray(order.items)) {
                order.items.forEach(item => {
                    itemsHTML += '<li><span class="qty-badge">' + item.qty + 'x</span> ' + item.name + '</li>';
                });
            }
            itemsHTML += '</ul>';

            const cust = order.customer || {};
            const city = cust.city || "Jabodetabek";
            const addr = cust.address || "-";
            const noteHTML = (cust.note && cust.note !== "-")
                ? '<div class="note-driver"><i class="fa-regular fa-comment-dots"></i> <em>Patokan: ' + cust.note + '</em></div>'
                : '';

            const addressHTML = 
                '<div class="cust-address-box">' +
                    '<span class="badge-city"><i class="fa-solid fa-location-dot"></i> ' + city + '</span>' +
                    '<div class="full-addr">' + addr + '</div>' +
                    noteHTML +
                '</div>';

            const totalPay = order.pricing ? order.pricing.total : (order.total || 0);
            const ongkirPay = order.pricing ? order.pricing.ongkir : 0;
            const currentOrderId = order.orderId || order.id;
            const statusBadgeClass = order.status === 'Selesai' ? 'badge-success' : 'badge-warning';

            const actionBtn = order.status === 'Diproses'
                ? '<button class="btn btn-sm btn-primary" onclick="completeOrder(\'' + currentOrderId + '\')"><i class="fa-solid fa-check"></i> Selesaikan</button>'
                : '<i class="fa-solid fa-circle-check text-success fa-lg"></i>';

            const tr = document.createElement("tr");
            tr.innerHTML = 
                '<td><span class="timestamp-badge"><i class="fa-regular fa-clock"></i> ' + orderDate + ' WIB</span></td>' +
                '<td><strong>#' + currentOrderId + '</strong></td>' +
                '<td>' +
                    '<strong>' + (cust.name || "-") + '</strong>' +
                    '<div class="small text-muted" style="font-size: 0.8rem;"><i class="fa-solid fa-phone"></i> ' + (cust.phone || "-") + '</div>' +
                '</td>' +
                '<td>' + addressHTML + '</td>' +
                '<td>' + itemsHTML + '</td>' +
                '<td>' +
                    '<strong>Rp ' + Number(totalPay).toLocaleString("id-ID") + '</strong>' +
                    '<div class="small text-muted" style="font-size: 0.75rem;">Ongkir: Rp ' + Number(ongkirPay).toLocaleString("id-ID") + '</div>' +
                '</td>' +
                '<td><span class="badge badge-payment">' + (order.paymentMethod || "COD") + '</span></td>' +
                '<td><span class="badge ' + statusBadgeClass + '">' + order.status + '</span></td>' +
                '<td>' + actionBtn + '</td>';
            tbody.appendChild(tr);
        });
    }

    // Update Jumlah Pesanan di Dashboard
    const totalOrdersEl = document.getElementById("total-orders-count");
    if (totalOrdersEl) totalOrdersEl.textContent = orderList.length;

    // Kalkulasi Otomatis Total Pendapatan Toko
    const totalIncome = orderList.reduce((sum, o) => {
        const val = o.pricing ? o.pricing.total : (o.total || 0);
        return sum + val;
    }, 0);
    const totalIncomeEl = document.getElementById("total-income-count");
    if (totalIncomeEl) totalIncomeEl.textContent = 'Rp ' + Number(totalIncome).toLocaleString("id-ID");
}

// Filter Status Pesanan (Semua / Diproses / Selesai)
window.filterOrders = function() {
    const filterEl = document.getElementById("order-filter");
    if (!filterEl) return;
    const selectedFilter = filterEl.value;
    if (selectedFilter === "Semua") {
        renderOrderTable(orderList);
    } else {
        const filteredData = orderList.filter(o => o.status === selectedFilter);
        renderOrderTable(filteredData);
    }
};

// Form Tambah/Edit Menu
window.toggleModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.toggle("active");
    if (!modal.classList.contains("active")) {
        const form = document.getElementById("menu-form");
        if (form) form.reset();
        const menuId = document.getElementById("menu-id");
        if (menuId) menuId.value = "";
        const title = document.getElementById("modal-title");
        if (title) title.textContent = "Tambah Menu Baru";
    }
};

// Edit Menu
window.editMenu = function(id) {
    const item = menuList.find(m => m.id === id);
    if (item) {
        document.getElementById("menu-id").value = item.id;
        document.getElementById("menu-name").value = item.name;
        document.getElementById("menu-image").value = item.image;
        document.getElementById("menu-category").value = item.category;
        document.getElementById("menu-price").value = item.price;
        document.getElementById("menu-badge").value = item.badge || "";
        document.getElementById("menu-desc").value = item.description || "";

        document.getElementById("modal-title").textContent = "Edit Menu & Harga";
        toggleModal("add-menu-modal");
    }
};

// Hapus Menu dari Katalog
window.deleteMenu = function(id) {
    if (confirm("Apakah Anda yakin ingin menghapus menu ini dari katalog customer?")) {
        menuList = menuList.filter(item => item.id !== id);
        localStorage.setItem("sotoBanjarMenu", JSON.stringify(menuList));
        renderMenuTable();
    }
};

// Konfirmasi Selesai Pesanan
window.completeOrder = function(orderId) {
    selectedOrderId = orderId;
    const confirmIdEl = document.getElementById("confirm-order-id");
    if (confirmIdEl) confirmIdEl.textContent = "#" + orderId;
    const modal = document.getElementById("confirm-order-modal");
    if (modal) modal.classList.add("active");
};

window.closeConfirmModal = function() {
    selectedOrderId = null;
    const modal = document.getElementById("confirm-order-modal");
    if (modal) modal.classList.remove("active");
};

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sotoBanjarMenu")) {
        localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    }
    renderMenuTable();
    renderOrderTable();

    // Form Tambah/Edit Menu
    const menuForm = document.getElementById("menu-form");
    if (menuForm) {
        menuForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const id = document.getElementById("menu-id").value;
            const name = document.getElementById("menu-name").value;
            const image = document.getElementById("menu-image").value;
            const category = document.getElementById("menu-category").value;
            const price = parseInt(document.getElementById("menu-price").value, 10);
            const badge = document.getElementById("menu-badge").value.trim() || null;
            const description = document.getElementById("menu-desc").value.trim() || "-";

            if (id) {
                const index = menuList.findIndex(item => item.id == id);
                if (index !== -1) {
                    menuList[index] = { 
                        ...menuList[index], 
                        name, image, category, price, badge, description 
                    };
                }
            } else {
                const newId = menuList.length > 0 ? Math.max(...menuList.map(item => item.id)) + 1 : 1;
                menuList.push({
                    id: newId,
                    name,
                    image,
                    category,
                    price,
                    badge,
                    badgeColor: badge ? "bg-danger" : null,
                    description
                });
            }

            localStorage.setItem("sotoBanjarMenu", JSON.stringify(menuList));
            renderMenuTable();
            toggleModal("add-menu-modal");
        });
    }

    // Tombol Konfirmasi Selesai Pesanan
    const btnConfirmSubmit = document.getElementById("btn-confirm-submit");
    if (btnConfirmSubmit) {
        btnConfirmSubmit.addEventListener("click", () => {
            if (selectedOrderId) {
                const order = orderList.find(o => (o.orderId || o.id) === selectedOrderId);
                if (order) {
                    order.status = "Selesai";
                    localStorage.setItem("sotoBanjarOrders", JSON.stringify(orderList));
                    filterOrders();
                }
                closeConfirmModal();
            }
        });
    }
});

// Sinkronisasi Otomatis jika Customer Checkout di Tab Lain
window.addEventListener("storage", (e) => {
    if (e.key === "sotoBanjarOrders") {
        orderList = getStoredOrders();
        filterOrders();
    }
});
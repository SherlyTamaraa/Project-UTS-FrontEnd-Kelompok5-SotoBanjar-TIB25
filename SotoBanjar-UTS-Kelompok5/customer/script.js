// Data Awal Menu Default
var defaultMenuData = [
    {
        id: 1,
        name: "Soto Banjar Spesial Telur Bebek",
        category: "soto",
        price: 38000,
        badge: "Terlaris",
        badgeColor: "bg-danger",
        description: "Suwiran ayam kampung, ketupat, perkedel kentang, soun, dan 1 butir telur bebek rebus.",
        image: "https://indonesiakaya.com/wp-content/uploads/2023/04/sb_Artboard_5.jpg"
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
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
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

// Ambil Menu dari LocalStorage
function getStoredMenu() {
    var saved = localStorage.getItem("sotoBanjarMenu");
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Gagal parsing sotoBanjarMenu:", e);
        }
    }
    localStorage.setItem("sotoBanjarMenu", JSON.stringify(defaultMenuData));
    return defaultMenuData;
}

var menuData = getStoredMenu();
var cart = [];
var SERVICE_FEE = 2000;

var cartDrawerInstance = null;
var orderSuccessModalInstance = null;
var toastInstance = null;

// Inisialisasi
document.addEventListener("DOMContentLoaded", function() {
    initBootstrapComponents();
    renderMenu(menuData);
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

    var toastEl = document.getElementById("actionToast");
    if (toastEl && typeof bootstrap !== "undefined") {
        toastInstance = new bootstrap.Toast(toastEl);
    }
}

function setupEventListeners() {
    // Tombol buka keranjang
    var cartToggleBtn = document.getElementById("cart-toggle-btn");
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener("click", function() {
            if (cartDrawerInstance) cartDrawerInstance.show();
        });
    }

    // Filter Kategori Menu
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
                renderMenu(menuData);
            } else {
                var filtered = menuData.filter(function(item) {
                    return item.category === cat;
                });
                renderMenu(filtered);
            }
        });
    }

    // dropdown kota pengiriman dan ongkir pengiriman
    var citySelect = document.getElementById("cust-city");
    if (citySelect) {
        citySelect.addEventListener("change", function() {
            updateCartUI();
        });
    }

    // Form Checkout Order
    var checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckout);
    }
}

// Render Menu
function renderMenu(items) {
    var menuGrid = document.getElementById("menu-grid");
    if (!menuGrid) return;
    menuGrid.innerHTML = "";

    if (!items || items.length === 0) {
        menuGrid.innerHTML = '<div class="col-12 text-center text-muted py-5"><p>Tidak ada menu yang tersedia.</p></div>';
        return;
    }

    items.forEach(function(item) {
        var badgeHtml = "";
        if (item.badge) {
            var color = item.badgeColor ? item.badgeColor : "bg-danger";
            badgeHtml = '<span class="badge ' + color + ' card-badge position-absolute top-0 start-0 m-3">' + item.badge + '</span>';
        }

        var col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        var cardHtml = '';
        cardHtml += '<div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden menu-card">';
        cardHtml += '  <div class="position-relative">';
        cardHtml += '    <img src="' + item.image + '" class="card-img-top menu-img" alt="' + item.name + '" style="height: 195px; object-fit: cover;">';
        cardHtml +=      badgeHtml;
        cardHtml += '  </div>';
        cardHtml += '  <div class="card-body d-flex flex-column">';
        cardHtml += '    <h5 class="card-title fw-bold text-dark-green mb-1">' + item.name + '</h5>';
        cardHtml += '    <p class="card-text text-muted small flex-grow-1">' + (item.description || "") + '</p>';
        cardHtml += '    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">';
        cardHtml += '      <span class="fw-bold fs-5 text-dark-green">Rp ' + Number(item.price).toLocaleString("id-ID") + '</span>';
        cardHtml += '      <button type="button" class="btn btn-sm btn-gold px-3 rounded-pill" onclick="addToCart(' + item.id + ')">';
        cardHtml += '        <i class="fa-solid fa-plus me-1"></i> Pesan';
        cardHtml += '      </button>';
        cardHtml += '    </div>';
        cardHtml += '  </div>';
        cardHtml += '</div>';

        col.innerHTML = cardHtml;
        menuGrid.appendChild(col);
    });
}

// Tambah Produk ke Keranjang
function addToCart(id) {
    var product = menuData.find(function(item) { return item.id === id; });
    if (!product) return;

    var exist = cart.find(function(item) { return item.id === id; });
    if (exist) {
        exist.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        });
    }

    updateCartUI();
    showToast(product.name + " ditambahkan ke pesanan!");
}

// Tambah / Kurang Jumlah Item
function changeQty(id, delta) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].qty += delta;
            if (cart[i].qty <= 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    updateCartUI();
}

// Ambil Nilai Ongkir berdasarkan Pilihan Kota
function getSelectedDeliveryFee() {
    var citySelect = document.getElementById("cust-city");
    if (!citySelect) return 0;

    var selectedOption = citySelect.options[citySelect.selectedIndex];
    if (selectedOption && selectedOption.dataset.ongkir) {
        return parseInt(selectedOption.dataset.ongkir, 10) || 0;
    }
    return 0;
}

// Update UI Keranjang dan Rincian Biaya
function updateCartUI() {
    var cartBadge = document.getElementById("cart-count-badge");
    var cartItemsContainer = document.getElementById("cart-items-container");
    var cartEmptyState = document.getElementById("cart-empty-state");
    var cartSubtotalEl = document.getElementById("cart-subtotal");
    var cartOngkirEl = document.getElementById("cart-ongkir");
    var cartServiceEl = document.getElementById("cart-service");
    var cartTotalEl = document.getElementById("cart-total");

    var totalCount = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);

    if (cartBadge) {
        cartBadge.textContent = totalCount;
        if (totalCount === 0) {
            cartBadge.classList.add("d-none");
        } else {
            cartBadge.classList.remove("d-none");
        }
    }

    if (cartItemsContainer) {
        var oldRows = cartItemsContainer.querySelectorAll(".cart-item-row");
        oldRows.forEach(function(row) { row.remove(); });

        if (cart.length === 0) {
            if (cartEmptyState) cartEmptyState.classList.remove("d-none");
        } else {
            if (cartEmptyState) cartEmptyState.classList.add("d-none");

            cart.forEach(function(item) {
                var div = document.createElement("div");
                div.className = "d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded cart-item-row border";

                var rowHtml = '';
                rowHtml += '<div class="pe-2">';
                rowHtml += '  <div class="small fw-bold text-dark-green">' + item.name + '</div>';
                rowHtml += '  <small class="text-muted">Rp ' + (item.price * item.qty).toLocaleString("id-ID") + ' (@ Rp ' + item.price.toLocaleString("id-ID") + ')</small>';
                rowHtml += '</div>';
                rowHtml += '<div class="btn-group btn-group-sm">';
                rowHtml += '  <button type="button" class="btn btn-outline-secondary" onclick="changeQty(' + item.id + ', -1)">-</button>';
                rowHtml += '  <button type="button" class="btn btn-outline-secondary disabled fw-bold text-dark">' + item.qty + '</button>';
                rowHtml += '  <button type="button" class="btn btn-outline-secondary" onclick="changeQty(' + item.id + ', 1)">+</button>';
                rowHtml += '</div>';

                div.innerHTML = rowHtml;
                cartItemsContainer.appendChild(div);
            });
        }
    }

    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
    var ongkir = (cart.length > 0) ? getSelectedDeliveryFee() : 0;
    var service = (cart.length > 0) ? SERVICE_FEE : 0;
    var grandTotal = subtotal + ongkir + service;

    if (cartSubtotalEl) cartSubtotalEl.textContent = "Rp " + subtotal.toLocaleString("id-ID");
    if (cartOngkirEl) cartOngkirEl.textContent = "Rp " + ongkir.toLocaleString("id-ID");
    if (cartServiceEl) cartServiceEl.textContent = "Rp " + service.toLocaleString("id-ID");
    if (cartTotalEl) cartTotalEl.textContent = "Rp " + grandTotal.toLocaleString("id-ID");
}

// Proses Submit Checkout Form
function handleCheckout(e) {
    e.preventDefault();

    if (cart.length === 0) {
        showToast("Keranjang belanja masih kosong! Silakan pilih menu terlebih dahulu.");
        return;
    }

    var nameInput = document.getElementById("cust-name");
    var phoneInput = document.getElementById("cust-phone");
    var citySelect = document.getElementById("cust-city");
    var addressInput = document.getElementById("cust-address");
    var noteInput = document.getElementById("cust-note");
    var paymentSelect = document.getElementById("cust-payment");

    var name = nameInput ? nameInput.value.trim() : "";
    var phone = phoneInput ? phoneInput.value.trim() : "";
    var city = citySelect ? citySelect.value : "";
    var address = addressInput ? addressInput.value.trim() : "";
    var note = noteInput ? noteInput.value.trim() : "";
    var payment = paymentSelect ? paymentSelect.value : "COD";

    if (!city) {
        showToast("Harap pilih wilayah pengantaran Jabodetabek!");
        if (citySelect) citySelect.focus();
        return;
    }

    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
    var ongkir = getSelectedDeliveryFee();
    var totalBayar = subtotal + ongkir + SERVICE_FEE;

    var orderId = "SBN-" + Math.floor(100000 + Math.random() * 900000);

    var orderData = {
        orderId: orderId,
        timestamp: new Date().toISOString(),
        customer: {
            name: name,
            phone: phone,
            city: city,
            address: address,
            note: note || "-"
        },
        items: JSON.parse(JSON.stringify(cart)),
        pricing: {
            subtotal: subtotal,
            ongkir: ongkir,
            serviceFee: SERVICE_FEE,
            total: totalBayar
        },
        paymentMethod: payment,
        status: "Diproses"
    };

    // Simpan ke LocalStorage agar dapat dilihat di Panel Admin
    var existingOrders = [];
    try {
        existingOrders = JSON.parse(localStorage.getItem("sotoBanjarOrders") || "[]");
    } catch (err) {
        existingOrders = [];
    }
    existingOrders.unshift(orderData);
    localStorage.setItem("sotoBanjarOrders", JSON.stringify(existingOrders));

    // Isi Data ke Modal Struk
    var modalOrderId = document.getElementById("modal-order-id");
    var modalName = document.getElementById("modal-cust-name");
    var modalPhone = document.getElementById("modal-cust-phone");
    var modalCity = document.getElementById("modal-cust-city");
    var modalAddress = document.getElementById("modal-cust-address");
    var modalPayment = document.getElementById("modal-cust-payment");
    var modalTotal = document.getElementById("modal-total-pay");

    if (modalOrderId) modalOrderId.textContent = "#" + orderId;
    if (modalName) modalName.textContent = name;
    if (modalPhone) modalPhone.textContent = phone;
    if (modalCity) modalCity.textContent = city;
    if (modalAddress) modalAddress.textContent = address + (note ? " (Patokan: " + note + ")" : "");
    if (modalPayment) modalPayment.textContent = payment;
    if (modalTotal) modalTotal.textContent = "Rp " + totalBayar.toLocaleString("id-ID");

    // Menyembunyikan Drawer & Reset Form
    if (cartDrawerInstance) cartDrawerInstance.hide();
    cart = [];
    var form = document.getElementById("checkout-form");
    if (form) form.reset();
    updateCartUI();

    // Menampilkan Struk Konfirmasi
    if (orderSuccessModalInstance) orderSuccessModalInstance.show();
}

function showToast(msg) {
    var toastMsgEl = document.getElementById("toastMessage");
    if (toastMsgEl) toastMsgEl.textContent = msg;
    if (toastInstance) toastInstance.show();
}

// Sinkronisasi menu bila diedit oleh tab Admin
window.addEventListener("storage", function(e) {
    if (e.key === "sotoBanjarMenu") {
        menuData = getStoredMenu();
        renderMenu(menuData);
    }
});
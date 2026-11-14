// ============================================================
// CROWNLESS — shared logic (loaded on every page after
// config.js and products.js)
// Cart lives in localStorage under the key "crownless_cart".
// Cart item shape: { id, size, colour, qty } — the same product
// in a different size/colour is a separate line.
// ============================================================

const CART_KEY = "crownless_cart";

// ---------- money ----------
function formatPrice(n) {
  return "₦" + Number(n).toLocaleString("en-US");
}

// ---------- products ----------
function findProduct(id) {
  return PRODUCTS.find(function (p) { return p.id === id; }) || null;
}

// ---------- cart ----------
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function cartCount() {
  return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function cartSubtotal() {
  return getCart().reduce(function (sum, item) {
    const p = findProduct(item.id);
    return p ? sum + p.price * item.qty : sum;
  }, 0);
}

function addToCart(id, size, colour, qty) {
  const cart = getCart();
  const existing = cart.find(function (item) {
    return item.id === id && item.size === size && item.colour === colour;
  });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: id, size: size, colour: colour, qty: qty });
  }
  saveCart(cart);
}

// ---------- header / chrome ----------
function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach(function (el) {
    el.textContent = cartCount();
  });
}

function initWhatsAppButton() {
  document.querySelectorAll(".wa-float").forEach(function (el) {
    el.href = CONFIG.whatsappLink;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
  initWhatsAppButton();
});

// ---------- product cards (used by index.html) ----------
function productCardHTML(p) {
  const badge = p.badge && p.badge.toLowerCase() !== "new"
    ? '<span class="badge badge-' + p.badge.toLowerCase() + '">' + p.badge + "</span>"
    : "";
  const old = p.oldPrice
    ? ' <span class="old-price">' + formatPrice(p.oldPrice) + "</span>"
    : "";
  return (
    '<a class="card" href="product.html?id=' + p.id + '">' +
      '<span class="card-img-wrap"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' + badge + "</span>" +
      '<span class="card-body"><span class="card-name">' + p.name + "</span>" +
      '<span class="card-meta">' + p.category + "</span>" +
      '<span class="card-price">' + formatPrice(p.price) + old + "</span></span>" +
    "</a>"
  );
}

function renderGrid(el, list) {
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(productCardHTML).join("")
    : '<p class="empty-note">No products match your search.</p>';
}

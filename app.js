/* =========================================================
   RAKIT.id — Marketplace Komponen PC & Laptop
   File: app.js
   Logika UI: render kategori/produk, keranjang, wishlist,
   drawer, toast. Membaca data dari data.js (categories, products).
   ========================================================= */

const fmt = n => "Rp " + n.toLocaleString("id-ID");

/* ============ RENDER CATEGORIES ============ */
function renderCategories(){
  const catStrip = document.getElementById('catStrip');
  catStrip.innerHTML = categories.map(c => `
    <div class="cat-card" tabindex="0">
      <div class="ic">${c.icon}</div>
      <div class="lbl">${c.name}</div>
      <div class="cnt">${c.count}</div>
    </div>
  `).join('');
}

/* ============ RENDER PRODUCTS ============ */
const tagLabel = { ready:"Ready Stock", preorder:"Pre-Order", hot:"Terlaris" };

function renderProducts(list){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = list.map((p, i) => `
    <div class="pcard">
      <div class="pcard-img-wrap">
        <span class="pcard-tag ${p.tag}">${tagLabel[p.tag]}</span>
        <button class="wish-btn" data-wish="${i}" aria-label="Tambah ke wishlist">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="pcard-body">
        <div class="pcard-brand">${p.brand}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-specs">${p.specs.map(s=>`<span>${s}</span>`).join('')}</div>
        <div class="pcard-rating">
          <span class="stars">★★★★★</span> ${p.rating} · ${p.sold} terjual
        </div>
        <div class="pcard-foot">
          <div class="pcard-price">
            ${p.old ? `<span class="old">${fmt(p.old)}</span>` : ''}
            <span class="now">${fmt(p.price)}</span>
          </div>
          <button class="cart-add" data-add="${i}" aria-label="Tambah ke keranjang">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============ CART LOGIC ============ */
let cart = [];

function addToCart(idx){
  const existing = cart.find(c => c.idx === idx);
  if(existing){ existing.qty++; }
  else{ cart.push({ idx, qty:1 }); }
  renderCart();
  showToast(`${products[idx].name} ditambahkan ke keranjang`);
  pulseBadge();
}

function renderCart(){
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  const badge = document.getElementById('cartBadge');

  const totalQty = cart.reduce((s,c)=>s+c.qty,0);
  badge.textContent = totalQty;

  if(cart.length === 0){
    body.innerHTML = `
      <div class="drawer-empty">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>Keranjang masih kosong.<br>Yuk mulai belanja komponen.</p>
      </div>`;
    foot.style.display = 'none';
    return;
  }

  foot.style.display = 'block';
  body.innerHTML = cart.map(c => {
    const p = products[c.idx];
    return `
    <div class="cart-item">
      <img src="${p.img}" alt="${p.name}">
      <div class="cart-item-info">
        <div class="nm">${p.name}</div>
        <div class="px">${fmt(p.price)}</div>
        <div class="qty-ctrl">
          <button data-dec="${c.idx}">−</button>
          <span>${c.qty}</span>
          <button data-inc="${c.idx}">+</button>
          <button class="cart-item-remove" data-rm="${c.idx}">Hapus</button>
        </div>
      </div>
    </div>`;
  }).join('');

  const subtotal = cart.reduce((s,c)=> s + products[c.idx].price * c.qty, 0);
  document.getElementById('cartSubtotal').textContent = fmt(subtotal);
  document.getElementById('cartTotal').textContent = fmt(subtotal);
}

function pulseBadge(){
  const badge = document.getElementById('cartBadge');
  badge.style.transform = 'scale(1.3)';
  setTimeout(()=> badge.style.transform = 'scale(1)', 180);
}

/* ============ DRAWER OPEN/CLOSE ============ */
function openDrawer(){
  document.getElementById('overlay').classList.add('show');
  document.getElementById('cartDrawer').classList.add('show');
}
function closeDrawer(){
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('cartDrawer').classList.remove('show');
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2400);
}

/* ============ EVENT BINDING ============ */
function bindEvents(){
  // Klik di grid produk: wishlist toggle & tambah ke keranjang
  document.getElementById('productGrid').addEventListener('click', e => {
    const wishBtn = e.target.closest('[data-wish]');
    if(wishBtn){ wishBtn.classList.toggle('active'); }

    const addBtn = e.target.closest('[data-add]');
    if(addBtn){ addToCart(+addBtn.dataset.add); }
  });

  // Klik di dalam drawer keranjang: tambah/kurang/hapus qty
  document.getElementById('cartBody').addEventListener('click', e => {
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const rm = e.target.closest('[data-rm]');

    if(inc){
      const item = cart.find(c=>c.idx===+inc.dataset.inc);
      item.qty++;
      renderCart();
    }
    if(dec){
      const item = cart.find(c=>c.idx===+dec.dataset.dec);
      item.qty--;
      if(item.qty<=0) cart = cart.filter(c=>c.idx!==+dec.dataset.dec);
      renderCart();
    }
    if(rm){
      cart = cart.filter(c=>c.idx!==+rm.dataset.rm);
      renderCart();
    }
  });

  // Buka/tutup drawer keranjang
  document.getElementById('cartBtn').addEventListener('click', openDrawer);
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('overlay').addEventListener('click', closeDrawer);

  // Filter brand (chip) — toggle visual on/off
  document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=> chip.classList.toggle('on'));
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts(products);
  bindEvents();
  renderCart();
});

/* =========================================================
   RAKIT.id — Marketplace Komponen PC & Laptop
   File: data.js
   Berisi data kategori & produk. Pisahkan dari logic (app.js)
   supaya gampang diganti dengan fetch ke API/backend nanti.
   ========================================================= */

const categories = [
  { name:"Laptop", count:"8 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M2 20h20M9 20l1-4h4l1 4"/></svg>` },
  { name:"Kartu Grafis", count:"5 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="10" rx="1"/><circle cx="7" cy="12" r="2"/><circle cx="13" cy="12" r="2"/><path d="M18 10v4M22 9v6"/></svg>` },
  { name:"Prosesor", count:"4 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>` },
  { name:"RAM", count:"3 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="8" rx="1"/><path d="M7 8V5M11 8V5M15 8V5M7 19v-3M11 19v-3M15 19v-3"/></svg>` },
  { name:"PC Rakitan", count:"4 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="9" height="18" rx="1"/><circle cx="8.5" cy="7" r="1"/><path d="M16 9h4M16 13h4M16 17h2"/></svg>` },
  { name:"Peripheral", count:"3 produk", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="14" width="20" height="6" rx="1"/><path d="M6 6h7l3 8H6z"/><circle cx="10" cy="17" r="1"/></svg>` },
];

const products = [
  {
    name:"ASUS ROG Strix G16 — RTX 4070",
    brand:"ASUS",
    img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=375&fit=crop",
    specs:["i9-14900HX","16GB RAM","RTX 4070"],
    price:24999000, old:27999000,
    rating:4.8, sold:312, tag:"hot"
  },
  {
    name:"Lenovo ThinkPad X1 Carbon Gen 12",
    brand:"Lenovo",
    img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=375&fit=crop",
    specs:["i7-1355U","16GB RAM","1TB SSD"],
    price:28500000, old:null,
    rating:4.9, sold:188, tag:"ready"
  },
  {
    name:"MSI Katana 15 Gaming Laptop",
    brand:"MSI",
    img:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=375&fit=crop",
    specs:["Ryzen 7","16GB RAM","RTX 4060"],
    price:17499000, old:19999000,
    rating:4.6, sold:456, tag:"ready"
  },
  {
    name:"NVIDIA GeForce RTX 4070 Ti Super",
    brand:"NVIDIA",
    img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=375&fit=crop",
    specs:["16GB GDDR6X","PCIe 4.0","2610MHz"],
    price:13750000, old:null,
    rating:4.9, sold:97, tag:"ready"
  },
  {
    name:"AMD Ryzen 9 7950X3D",
    brand:"AMD",
    img:"https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=375&fit=crop",
    specs:["16-Core","5.7GHz Boost","AM5"],
    price:8999000, old:9750000,
    rating:4.8, sold:204, tag:"hot"
  },
  {
    name:"Rakitan Gaming Vermillion X — R5 7600",
    brand:"RAKIT.id",
    img:"https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&h=375&fit=crop",
    specs:["Ryzen 5 7600","RTX 4060","16GB DDR5"],
    price:14250000, old:null,
    rating:4.7, sold:63, tag:"ready"
  },
  {
    name:"Corsair Vengeance 32GB DDR5 6000MHz",
    brand:"Corsair",
    img:"https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=375&fit=crop",
    specs:["32GB Kit","6000MHz","CL30"],
    price:2150000, old:2450000,
    rating:4.9, sold:521, tag:"ready"
  },
  {
    name:"ASUS TUF Gaming A15 — Ryzen Edition",
    brand:"ASUS",
    img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=375&fit=crop",
    specs:["Ryzen 7 7735HS","16GB RAM","RTX 4050"],
    price:15999000, old:null,
    rating:4.5, sold:278, tag:"preorder"
  },
  {
    name:"Intel Core i7-14700K",
    brand:"Intel",
    img:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=375&fit=crop",
    specs:["20-Core","5.6GHz Boost","LGA1700"],
    price:6450000, old:null,
    rating:4.7, sold:145, tag:"ready"
  },
  {
    name:"Samsung 990 Pro 2TB NVMe Gen4",
    brand:"Samsung",
    img:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=375&fit=crop",
    specs:["2TB","7450MB/s","PCIe 4.0"],
    price:2899000, old:3299000,
    rating:4.9, sold:389, tag:"hot"
  },
  {
    name:"Keychron K8 Pro Mechanical Keyboard",
    brand:"Keychron",
    img:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=375&fit=crop",
    specs:["Hot-swap","Wireless","Brown Switch"],
    price:1450000, old:null,
    rating:4.6, sold:210, tag:"ready"
  },
  {
    name:"Logitech MX Master 3S",
    brand:"Logitech",
    img:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=375&fit=crop",
    specs:["8K DPI","Silent Click","USB-C"],
    price:1299000, old:1499000,
    rating:4.9, sold:670, tag:"ready"
  },
];

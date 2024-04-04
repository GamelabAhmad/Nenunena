const produkCards = document.querySelectorAll(".produk-card");

// Loop melalui setiap elemen dan tambahkan event listener untuk meng-handle klik
produkCards.forEach((produkCard) => {
  produkCard.addEventListener("click", () => {
    // Alihkan ke halaman katalog
    window.location.href = "katalog.html";
  });
});

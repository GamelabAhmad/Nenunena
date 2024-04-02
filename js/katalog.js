$(document).ready(function () {
  const produk = $('#produk');

  // Array of image paths
  const gambarTenuns = ['image/tenunBulu1.png', 'image/tenunBulu2.png', 'image/tenunBulu3.png', 'image/tenunBulu4.png', 'image/tenunBulu5.png', 'image/tenunBulu6.png', 'image/tenunBulu7.png', 'image/tenunBulu8.png', 'image/tenunBulu9.png'];

  // Loop through each image path and create card elements
  $.each(gambarTenuns, function (index, gambar) {
    const cardCol = $('<div class="col"></div>');

    const card = $('<div class="card h-full bg-light"></div>');

    const cardImg = $('<img class="card-img-top img-fluid mx-auto">').attr({
      src: gambar,
      alt: 'Tenun Image',
      style: 'max-width: 300px',
    });

    const cardBody = $('<div class="card-body"></div>');

    const cardTitle = $('<h5 class="card-title">Kain Tenun</h5>');

    const cardDetails = $('<div class="d-flex justify-content-between"></div>');

    const cardPrice = $('<p class="fs-5 fw-semibold text-gradient">Rp. 630.000,00</p>');

    const buyLink = $('<a class="btn btn-success px-4 h-100">Beli</a>').attr('href', 'https://api.whatsapp.com/send?phone=082130105810');

    cardDetails.append(cardPrice);
    cardDetails.append(buyLink);

    cardBody.append(cardTitle);
    cardBody.append(cardDetails);

    card.append(cardImg);
    card.append(cardBody);

    cardCol.append(card);

    produk.append(cardCol);
  });
});

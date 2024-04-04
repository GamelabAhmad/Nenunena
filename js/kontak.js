function kirimWA() {
  let nama = $('#name').val();
  let telp = $('#phone').val();
  let email = $('#email').val();
  let pesan = $('#pesan').val();
  let kirim = $('#kirim');
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;

  if (nama == '' || telp == '' || email == '' || pesan == '') {
    return swal('', 'Data tidak ditemukan', 'warning');
  } else if (!phoneRegex.test(telp)) {
    return swal('', 'Masukkan telepon yang Valid', 'warning');
  } else if (!emailRegex.test(email)) {
    return swal('', 'Masukkan telepon yang Valid', 'warning');
  }

  let pesanWA = `Selamat siang, saya ${nama} dengan nomor telepon ${telp} dan email ${email}, mengirimkan pesan sebagai berikut : ${pesan}`;
  let encode = encodeURIComponent(pesanWA);
  let waLink = `https://wa.me/082130105810?text=${encode}`;
  kirim.attr('href', waLink);
}

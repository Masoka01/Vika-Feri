// Ambil elemen-elemen yang dibutuhkan
var popup = document.getElementById("myPopup");
var closeBtn = document.getElementsByClassName("close")[0];
var isAudioPlaying = true;
var logo = document.getElementById("logo");

// Fungsi untuk menampilkan popup
function showPopup() {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    popup.style.transform = "translateY(0)";
    popup.style.opacity = 1;
  }); // Tambahkan penundaan agar animasi berfungsi dengan baik
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
  var popupAudio = document.getElementById("popupAudio");
  popupAudio.play(); // Menghentikan audio
  popup.style.transform = "translateY(-100%)";
  document.body.style.overflow = "auto";
  popup.style.opacity = 0;
  setTimeout(function () {
    popup.style.display = "none";
    popup.style.opacity = 1;
    popup.style.transform = "translateY(0)"; // Reset transformasi saat popup disembunyikan
  }, 5000); // Waktu yang sesuai dengan durasi transisi
}

// Tambahkan event listener pada tombol tutup
closeBtn.addEventListener("click", hidePopup);
logo.addEventListener("click", pause);
// Tampilkan popup setelah halaman dimuat
window.onload = showPopup;
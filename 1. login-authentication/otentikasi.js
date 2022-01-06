const username = document.querySelector(".user");
const password = document.querySelector(".pass");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (username.value == "arum1307" && password.value == "Semangat45") {
    alert("Login Berhasil")
  } else if (username.value != "arum1307" && password.value == "Semangat45") {
    alert("Username yang Anda masukkan salah")
  } else if (username.value == "arum1307" && password.value != "Semangat45") {
    alert("Password yang Anda masukkan salah")
  } else {
    alert(`Akun tidak ditemukan`);
  }
})






// Link Instagram
var instagram = document.getElementById("instagram").addEventListener("click", tampilkanAlertInstagram);
function tampilkanAlertInstagram() {
  var tes = confirm("Anda yakin ingin mengunjungi instagram?");
  if (tes) {
    window.open("https://instagram.com/pendiam__", "_blank");
  } else {
    getElementById("home");
  }
}

// Link Github
var instagram = document.getElementById("github").addEventListener("click", tampilkanAlertGithub);
function tampilkanAlertGithub() {
  var tes = confirm("Anda yakin ingin mengunjungi github?");
  if (tes) {
    window.open("https://github.com/Rezaprtma", "_blank");
  } else {
    getElementById("home");
  }
}


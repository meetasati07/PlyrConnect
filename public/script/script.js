document.querySelector(".bi-bell").addEventListener("click", function (e) {
  e.stopPropagation();
  const menu = document.getElementById("notifMenu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
// Close menu if clicked outside
document.body.addEventListener("click", function () {
  document.getElementById("notifMenu").style.display = "none";
});

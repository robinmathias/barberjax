document.querySelectorAll("[data-year]").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");
if (burger && mobile) {
  burger.addEventListener("click", () => mobile.classList.toggle("open"));
  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobile.classList.remove("open"));
  });
}

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a[data-page]").forEach(a=>{
  if(a.getAttribute("href") === path) a.classList.add("active");
});

document.querySelectorAll("[data-year]").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

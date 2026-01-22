// Highlight current page in navbar
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a[data-page]").forEach(a=>{
  if(a.getAttribute("href") === path) a.classList.add("active");
});

// Demo contact form handler (no backend)
const form = document.querySelector("#contactForm");
if(form){
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Aitäh! (Demo) Kui tahad, teen selle päriselt tööle Netlify Forms / Formspree-ga.");
    form.reset();
  });
}

// year in footer
document.querySelectorAll("[data-year]").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

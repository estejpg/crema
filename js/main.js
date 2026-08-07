// crema · shared interactions

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Highlight current page in nav
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((a) => {
  const target = a.getAttribute("href");
  if (target === here) a.classList.add("active");
});

// Announcement bar rotation (cafe-matcha pattern)
const announcementBar = document.querySelector("[data-announcement-bar]");
if (announcementBar) {
  const items = [...announcementBar.querySelectorAll(".announcement")];
  const prevBtn = announcementBar.querySelector("[data-announcement-prev]");
  const nextBtn = announcementBar.querySelector("[data-announcement-next]");
  let index = items.findIndex((el) => el.classList.contains("is-active"));
  if (index < 0) index = 0;

  const show = (next) => {
    if (!items.length) return;
    items[index].classList.remove("is-active");
    index = (next + items.length) % items.length;
    items[index].classList.add("is-active");
  };

  prevBtn?.addEventListener("click", () => show(index - 1));
  nextBtn?.addEventListener("click", () => show(index + 1));

  if (items.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => show(index + 1), 5000);
  }
}

// Product carousel (mobile horizontal scroll)
document.querySelectorAll("[data-product-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  if (!track) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector(".product-block");
    const amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  prev?.addEventListener("click", () => scrollByCard(-1));
  next?.addEventListener("click", () => scrollByCard(1));
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Newsletter (no backend, friendly confirmation)
document.querySelectorAll(".newsletter form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (input && input.value.trim()) {
      form.innerHTML = "<p style='font-weight:700;margin:0'>you're on the list — see you at the bar</p>";
    }
  });
});

// Add your WhatsApp number here in international format, digits only (for example: 14155552671).
const WHATSAPP_NUMBER = "918089840400";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Add your WhatsApp number in script.js first (international format, digits only).\nExample: 14155552671");
    return;
  }

  const formData = new FormData(event.currentTarget);
  const message = [
    `Hi! I'm ${formData.get("name")} (${formData.get("email")}).`,
    "",
    "I'd like to talk about a project:",
    formData.get("project"),
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();


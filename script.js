// ===== Lightbox =====
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// ===== Telegram форма =====
const TOKEN = "8341514650:AAER4hJzVXW14r7UT9d8ReKaQb3uLkj9Dbg";
const CHAT_ID = "1403542171";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<b>Новое сообщение с сайта</b>\n`;
    message += `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Email:</b> ${this.email.value}\n`;
    message += `<b>Сообщение:</b> ${this.message.value}`;

    fetch(URI_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    })
      .then(() => {
        status.innerHTML = "✅ Сообщение отправлено!";
        status.style.color = "lightgreen";
        form.reset();
      })
      .catch(() => {
        status.innerHTML = "❌ Ошибка при отправке!";
        status.style.color = "red";
      });
  });
});

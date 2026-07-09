const contactButton = document.querySelector("#contactButton");
const toast = document.querySelector("#toast");
const email = "15998255133@163.com";

let toastTimer;

contactButton.addEventListener("click", () => {
  toast.textContent = `我的邮箱：${email}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
});

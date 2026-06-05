const scene = document.querySelector("[data-scene]");

if (scene) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * -12;
    scene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

const form = document.querySelector("[data-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "Olá, Vera Group. Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${data.get("nome")}`,
      `Negócio: ${data.get("negocio")}`,
      `Interesse: ${data.get("interesse")}`,
      data.get("mensagem") ? `Mensagem: ${data.get("mensagem")}` : ""
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

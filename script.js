/*criando as constantes e variaveis de elementos */
const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const validadeInput = () => input.value.trim().length > 0;

const ul = document.querySelector("ul");
const error = document.getElementById("errormessage");

const addNewItem = () => {
  if (validadeInput()) {
    const li = document.createElement("li");
    li.classList.add("item");

    const div = document.createElement("div");
    div.classList.add("checkbox");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const span = document.createElement("span");
    span.textContent = input.value;

    const del = document.createElement("button");
    del.innerHTML = `<img src="./assets/icons/remove.svg" alt="Deletar item da lista" />`;

    // Event listener para o botão de deletar
    del.addEventListener("click", () => {
      const circle = document.createElement("small");
      circle.innerHTML = `<img src="./assets/icons/warning-circle.svg" alt="">`;
      div.prepend(circle);
      checkbox.remove();
      del.remove();

      const btn = document.createElement("button");
      btn.classList.add("button");
      btn.innerHTML = `<img src="./assets/icons/delete.svg" alt="Deletar item da lista" />`;

      li.append(btn);
      span.textContent = "O item foi removido da lista!";
      li.classList.replace("item", "alert");

      btn.addEventListener("click", () => {
        li.remove();
      });
    });

    div.append(checkbox, span);
    li.append(div, del);
    ul.appendChild(li);

    input.value = "";
    error.innerHTML = "";

    // limpa classes de erro se estiverem ativas
    input.classList.remove("danger");
    error.classList.replace("error", "delet"); //esconde a mensagem de erro
  } else {
    error.innerHTML = `<img src="./assets/icons/warning-circle-alert.svg" alt=""> Digite um item para sua Lista!`;
    input.classList.add("danger");
    error.classList.replace("delet", "error");
  }
};

// Event listeners globais
input.addEventListener("input", () => {
  const inputIsValid = validadeInput();
  if (inputIsValid) {
    input.classList.remove("danger");
    error.classList.replace("error", "delet");
    error.innerHTML = "";
  }
});

button.addEventListener("click", addNewItem);

form.onsubmit = (event) => {
  event.preventDefault(); // previne o envio do formulário
  addNewItem();
};

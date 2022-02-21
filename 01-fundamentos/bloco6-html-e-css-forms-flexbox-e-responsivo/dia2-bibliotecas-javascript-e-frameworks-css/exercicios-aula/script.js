const botaoApagar = document.querySelector("#botao-apagar");
const formulario = document.querySelector("#form");

function apagar() {
  formulario.reset();
}
botaoApagar.addEventListener("click", apagar);

const validation = new JustValidate("#form");

validation
  .addField("#nomeCandidato", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Este campo precisa conter no mínimo 10 caracteres.",
    },
    {
      rule: "maxLength",
      value: 50,
      errorMessage: "Este campo pode conter até 50 caracteres.",
    },
    {
      rule: "required",
      errorMessage: "Necessário informar seu nome.",
    },
  ])
  .addField("#emailCandidato", [
    {
      rule: "required",
      errorMessage: "Necessário informar seu e-mail.",
    },
    {
      rule: "email",
      errorMessage: "E-mail inválido!",
    },
  ]);

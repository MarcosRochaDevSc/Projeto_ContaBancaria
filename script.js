// Array para armazenar as contas dos clientes
const contas = [];

// Função para criar uma nova conta bancária
function criarConta() {
  // Salva os dados do formulário em variáveis
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const celular = document.getElementById("celular").value;
  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirma-senha").value;

  // Verifica se todos os campos foram preenchidos
  if (!nome || !cpf || !celular || !senha || !confirmaSenha) {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
  }

  // Verifica se as senhas conferem
  if (senha !== confirmaSenha) {
    alert("As senhas digitadas não conferem.");
    return;
  }

  // Cria um número de conta único
  const conta = new Date().getTime();

  // Cria um objeto com os dados da conta
  const novaConta = {
    nome: nome,
    cpf: cpf,
    celular: celular,
    senha: senha,
    conta: conta,
    saldo: 0
  };

  // Adiciona a nova conta ao array de contas
  contas.push(novaConta);

  // Exibe uma mensagem de sucesso com o número da conta criada
  alert(`Conta criada com sucesso! Número da conta: ${conta}`);
}

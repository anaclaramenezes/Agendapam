var valor = 0;

$(document).on("click", "#salvar", function(){
  var dados = {nome:$("#nome").val(), end:$("#endereco").val(), cel:$("#celular").val()};
  localStorage.setItem(valor, JSON.stringify(dados));
  valor++;
});

$(document).on("click", "#buscar", function(){
  var pessoa = JSON.parse(localStorage.getItem($("#identificador").val()));
  $("#nomeBusca").val(pessoa.nome);
  $("#enderecoBusca").val(pessoa.end);
  $("#celularBusca").val(pessoa.cel);
});

$(document).on("click", "#remover", function(){
  localStorage.removeItem($("#identificador").val());
LimparCampos();
});

function LimparCampos(){
  $("#nome").val("");
  $("#nomeBusca").val("");
  $("#identificador").val("");
}




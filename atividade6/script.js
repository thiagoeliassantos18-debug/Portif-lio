function site (){
    let nome;
    let result;
    let agora = Date;


    nome = prompt("Qual é o seu nome?");
    esult = window.document.getElementeByid('reultado');

    result.innerHTML = `<p>Olá .${nome}! é prazer te conhecer! <br>o sistema me enviou a seguinte infomação:</br> <mark>${agora}</mark> </p>`;
}
alert( " Boas vindas para esse site")
frontend = "front-end"
backend = "back-end"
React = "React"
Vue = "Vue"
Csharp = "C#"
tecnologia = "tecnologia"
opcao = "opcao"
sim = "sim"
nao = "não"
especificarLinguagem = "especificarLinguagem"



nome = prompt("Qual é o seu nome?");
//alert("Olá " + nome + " seja bem vindo ao site");
idade = prompt( `${nome} , qual sua idade ? `);
//alert(`Que bom ${nome} você tem ${idade} anos!`);
linguagem = prompt("Qual sua linguagem de programação favorita?");
alert(`Legal ${nome} você tem ${idade} anos e gosta de ${linguagem}!`);

qualLinguagem = prompt(`${nome}, você quer seguir para qual area ? Por Favor digite corretamente: front-end ou back-end ?`);


while (qualLinguagem !== frontend && qualLinguagem !== backend) {
    qualLinguagem = prompt("Por favor, digite corretamente: front-end ou back-end");
}

if (qualLinguagem === frontend) {
    especificarLinguagem = prompt("Qual linguagem você quer aprender? React ou Vue?");
    alert( `Legal ${nome} você escolheu ${especificarLinguagem}'!'`);
    }
    else if (qualLinguagem === backend) {
    especificarLinguagem = prompt("Qual linguagem você quer aprender? C# ou Java?");    
    alert(` Legal ${nome} você escolheu ${especificarLinguagem}!`);
}

if (frontend === especificarLinguagem) {
} escolha = prompt (`${nome}, você irá seguir se especializando em ${qualLinguagem} com ${especificarLinguagem} ? ou pretende virar um FullStack?`);
    alert(`Legal ${nome}! Boa sorte na sua jornada de ${ qualLinguagem} com ${especificarLinguagem}!`);

opcao = prompt("Você gostaria de especializar ou conhecer mais linguagens ?");
while (opcao !== sim && opcao !== nao) {
 } if (opcao === sim) {
        tecnologia = prompt("Quais linguagens ?");
        if (tecnologia === opcao) {
    }  prompt(`isso ai continue estudando ${tecnologia}, foi um prazer te conhecer.`);
}else if (opcao === nao) {
    alert(`Foi um Prazer te conhecer ${nome}!`);
}


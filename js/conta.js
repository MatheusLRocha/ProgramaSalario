const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("pre");

const descricoes = [];
const valores = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let salario = Number(frm.inSalario.value);
    const descConta = frm.inDescricao.value;
    const valorConta = Number(frm.inValor.value);

    descricoes.push(descConta);
    valores.push(valorConta);
    let listaConta = "";
    descricoes.forEach((descricao, i) => (listaConta += `Conta ${descricao} - R$${valores[i].toFixed(2)}\n`));
    valores.forEach(valor => salario = salario - valor);
    
    if (salario >= 0) {
        resp1.innerText = `Salário Atual R$: ${salario.toFixed(2)}`;
        resp2.innerText = listaConta;
    } else {
        alert("Salário zerado");
        resp1.innerText = `Salário Atual R$: ${salario.toFixed(2)}`
        resp1.classList = "fonte-vermelha";
        resp2.innerText = listaConta;
        return;
    }
    
})   

frm.addEventListener("reset", (e) => {
    frm.inSalario.focus();
})  

frm.btnApagar.addEventListener("click", () => {
    let salario = Number(frm.inSalario.value);
    const valorConta = Number(frm.inValor.value);
    let listaConta = "";

    descricoes.pop();
    valores.pop();
    descricoes.forEach((descricao, i) => (listaConta += `Conta ${descricao} - R$${valores[i].toFixed(2)}\n`));
    valores.forEach(valor => salario = salario - valor);
    
    resp1.innerText = `Salário Atual R$: ${salario.toFixed(2)}`;
    resp2.innerText = listaConta;
    
    frm.inValor.focus();
})
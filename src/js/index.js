const buttons = document.querySelectorAll(".buttons button")
const form = document.querySelector('#form')
const card = document.querySelector(".card")
const thankYou = document.querySelector(".thank-you")
const selecionado = document.querySelector('#selecionado')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const opcaoSelecionada = document.querySelector('.selected');
    if (opcaoSelecionada) {
        const opcaoConfirmada = opcaoSelecionada.textContent;
        
        card.classList.remove('ativo');
        thankYou.classList.add('ativo');
    
        selecionado.innerText = `You selected ${opcaoConfirmada} out of 5`;
    }
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selected')
        if (botaoSelecionado) removeSelected()
        button.classList.add('selected')
    })
})

function removeSelected() {
    return buttons.forEach((button) => button.classList.remove('selected')
)}
let itens_compra = 0
let quantidade_compra = 0


function carrinho_supermecado(clique){
    itens_compra+= 1  
    pdv()
}

function pdv(){
    const quantidade_itens = document.querySelector('#quantidade_itens')
    const itens_comprados = document.querySelector('#itens_comprados')


    quantidade_itens.innerText = quantidade_compra
    itens_comprados.innerText = itens_compra
}



function adicionaritens(){
    quantidade_compra+= 1
    
    pdv()
    const itens_cadastrados = document.querySelector('#itens_cadastrados')
    const compras = document.querySelector('#compras')
    const quanti = document.querySelector('#quanti')
    


    const adicionar = document.createElement('li')
    const sessao = document.createElement('span')
    const sessa = document.createElement('span')
    const botao = document.createElement('button')
    const botao1 = document.createElement('button')


    sessao.innerText = compras.value
    botao.innerText = 'Remover esse item'
    botao1.innerText = 'Marcar como Comprado'
    sessa.innerText = quanti.value

    


    botao.onclick = remover_botao
    botao1.onclick = carrinho_supermecado


    itens_cadastrados.appendChild(adicionar)
    adicionar.appendChild(sessao)
    adicionar.appendChild(sessa)
    adicionar.appendChild(botao)
    adicionar.appendChild(botao1)

    compras.value = ' '
    compras.focus()
     
    quanti.value = ' '
    compras.focus()

}

function remover_botao(clique){
    const item = clique.target.parentNode
    item.remove()
    quantidade_compra -= 1
    itens_compra -= 1
    pdv()

}

function main(){
    const botao_01 = document.querySelector('#botao_01')

    botao_01.addEventListener('click', adicionaritens)
    botao1.addEventListener('click', carrinho_supermecado)

}
main()

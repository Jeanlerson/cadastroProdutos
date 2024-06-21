const inputNomeProduto = document.querySelector('#nomeProduto')
const inputValorProduto = document.querySelector('#valorProduto')
const inputDescProduto = document.querySelector('#descProduto')
const buttonNewProduto = document.querySelector('#buttonCadastrar')
const tbody = document.querySelector('tbody')

function addTable() {
    let tr = document.createElement('tr')

    //NOME PRODUTO
    let newProduto = document.createElement('th')
    newProduto.innerHTML = inputNomeProduto.value

    tbody.appendChild(tr)
    tr.appendChild(newProduto)

    inputNomeProduto.value = ''

    //VALOR PRODUTO
    let newValor = document.createElement('th')
    let value = inputValorProduto.value
    newValor.innerHTML = `${value}$`

    tbody.appendChild(tr)
    tr.appendChild(newValor)

    inputValorProduto.value = ''
    inputDescProduto.value = ''

}

buttonNewProduto.addEventListener('click', addTable)
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')

let contatos = []
let numeros = []

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let nome = document.getElementById('input-nome')
    let tel = document.getElementById('input-tel')

    if(contatos.includes(nome.value) || numeros.includes(tel.value)) {
        alert("Contato ou número já cadastrado")
    } else {
        contatos.push(nome.value)
        numeros.push(tel.value)

        let linha = '<tr>'
        linha += `<td class="${contatos.length % 2 == 0 ? 'cinza1' : 'cinza2'}">${nome.value}</td>`
        linha += `<td class="${contatos.length % 2 == 1 ? 'cinza1' : 'cinza2'}">${tel.value}</td>`
        linha += '<tr>'

        tbody.innerHTML += linha
    }

    nome.value = ''
    tel.value = ''
})
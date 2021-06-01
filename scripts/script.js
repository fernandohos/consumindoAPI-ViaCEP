let cep = document.getElementById('p-cep')
let rua = document.getElementById('p-rua')
let bairro = document.getElementById('p-bairro')
let cidade = document.getElementById('p-cidade')
let estado = document.getElementById('p-estado')


const pesquisarCep = () => {
    const valorInputcep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${valorInputcep}/json/`
    fetch(url)
        .then(response => response.json())
        .then(endereco => {
            if (endereco.erro) {
                cep.innerHTML = "CEP não encontrado!";
            }
            else {
                cep.innerHTML = endereco.cep;
                rua.innerHTML = endereco.logradouro;
                bairro.innerHTML = endereco.bairro;
                cidade.innerHTML = endereco.localidade;
                estado.innerHTML = endereco.uf;
            }
        })
        .catch(err => { cep.innerHTML = "Ops, acho que você inseriu números a mais" })

}

function verificarTamanho(event) {
    let tamanho = event.target.value.length
    if (tamanho >= 8) {
        pesquisarCep()
    }
}

document.getElementById('cep')
    .addEventListener('input', verificarTamanho);


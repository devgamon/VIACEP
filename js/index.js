const btnSearch = document.querySelector('#search');
const inputCep = document.querySelector('#cep');

const logradouroContent = document.querySelector('.first_content');
const bairroContent = document.querySelector('.second_content');
const localidadeContent = document.querySelector('.third_content');
const ufContent = document.querySelector('.fourth_content');
const cepContent = document.querySelector('.fifth_content');

btnSearch.addEventListener('click', async(e) => {
    e.preventDefault();

    const cepVal = inputCep.value;
    visualizer(cepVal);
});

inputCep.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        const cepVal = e.target.value;
    
        visualizer(cepVal);
      }
});

const dadosAPI = async(cepVal) => {
    const url = `https://viacep.com.br/ws/${cepVal}/json/`;
    const res = await fetch(url);
    const data = await res.json();

    logradouroContent.innerText = data.logradouro;
    bairroContent.innerText = data.bairro;
    localidadeContent.innerText = data.localidade;
    ufContent.innerText = data.uf;
    cepContent.innerText = data.cep;
}

const visualizer = (cepVal) => {
    dadosAPI(cepVal);
}

const objeto = {
    userId: 1,
    title: 'Meu titulo',
    body:'Meu conteúdo'
};

const objetoAtualizado = {
    userId:2,
    title: 'Título atualizado',
    body: 'Conteúdo atualizado'
}

const atualizaTitulo = {
    title: 'Novo Título'
}

if (self.fetch){

    console.log('Tem suporte!');

    (async () => {
        const recebeDados = await obterPostagem(1);
        const incluiDados = await incluirPostagem(objeto);
        const atualizaDados = await atualizarPostagem(objetoAtualizado, 1);
        const atualizaElemento = await atualizarUmElementoDaPostagem(atualizaTitulo, 1);
        const deletaDados = await deletarPostagem(1);
        console.log(deletaDados);
    })()

} else{
    console.log('Não tem suporte!')
}

//Função criada para obter a resposta da minha API
async function obterResposta(resposta){
    if(!resposta.ok){
        throw new Error(
            `${resposta.status} - ${resposta.statusText}`
        );
    }

    const respostaConvertida = await resposta.json();
    return respostaConvertida;
}


//REQUISIÇÃO GET = obtem as informaçoes de uma API
async function obterPostagem(id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    
    return obterResposta(resposta);
}

//REQUISIÇÃO POST = inclui elementos na API
async function incluirPostagem(data){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }, 
    body: JSON.stringify(data)

    });

   return obterResposta(resposta);
}

//REQUISIÇÃO PUT = altera elementos na API
async function atualizarPostagem(data, id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
    
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }, 
    body: JSON.stringify(data)

    });

   return obterResposta(resposta);
}

//REQUISIÇÃO PATCH = indicado para alterar apenas um dos elementos na API;

async function atualizarUmElementoDaPostagem(data, id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
    
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }, 
    body: JSON.stringify(data)

    });

   return obterResposta(resposta);
}

//REQUISIÇÃO DELETE = deleta elementos na API;

async function deletarPostagem(id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
    
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }, 

    });

   return obterResposta(resposta);
}

const express = require('express'); // Importação do módulo express;
const app = express(); // Criação de uma instaância do express;
const usuarios = require('./usuarios.json'); //Importamos o arquivo usuarios.json


app.use(express.json()); //Configuramos o express para receber requisição no formato Json;

// GET => requisicao é responsável pelos dados que eu estou recebendo as rotas;
        // Resposta é responsável por enviar uma resposta para o front-end;

//POST => .body, ou seja o corpo da requisição;

//PUT => 

//PATH =>

//DELETE =>  Cria uma rota DELETE para /usuario/:id

//GET => Cria uma rota GET para /usurio
app.get('/usuario', (requisicao, resposta) => {

    resposta.status(404).json(usuarios); //Envia resposta para o Front-end;
})

//POST
app.post('/usario/', (requisicao, resposta) => {
    console.log(requisicao.body)
    const usuarios = requisicao.body;
    
    if (!usuario) {
        return respposta.status(400).json({mensagem:'Usuario não encontrado'})
    }

    // Adicionar o ativo por padrão;
    const usuarioParaAdicionar ={ ...usuario, ativo: usuario.idade > 18};

    // Adicionar o usario no banco de dados;
    usuarios.push(usuarioParaAdicionar);
    
    // Retornar o usuario adicionado;
    return resposta.status(201).json(usuarioParaAdicionar);

    
    

})

//DELETE => Cria uma rota DELETE para /usuario/:id
app.delete('/usuario/:id', (requisicao, resposta) => {
    
    const id = requisicao.params.id;
    
    
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === Number(id));

    // Se não encontrar o usuario, retorna mensagem de erro;
if (usuarioIndex < 0) {
    return resposta.status(404).json({mensagem: 'Usuario não encontrado'})
}

//Remover o usuario do banco de dados
usuarios.splice(usuarioIndex, 1);

//retornar o usuario removido
return resposta.status(204).send();

})


// Iniciando o servidor na porta 3000;
app.listen(3000, () => console>log('Servidor rodando na porta 3000 com express!'));






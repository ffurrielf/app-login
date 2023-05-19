// Importe as bibliotecas necessárias
// require('dotenv').config();
var ActiveDirectory = require('activedirectory');
// Cria uma nova instância de ActiveDirectory
var ad = new ActiveDirectory(config);

// Autentica
ad.authenticate(config.username, config.password, function(err, auth) {
    if (err) {
        console.log('ERRO: ' + JSON.stringify(err));
        return;
    }
    if (auth) {
        console.log('Autenticado!');
    }
    else {
        console.log('Falha na autenticação!');
    }
});
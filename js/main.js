let saldo = 100.5;
let nome = prompt('Qual é o seu nome?');
document.getElementById('welcomeMessage').innerText = 'Olá ' + nome + ', é um prazer ter você por aqui!';

function verSaldo() {
    let senha = prompt('Por favor, insira sua senha:');
    if (senha === '3589') {
        document.getElementById('result').innerText = 'Seu saldo atual é: R$ ' + saldo.toFixed(2);
    } else {
        alert('Senha incorreta. Tente novamente.');
        verSaldo();
    }
}

function verExtrato() {
    let senha = prompt('Por favor, insira sua senha:');
    if (senha === '3589') {
        let extrato = 'Extrato:\n' +
            '25/03 - PIX | Ilha do Camarão -> -150.00\n' +
            '26/03 - Débito | Cinemark -> -50.00\n' +
            '26/03 - Débito | Americanas -> -34.99\n' +
            '26/03 - Débito | BurguerKing -> -25.00\n' +
            '30/03 - Crédito | Uber -> -15.70\n' +
            '30/03 - PIX | Gabriel Augusto -> +10.00\n' +
            '31/03 - Crédito | Grupo Bem Barato -> -200.00\n' +
            '01/04 - PIX | Lojas Magazine Luiza -> -250.00\n' +
            '\nSaldo Atual: R$ ' + saldo.toFixed(2);
        document.getElementById('result').innerText = extrato;
    } else {
        alert('Senha incorreta. Tente novamente.');
        verExtrato();
    }
}

function fazerSaque() {
    let senha = prompt('Por favor, insira sua senha:');
    if (senha === '3589') {
        let saque = parseFloat(prompt('Qual o valor para saque?'));
        if (isNaN(saque) || saque <= 0) {
            alert('Operação não autorizada. Valor inválido.');
        } else if (saque > saldo) {
            alert('Operação não autorizada. Saldo insuficiente.');
        } else {
            saldo -= saque;
            document.getElementById('result').innerText = 'Saque realizado com sucesso. Novo saldo: R$ ' + saldo.toFixed(2);
        }
    } else {
        alert('Senha incorreta. Tente novamente.');
        fazerSaque();
    }
}

function fazerDeposito() {
    let senha = prompt('Por favor, insira sua senha:');
    if (senha === '3589') {
        let deposito = parseFloat(prompt('Qual o valor para depósito?'));
        if (isNaN(deposito) || deposito <= 0) {
            alert('Operação não autorizada. Valor inválido.');
        } else {
            saldo += deposito;
            document.getElementById('result').innerText = 'Depósito realizado com sucesso. Novo saldo: R$ ' + saldo.toFixed(2);
        }
    } else {
        alert('Senha incorreta. Tente novamente.');
        fazerDeposito();
    }
}

function fazerTransferencia() {
    let senha = prompt('Por favor, insira sua senha:');
    if (senha === '3589') {
        let conta = prompt('Informe o número da conta:');
        let transferencia = parseFloat(prompt('Qual o valor a ser transferido?'));
        if (isNaN(transferencia) || transferencia <= 0) {
            alert('Operação não autorizada. Valor inválido.');
        } else if (transferencia > saldo) {
            alert('Operação não autorizada. Saldo insuficiente.');
        } else {
            saldo -= transferencia;
            document.getElementById('result').innerText = 'Transferência realizada com sucesso. Novo saldo: R$ ' + saldo.toFixed(2);
        }
    } else {
        alert('Senha incorreta. Tente novamente.');
        fazerTransferencia();
    }
}

function sair() {
    let confirmacao = confirm(nome + ', foi um prazer ter você por aqui!\nDeseja sair?');
    if (confirmacao) {
        window.close();
    }
}

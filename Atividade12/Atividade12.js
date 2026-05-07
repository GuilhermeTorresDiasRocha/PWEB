//1)
function Retangulo(x, y){
            this.larg = x;
            this.alt = y;
            this.calcArea = function(){
                return this.alt * this.larg;
            }
        }

ret1 = new Retangulo(3,4);

alert(ret1.calcArea());

//2)
class ContaBancaria{
    constructor(){
        this.nome;
        this.banco;
        this.numConta;
        this.saldo;
    }

    setNome(n){
        this.nome = n;
    }

    setBanco(b){
        this.banco = b;
    }

    setNumConta(nc){
        this.numConta = nc;
    }

    setSaldo(s){
        this.saldo = s;
    }

    getNome(n){
        return this.nome;
    }

    getBanco(b){
        return this.banco;
    }

    getNumConta(nc){
        return this.numConta;
    }

    getSaldo(s){
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(){
        super();
        this.SaldoEspecial;
    }

    setSaldoEspecial(se){
        this.SaldoEspecial = se;
    }

    getSaldoEspecial(se){
        return this.SaldoEspecial;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }

    setJuros(j){
        this.juros = j / 100;
    }

    getJuros(j){
        return this.juros * 100;
    }

    setDataVencimento(dv){
        this.dataVencimento = dv;
    }

    getDataVencimento(dv){
        return this.dataVencimento;
    }
}

let cc = new ContaCorrente();

cc.setBanco("Banko de lo Brazil");
cc.setNome("Juvenal");
cc.setNumConta(1);
cc.setSaldo(1000);
cc.setSaldoEspecial(500);

let cp = new ContaPoupanca();
cp.setBanco("Itál");
cp.setNome("Roberval");
cp.setNumConta(2);
cp.setSaldo(2000);
cp.setJuros(2.5);
cp.setDataVencimento("01/05/2030");

alert(`Conta Corrente:
    \tBanco: ${cc.getBanco()}
    \tNome: ${cc.getNome()}
    \tNumero Conta: ${cc.getNumConta()}
    \tSaldo: ${cc.getSaldo()}
    \tSaldo Especial: ${cc.getSaldoEspecial()}`);

alert(`Conta Poupanca:
    \tBanco: ${cp.getBanco()}
    \tNome: ${cp.getNome()}
    \tNumero Conta: ${cp.getNumConta()}
    \tSaldo: ${cp.getSaldo()}
    \tJuros: ${cp.getJuros()}
    \tData Vencimento: ${cp.getDataVencimento()}`);

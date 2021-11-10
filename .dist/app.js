"use strict";
class Computador {
    constructor(processador, ram, armazenamento, indLigado) {
        this.indLigado = false;
        this.processador = processador;
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.indLigado = indLigado;
    }
    ligarComputador() {
        this.indLigado = true;
    }
    instalarGame(game) {
        if (!this.games) {
            this.games = [game];
            return;
        }
        this.games.push(game);
    }
    listarGames() {
        if (!this.games) {
            console.log('Sem jogos instalados.');
        }
        else
            for (let game of this.games) {
                console.log(game);
            }
    }
    resumoComputador() {
        let onOff;
        if (this.indLigado == true) {
            onOff = 'ligado';
        }
        else {
            onOff = 'desligado';
        }
        let arm;
        if (this.armazenamento == 'H') {
            arm = 'HD';
        }
        else if (this.armazenamento == 'S') {
            arm = 'SSD';
        }
        else if (this.armazenamento == 'B') {
            arm = 'B';
        }
        return `Processador ${this.processador}, ${this.ram} GB de RAM, está ${onOff}, armazenamento ${arm}`;
    }
    rodarGame(game) {
        if (this.games.includes(game)) {
            return true;
        }
        else
            false;
    }
}
var Armazenamento;
(function (Armazenamento) {
    Armazenamento["hd"] = "H";
    Armazenamento["ssd"] = "S";
    Armazenamento["hibrido"] = "B";
})(Armazenamento || (Armazenamento = {}));
class Quadrado {
    constructor(largura) {
        this.largura = largura;
    }
    calcularArea() {
        return this.largura * this.largura;
    }
    calcularPerimetro() {
        return this.largura * 4;
    }
}
class Retangulo extends Quadrado {
    constructor(altura, largura) {
        super(largura);
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * super.largura;
    }
}
class Prisma extends Retangulo {
    constructor(profundidade, altura, largura) {
        super(altura, largura);
        this.profundidade = profundidade;
    }
    calcularVolume() {
        return super.calcularArea() * this.profundidade;
    }
}

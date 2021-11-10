class Computador {
   processador: string;
   ram: number;
   armazenamento: Armazenamento;
   indLigado: boolean = false;
   games: string[];

   constructor(processador: string, ram: number, armazenamento: Armazenamento, indLigado: boolean) {
      this.processador = processador;
      this.ram = ram;
      this.armazenamento = armazenamento;
      this.indLigado = indLigado;
   }

   ligarComputador(): void {
      this.indLigado = true;
   }
   instalarGame(game: string): void {
      if (!this.games) {
         this.games = [game];
         return;
      }
      this.games.push(game);
   }
   listarGames(): void {
      if (!this.games) {
         console.log('Sem jogos instalados.');
      } else
         for (let game of this.games) {
            console.log(game);
         }
   }
   resumoComputador(): string {
      let onOff: string;
      if (this.indLigado == true) {
         onOff = 'ligado';
      } else {
         onOff = 'desligado';
      }
      let arm: string;
      if (this.armazenamento == 'H') {
         arm = 'HD';
      } else if (this.armazenamento == 'S') {
         arm = 'SSD';
      } else if (this.armazenamento == 'B') {
         arm = 'B';
      }
      return `Processador ${this.processador}, ${this.ram} GB de RAM, está ${onOff}, armazenamento ${arm}`;
   }
   rodarGame(game: string): boolean {
      if (this.games.includes(game)) {
         return true;
      } else false;
   }
}

enum Armazenamento {
   hd = 'H',
   ssd = 'S',
   hibrido = 'B',
}

class Quadrado {
   largura: number;

   constructor(largura: number) {
      this.largura = largura;
   }

   calcularArea(): number {
      return this.largura * this.largura;
   }

   calcularPerimetro(): number {
      return this.largura * 4;
   }
}

class Retangulo extends Quadrado {
   altura: number;

   constructor(altura: number, largura: number) {
      super(largura);
      this.altura = altura;
   }

   calcularArea(): number {
      return this.altura * this.largura;
   }
}

class Prisma extends Retangulo {
   profundidade: number;

   constructor(profundidade: number, altura: number, largura: number) {
      super(altura, largura);
      this.profundidade = profundidade;
   }

   calcularVolume(): number {
      return super.calcularArea() * this.profundidade;
   }
}

class Ingresso {
   atracao: string;
   private preco: number;
   protected checkIn: boolean;

   constructor() {
      this.atracao = 'pula-pula';
      this.preco = 10;
      this.checkIn = false;
   }

   informaPreco() {
      console.log(`${this.atracao} - R$${this.preco}`);
   }

   valorIngresso() {
      return this.preco;
   }

   alterarValorIngresso(numb: number) {
      this.preco = this.valorIngresso() * numb;
   }
}

class IngressoVip extends Ingresso {
   constructor() {
      super();
      this.alterarValorIngresso(2);
   }

   informaPreco() {
      console.log(`[ingresso VIP] ${this.atracao} - ${this.valorIngresso()}`);
   }
}

class Camarote extends Ingresso {
   numeroConvidados: number;

   constructor(convidados: number) {
      super();
      this.numeroConvidados = convidados;
      this.alterarValorIngresso(5);
   }

   informaPreco() {
      console.log(`O rei do camarote convida ${this.numeroConvidados}, no valor de ${this.valorIngresso()}`);
   }
}

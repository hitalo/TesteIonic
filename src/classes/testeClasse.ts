


export class TesteClasse {

  public idade: number = 25;

  constructor(public nome: String) {}

  setIdade(idade: number) {
    this.idade = idade;
  }

  getIdade() {
    return this.idade;
  }

  setNome(nome: String) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

}

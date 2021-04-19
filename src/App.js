import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ['Trabalho', 'Esportes'],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };

    this.setState(novoEstado)
  }

  apagarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias =  [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias:novoArrayCategorias };
    this.setState(novoEstado);
  }

  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro
            categorias={this.state.categorias} 
            criarNota={this.criarNota.bind(this)}
          />
          <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={this.state.categorias}
              adicionarCategoria={this.adicionarCategoria.bind(this)}
            />
            <ListaDeNotas 
              apagarNota={this.apagarNota.bind(this)}
              notas={this.state.notas}
            />
          </main>
        </section>
      );
  }
}

export default App;

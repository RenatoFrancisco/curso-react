import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro
            categorias={this.categorias.categorias} 
            criarNota={this.notas.criarNota}
          />
          <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={this.categorias.categorias}
              adicionarCategoria={this.categorias.adicionarCategoria}
            />
            <ListaDeNotas 
              apagarNota={this.notas.apagarNota}
              notas={this.notas.notas}
            />
          </main>
        </section>
      );
  }
}

export default App;

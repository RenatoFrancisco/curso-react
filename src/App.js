import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas:[]
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

  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas 
            apagarNota={this.apagarNota.bind(this)}
            notas={this.state.notas}
          />
        </section>
      );
  }
}

export default App;

import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';

class ListaDeNotas extends Component {

    render() {
        return (
            <ul className='lista-notas'>
                {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => {
                    return (
                        <li className="lista-notas" key={index}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })}
             </ul>
        );
    }
}

export default ListaDeNotas;
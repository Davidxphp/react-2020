import React from 'react';

// compomentes funcional

function App(props) {
  
  const modificarNome = event => {
    console.log(event.target.value)
  }
  const criaComboBox = () => {
    const opcoes = [ "David", "Rose", "Bela", "Raquel"]
    const criaComboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return (
      <select>
        { criaComboBoxOpcoes }
      </select>
    )
  }

    
    const MeuComboBox = () => criaComboBox()

    return ( 
      <>
        <input className="text-centralizado" type="text" value={props.nome} onChange={ modificarNome }/>
        {/* <h1>Hello { state.nome }</h1> */}

        <h1>Hello { props.nome } sua idade é {props.idade}</h1>
        <MeuComboBox />
      </>
    )  
  
}

export default App;



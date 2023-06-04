import { useState } from "react";
import "./app.css"
import Nome from "./services/Nome";
import { NomeProps } from "./types";
import Input from "./components/input";
import Botao from "./components/botao";
import Borda from "./components/borda";
import styled from "styled-components";

function App() {
  const [nome, setNome] = useState("");
  const [response, setResponse] = useState({} as NomeProps);

  function obter() {
    Nome.get(nome)
      .then(r => setResponse(r[0]));
  }
  console.log(response);

  return (
    <div>
      <MolduraSld>
        <PesquisaSld>
          <Input placeholder="primeiro nome" value={nome} onchange={(e: any) => setNome(e.target.value)} />
          <Botao onclick={obter} titulo="Obter" />
        </PesquisaSld>
        <TextoSld>Nome: {response.nome}</TextoSld>
        {response.res && response.res.map((resposta) => (
          <TextoSld>{resposta.periodo}: {resposta.frequencia}</TextoSld>
        )
        )}
      </MolduraSld>
    </div>
  );
}

export default App;
const PesquisaSld = styled.div`
display: grid;
grid-template-columns: 400px 70px;
gap: 10px;
padding-left: 50px ;
padding-bottom: 15px ;

`
const TextoSld = styled.span`
color: #de6113;
padding: 1.5px;
text-align: left;
padding-left: 50px ;
`

const MolduraSld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #61dafb;
  border-radius: 5px;
  width: 600px;
  margin: auto;
  margin-top: 100px;
`

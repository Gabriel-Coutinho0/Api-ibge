import styled from "styled-components";

const Botao = ({onclick,titulo}: any) => {
    return ( 
        <BotaoSld onClick={onclick}>{titulo}</BotaoSld>
     );
}
 
export default Botao;

const BotaoSld = styled.button`
border-radius: 5px;
border: none;
padding: 6px 15px;
color: #363636;
background-color: #61dafb

`
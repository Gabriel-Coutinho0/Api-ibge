import styled from "styled-components";

const Input = ({value, onchange,placeholder}: any) => {
    return (  
        <InputSld placeholder={placeholder} value={value} onChange={onchange} />
    );
}
 
export default Input;

const InputSld = styled.input`
border-radius: 5px;
border: none;
padding: 6px 15px;


`
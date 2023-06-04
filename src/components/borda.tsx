import styled from "styled-components";

const Borda = ({ children }: any) => {
    return (
        <DivSld>
            {children}
        </DivSld>
    );
}

export default Borda;

const DivSld = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vh;
height: 100vw;
border: 2px solid #61dafb

`
import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
height: 100vh;

`;

export const Content = styled.div`
gap: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
box-shadow: 0 1px 2px #0003;
background-color: #ffff;
border-radius: 5px;
padding: 20px;
max-width: 350px;
`;

export const Label = styled.label`
font-size: 16px;
font-weight: 600;
color: #676767;
`;

export const LabelSignup = styled.label`
fonte-size: 16px;
color: #676767;
`;
export const LabelSignin = styled.label`
fonte-size: 16px;
color: #676767;
`;

export const labelErro = styled.label`
fonte-size: 14px;
color: red;
`;

export const Strong = styled.strong`
cursor: pointer;

a{
    text-decoration: none;
    color:#046ee5
`;
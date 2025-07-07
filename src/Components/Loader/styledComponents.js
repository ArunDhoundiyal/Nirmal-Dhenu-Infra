import styled, {keyframes} from 'styled-components';

const loadigImgRotate = keyframes`
0%{
    transform:scale(1) rotateY(0deg) translateY(20px);
}
100%{
    transform:scale(1.3) rotateY(360deg) translateY(0px);
}
`;

export const LoaderBgContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
background-size:cover;
background-position:center;
background-color: #ffffff;
color: #c84241;
font-weight:bold;
font-size:18px;
font-style: italic;
`;

export const Img = styled.img`
height:200px;
animation-name: ${loadigImgRotate};
animation-duration:1s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-fill-mode: both;
animation-direction:alternate;
`;
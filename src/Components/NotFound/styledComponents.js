import styled from 'styled-components';
import { MdKeyboardBackspace } from "react-icons/md";

export const BackArrowIcon = styled(MdKeyboardBackspace)`
margin-right:4px;
`;

export const NotFoundBgContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
background-size:cover;
background-color: #ffffff;
`;

export const NotFoundContainer = styled.div`
height:calc(100vh - 100px);
margin-top:100px;
width:900px;
position:relative;
@media screen and (max-width:1000px){
width:80%;
}
@media screen and (max-width:600px){
width:100%;
}
`;


export const NotFoundImgContainer = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:88%;
`
export const ButtonContainer = styled.div`
position:absolute;
bottom:0;
left:0;
width:100%;
height:12%;
`

export const Img = styled.img`
object-fit:fill;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
`;

export const BackButton = styled.button`
position:absolute;
transform:translate(-50%, -50%);
top:25%;
left:50%;
height:60px;
width:300px;
background-color: #2a491d;
transition:background-color 0.2s ease-in-out;
&:hover{
background-color: #C84241;
bc}
color: #ffffff;
font-weight:500;
font-size:20px;
border:none;
border-radius:6px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
cursor:pointer;
@media screen and (max-width:800px){
width:220px;
font-size:16px;
}
@media screen and (max-width:550px){
height:50px;
}
@media screen and (max-width:400px){
width:180px;
font-size:12px;
height:50px;
}
@media screen and (max-width:400px){
width:150px;
font-size:10px;
height:50px;
}
`






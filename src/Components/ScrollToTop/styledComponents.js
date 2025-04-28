import styled, {keyframes} from 'styled-components';
import { FaArrowUpLong } from "react-icons/fa6";

const bounce = keyframes`
0%,100%{
transform:translateY(5px);
}
50%{
transform:translateY(-5px);
}
`

export const ArrowIcon = styled(FaArrowUpLong)`
font-size:20px;
animation-name:${bounce};
animation-duration:1.5s;
animation-iteration-count:infinite;
animation-timing-function:ease-in-out;
`


export const ScrollToTopButton = styled.button`
border:none;
background-color: #C84241;
color: #ffffff;
height:50px;
width:50px;
border-radius:50%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
position:fixed;
bottom:80px;
right:30px;
cursor:pointer;
z-index:1;
`

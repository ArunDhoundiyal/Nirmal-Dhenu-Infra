import styled from 'styled-components';
import { RxCross2 } from "react-icons/rx";
export const ProjectContainer = styled.ul`
@media screen and (max-width:600px){
display:none;
}
@media screen and (min-width:601px){
list-style-type:none;
border:solid 1px #c0c0c0;
background-color:#ffffff;
height:140px;
width:150px;
border-radius:8px;
display:flex;
flex-direction:column;  
justify-content:space-around;
text-align:center;
z-index:1;
position:fixed;
top:105px;
right:190px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`

export const ProjectListItem = styled.div`
text-align:center;
`

export const ProjectItem = styled.li`
position:relative;
cursor:pointer;
display:inline-block;
padding-bottom:4px;
&::after{
position:absolute;
height:2px;
content:"";
background-color:#c84241;
bottom:0;
left:0;
width:0%;
transition-property:width;
transition-duration:0.25s;
transition-timing-function:ease;
}
&:hover::after{
width:100%;
}
&:hover{
color:#c84241;
font-weight:bold;
}
`

export const CrossIcon = styled(RxCross2)`
position:absolute;
right:8px;
top:8px;
cursor:pointer;
`
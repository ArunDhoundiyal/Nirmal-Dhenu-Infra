import styled, {keyframes} from "styled-components";
import {Link} from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* Because we have two spans now */
  }
`;

export const FlashHeadLineContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  height:25px;
  width: 100%;
  background-color: #c84241;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  overflow: hidden;
  z-index:2;
`;

export const HeadLine = styled.div`
  display: inline-flex;

  white-space: nowrap;
  animation: ${infiniteScroll} 30s linear infinite;
  cursor: pointer;
  span {
    padding-right: 100px; 
  }
  &:hover {
    animation-play-state: paused;
  }
`;

export const AnchorTag = styled.a`
text-decoration:none;
color:inherit;
`;

export const StyledLink = styled(Link)`
text-decoration:none;
color:inherit;
`;
export const HeaderComponents = styled.header`
position:fixed;
top:25px;  
width:100%;
background-color: #2A491D;
height:100px;
z-index:2;
`;



export const Navbar = styled.nav`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
height:100%;
`

export const CompanyLogo = styled.img`
height:125px;
margin-left:20px;
`

export const MenuIcon = styled(GiHamburgerMenu)`
@media screen and (min-width:701px){
display:none
}
@media screen and (max-width:700px){
display:block;
color: #ffffff;
font-size:30px;
margin-right:20px;
cursor:pointer;
}
`
export const CloseMenuIcon = styled(ImCross)`
@media screen and (min-width:701px){
display:none
}
@media screen and (max-width:700px){
display:block;
color: #ffffff;
font-size:25px;
margin-right:20px;
cursor:pointer;
}
`

export const NavListItems = styled.ul`
@media screen and (min-width:701px){
display:flex;
flex-direction: row;
margin-right:20px;
list-style-type:none;
}
@media screen and (max-width:700px){
display:none;
}
`

export const SideBarContainer = styled.div`
@media screen and (min-width:701px){
display:none;
}
@media screen and (max-width:700px){
position:fixed;
top:100px;
right:0;
height:100%;
width:80%;
background-color: #2A491D;
display:flex;
flex-direction:column;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
overflow:auto;
}
`

export const SmallScreenNavListItems = styled.ul`
@media screen and (min-width:701px){
display:none;
}
@media screen and (max-width:700px){
display:flex;
flex-direction:column;
background-color: #2A491D;
// border:solid 1px red;
right:0;
width:100%;
z-index:2;
`

export const NavItems = styled.li`
@media screen and (max-width:700px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:12px;   
cursor:pointer;
color: #ffffff;
background-color: ${({onactive})=>onactive?' #c84241':' #2A491D'};
font-weight:${({onactive})=>onactive?'bold':'normal'};
position:relative;
&:hover{
background-color: #c84241;
}
}
@media screen and (min-width:701px){
color: ${({onactive})=>onactive?' #c84241':' #ffffff'};
font-weight:bold;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding:12px;   
cursor:pointer;
position:relative;
&::after{
bottom:0;
left:0;
width:${({onactive})=>onactive?'100%':'0%'};
height:3px;
position:absolute;
content:'';
background-color: #c84241;
transition-property:width;
transition-duration:0.50s;
transition-timing-function:ease;
}
&:hover::after{
width:100%;
}
&:hover{
color: #c84241;
font-weight:bold;
}
}
`;


export const NirmalDhenuCompanyLogoContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
`;

export const CompanyName = styled.h1`
color:#ffffff;
font-size:16px;
`

export const Description = styled.p`
color:#ffffff;
font-size:12px;
`

export const NirmalDhenuCompanyLogo = styled.img`
  height: 200px;
`;
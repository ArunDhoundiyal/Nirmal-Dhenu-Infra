import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const HeaderComponents = styled.header`
position:fixed;
top:0;  
width:100%;
background-color:#2A491D;
height:100px;
z-index:2;
`

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
@media screen and (min-width:601px){
display:none
}
@media screen and (max-width:600px){
display:block;
color:#555555;
font-size:30px;
margin-right:20px;
cursor:pointer;
}
`
export const CloseMenuIcon = styled(ImCross)`
@media screen and (min-width:601px){
display:none
}
@media screen and (max-width:600px){
display:block;
color:#555555;
font-size:25px;
margin-right:20px;
cursor:pointer;
}
`

export const NavListItems = styled.ul`
@media screen and (min-width:601px){
display:flex;
flex-direciton:row;
margin-right:20px;
list-style-type:none;
}
@media screen and (max-width:600px){
display:none;
}
`
export const SmallScreenNavListItemsContainer = styled.div`
@media screen and (min-width:601px){
display:none;
}
@media screen and (max-width:600px){
display:flex;
flex-direction:column;
background-color:#ffffff;
position:fixed;
top:100px;
height:100%;
right:0;
width:100%;
z-index:1;
background-color:rgba(71, 118, 38, 1);
}
`
export const SmallScreenNavListItems = styled.ul`
@media screen and (min-width:601px){
display:none;
}
@media screen and (max-width:600px){
display:flex;
flex-direction:column;
background-color:#ffffff;
position:fixed;
top:100px;
height:100%;
right:0;
width:80%;
z-index:2;
`

export const NavItems = styled.li`
@media screen and (max-width:600px){
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding:12px;   
cursor:pointer;

}
@media screen and (min-width:601px){
color:#ffffff;
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
width:0%;
height:3px;
position:absolute;
content:'';
background-color:#c84241;
transition-property:width;
transition-duration:0.50s;
transition-timing-function:ease;
}
&:hover::after{
width:100%;
}
&:hover{
color:#c84241;
font-weight:bold;
}
}

color:${(props)=>props.onactive ? "#c84241" : 'inherit'};
font-weight:${(props)=>props.onactive ? "bold" : 'normal'};
`

export const ArrowIcon = styled(IoIosArrowDown)`
  transform: ${({ onactive }) => (onactive ? "rotate(180deg)" : "rotate(0deg)")};
  transition-propert:transfrom;
  transition-duration:0.6s;
  transition-timing-function:ease-in-out;
`
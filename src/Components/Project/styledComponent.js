import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

export const NavigateLinkIcon = styled(FaExternalLinkAlt)``;

export const ProjectBgContainer = styled.div`
display:flex;
flex-direction:column;
background-size:cover;
min-height:100vh;
background-color: #ffffff;
`;

export const ProjectBannerContainer = styled.div`
margin-top:125px;
  height: 50vh;
  width:100%;
  position:relative;
  overflow:auto;
`

export const ProjectTagLineContainer = styled.div`
position:absolute;
left:0;
top:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
padding:20px;
background-color: rgba(0, 0, 0, 0.4);
overflow:auto;
`;

export const ProjectImageBanner = styled.img`
position:absolute;
left:0;
top:0;
width:100%;
height:100%;
object-fit:cover;
`

export const ProjectTagLine = styled.h1`
color: #ffffff;
font-size:50px;
@media screen and (max-width:1000px){
font-size:40px;
}
@media screen and (max-width:600px){
font-size:30px;
}
@media screen and (max-width:500px){
font-size:20px;
}
`;

export const ProjectTagLineDescription = styled.p`
color: #ffffff;
font-size:30px;
@media screen and (max-width:1000px){
font-size:25px;
}
@media screen and (max-width:600px){
font-size:20px;
}
@media screen and (max-width:500px){
font-size:15px;
}
`;


export const ProjectContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
padding:8px;
width:90%;
margin:50px;
margin:auto;
`;

export const ProjectHeading = styled.h1`
color: #c84241;
font-size:30px;
text-align:center;
font-weight:bold;
margin:18px;
@media screen and (max-width:750px){
font-size:22px;
}
`;

export const ProjectDescription = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`

export const DisplayProjectImagesContainer = styled.div`
display:flex;
flex-direction:column;
`;

export const ProjectImagesContainer = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
list-style-type: none;
padding: 0;
margin: 0;
`;

export const HoverNavigateContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
text-align: center;
position:absolute;
top:0;
left:0;   
width: 100%;
height: 100%;
color:#ffffff;
background-color: rgba(0, 0, 0, 0.4);
z-index:1;
`

export const ProjectImageItem = styled.li`
height: 300px;
flex-grow:1;
flex-shrink:1;
flex-basis: 300px;
position: relative;
overflow:hidden;
margin:20px;
cursor:pointer;
border-radius:12px;
transform:translateY(0) scale(1);
transition-property:transform;
transition-duration:0.50s;
transition-timing-function:ease-in-out;
&:hover{
transform:translateY(-15px) scale(1.05);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`;

export const ProjectImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position:absolute;
top:0;
left:0;
`;

export const Location = styled.h1`
color: #ffffff;
font-weight:500;
`

export const ReadMoreButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
border:none;
background-color:transparent;
color: #ffffff;
gap:8px;
font-size:20px;
cursor:pointer;
`






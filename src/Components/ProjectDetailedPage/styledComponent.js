import styled from "styled-components";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";

export const BackArrowIcon = styled(MdKeyboardBackspace)`
font-size:30px;
margin-right:4px;
@media screen and (max-width:750px){
font-size:20px;
  }
`;


export const ProjectDetailedPageBgContainer = styled.div`
display:flex;
flex-direction:column;
background-size:cover;
min-height:100vh;
background-color: #ffffff;
`;

export const ProjectDetailedContainer = styled.div`
margin-top:100px;
height:calc(100% - 100px);  
padding:12px;
`;

export const ComingSoonMsgContainer = styled.div`
margin-top:100px;
height:calc(100vh - 100px);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:28px;
`;

export const CompanyLogoContainer = styled.div`
height:300px;
width:250px;
position:relative;
@media screen and (max-width:750px){
height:200px;
width:150px;
position:relative;
}

`;

export const Img = styled.img`
object-fit:fill;
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
`;

export const BackButton = styled.button`
height:50px;
width:150px;
font-size:20px;
font-weight:bold;
border:solid 4px #2a491d;
color: #2a491d;
background-color:transparent;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
border-radius:8px;
transform:scale(1);
transition:background-color 0.2s ease-in-out, 
transform 0.2s ease-in-out,
color 0.2s ease-in-out, 
border-color 0.2s ease-in-out;

&:hover{
background-color: #c84241;
color: #ffffff;
border-color: #c84241;
transform:scale(1.2);
}

@media screen and (max-width:750px){
height:50px;
width:100px;
font-size:15px;
  }
`;


export const ComingSoonHeading = styled.h1`
  font-size: 50px;
  color: #2a491d;
  position: relative;
  @media screen and (max-width:750px){
  font-size:25px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 6px;
    background-color: #c84241;
  }
`;

export const ComingSoonMsg = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:20px;
@media screen and (max-width:750px){
font-size:12px;
}
`;

export const ComingSoonSpan = styled.span`
color: #c84241;
`;
export const BoldSpan = styled.span`
font-weight:600;
`;

export const ProjectDetail = styled.div`
display:flex;
height:500px;
`;

export const ProjectImageContainer = styled.div`
width:600px;   
height:100%;
position:relative;
@media screen and (max-width:1000px){
width:100%;
height:500px;
}
`;


export const DisplayProjectImageContainer = styled.div`
height:396px;
width:100%;
position:absolute;
top:0;
left:0;
`;

export const LeftArrowButton= styled(FaRegArrowAltCircleLeft)`
z-index:1;
position:absolute;
top:50%;
left:20px;
font-size:30px;
color: #ffffff;
cursor:pointer;
transform:scale(1);
visibility:hidden;
opacity:0;
transition-property:transform visibility opacity;
transition-duration:0.50s;
transition-timing-function:ease-in-out;

${DisplayProjectImageContainer}:hover & {
    opacity: 1;
    visibility: visible;
}
&:hover{
transform:scale(1.6);
}
`;
export const RightArrowButton = styled(FaRegArrowAltCircleRight)`
z-index:1;
position:absolute;
top:50%;
right:20px;
font-size:30px;
color: #ffffff;
cursor:pointer;
transform:scale(1);
visibility:hidden;
opacity:0;
transition-property:transform visibility opacity;
transition-duration:0.50s;
transition-timing-function:ease-in-out;

${DisplayProjectImageContainer}:hover & {
    opacity: 1;
    visibility: visible;
}
&:hover{
transform:scale(1.6);
}
`;


export const DisplayProjectCarusalImg = styled.img`
object-fit:${({isactive})=> isactive?'contain':'fill'};
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
`;

export const ProjectImageCarausalContainer = styled.ul`
position:absolute;
top:400px;
left:0;
width:100%;
height:calc(100% - 400px);
overflow-x:auto;
list-style-type:none;
display:flex;
gap:4px;
`;

export const ProjectImageCarausalListItem = styled.li`
height:100%;
width: 200px;
position:relative;
cursor:pointer;
flex-grow:1;
flex-shrink:1;
`;

export const ProjectCarausalImg = styled.img`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
object-fit:fill;   
`;

export const ProjectDetailContentContainer = styled.div`
width:calc(100% - 600px);
overflow:auto;
display:flex;
flex-direction:column;
padding:18px;
@media screen and (max-width:1000px){
display:none;
}
`
;

export const ProjectDetailContentCon = styled.div`
@media screen and (max-width:1000px){
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin-top:16px;
}
@media screen and (min-width:1001px){
display:none;
}
`;

export const MainHeading = styled.h1`
text-align:center;
color: #2a491d;
font-size:20px;
font-weight:500;
@media screen and (max-width:500px){
text-align:center;
color: #2a491d;
font-size:16px;
font-weight:500;
}
`;
export const StyleLocation = styled.span`
color: #c84241;
font-weight:bold;
`;
export const Description = styled.p`
font-size:15px;
font-weight:400;
color: #555555;
margin-top:8px;
@media screen and (max-width:500px){
font-size:12px;
}
`;
export const ProjectHeading = styled.h2`
text-align:left;
color: #2a491d;
font-weight:500;
font-size:18px;
margin-top:8px;
@media screen and (max-width:500px){
text-align:left;
color: #2a491d;
font-size:16px;
font-weight:500;
margin-top:8px;
}
`;
export const ProjectHightLightContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
margin-top:8px;
`;
export const ProjectHightLightItem = styled.li`
position:relative;
`;
export const HightLightItem = styled.p`
font-size:15px;
font-weight:400;
color: #555555;
@media screen and (max-width:500px){
font-size:12px;
}
`;

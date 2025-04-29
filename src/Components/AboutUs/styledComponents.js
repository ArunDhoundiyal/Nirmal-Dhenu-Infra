import styled from "styled-components";

export const AboutUsBgConatiner = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
background-size:cover;
`

export const AboutUsBanner = styled.div`
margin-top:125px;
  height: 50vh;
  width:100%;
  position:relative;
  overflow:auto;
`;

export const AboutUsTagLineContainer = styled.div`
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

export const AboutUsTagLine = styled.h1`
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

export const AboutUsTagLineDescription = styled.p`
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

export const AboutUsImageBanner = styled.img`
position:absolute;
left:0;
top:0;
width:100%;
height:100%;
object-fit:cover;
`

export const HomeAboutUsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:8px;
width:90%;
margin:50px;
margin:auto;
`

export const HomeAboutUsHeading = styled.h1`
color: #c84241;
font-size:30px;
font-weight:bold;
margin:8px;
@media screen and (max-width:750px){
font-size:22px;
}
`

export const HomeAboutUsNirmalDhenu = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`

export const StytleSpan = styled.span`
color:#c84241;
`

export const HomeAboutUsDescription = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`

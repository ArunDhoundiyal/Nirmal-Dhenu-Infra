import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export const GalleryBgContainer = styled.div`
min-height:100vh;
background-size:cover;
position:relative;
`;

export const DisplayGalleryContainer = styled.div`
height:100%;
margin-left:20px;
margin-top:30px;
margin-right:20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-auto-rows: 10px;
gap: 20px;

`;

export const GalleryImageContainer = styled.div`
cursor:pointer;
padding: 20px;
box-sizing: border-box;
border-radius: 18px;
transform:translateY(0);
transition-property:transform;
transition-duration:0.3s;
transition-timing-function:ease-in-out;
display: flex;
align-items: center;
justify-content: center;
grid-row: ${({gridrow})=>`span ${gridrow}`};
&:hover{
transform:translateY(-10px);
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
`;

export const GalleryImage = styled.img`
object-fit:cover;
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
border-radius: 18px;
`;
export const GalleryHeading = styled.h1`
color: #c84241;
margin-top:140px;
margin-left:20px;
text-align:center;
font-size:28px;
`;

export const GalleryDescription = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
padding-left:50px;
padding-right:50px;
@media screen and (max-width:750px){
font-size:12px;
}
`

export const GalleryDetailedViewContainer = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgba(0, 0, 0, 0.4);
z-index:10;
overflow:auto;
`;

export const CrossIcon = styled(RxCross1)`
color: #dcdcdc;
font-size:40px;
position:absolute;
top:20px;
right:30px;
cursor:pointer;
&:hover{
color: #ffffff;
cursor:pointer;
}
`;

export const GalleryDetailedView = styled.div`
background-color: #ffffff;
overflow:auto;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
height:700px;
width:1000px;
border-radius: 18px;
@media screen and (max-width:1100px){
width:80%;
}
@media screen and (max-width:800px){
width:80%;
height:500px;
}
@media screen and (max-width:600px){
width:90%;
height:400px;
}

`;

export const LeftArrowButton = styled(SlArrowLeft)`
color: #dcdcdc;
font-size:50px;
position:absolute;
top:45%;
left:10px;
&:hover{
color: #ffffff;
cursor:pointer;
}
`;

export const RightArrowButton = styled(SlArrowRight)`
color: #dcdcdc;
font-size:50px;
position:absolute;
top:45%;
right:10px;
&:hover{
color: #ffffff;
cursor:pointer;
}
`


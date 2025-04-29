import { styled } from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6";
import { SiComma } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export const ArrowIcon = styled(FaArrowRightLong)`
color:#ffffff;
margin-left:12px;
`;


export const BackgroundContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
background-size:cover;
background-color:#FFFFFF;
`;

export const HomeBackgroundImg = styled.div`
overflow:auto;
background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743657594/land-plot-with-nature-landscape-location-pin_11zon_h3db8o.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;
  background-position: center;
  margin:0;
  padding:0;
  box-sizing:border-box;
  height: 100vh;
  padding: 50px;
  width:100%;
  animation-name:change-image;
  animation-duration:60s;
  animation-iteration-count:infinite;
  animation-timing-function:ease-in-out;
  animation-play-state: running;
  animation-fill-mode: both;
  cursor:pointer;
  &:hover{
  animation-play-state: paused;
  }
  @keyframes change-image{
  100%,0%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743657594/land-plot-with-nature-landscape-location-pin_11zon_h3db8o.jpg');
  }
  10%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957756/beautiful-landscape-with-clear-sky_k12mcm.jpg');
  }
  20%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957752/delimitation-land-plots-concept_1_ni7xkd.jpg');
  }
  30%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957754/land-plot-with-nature-landscape-location-pin_jrtzd1.jpg');
  }
  40%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957757/land-plot-with-nature-landscape-location-pin_2_1_lsrxpb.jpg');
  }
  50%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957756/beautiful-landscape-with-small-village_urfto8.jpg');
  }
  60%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744957741/land-plot-with-nature-landscape-location-pin_1_1_qvejhh.jpg');
  }
  70%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744883826/view-land-plot-real-estate-business-development_1_w2yjvo.jpg');
  }
  80%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744962783/beautiful-landscape-with-delimitation-concept_trdbzw.jpg');
  }
  90%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744962783/land-plot-with-nature-landscape-location-pin_akjqzf.jpg');
  }  
  100%{
  background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1744963798/land-plot-with-nature-landscape-location-pin_1_yzqvtu.jpg');
  }
  `;

export const HomeBackgroundImgContentContainer = styled.div`
background-color: rgba(0, 0, 0, 0.4);
position:absolute;
top:125px;
height: calc(100% - 125px);
overflow:auto;
padding:0 50px;
width:100%;
left:0;
display:flex;
flex-direction:column;
justify-content:center;
@media screen and (max-width:500px){
display:flex;
flex-direction:column;
align-items:center;
}
`;

export const CompanyLogoContainer = styled.div`
dispaly:inline;
`;

export const CompanyLogo = styled.img`
display:inline;
height:250px;
width:200px;
margin:0;
padding:0;  
box-sizing:border-box;
`;

export const HomeHeading = styled.h1`
font-size:100px;
letter-spacing:-2px;
line-height: 90px;
word-spacing:1px;
color:#ffffff;
max-width:800px;
@media screen and (max-width:950px){
font-size:75px;
letter-spacing:-2px;
line-height: 70px;
word-spacing:1px;
color:#ffffff;
}
@media screen and (max-width:750px){
font-size:65px;
letter-spacing:-2px;
line-height: 60px;
word-spacing:1px;
color:#ffffff;
}
@media screen and (max-width:650px){
font-size:55px;
letter-spacing:-2px;
line-height: 55px;
word-spacing:1px;
color:#ffffff;
}
@media screen and (max-width:600px){
font-size:50px;
letter-spacing:-2px;
line-height: 50px;
word-spacing:1px;
color:#ffffff;
}
@media screen and (max-width:500px){
font-size:40px;
letter-spacing:-2px;
line-height: 50px;
word-spacing:1px;
color:#ffffff;
text-align:center;
}
@media screen and (max-width:400px){
font-size:30px;
letter-spacing:-2px;
line-height: 30px;
word-spacing:1px;
color:#ffffff;
text-align:center;
}
`;

export const HomeDescription = styled.h2`
color:#ffffff;
font-weight:500;
@media screen and (max-width:500px){
text-align:center;
font-size:20px;
padding
}
@media screen and (max-width:400px){
text-align:center;
font-size:15px;
}
`;



export const ContactUsButton = styled.button`

display:flex;
justify-content:center;
align-items:center;
width:350px;
height:70px;
border-radius:8px;
background-color:transparent;
color:#ffffff;
font-size:25px;
font-weight:bold;
margin-top:20px;
margin-bottom:20px;
border:solid 4px #ffffff;
cursor:pointer;
transform:scale(1);
transition-property: background-color, transform;
transition-duration:0.25s;
&:hover{
transform:scale(1.2);
background-color:#c84241;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

@media screen and (max-width:600px){
width:300px;
font-size:22px;
}
@media screen and (max-width:450px){
width:280px;
height:50px;
font-size:20px;
}
@media screen and (max-width:400px){
width:220px;
height:50px;
font-size:16px;
}
@media screen and (max-width:350px){
width:200px;
height:50px;
font-size:15px;
}
@media screen and (max-width:250px){
width:180px;
height:50px;
font-size:12px;
}
`;

export const HomeAboutUsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:8px;
width:80%;
margin:50px;
`;

export const HomeAboutUsHeading = styled.h1`
color: #c84241;
font-size:20px;
font-weight:bold;
margin:8px;
`;

export const HomeAboutUsNirmalDhenu = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;

export const StytleSpan = styled.span`
color:#c84241;
`;

export const HomeAboutUsDescription = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`;

export const Button = styled.button`
background-color:transparent;
width:300px;
font-size:18px;
height:50px;
border-radius:8px;
margin:12px;
border:solid 3px #477626;
color:#477626;
font-weight:500;
cursor:pointer;
transform: scale(1);
transition-property:background-color, color, border, transform;
transition-duration:0.50s;
&:hover{
transform: scale(1.2);
background-color:#c84241;
color:#ffffff;
border:solid 3px #c84241;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media screen and (max-width:750px){
font-size:15px;
}
@media screen and (max-width:400px){
font-size:15px;
width:250px;
}
@media screen and (max-width:350px){
font-size:12px;
width:200px;
}
@media screen and (max-width:250px){
font-size:12px;
width:100%;
}
`;

export const HomeHandleEverythingContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:8px;
width:80%;
margin:50px;
`;

export const HomeHandleEverythingHeading = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;

export const HomeHandleEverythingDes = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color:#555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`;

export const DisplayListData = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
width:100%; 
@media screen and (max-width:950px){
display:flex;
flex-direction:column;
align-items:center;
}
`

export const DisplayListItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
padding:8px;
white-space: normal;
width:100%;
`;

export const ImageContainer = styled.div`
position:relative;
height:300px;
width:400px;
@media screen and (max-width:600px){
height:200px;
width:400px;
}
@media screen and (max-width:550px){
height:200px;
width:350px;
}
@media screen and (max-width:500px){
height:200px;
width:100%;
}

`;

export const Img = styled.img`
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
object-fit:fill;
`;

export const Heading = styled.h2`
color: #c84241;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;


export const Description = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`;

export const HomeGalleryContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:80%;
margin:50px;
`;

export const  GalleryHeading = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;

export const DisplayHomeGallery = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
width:100%; 
@media screen and (max-width:950px){
display:flex;
flex-direction:column;
align-items:center;
}
`;
export const DiplayHomeGalleryImg = styled.li`
display:flex;
flex-direction:column;
align-items:center;
margin:12px;
width:100%;
@media screen and (max-width:500px){
height:200px;
}

`;

export const ImageGalleryContainer = styled.div`
position:relative;
height:300px;
width:100%;
z-index:1;
`;



export const GalleryImg = styled.img`
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
object-fit:cover;
`;



export const OurServicesBgContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:80%;
margin:50px;
`;

export const  OurServiceHeading = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;

export const DisplayServicesData = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
width:100%; 
margin:12px;
@media screen and (max-width:1350px){
display:flex;
flex-direction:column;
align-items:center;
}
`;

export const DisplayServicesItems = styled.li`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:12px;
`;

export const ServiceImagesContainer = styled.div`
position:relative;
height:300px;
width:300px;
margin:12px;
z-index:1;
@media screen and (max-width:1350px){
width:450px;
}
@media screen and (max-width:700px){
width:100%;
}
@media screen and (max-width:500px){
height:200px;
}
`;

export const ServiceImage = styled.img`
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
object-fit:fill;
`;
export const DescriptionContent = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color: #555555;
margin:8px;
@media screen and (max-width:750px){
font-size:12px;
}
`;

export const TestimonialBgContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:100%;
margin:50px;
`;

export const TestimonialHeading = styled.h2`
color: #477626;
font-size:30px;
font-weight:500;
text-align:center;
margin:8px;
@media screen and (max-width:750px){
font-size:16px;
}
`;

export const TestimonialContainer = styled.ul`
list-style-type:none;
margin-top:50px;
width:100%;
`;

export const TestimonialListItem = styled.li`
height:400px;
width:300px;
position:relative;
`;

export const TestimonialItem = styled.div`
position:absolute;
 left: 50%;
 top:50%;
 transform: translate(-50%, -50%);
 width:300px;
 height:100%;
 border:solid 1px darkgrey;
 border-radius:20px;
 padding:20px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
cursor:pointer;
margin-left:10px;
margin-right:10px;
@media screen and (max-width:750px){
 width:200px;
}
`;

export const TestimonialMessageContainer = styled.div`
height:250px;
background-color:${(props)=>`${props.color}`};
position:absolute;
top:0;
left:0;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
padding:12px;
`;

export const TestimonialStartRatingNameContainer =styled.div`
position:absolute;
top:250px;
left:0;
width:100%;
height:calc(100% - 250px);
padding:8px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`
export const StarContainer = styled.div`
display:flex;
`;

export const Star = styled(FaStar)`
color: #ffc40c;
font-size:20px;
`;

export const RestStar = styled(FaRegStar)`
color: #ffc40c;
font-size:20px;
`

export const TestimonialMessage = styled.p`
font-size:16px;
font-weight:400;
color: #ffffff;
font-style: italic;
@media screen and (max-width:750px){
 font-size:14px;
}
`;

export const TestimonialUserName = styled.h1`
font-size:18px;
color:${(props)=>`${props.color}`};
font-style: italic;
text-decoration:underline;
@media screen and (max-width:750px){
 font-size:16px;
}
`;

export const CommaContainer = styled.div``
export const Comma = styled(SiComma)`
color:#ffffff;
font-size:20px;
`;


import { styled } from 'styled-components';

export const BackgroundContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
background-size:cover;
background-color:#FFFFFF;
`

export const HomeBackgroundImg = styled.div`
  @media screen and (min-width: 2001px) {
    background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743657594/land-plot-with-nature-landscape-location-pin_11zon_h3db8o.jpg');
  }
  @media screen and (min-width: 1500px) and (max-width: 2000px) {
    background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743660486/2149937923_2_mfysvg.jpg');
  }
  @media screen and (min-width: 844px) and (max-width: 1499px) {
    background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743660486/2149937923_2_mfysvg.jpg');
  }
  @media screen and (max-width: 843px) {
    background-image: url('https://res.cloudinary.com/da52fiag8/image/upload/v1743660479/2149937923_lllh4i.jpg');
  }
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  width:100%;
`;

export const CompanyLogoContainer = styled.div`
`

export const CompanyLogo = styled.img`
height:300px;
@media screen and (max-width:550px){
height:250px;
}
@media screen and (max-width:344px){
height:150px;
}
`

export const HomeHeading = styled.h1`
font-size:100px;
letter-spacing:-2px;
word-spacing:1px;
color:#ffffff;
max-width:800px;
@media screen and (max-width:950px){
font-size:75px;
}
@media screen and (max-width:750px){
font-size:65px;
}
@media screen and (max-width:650px){
font-size:55px;
}
@media screen and (max-width:600px){
font-size:50px;
}
@media screen and (max-width:500px){
font-size:40px;
}
@media screen and (max-width:400px){
font-size:30px;
}
`

export const HomeDescription = styled.h2`
color:#ffffff;
font-weight:500;
@media screen and (max-width:500px){
font-size:20px;
}
@media screen and (max-width:400px){
font-size:15px;
}
`



export const ContactUsButton = styled.button`
width:300px;
height:70px;
border-radius:8px;
background-color:transparent;
color:#ffffff;
font-size:25px;
font-weight:bold;
margin-top:20px;
border:solid 4px #ffffff;
cursor:pointer;
transition-property: background-color;
transition-duration:0.25s;
&:hover{
background-color:#c84241;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

@media screen and (max-width:600px){
width:250px;
}
@media screen and (max-width:450px){
width:200px;
height:50px;
font-size:20px;
}
@media screen and (max-width:350px){
width:150px;
height:50px;
font-size:20px;
}
@media screen and (max-width:250px){
width:110px;
height:50px;
font-size:15px;
}

`

export const HomeAboutUsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
// border:solid 1px red;
text-align:center;
padding:20px;
width:75%;
margin:50px;
`

export const HomeAboutUsHeading = styled.h1`
color:#c84241;
font-size:20px;
font-weight:bold;
margin:8px;
`

export const HomeAboutUsNirmalDhenu = styled.h2`
color:#477626;
font-size:30px;
font-weight:500;
max-width:600px;
text-align:center;
margin:8px;
`

export const StytleSpan = styled.span`
color:#c84241;
`

export const HomeAboutUsDescription = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color:#555555;
margin:8px;
`

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
transition-property:background-color, color, border;
transition-duration:0.50s;
&:hover{
background-color:#c84241;
color:#ffffff;
border:solid 3px #c84241;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`

export const HomeHandleEverythingContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:75%;
margin:50px;
overflow:auto;
`

export const HomeHandleEverythingHeading = styled.h2`
color:#477626;
font-size:30px;
font-weight:500;
max-width:600px;
text-align:center;
margin:8px;
`

export const HomeHandleEverythingDes = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color:#555555;
margin:8px;
`

export const DisplayListData = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
width:100%; 
overflow:auto;
`

export const DisplayListItem = styled.li`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
padding:8px;
width:330px;
`

export const Img = styled.img`
height:200px;
`

export const Heading = styled.h2`
color:#c84241;
font-weight:500;
`

export const Description = styled.p`
text-align:center;
font-size:20px;
font-weight:400;
color:#555555;
`
export const HomeGalleryContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:75%;
margin:50px;
overflow:auto;
`

export const  GalleryHeading = styled.h1`
color:#477626;
font-size:30px;
font-weight:500;
max-width:600px;
text-align:center;
margin:8px;
`

export const DisplayHomeGallery = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
margin:12px;
@media screen and (max-width:1050px){
display:flex;
flex-direction:column;
align-items:center;
}
`
export const DiplayHomeGalleryImg = styled.li`
height:350px;
width:350px;
margin:12px;
@media screen and (max-width:1050px){
height:350px;
width:350px;
}
@media screen and (max-width:550px){
height:300px;
width:100%;
}
`

export const GalleryImg = styled.img`
height:100%;
width:100%;
`

export const HrLine = styled.hr`
  border: none;
  height: 3px;
  width: 75%;
  margin: 20px auto;
  background: repeating-linear-gradient(
    to right,
    #c84241,
    #c84241 10px,  
    transparent 10px,
    transparent 20px 
  );
`

export const OurServicesBgContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:20px;
width:75%;
margin:50px;
overflow:auto;
`

export const  OurServiceHeading = styled.h1`
color:#477626;
font-size:30px;
font-weight:500;
max-width:600px;
text-align:center;
margin:8px;
`

export const DisplayServicesData = styled.ul`
display:flex;
flex-direction:row; 
justify-content:space-around;
list-style-type:none;
margin:12px;
@media screen and (max-width:1050px){
display:flex;
flex-direction:column;
align-items:center;
}
`

export const DisplayServicesItems = styled.li`
display:flex;
flex-direction:column;
align-items:center;
margin:12px;
`

export const ServiceImagesContainer = styled.div`
position:relative;
height:300px;
width:300px;
margin:12px;
z-index:1;
`

export const ServiceImage = styled.img`
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
object-fit:cover;
`
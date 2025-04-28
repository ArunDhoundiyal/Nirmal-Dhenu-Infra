import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import styled from "styled-components";

export const AnchorTag = styled.a`
text-decoration:none;
color:inherit;
`

export const InstagramIcon = styled(FaInstagram)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`;

export const FacebookIcon = styled(FaFacebook)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`;

export const YoutubeIcon = styled(IoLogoYoutube)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`;

export const FooterBgContainer = styled.div`
position:relative;
background-color: #2a491d;
background-size:cover;
margin-top:50px;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
align-items:center;
width:100%;
padding:50px;
`;

export const FooterCompanyLogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:20px;
`;

export const CompanyLogo = styled.img`
height:200px;
width:150px;
`;

export const CompanyName = styled.h1`
color: #ffffff;
font-size:22px;
margin:0;
text-align:center;
@media screen and (max-width:750px){
font-size:18px;
}
`;

export const FooterWelcomeContainer = styled.div`
display:flex;
flex-direction:column;
max-width:400px;
padding:8px;
margin-bottom:20px;
@media screen and (max-width:703px){
display:flex;
flex-direction:column;
align-items:center;
}
`;

export const WelcomeHeading = styled.h1`
color:#ffffff;
font-size:22px;
@media screen and (max-width:750px){
font-size:18px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:18px;
}
`;
export const GetInTouchHeading = styled.h2`
color:#ffffff;
font-size:20px;
margin-top:20px;
@media screen and (max-width:750px){
font-size:18px;
}
`;

export const Description = styled.p`
color:#ffffff;
font-weight:100;
@media screen and (max-width:750px){
font-size:15px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:14px;
}
`;
export const Address = styled.p`
color:#ffffff;
font-weight:bold;
margin-top:20px;
@media screen and (max-width:750px){
font-size:15px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:15px;
}
`;

export const EmailAddress = styled.p`
color:#ffffff;
font-weight:bold;
margin-top:20px;
@media screen and (max-width:750px){
font-size:15px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:15px;
}
`;

export const ReduceWeight = styled.span`
font-weight:500;
`;
export const FollowUsContainer = styled.div`
display:flex;
flex-direction:column;
text-align:left;
@media screen and (max-width:703px){
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
}
`;

export const FollowUs = styled.h1`
color:#ffffff;
font-size:22px;
padding:8px;
@media screen and (max-width:750px){
font-size:18px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:18px;
}
`;

export const FollowUsContent = styled.p`
color:#ffffff;
font-weight:400;
@media screen and (max-width:750px){
font-size:15px;
}
@media screen and (max-width:703px){
text-align:center;
font-size:15px;
}
`;

export const FollowUsIconContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin-top:12px;
margin-bottom:30px;
`;



export const CopyRightContainer = styled.div`
position:absolute;
bottom:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
width:100%;
background-color: rgba(0, 0, 0, 0.4);
color: #ffffff;
text-align:center;
`;

export const CopyRightMsg = styled.p`
color: #ffffff;
font-weight:400;
font-size:14px;
display:flex;
align-items:center;
margin:12px;
`;
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import styled from "styled-components";

export const FooterBgContainer = styled.div`
background-color:#2a491d;
background-size:cover;
margin-top:50px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:100%;
padding:50px;
flex-wrap:wrap;
overflow:auto;
` 

export const FooterCompanyLogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const CompanyLogo = styled.img`
height:200px;
width:150px;
`

export const CompanyName = styled.h1`
color:#ffffff;
font-size:22px;
margin:0;
`

export const FooterWelcomeContainer = styled.div`
display:flex;
flex-direction:column;
max-width:400px;
padding:8px;
`

export const WelcomeHeading = styled.h1`
color:#ffffff;
font-size:22px;
`
export const GetInTouchHeading = styled.h2`
color:#ffffff;
font-size:20px;
margin-top:20px;
`

export const Description = styled.p`
color:#ffffff;

font-weight:100;
`
export const Address = styled.p`
color:#ffffff;
font-weight:bold;
margin-top:20px;
`

export const EmailAddress = styled.p`
color:#ffffff;
font-weight:bold;
margin-top:20px;
`

export const ReduceWeight = styled.span`
font-weight:500;
`

export const FollowUsContainer = styled.div`
display:flex;
flex-direction:column;
text-align:left;
`

export const FollowUs = styled.h1`
color:#ffffff;
font-size:22px;
padding:8px;
`

export const FollowUsContent = styled.p`
color:#ffffff;
font-weight:400;
`

export const FollowUsIconContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin-top:12px;
`

export const LinkedInIcon = styled(FaLinkedinIn)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`

export const InstagramIcon = styled(FaInstagram)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`

export const WhatsApp = styled(FaWhatsapp)`
color:#ffffff;
font-size:30px;
margin:8px;
cursor:pointer;
`
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";

export const OurTeamsBgContainer = styled.div`
display:flex;
flex-direction:column;
background-size:cover;
border:solid 1px red;
height:100vh;
`

export const OurTeamsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:100px;
border:solid 1px blue;
text-align:center;
background-size:cover;
height:100%;
padding:40px;
overflow:auto;
`

export const OurTeamsHeading = styled.h1`
color: #C84241;
font-size:30px;
font-weight:500;
`

export const StyleTeams = styled.span`
color:#477626;
// font-size:25px;
`

export const  OurTeamDescription = styled.p`
font-size:20px;
font-weight:400;
color:#555555;
margin:8px;
`

export const Mark = styled.span`
font-weight:bold;
text-decoration:underline;
`

export const DisplayOurTeamContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
flex-direction:space-between;
flex-wrap:wrap;

margin-top:80px;
`

export const DisplayTeam = styled.li`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
border:solid 3px #477626;
border-radius:12px;
margin:20px;
padding:8px;
height:200px;
width:220px;
`

export const TeamNameDesContainer = styled.div``

export const TeamPhotoContainer = styled.div`
border:solid 4px #477626;
height:100px;
width:100px;
border-radius:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
`
export const UserIcon = styled(FaRegUser)`
position:absolute;
height:70%;
width:70%;
color:#C84241;
`

export const Name = styled.h2`
color:#477626;
font-weight:500;
max-width:600px;
text-align:center;
font-size:18px;
margin:8px;
`
export const Designation = styled.p`
text-align:center;
font-size:16px;
font-weight:600;
color: #C84241;
margin:8px;
` 
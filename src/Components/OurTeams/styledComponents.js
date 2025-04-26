import styled from "styled-components";


export const OurTeamsBgContainer = styled.div`
display:flex;
flex-direction:column;
background-size:cover;
min-height:100vh;
background-color: #ffffff;
overflow:auto;
`


export const OurTeamContainer = styled.div`
margin-top:100px;
  height: 50vh;
  width:100%;
  position:relative;
`

export const OurTeamTagLineContainer = styled.div`
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
`;

export const OurTeamImageBanner = styled.img`
position:absolute;
left:0;
top:0;
width:100%;
height:100%;
object-fit:cover;
`

export const OurTeamTagLine = styled.h1`
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

export const OurTeamLineDescription = styled.p`
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


export const OurTeamsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;  
background-size:cover;
height:100%;
padding:10px;
width:100%;
`

export const OurTeamsHeading = styled.h1`
color: #C84241;
font-size:20px;
font-weight:500;
@media screen and (max-width:700px){
font-size:16px;
}
`

export const StyleTeams = styled.span`
color:#477626;
`

export const  OurTeamDescription = styled.p`
font-size:16px;
font-weight:400;
color: #555555;
margin:18px;
text-align:center;
@media screen and (max-width:700px){
font-size:14px;
}
`

export const Mark = styled.span`
font-weight:bold;
text-decoration:underline;
`

export const DisplayOurTeamContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content: space-around;
align-items:center;
flex-wrap:wrap;
margin-top:100px;
gap:80px;
width:100%;
`

export const DisplayTeam = styled.li`
    margin:12px;
    height: 200px;
    width: 250px;
    list-style-type: none;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 12px;
    box-sizing: border-box;
    position: relative;
    transform: scale(1) translateY(0);
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    &:hover {
    transform: scale(1.1) translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    @media screen and (max-width:350px){
    height: 180px;
    width: 200px;
    }`

export const TeamPhotoContainer = styled.div`
height: 150px;
width: 150px;
position: absolute;
top: -70px;
@media screen and (max-width:350px){
height: 120px;
width: 120px;
top: -50px;
}
@media screen and (max-width:300px){
height: 100px;
width: 100px;
top: -50px;
}
`
export const UserIcon = styled.img`
object-fit: fill;
position: absolute;
left: 0;
top: 0;
height: 100%;
width: 100%;
`

export const Name = styled.h2`
color: #477626;
margin-top: 80px;
font-weight:500;
font-size:20px;
@media screen and (max-width:700px){
font-size:16px;
}

`
export const Designation = styled.p`
color: #C84241;
font-size:16px;
@media screen and (max-width:700px){
font-size:14px;
}
` 

export const DirectorMessageContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
position:relative;  
@media screen and (max-width:800px){
width:100%;
display:flex;
flex-direction:row;
position:relative;
height:100%;
}
`

export const DirectorProfileContainer = styled.div`
display:flex;
flex-direction:column;  
align-items:center;
height:300px;
width:300px;
position:relative;
@media screen and (max-width:800px){
display:flex;
flex-direction:column;
align-items:center;
height:300px;
width:100%;
position:relative;
}
`

export const DirectorProfile = styled.div`
height: 150px;
width: 150px;
position:absolute;
top:20px;
`

export const DirectorProfileImage = styled.img`
object-fit:fill;
height:100%;
width:100%;
`

export const DirectorProfileDesignationContainer = styled.div`
position:absolute;  
width:100%;
height:calc(100% - 200px);
top:200px;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const DirectorNameDesignationContainer = styled.div``

export const Director = styled.h1`
color: #477626;
font-weight:500;
font-size:20px;
@media screen and (max-width:700px){
font-size:16px;
}
`
export const DirectorDesignation = styled.p`
color: #C84241;
font-weight:400;
`

export const DirectorMsgContainer = styled.div`
padding:10px;
position:absolute;
left:300px;
overflow:auto;
top:0;
width:calc(100% - 300px);
height:100%;
@media screen and (max-width:800px){
display:none;
}
`

export const DirectorMsgCon = styled.div`
@media screen and (min-width:801px){
display:none;
}
@media screen and (max-width:800px){
width:100%;
height:100%;
padding:30px;
}

`
export const DirectorMessageHeading = styled.h1`
color: #477626;
font-weight:500;
margin-bottom:8px;
margin-top:20px;
text-decoration:underline;
font-size:20px;
overflow:auto;
@media screen and (max-width:700px){
font-size:16px;
margin-top:20px;
}
`
export const DirectorMessageDescription = styled.p`
font-size:16px;
font-weight:400;
color: #555555;
@media screen and (max-width:700px){
font-size:14px;
}
`

export const LetsContinueMsg = styled.p`
margin-top:8px;
font-weight:500;
`

export const WarmRegardsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
`

export const WarmRegard = styled.span`
font-size:18px;
font-weight:500;
color: #555555;
@media screen and (max-width:700px){
font-size:14px;
}
`

export const NameSpan = styled.span`
font-size:15px;
color: #477626;
@media screen and (max-width:700px){
font-size:14px;
}
`

export const DirecotrContent = styled.span`
font-size:15px;
color: #C84241;
@media screen and (max-width:700px){
font-size:14px;
}
`

export const HighLight = styled.span`
font-weight:700;
color: #555555;
text-decoration:underline;
`
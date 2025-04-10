import {
    OurTeamsBgContainer, 
    OurTeamsContainer, 
    OurTeamsHeading, 
    StyleTeams, 
    OurTeamDescription, 
    Mark, 
    DisplayOurTeamContainer, 
    DisplayTeam, 
    Name, 
    Designation, 
    TeamNameDesContainer, 
    TeamPhotoContainer, 
    UserIcon

} from './styledComponents';
import {ourTeamData} from '../Data';
import Header from '../Header';

const OurTeams = () => {
    return(
        <OurTeamsBgContainer>
            <Header/>
            <OurTeamsContainer>
                <OurTeamsHeading>
                Our Team <br/> <StyleTeams>Driven by Expertise, United by Vision</StyleTeams>  
                </OurTeamsHeading>
                <OurTeamDescription>
                At <Mark>Nirmal Dhenu Infra</Mark>, 
                our strength lies in our people. We are a team of passionate 
                professionals who bring together years of experience in real estate development, 
                project planning, legal due diligence, and customer relations. 
                Each member of our team shares a common goal—to deliver value-driven, 
                future-ready plotted developments that exceed expectations.
                <br/>
                From seasoned industry veterans to dynamic young minds, 
                our team is a balanced blend of knowledge, innovation, and commitment. 
                Together, we work with precision and purpose, 
                ensuring that every project reflects our core values of <Mark>integrity</Mark>, 
                <Mark>transparency</Mark>, and <Mark>customer satisfaction</Mark>.
                </OurTeamDescription>
                <DisplayOurTeamContainer>
                    {
                        ourTeamData.map(({id, name, designation})=>(
                            <DisplayTeam key={id}>
                                <TeamPhotoContainer>
                                <UserIcon/>
                                </TeamPhotoContainer>
                                
                                <TeamNameDesContainer>
                                <Name>{name}</Name>
                                <Designation>{designation}</Designation>
                                </TeamNameDesContainer>
                            </DisplayTeam>
                        ))
                    }
                </DisplayOurTeamContainer>
                
            </OurTeamsContainer>
        </OurTeamsBgContainer>

    )
}

export default OurTeams;
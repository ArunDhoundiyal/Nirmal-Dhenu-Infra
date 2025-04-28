import ScrollToTop from '../ScrollToTop';
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
    TeamPhotoContainer, 
    UserIcon, 
    DirectorMessageContainer, 
    DirectorProfileContainer, 
    DirectorProfileImage, 
    DirectorProfile, 
    Director, 
    DirectorDesignation, 
    DirectorProfileDesignationContainer, 
    DirectorMsgContainer, 
    DirectorNameDesignationContainer, 
    DirectorMessageHeading, 
    DirectorMessageDescription, 
    LetsContinueMsg, 
    WarmRegardsContainer, 
    WarmRegard, 
    NameSpan, 
    DirecotrContent, 
    HighLight, 
    OurTeamContainer, 
    OurTeamImageBanner, 
    OurTeamTagLine, 
    OurTeamTagLineContainer, 
    OurTeamLineDescription, 
    DirectorMsgCon

} from './styledComponents';
import {ourTeamData} from '../Data';
import Header from '../Header';
import Footer from '../Footer';

const OurTeams = () => {
    return(
        <OurTeamsBgContainer>
            <Header/>
            <OurTeamContainer data-aos="zoom-in">
            <OurTeamImageBanner data-aos="zoom-in" src='https://res.cloudinary.com/da52fiag8/image/upload/v1745505324/workgroup-three-reporting-serious-young-team-leader_emhton.jpg' alt='about-us-image' />
                <OurTeamTagLineContainer data-aos="zoom-in">
                    <OurTeamTagLine data-aos="zoom-in">Meet the Minds Behind the Mission</OurTeamTagLine>
                    <OurTeamLineDescription data-aos="zoom-in">Driven by passion. Defined by trust</OurTeamLineDescription>
                </OurTeamTagLineContainer>

            </OurTeamContainer>
            <DirectorMessageContainer>
                <DirectorProfileContainer>
                    <DirectorProfile>
                    <DirectorProfileImage data-aos="zoom-in" src='https://res.cloudinary.com/da52fiag8/image/upload/v1745831203/user_2_dgeshf.png' alt='director-profile-pic-image' />
                    </DirectorProfile>
                    <DirectorProfileDesignationContainer data-aos="zoom-in">
                    <DirectorNameDesignationContainer>
                    <Director>Anand Kumar Singh</Director>
                    <DirectorDesignation>Director, Nirmal Dhenu Infra</DirectorDesignation>
                    </DirectorNameDesignationContainer>
                    </DirectorProfileDesignationContainer>
                </DirectorProfileContainer>
                <DirectorMsgContainer data-aos="zoom-in" >
                    <DirectorMessageHeading>
                    Director’s Message:
                    </DirectorMessageHeading>
                    <DirectorMessageDescription>
                    At <HighLight>Nirmal Dhenu Infra</HighLight>, we believe that every piece of land holds the potential to shape dreams, 
                    build futures, and create lasting legacies. With this vision at the core, 
                    we’ve dedicated ourselves to offering premium plotted developments that are not 
                    just investments, but stepping stones toward a better tomorrow.
                    Our journey has always been guided by trust, transparency, and a deep understanding of what our 
                    customers truly value—security, clarity, and long-term growth. Whether you're buying your first plot, 
                    expanding your investments, or selling land with confidence, we are here to ensure that your 
                    experience is smooth, secure, and satisfying.
                    As we continue to grow and build thriving communities, I personally commit to upholding the values 
                    that define us—integrity, quality, and customer-first service. I thank all our clients, partners, 
                    and team members for their trust and support in making <HighLight>Nirmal Dhenu Infra</HighLight> a name synonymous 
                    with reliability and growth.
                    <br/>
                    <LetsContinueMsg>Let’s continue building a future that we can all be proud of.</LetsContinueMsg>
                    </DirectorMessageDescription>
                  {/*  */}
                    <WarmRegardsContainer>
                     <p>
                     <WarmRegard>Warm regards</WarmRegard>,
                     <br/>
                     <NameSpan>
                     Anand Kumar Singh
                     </NameSpan>
                     <br/>
                     <DirecotrContent>
                     Director, Nirmal Dhenu Infra
                     </DirecotrContent>
                     </p>
             </WarmRegardsContainer>
                </DirectorMsgContainer>
            </DirectorMessageContainer>
            {/*  */}
            <DirectorMsgCon data-aos="zoom-in" >
                    <DirectorMessageHeading>
                    Director’s Message:
                    </DirectorMessageHeading>
                    <DirectorMessageDescription>
                    At <HighLight>Nirmal Dhenu Infra</HighLight>, we believe that every piece of land holds the potential to shape dreams, 
                    build futures, and create lasting legacies. With this vision at the core, 
                    we’ve dedicated ourselves to offering premium plotted developments that are not 
                    just investments, but stepping stones toward a better tomorrow.
                    Our journey has always been guided by trust, transparency, and a deep understanding of what our 
                    customers truly value—security, clarity, and long-term growth. Whether you're buying your first plot, 
                    expanding your investments, or selling land with confidence, we are here to ensure that your 
                    experience is smooth, secure, and satisfying.
                    As we continue to grow and build thriving communities, I personally commit to upholding the values 
                    that define us—integrity, quality, and customer-first service. I thank all our clients, partners, 
                    and team members for their trust and support in making <HighLight>Nirmal Dhenu Infra</HighLight> a name synonymous 
                    with reliability and growth.
                    <br/>
                    <LetsContinueMsg>Let’s continue building a future that we can all be proud of.</LetsContinueMsg>
                    </DirectorMessageDescription>
                  {/*  */}
                    <WarmRegardsContainer>
                     <p>
                     <WarmRegard>Warm regards</WarmRegard>,
                     <br/>
                     <NameSpan>
                     Anand Kumar Singh
                     </NameSpan>
                     <br/>
                     <DirecotrContent>
                     Director, Nirmal Dhenu Infra
                     </DirecotrContent>
                     </p>
             </WarmRegardsContainer>
                </DirectorMsgCon>            

            {/*  */}
            <OurTeamsContainer>
                <OurTeamsHeading data-aos="zoom-in">
                Our Team <br/> <StyleTeams>Driven by Expertise, United by Vision</StyleTeams>  
                </OurTeamsHeading>
                <OurTeamDescription data-aos="zoom-in">
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
                <DisplayOurTeamContainer data-aos="zoom-in">
                    {
                        ourTeamData.map(({id, name, designation, img})=>(
                            <DisplayTeam key={id}>
                                <TeamPhotoContainer>
                                <UserIcon alt={`team-logo-${id}`} src={img}/>
                                </TeamPhotoContainer>
                                <Name>{name}</Name>
                                <Designation>{designation}</Designation>
                                
                            </DisplayTeam>
                        ))
                    }
                </DisplayOurTeamContainer>
            </OurTeamsContainer>
            <ScrollToTop/>
            <Footer/>
        </OurTeamsBgContainer>

    )
}

export default OurTeams;
import {
    FooterBgContainer, 
    FooterCompanyLogoContainer,
    FooterWelcomeContainer, 
    CompanyLogo, 
    WelcomeHeading, 
    GetInTouchHeading, 
    Description, 
    Address, 
    EmailAddress, 
    ReduceWeight, 
    CompanyName, 
    FollowUsContainer,
    FollowUs, 
    FollowUsContent, 
    FollowUsIconContainer, 
    InstagramIcon, 
    FacebookIcon, 
    YoutubeIcon, 
    CopyRightContainer,  
    CopyRightMsg, 
    AnchorTag
} from './styledComponents';



const Footer = () => {
    return(
        <FooterBgContainer data-aos="zoom-in" id="contact">
            {/*  */}
            <FooterCompanyLogoContainer>
            <CompanyLogo 
            alt='nirmal-dhenu-infra-logo' 
            src='https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' 
            />
            <CompanyName>Nirmal Dhenu Infra</CompanyName>
            </FooterCompanyLogoContainer>
            {/*  */}
            <FooterWelcomeContainer>
            <WelcomeHeading>
                Welcome to Nirmal Dhenu Infra
            </WelcomeHeading>
            <GetInTouchHeading>
                Get In Touch
            </GetInTouchHeading>
            <Description>
                Thank you for your interest in Nirmal Dhenu Infra. 
                For inquiries, consultations, or to schedule a viewing, 
                please don't hesitate to reach out to us using 
                the contact information provided below.
            </Description>
            <Address>
            Head Office: <ReduceWeight>H-160 SUITE NO 113 BSI Business Park Sector 63 Noida 201301</ReduceWeight>
            </Address>
            <EmailAddress>
            @Email: <ReduceWeight>Info@nirmaldhenu.com</ReduceWeight> 
            </EmailAddress>
            </FooterWelcomeContainer>
            {/*  */}
            <FollowUsContainer>
                <FollowUs>
                    Follow Us
                </FollowUs>
                <FollowUsContent>
                    Stay connected with us on:
                </FollowUsContent>
                <FollowUsIconContainer>
                    <AnchorTag href='https://www.instagram.com/nirmaldhenuinfra/'>
                    <InstagramIcon/>
                    </AnchorTag>
                    <AnchorTag href='https://www.facebook.com/people/Nirmal-Dhenu-Infra/61575368651747/'>
                    <FacebookIcon/>
                    </AnchorTag>
                    <AnchorTag>
                    <YoutubeIcon/> 
                    </AnchorTag>
                </FollowUsIconContainer>
            </FollowUsContainer>

            <CopyRightContainer>
                
               <CopyRightMsg>Copyright 2025 by Nirmaldhnu Infra. All Rights Reserved. Developed by Dezyn Edge</CopyRightMsg> 
            </CopyRightContainer>
        </FooterBgContainer>

    )
}

export default Footer
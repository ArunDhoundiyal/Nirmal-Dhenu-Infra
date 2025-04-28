import ScrollToTop from '../ScrollToTop';

import {
    AboutUsBgConatiner, 
    AboutUsBanner,
    HomeAboutUsContainer, 
    HomeAboutUsHeading, 
    HomeAboutUsNirmalDhenu, 
    StytleSpan, 
    HomeAboutUsDescription, 
    AboutUsImageBanner, 
    AboutUsTagLineContainer, 
    AboutUsTagLine, 
    AboutUsTagLineDescription
    
    

} from './styledComponents';
import Header from '../Header';
import Footer from '../Footer';


const AboutUs = () => {
    return(
        <AboutUsBgConatiner>
            <Header/>
            <AboutUsBanner data-aos="zoom-in">
                <AboutUsImageBanner data-aos="zoom-in" src='https://res.cloudinary.com/da52fiag8/image/upload/v1744957754/land-plot-with-nature-landscape-location-pin_jrtzd1.jpg' alt='about-us-image' />
                <AboutUsTagLineContainer data-aos="zoom-in">
                    <AboutUsTagLine data-aos="zoom-in">Premium Real Estate | Trusted Land Investments</AboutUsTagLine>
                    <AboutUsTagLineDescription data-aos="zoom-in">Build your future on a foundation of trust and growth.</AboutUsTagLineDescription>
                </AboutUsTagLineContainer>
            </AboutUsBanner>
                        <HomeAboutUsContainer>
                            <HomeAboutUsHeading  data-aos="zoom-in">
                                ABOUT US
                            </HomeAboutUsHeading>
                            <HomeAboutUsNirmalDhenu  data-aos="zoom-in">
                            Welcome to Nirmal Dhenu Infra <br/> <StytleSpan>Your Trusted Partner in Premium Plot Investments!</StytleSpan>
                            </HomeAboutUsNirmalDhenu>
                            <HomeAboutUsDescription   data-aos="zoom-in">
                            Nirmal Dhenu Infra is a premier real estate company specializing in 
                            premium plotted developments. With a vision to create thriving communities 
                            and investment opportunities, we are dedicated to providing strategically 
                            located, well-planned plots that offer long-term value and growth.Our commitment 
                            to quality, transparency, and customer satisfaction ensures that every 
                            plot we offer is legally clear, well-developed, and ready for future growth.
                            With years of expertise in the real estate sector, we understand the 
                            importance of land as a secure and appreciating asset. Our commitment 
                            to quality, transparency, and customer satisfaction ensures that every 
                            plot we offer is legally clear, well-developed, and ready for future growth.
                            At Nirmal Denu Infra, we believe in ethical business practices and a customer-first approach. 
                            Whether you are looking for a plot to build your dream home or a high-value investment 
                            opportunity, our expert team is here to guide you every step of the way.
                            Join us in shaping the future of real estate with smart land investments. 
                            Discover the Nirmal Dhenu Infra advantage today!
                            </HomeAboutUsDescription>
                        </HomeAboutUsContainer>
                        <ScrollToTop/>
            <Footer/>
            
        </AboutUsBgConatiner>

    )
}

export default AboutUs
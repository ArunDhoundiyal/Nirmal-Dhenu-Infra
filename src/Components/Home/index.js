import Header  from '../Header';
import {
    propertyData, 
    propertGallery, 
    ourServices
} from '../Data';
import {
    BackgroundContainer, 
    HomeBackgroundImg, 
    HomeHeading, 
    HomeDescription, 
    CompanyLogoContainer,
    CompanyLogo, 
    ContactUsButton, 
    HomeAboutUsContainer, 
    HomeAboutUsHeading, 
    HomeAboutUsNirmalDhenu, 
    HomeAboutUsDescription, 
    StytleSpan, 
    Button, 
    HomeHandleEverythingContainer, 
    HomeHandleEverythingHeading, 
    HomeHandleEverythingDes, 
    DisplayListData, 
    DisplayListItem, 
    Img, 
    Description, 
    HomeGalleryContainer, 
    Heading, 
    GalleryHeading, 
    DisplayHomeGallery, 
    DiplayHomeGalleryImg, 
    GalleryImg, 
    HrLine, 
    OurServicesBgContainer, 
    OurServiceHeading, 
    DisplayServicesItems, 
    ServiceImagesContainer, 
    ServiceImage, 
    DisplayServicesData, 
    ServiceHeading
} from "./styledComponents"; 

import Footer from '../Footer';

const Home = () => {
    return(
        <BackgroundContainer>
            {/*  */}
            <Header/>
            {/*  */}
            <HomeBackgroundImg>
                <CompanyLogoContainer>
                <CompanyLogo 
                src=
                'https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' 
                alt='nirmal-dhenu-infra-logo'
                />                    
                </CompanyLogoContainer>

                <HomeHeading>
                Find Your Place of Dream
                </HomeHeading>
                <HomeDescription>
                Get 100% Genuine & Verified property Customer
                </HomeDescription>
                <ContactUsButton>Contact Us</ContactUsButton>
            </HomeBackgroundImg>
   
            {/*  */}
            <HomeAboutUsContainer>
                <HomeAboutUsHeading>
                    ABOUT US
                </HomeAboutUsHeading>
                <HomeAboutUsNirmalDhenu>
                Welcome to Nirmal Dhenu Infra <br/> <StytleSpan>Your Trusted Partner in Premium Plot Investments!</StytleSpan>
                </HomeAboutUsNirmalDhenu>
                <HomeAboutUsDescription>
                Nirmal Dhenu Infra is a premier real estate company specializing in premium plotted developments. With a vision to create thriving communities and investment opportunities, we are dedicated to providing strategically located, well-planned plots that offer long-term value and growth.
                With years of expertise in the real estate sector, we understand the importance of land as a secure and appreciating asset. Our commitment to quality, transparency, and customer satisfaction ensures that every plot we offer is legally clear, well-developed, and ready for future growth.
                At Nirmal Denu Infra, we believe in ethical business practices and a customer-first approach. Whether you are looking for a plot to build your dream home or a high-value investment opportunity, our expert team is here to guide you every step of the way.
                Join us in shaping the future of real estate with smart land investments. Discover the Nirmal Dhenu Infra advantage today!
                </HomeAboutUsDescription>
                <Button>
                    KNOW MORE ABOUT US 
                </Button>
            </HomeAboutUsContainer>
            <HrLine/>
            {/*  */}
            <HomeHandleEverythingContainer>
                <HomeHandleEverythingHeading>
                WE HANDLE EVERYTHING
                </HomeHandleEverythingHeading>
                <HomeHandleEverythingDes>
                At Nirmal Dhenu Infra, we understand that navigating the complexities of land transactions can be overwhelming. That's why we offer comprehensive services to ensure a seamless experience from start to finish.
                </HomeHandleEverythingDes>
                <DisplayListData>
                    {
                        propertyData.map(({id, name, description, img}) => (
                            <DisplayListItem key={id}>
                                <Heading>{name}</Heading>
                                <Img src={img} alt={`${id}-${name}`} />

                                <Description>
                                    {description}
                                </Description>
                            </DisplayListItem>

                        ))
                    }
                </DisplayListData>
            </HomeHandleEverythingContainer>
            <HrLine/>
            {/*  */}
            <HomeGalleryContainer>
                <GalleryHeading>
                    OUR GALLERY
                </GalleryHeading>
                <Description>
                Discover a range of land properties through our visual gallery. Each listing features high-resolution images that provide a detailed look at the plot, its surroundings, and accessibility.
                </Description>
                <DisplayHomeGallery>
                    {
                        propertGallery.map(({id, galleryImg})=>(
                            <DiplayHomeGalleryImg key={id}>
                                <GalleryImg src={galleryImg} />
                            </DiplayHomeGalleryImg>
                        ))
                    }

                </DisplayHomeGallery>
                <Button>
                    EXPLORE GALLERY 
                </Button>
            </HomeGalleryContainer>
            <HrLine/>
            {/*  */}
            <OurServicesBgContainer>
                <OurServiceHeading>OUR FEATURED SERVICES</OurServiceHeading>
                <Description>
                We offer comprehensive services that simplify every aspect of land buying, selling, 
                and investment. With a focus on transparency, customer satisfaction, and expert guidance, 
                we help you make informed property decisions with confidence.
                </Description>
                <DisplayServicesData>
                    {
                        ourServices.map(({id, img, name, description})=>(
                            <DisplayServicesItems key={id}>
                                <ServiceImagesContainer>
                                    <ServiceImage src={img} alt={`${name}-${id}`} />
                                </ServiceImagesContainer>
                                <Heading>
                                    {name}
                                </Heading>
                                <Description>{description}</Description>
                            </DisplayServicesItems>
                        ))
                    }
                </DisplayServicesData>
            </OurServicesBgContainer>
            
            <Footer/>
        </BackgroundContainer>
        
    )
}

export default Home
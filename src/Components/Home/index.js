import {useNavigate} from 'react-router-dom';
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header  from '../Header';
import ScrollToTop from '../ScrollToTop';
import {
    propertyData, 
    propertGallery, 
    ourServices, 
    testimonialData
} from '../Data';
import Footer from '../Footer';
import {
    BackgroundContainer, 
    HomeBackgroundImg, 
    HomeHeading, 
    HomeDescription, 
    RestStar,
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
    OurServicesBgContainer, 
    OurServiceHeading, 
    DisplayServicesItems, 
    ServiceImagesContainer, 
    ServiceImage, 
    DisplayServicesData, 
    ImageGalleryContainer, 
    ArrowIcon, 
    ImageContainer, 
    DescriptionContent, 
    TestimonialBgContainer, 
    TestimonialHeading, 
    TestimonialContainer, 
    TestimonialListItem, 
    TestimonialItem, 
    TestimonialMessage, 
    TestimonialUserName, 
    TestimonialStartRatingNameContainer,
    TestimonialMessageContainer, 
    Comma, 
    CommaContainer, 
    StarContainer, 
    Star
} from "./styledComponents"; 



const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000, 
        pauseOnHover: true,
        arrows:false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
      };

      const navigate = useNavigate();

    return(
        <BackgroundContainer>
            {/*  */}
            <Header/>
            {/*  */}
            <HomeBackgroundImg data-aos="zoom-in">
                {/* <CompanyLogoContainer  data-aos="zoom-in"> */}
                <CompanyLogo data-aos="zoom-in"
                src=
                'https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' 
                alt='nirmal-dhenu-infra-logo'
                />                    
                {/* </CompanyLogoContainer> */}

                <HomeHeading data-aos="zoom-in">
                Find Your Place of Dream
                </HomeHeading>
                <HomeDescription data-aos="zoom-in">
                Get 100% Genuine & Verified property Customer
                </HomeDescription>
                <ContactUsButton onClick={()=>{navigate('/gallery')}}>Explore Our Gallery<ArrowIcon/></ContactUsButton>
            </HomeBackgroundImg>

            {/*  */}
            <HomeAboutUsContainer data-aos="fade-right">
                <HomeAboutUsHeading>
                    ABOUT US
                </HomeAboutUsHeading>
                <HomeAboutUsNirmalDhenu>
                Welcome to Nirmal Dhenu Infra <br/> <StytleSpan>Your Trusted Partner in Premium Plot Investments!</StytleSpan>
                </HomeAboutUsNirmalDhenu>
                <HomeAboutUsDescription>
                Nirmal Dhenu Infra is a premier real estate company specializing in 
                premium plotted developments. With a vision to create thriving communities 
                and investment opportunities, we are dedicated to providing strategically 
                located, well-planned plots that offer long-term value and growth.Our commitment 
                to quality, transparency, and customer satisfaction ensures that every 
                plot we offer is legally clear, well-developed, and ready for future growth.
                </HomeAboutUsDescription>
                <Button onClick={()=>{navigate('/about-us')}}>
                    KNOW MORE ABOUT US 
                </Button>
            </HomeAboutUsContainer>
            
            {/*  */}
            <HomeHandleEverythingContainer data-aos="fade-left">
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
                                <ImageContainer>
                                <Img src={img} alt={`${id}-${name}`} />
                                </ImageContainer>
                                <Description>
                                    {description}
                                </Description>
                            </DisplayListItem>

                        ))
                    }
                </DisplayListData>
            </HomeHandleEverythingContainer>
            
            {/*  */}
            <HomeGalleryContainer data-aos="fade-right">
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
                                <ImageGalleryContainer>
                                <GalleryImg src={galleryImg} />
                                </ImageGalleryContainer>
                            </DiplayHomeGalleryImg>
                        ))
                    }

                </DisplayHomeGallery>
                <Button onClick={()=>{navigate('/gallery')}}>
                    EXPLORE GALLERY 
                </Button>
            </HomeGalleryContainer>
           
            {/*  */}
            <OurServicesBgContainer data-aos="fade-left">
                <OurServiceHeading>OUR FEATURED SERVICES</OurServiceHeading>
                <DescriptionContent>
                We offer comprehensive services that simplify every aspect of land buying, selling, 
                and investment. With a focus on transparency, customer satisfaction, and expert guidance, 
                we help you make informed property decisions with confidence.
                </DescriptionContent>
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
           
            {/* Testimonial */}
            <TestimonialBgContainer data-aos="zoom-in">
                <TestimonialHeading>TESTIMONIAL</TestimonialHeading>
                <TestimonialContainer>
                <Slider {...settings}>
                    {
                        testimonialData.map(({id, name, color, message, rating})=>{
                            let starRating;
                            if (rating === 3){
                                starRating = <StarContainer><Star/><Star/><Star/><RestStar/><RestStar/></StarContainer>
                            }
                            if (rating === 4){
                                starRating = <StarContainer><Star/><Star/><Star/><Star/><RestStar/></StarContainer>
                            }
                            if (rating===5){
                                starRating = <StarContainer><Star/><Star/><Star/><Star/><Star/></StarContainer>
                            }
                            return(
                            <TestimonialListItem key={id}>
                                <TestimonialItem>
                                    <TestimonialMessageContainer color={color}>    
                                        <CommaContainer>
                                        <Comma/><Comma/>
                                        </CommaContainer>
                                <TestimonialMessage>{message}</TestimonialMessage>
                                </TestimonialMessageContainer>
                                <TestimonialStartRatingNameContainer>
                                <TestimonialUserName color={color}>{name}</TestimonialUserName>
                                {starRating}
                                </TestimonialStartRatingNameContainer>
                                
                                </TestimonialItem>
                            </TestimonialListItem>
                            )
                        })
                    }
                    </Slider>
                </TestimonialContainer>
            </TestimonialBgContainer>
            <Footer/>
            <ScrollToTop/>
        </BackgroundContainer>
        
    )
}

export default Home
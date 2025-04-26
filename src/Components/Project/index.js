import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import {useNavigate} from 'react-router-dom';
import {
    ProjectBgContainer, 
    ProjectContainer, 
    ProjectHeading, 
    ProjectImagesContainer, 
    ProjectImageItem, 
    ProjectImg, 
    DisplayProjectImagesContainer, 
    HoverNavigateContainer, 
    Location, 
    ReadMoreButton, 
    NavigateLinkIcon, 
    ProjectBannerContainer, 
    ProjectTagLineContainer, 
    ProjectImageBanner, 
    ProjectTagLine, 
    ProjectTagLineDescription, 
    ProjectDescription
} from './styledComponent';
import {projectImages} from '../Data';


const Project = () => {
    const navigate = useNavigate();
    const onClickNavigate = (id) => {
        navigate(`/project-detail/${id}`)

    }
    return(
        <ProjectBgContainer>
            <Header/>
            <ProjectBannerContainer data-aos="zoom-in">
            <ProjectImageBanner data-aos="zoom-in" src='https://res.cloudinary.com/da52fiag8/image/upload/v1745502536/beautiful-landscape-delimitation-concept_itiv3a.jpg' alt='project-banner-img' />
                <ProjectTagLineContainer data-aos="zoom-in">
                    <ProjectTagLine data-aos="zoom-in">Turning Land into Landmarks</ProjectTagLine>
                    <ProjectTagLineDescription data-aos="zoom-in">Crafting Iconic Spaces, One Plot at a Time</ProjectTagLineDescription>
                </ProjectTagLineContainer>
            </ProjectBannerContainer>
            <ProjectContainer>
                <ProjectHeading data-aos="fade-right">
                Our Projects
                </ProjectHeading>
                <ProjectDescription data-aos="fade-left">
                At Nirmal Dhenu Infra, each project is a testament to our vision of 
                delivering premium plotted developments with long-term value. 
                We carefully select strategic locations that offer excellent connectivity, 
                growth potential, and serene surroundings. From land acquisition to layout 
                planning and infrastructure development, every step is executed with 
                precision and transparency. Our projects aren’t just about plots—they’re 
                about building future-ready communities where families can thrive and 
                investors can see real growth.
                <br/>


                </ProjectDescription>

                <DisplayProjectImagesContainer data-aos="fade-right">
                <ProjectImagesContainer>
                    {
                        projectImages.map(({id, location, img})=>(
                            <ProjectImageItem key={id} onClick={()=>{onClickNavigate(id)}}>
                                <ProjectImg src={img} alt={`${location}-${id}`} />
                                <HoverNavigateContainer>
                                    <Location>{location}</Location>
                                    <ReadMoreButton>
                                        Read more <NavigateLinkIcon/>
                                    </ReadMoreButton>
                                </HoverNavigateContainer>
                            </ProjectImageItem>
                        ))
                    }
                </ProjectImagesContainer>
                </DisplayProjectImagesContainer>
            </ProjectContainer>
            <ScrollToTop/>
            <Footer/>
        </ProjectBgContainer>

    )
}

export default Project
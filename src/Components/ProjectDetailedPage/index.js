import {useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import {useParams} from 'react-router-dom';
import {
    ProjectDetailedPageBgContainer,
    ProjectDetail, 
    ProjectDetailedContainer, 
    ProjectImageContainer, 
    DisplayProjectImageContainer, 
    ProjectImageCarausalContainer, 
    ProjectDetailContentContainer, 
    MainHeading, 
    StyleLocation, 
    Description, 
    ProjectHeading, 
    ProjectHightLightContainer, 
    ProjectHightLightItem, 
    HightLightItem, 
    ProjectImageCarausalListItem, 
    ProjectCarausalImg, 
    DisplayProjectCarusalImg, 
    LeftArrowButton,
    RightArrowButton
    
} from './styledComponent';
import {projectDetailInformation} from '../Data';

const ProjectDetailedPage = () => {
    const {id} = useParams();
    const filterData = projectDetailInformation.find((eachItem)=> eachItem.projectId === id);
    const [displayImg, setDispalyImg] = useState(1);
    const {projectId, data, location, desription, image, projectHightlights, investmentOpportunity} = projectDetailInformation[0];
    const filterProjectImg = image.find(({id})=>id===displayImg);

    const onClickCarausalImage = (id) => {
        setDispalyImg(id);
    }
    
    const onClickLeftButton = () => {
        setDispalyImg((preState)=>Math.max(1, preState - 1))
    }

    const onClickRightButton = () => {
        setDispalyImg((preState)=>Math.min(4, preState + 1))
    }

    return(
        <ProjectDetailedPageBgContainer>
            <Header/>
            <ProjectDetailedContainer>
                <ProjectDetail>
                    <ProjectImageContainer>
                        <DisplayProjectImageContainer>
                        <LeftArrowButton onClick={onClickLeftButton}/>
                            <DisplayProjectCarusalImg src={filterProjectImg.img} alt={`${filterProjectImg.id}-${id}-img`} />
                        <RightArrowButton onClick={onClickRightButton}/>
                        </DisplayProjectImageContainer>
                    <ProjectImageCarausalContainer>
                        {
                            image.map(({id, img})=>(
                                <ProjectImageCarausalListItem isactive={displayImg}>
                                    <ProjectCarausalImg src={img} alt={`${id}-project-carausal-img`} onClick={()=>onClickCarausalImage(id)} />
                                </ProjectImageCarausalListItem>
                            ))
                        }
                    </ProjectImageCarausalContainer>
                    </ProjectImageContainer>
                    <ProjectDetailContentContainer>
                        <MainHeading>Introducing a New Era in <StyleLocation>{location}</StyleLocation></MainHeading>
                        <Description>{desription}</Description>
                        <ProjectHightLightContainer>
                        <ProjectHeading>Project Highlights</ProjectHeading>
                        {
                            projectHightlights.map(({id, hightlight})=>(
                                <ProjectHightLightItem key={id}>
                                    <HightLightItem>
                                    {hightlight}
                                    </HightLightItem>
                                </ProjectHightLightItem>
                            ))
                        }
                        </ProjectHightLightContainer>
                        <ProjectHeading>Investment Opportunities</ProjectHeading>
                        <Description>{investmentOpportunity}</Description>
                    </ProjectDetailContentContainer>
                </ProjectDetail>
            </ProjectDetailedContainer>
            <ScrollToTop/>
            <Footer/>
        </ProjectDetailedPageBgContainer>

    )
}


export default ProjectDetailedPage
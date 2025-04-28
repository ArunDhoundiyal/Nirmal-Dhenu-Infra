import {useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import {useParams, useNavigate} from 'react-router-dom';
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
    RightArrowButton, 
    ComingSoonMsgContainer, 
    ComingSoonHeading, 
    ComingSoonSpan, 
    ComingSoonMsg, 
    BoldSpan, 
    CompanyLogoContainer, 
    Img, 
    BackButton, 
    BackArrowIcon, 
    ProjectDetailContentCon
    
} from './styledComponent';
import {projectDetailInformation} from '../Data';

const ProjectDetailedPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const filterData = projectDetailInformation.find((eachItem)=> eachItem.projectId === id);
    const [displayImg, setDispalyImg] = useState(1);
    const {data, location, desription, image, projectHightlights, investmentOpportunity} = filterData;
    const filterProjectImg = image.find(({id})=>id===displayImg);

    const onClickCarausalImage = (id) => {
        setDispalyImg(id);
    }
    
    const onClickLeftButton = () => {
        setDispalyImg((preState)=>Math.max(1, preState - 1))
    }

    const onClickRightButton = () => {
        setDispalyImg((preState)=>Math.min(image.length, preState + 1))
    }

    return(
        <ProjectDetailedPageBgContainer>
            <Header/>
            {
                data ? (
                    <ProjectDetailedContainer>
                    <ProjectDetail>
                        <ProjectImageContainer data-aos="zoom-in">
                            <DisplayProjectImageContainer>
                            <LeftArrowButton onClick={onClickLeftButton}/>
                                <DisplayProjectCarusalImg isactive={filterProjectImg.id===5||filterProjectImg.id===6 } src={filterProjectImg.img} alt={`${filterProjectImg.id}-${id}-img`} />
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
                        <ProjectDetailContentContainer data-aos="zoom-in">
                            <MainHeading >Introducing a New Era in <StyleLocation>{location}</StyleLocation></MainHeading>
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
                    <ProjectDetailContentCon>
                    <MainHeading >Introducing a New Era in <StyleLocation>{location}</StyleLocation></MainHeading>
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
                    </ProjectDetailContentCon>
                {/*  */}
                </ProjectDetailedContainer>

                    
                )
                :
                (
                    <ComingSoonMsgContainer data-aos="zoom-in">
                        <CompanyLogoContainer data-aos="zoom-in">
                        <Img src='https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' alt='nirmal-dhenu-infra-company-logo' />
                        </CompanyLogoContainer>
                        
                        <ComingSoonHeading data-aos="zoom-in">
                        Coming <ComingSoonSpan>Soon</ComingSoonSpan>  
                        </ComingSoonHeading>
                        <ComingSoonMsg data-aos="zoom-in">
                        We’re excited to announce the launch of our upcoming plotted 
                        development. Strategically located, legally clear, and 
                        thoughtfully planned — these plots offer the perfect 
                        blend of value, connectivity, and future growth.
                        <br/>
                        <BoldSpan>
                        Stay tuned for more details and get ready to secure your 
                        space in one of the most promising land investment opportunities.
                        </BoldSpan>
                        </ComingSoonMsg>
                        <BackButton onClick={()=>{navigate('/project')}}><BackArrowIcon /> Back</BackButton>
                    </ComingSoonMsgContainer>
                )
            }

            <ScrollToTop/>
            <Footer/>
        </ProjectDetailedPageBgContainer>

    )
}


export default ProjectDetailedPage
import {Helmet} from 'react-helmet-async';

import {
    NotFoundBgContainer,
    NotFoundContainer, 
    Img, 
    BackButton, 
    BackArrowIcon, 
    NotFoundImgContainer, 
    ButtonContainer
} from './styledComponents';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const NotFound = () => {    
    const navigate = useNavigate();
    return(
        <>
        <Helmet>        
            <title>Not found - Nirmal Dhenu Infra</title>
            <meta 
            name='description' 
            content="Discover genuine and verified land properties with Nirmal Dhenu Infra – your trusted partner in premium plot investments." 
            />
            <link rel='canonical' href='/*' />
        </Helmet>

        <NotFoundBgContainer>
            <Header/>
            <NotFoundContainer data-aos="zoom-in">
                <NotFoundImgContainer>
                <Img alt='not-found-img' src='https://res.cloudinary.com/da52fiag8/image/upload/v1745477506/10740175_iwbvrh.jpg'/>
                </NotFoundImgContainer>
                <ButtonContainer>
                <BackButton onClick={()=>{navigate('/')}}><BackArrowIcon/> Back To Homepage</BackButton>
                </ButtonContainer>
            </NotFoundContainer>
            <Footer/>
        </NotFoundBgContainer>
    </>
    )
}


export default NotFound
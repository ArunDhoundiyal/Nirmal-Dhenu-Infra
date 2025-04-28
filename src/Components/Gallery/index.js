import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import {useState} from 'react';
import {
    GalleryBgContainer, 
    DisplayGalleryContainer, 
    GalleryImageContainer, 
    GalleryImage, 
    GalleryHeading,
    GalleryDetailedViewContainer,
    CrossIcon, 
    GalleryDetailedView, 
    RightArrowButton, 
    LeftArrowButton, 
    GalleryDescription
} from './styledComponents';
import {galleryImage} from '../Data';

const Gallery = () => {
    const [galleryId, setGalleryId] = useState(null);
    const onClickGalleryImg = (id) => {
        setGalleryId(id)
    }
    const findImg = galleryImage.find(({id})=>id===galleryId);
    const onClickCloseButton = () => {
        setGalleryId(null)
    }
    const onClickRightButton = () => {
        setGalleryId((preId)=>Math.min(preId+1, galleryImage.length));
    }
    const onClickLeftButton = () => {
        setGalleryId((preId)=>Math.max(preId-1, 1));

    }
    return(
        <GalleryBgContainer>
        <Header/>
            <GalleryHeading data-aos="zoom-in">Our Gallery</GalleryHeading>
            <GalleryDescription data-aos="zoom-in">
            At Nirmal Dhenu Infra, we take pride in showcasing the true potential of every project we undertake. 
            Our gallery captures the essence of our work — from lush green landscapes and well-laid internal 
            roads to clearly demarcated plots and thoughtfully developed infrastructure. 
            Every image reflects our commitment to quality and attention to detail, 
            helping clients visualize not just the land, but the lifestyle 
            and investment value it represents.
            <br/>
            Whether it's a scenic view of a countryside plot, the strategic location near developing zones, 
            or glimpses of ongoing development activities, our gallery brings transparency to the forefront. 
            We believe seeing is believing, and through these images, you can witness the transformation 
            of raw land into high-value assets. Let our visuals guide you to your next smart investment — 
            one plot at a time.


            </GalleryDescription>
        <DisplayGalleryContainer >
        {galleryImage.map(({ id, galleryImg }) => {
            const gridRow = id % 2 === 0 ? 10 : 15;
            return (
            <GalleryImageContainer key={id} gridrow={gridRow} onClick={()=>onClickGalleryImg(id)}>
                <GalleryImage data-aos="zoom-in" src={galleryImg} alt={`gallery-img-${id}`} />
            </GalleryImageContainer>
            );
        })}
        </DisplayGalleryContainer>
        <ScrollToTop/>
        <Footer/>
        {
        galleryId && 
            <GalleryDetailedViewContainer data-aos="zoom-in">
            <GalleryDetailedView>
                <GalleryImage src={findImg.galleryImg} />
                <CrossIcon onClick={onClickCloseButton}/>
                <RightArrowButton onClick={onClickRightButton}/>
                <LeftArrowButton onClick={onClickLeftButton}/>
            </GalleryDetailedView>
            </GalleryDetailedViewContainer>        
        }
        </GalleryBgContainer>
    )
}

export default Gallery
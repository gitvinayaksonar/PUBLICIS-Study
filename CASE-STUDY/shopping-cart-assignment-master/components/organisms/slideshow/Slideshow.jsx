import { useEffect } from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useSelector, useDispatch } from 'react-redux'
import BannerItem from './BannerItem';
import { fetchBanners } from '../../../redux/actions'

function Slideshow(props) { 
    const banners = useSelector((state) => state.banners) ;  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBanners())
    }, [])

    if(!banners.length){
      return null;
    }
    
    return (
        <div style = {{  boxShadow: '0 6px 4px -4px #bdbaba' }}>
            <CarouselProvider
            infinite
            isPlaying
            naturalSlideWidth={90}
            naturalSlideHeight={20}
            totalSlides={banners.length}>        

            <Slider>
                { 
                    banners.map((bannerItem) => {
                        return (
                            <Slide key={bannerItem.id}>
                                <BannerItem bannerItem={bannerItem} />
                            </Slide>
                        )
                    }
                )}
            </Slider>
            
            <div style = {{ justifyContent : 'center', display : 'flex' }}> <DotGroup /> </div>

            
        </CarouselProvider>
        </div>
    )
}


export default Slideshow;



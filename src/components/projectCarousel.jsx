import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './appStyles.css'

const ProjectCarousel = ({images}) => {
   
      return (
        <Carousel 
        showArrows={true} // Show navigation arrows
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide slide index indicator
        emulateTouch={true} // Enable touch swipe on desktop
        dynamicHeight={false} // Adjust slide height dynamically
        swipeable={true} // Enable swipe gestures on touch devices
        >
          {images.map((image) => (
            <div className='carousel' key={image}>
              <img src={image} alt="" />
            </div>
          ))}
        </Carousel>
      );
}

export default ProjectCarousel
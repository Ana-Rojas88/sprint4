import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const CarouselNav = () => {
  const images = [
    { image: image1, text: "First slide" },
    { image: image2, text: "Second slide" },
    { image: image3, text: "Third slide" },
    { image: image4, text: "Fourth slide" }
  ];
  return (
      <Carousel>
        {images.map((item, index) => (
          <Carousel.Item
            key={index}
            className='itemCarousel'
          >
            <Image
            className='imageCarousel'
              src={item.image}
              text={item.text}
            />
          </Carousel.Item>
        ))}
      </Carousel>
  );
};

export default CarouselNav;

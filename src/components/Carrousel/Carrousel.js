import Carousel from 'react-bootstrap/Carousel';
export const Carrousel = () => {
    return (
        <Carousel className="container-md p-1 bg-dark">
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="https://www.pcfactory.cl/public/foto/imbatible/1_2961.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.pcfactory.cl/public/foto/imbatible/20_3071.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Technologies.css';
import { technologies } from '../../data';

const handleDragStart = (e) => e.preventDefault();

const items = technologies.map(({ name, srcImage, color }) => (
    <div onDragStart={handleDragStart} role="presentation">
        <img
            className="d-block w-100 carousel-item-img"
            src={srcImage}
            alt={name}
        />
        <p className="text-center carousel-item-p" style={{ color }}>
            {name}
        </p>
    </div>
));

const responsive = {
    0: { items: 1 },
    400: { items: 2 },
    750: { items: 3 },
    1000: { items: 4 },
    1500: { items: 5 },
};

export const Technologies = () => {
    return (
        <AliceCarousel
            mouseTracking={true}
            disableDotsControls={true}
            infinite={true}
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    );
};

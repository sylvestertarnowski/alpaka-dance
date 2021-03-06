import * as React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import InfoTile from './InfoTile';
import WidthWrapper from '../layout/WidthWrapper';
import '../../css/main/TileCarousel.css';
import '@brainhubeu/react-carousel/lib/style.css';

class TileCarousel extends React.Component {
    tiles = [
        <InfoTile
            key="115"
            image=""
            alt="latino dancing"
            title="New Tile"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
        />,
        <InfoTile
            key="225"
            image=""
            alt="latino dancing"
            title="New Tile"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
        />,
        <InfoTile
            key="335"
            image=""
            alt="latino dancing"
            title="New Tile"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
        />,
        <InfoTile
            key="445"
            image=""
            alt="latino dancing"
            title="New Tile"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
        />
    ]

    responsiveCarousel =
        <Carousel
            arrows
            slidesPerPage={3}
            slidesPerScroll={1}
            infinite
            breakpoints={{
                1200: {
                    slidesPerPage: 2,
                },
                600: {
                    slidesPerPage: 1
                },
            }}
        >
            {this.tiles}
        </Carousel>

    render() {
        return (
            <div className="tile-carousel-container">
                <WidthWrapper>
                    <InfoTile
                        title="Wspierane Aktywności"
                        node={this.responsiveCarousel}
                    />
                </WidthWrapper>
            </div>

        )
    }
}

export default TileCarousel;
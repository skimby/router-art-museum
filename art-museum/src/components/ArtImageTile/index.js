import { Link, useParams } from 'react-router-dom';

const ArtImageTile = ({ art }) => {
    console.log(art)
    return (
        <Link to='/galleries/:galleryId/art/:artId'>
            YO
        </Link>
        // <div></div>
    )
}

export default ArtImageTile;

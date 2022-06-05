import { Link, useParams } from 'react-router-dom';

const ArtImageTile = ({ art }) => {
    // console.log(art)
    const { galleryId } = useParams();
    console.log(galleryId)
    console.log(art)
    return (


        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.images[0].baseimageurl} />
        </Link >
    )
}

export default ArtImageTile;

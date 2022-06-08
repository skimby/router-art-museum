import { Link } from "react-router-dom";


const ArtDescription = (galleryChoice) => {

    return (
        <Link to={`/galleries/${galleryChoice.id}`}>Back To Gallery</Link>
    )

}

export default ArtDescription;

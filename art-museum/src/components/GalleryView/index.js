import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
    let { galleryId } = useParams();
    const galleryChoice = galleries.find((gallery) => gallery.id === parseInt(galleryId))
    console.log(galleryChoice)
    return (
        <h2>{galleryChoice.name}</h2>
    )
}

export default GalleryView;

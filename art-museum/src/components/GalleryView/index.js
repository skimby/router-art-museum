import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
    let { galleryId } = useParams();
    const galleryChoice = galleries.find((gallery) => gallery.id === parseInt(galleryId))
    // const art = galleryChoice.objects.map((gallObj) => {
    //     <ArtImageTile art={gallObj.images} />
    // })
    // console.log(galleries)
    return (
        <div className='page-wrapper'>
            <h2>{galleryChoice.name}</h2>
            <Route exact path='/galleries/:galleryId'>
                {galleryChoice.objects.map((art) => {
                    return (
                        <ArtImageTile art={art} key={art.id} />
                    )
                })}
            </Route>
        </div>
    )
}

export default GalleryView;

import { NavLink } from 'react-router-dom';

import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
    // console.log(galleries);
    return (

        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/">Home</NavLink>
            {galleries.map(gallery => {
                return <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
            })}
        </nav>
    )
}

export default GalleryNavigation;

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () =>{
    return (
        <div className = {styles.container}>
            <nav className = {styles.navbar}>
                <div>
                    <h1 className = {styles.navbar__title} >Movie App</h1>
                </div>
                <div>
                    <ul className = {styles.navbar__list}>
                        <li className = {styles.navbar__item }>
                            <Link className = {styles.navbar__Link} to="/">Home</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className = {styles.navbar__Link} to="/movie/create">Add Movie</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className = {styles.navbar__Link} to="/movie/popular">Popular</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className = {styles.navbar__Link} to="/movie/now">Now Playing</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className = {styles.navbar__Link} to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

//export Navbar
export default Navbar;
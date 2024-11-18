import { Link } from "react-router-dom"
import Path from "../../paths"
export default function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <Link to={Path2D.Home}><img src="sj-party-logo.svg" alt="Logo" className="logo" /></Link>

                    <nav>
                        <ul>
                            <li><Link to={Path.Home}>Начало</Link> </li>
                            <li><a href="/#services">Услуги</a></li>
                            <li><Link to={Path.Gallery}>Галерия</Link> </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <hr className="divider" />
        </>
    )
}
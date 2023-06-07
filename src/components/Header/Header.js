import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                 <Link to="/">Project</Link>
                    <div id="guest">
                        <Link className="button" to="/login">Login</Link>
                        <Link className="button" to="/register">Register</Link>

                    </div>
                    <div id="user">

                        <span>Добре дошли, {null || ("Анонимен  ")}</span>
                        <Link className="button" to="/cv">Curriculum Vitae</Link>
                        <Link className="button" to="/admin">Administrator</Link>
                        <Link className="button" to="/logout">Logout</Link>
                        <Link className="button" to="/about">About</Link>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header;
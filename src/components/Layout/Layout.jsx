import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className='header'>
                <nav className='header-links container'>
                    <Link className='header-link' to="/">Homepage</Link>
                    <Link className='header-link' to="/chats">Chats</Link>
                    <Link className='header-link' to="/profile">Profile</Link>
                </nav>
            </header>
            <main className="container">
                <Outlet />
            </main>

        </>
    );
}

export { Layout }
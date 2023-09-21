import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';

export function Header() {
    const { pathname } = useLocation();

    const { redirectToLogin } = useContext(UserContext);

    async function logout(): Promise<void> {
        await fetch('http://localhost:5000/auth/logout');
        redirectToLogin();
    }

    return (
        <header className="flex items-center justify-center w-full gap-8 px-3 py-2 border-b shadow-md">
            <div className="flex items-center justify-between w-form">
                <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold select-none sm:text-4xl">BLOG.</h1>
                    <a
                        href="https://github.com/MaoShizhong/blog-frontend-author"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/github.png"
                            alt="github link"
                            className="w-8 transition sm:w-12 hover:scale-125"
                        />
                    </a>
                </div>
                <nav className="flex gap-4">
                    {['/login', '/signup'].includes(pathname) ? (
                        <>
                            <NavLink to="/login" className="transition hover:scale-125">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="transition hover:scale-125">
                                Sign up
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/posts" className="transition hover:scale-125">
                                Posts
                            </NavLink>
                            <NavLink to="/posts/new" className="transition hover:scale-125">
                                New Post
                            </NavLink>
                            <button className="transition hover:scale-125" onClick={logout}>
                                Logout
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

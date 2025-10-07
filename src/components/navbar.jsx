import { Link } from "react-router-dom";
import Logo from "./logo";

function Navbar () {
    return (
        <nav className="p-5 bg-black text-white fixed top-0 left-0 w-full z-9999">
            <div className="flex justify-between items-center w-full">
                <Logo/>
                <ul className="flex list-none m-0 p-0">
                    <NavbarListItem href="/">Home</NavbarListItem>
                    <NavbarListItem href="/info">Info</NavbarListItem>
                    <NavbarListItem href="/members">Members</NavbarListItem>
                    <NavbarListItem href="/researh">Research</NavbarListItem>
                    <NavbarListItem href="/publications">Publications</NavbarListItem>
                </ul>
            </div>
        </nav>
    );
}

function NavbarListItem({ href, children }) {
    return (
        <li className="mx-4">
            <Link className="no-underline" to={href}>{children}</Link>
        </li>
    );
}


export default Navbar;
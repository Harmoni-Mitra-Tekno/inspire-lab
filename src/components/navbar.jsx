import { Link } from "react-router-dom";
import Logo from "../../public/logo-emblem.png";
import PillNav from "./animations/pillNav";

function Navbar () {
    return (
        <nav className="p-10 fixed top-0 left-0 w-full z-9999 flex items-center justify-center">
            <PillNav
                logo={Logo}
                logoAlt="Company Logo"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '#about' },
                    { label: 'Members', href: '#members' },
                    { label: 'Research', href: '#research' },
                    { label: 'Publications', href: '#publication' }
                ]}
                activeHref="#none"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#0a0a0a"
                pillColor="#e9f5ff"
                hoveredPillTextColor="#e9f5ff"
                pillTextColor="#0a0a0a"
            />
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
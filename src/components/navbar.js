import Image from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="navbar">
          <ul className='navbar-link'>
            <li><Image src="/logo.svg" width={40} height={40}/></li>
            <li><Link activeClass="active" spy smooth to="project">&lt;Projects /&gt;</Link></li>
            <li><Link activeClass="active" spy smooth to="about">About Me &#40;&#41;</Link></li>
            <li>&#47;&#47; Contact</li>
          </ul>
        </nav>
    )
}
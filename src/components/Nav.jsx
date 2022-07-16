import React, { useRef } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Button from "./sub-components/Button";
import Container from "./sub-components/Container";
const Nav = () => {
  const mobileNavRef = useRef();

  const toggleMenu = () => {
    mobileNavRef.current.classList.toggle("hidden");
  };
  return (
    <Container>
      <nav className="relative font-bold flex items-center justify-between py-10 gap-10">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="hidden lg:flex grow gap-4">
          <li className="text-darkgray hover:text-black">
            <Link to="/">Features</Link>
          </li>
          <li className="text-darkgray hover:text-black">
            <Link to="/">Pricing</Link>
          </li>
          <li className="text-darkgray hover:text-black">
            <Link to="/">Resources</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex gap-6">
          <li className="text-darkgray hover:text-black flex items-center">
            <Link to="/">Login</Link>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </ul>

        {/* mobile menu */}
        <button onClick={toggleMenu} className="lg:hidden space-y-2">
          <div className="w-8 h-1 bg-darkgray"></div>
          <div className="w-8 h-1 bg-darkgray"></div>
          <div className="w-8 h-1 bg-darkgray"></div>
        </button>
        <ul
          ref={mobileNavRef}
          className="hidden absolute w-full left-0 top-full py-9 px-7 font-bold text-white bg-violet lg:hidden rounded-xl text-center "
        >
          <li>
            <Link to="/">Features</Link>
          </li>
          <li className="py-6">
            <Link to="/">Pricing</Link>
          </li>
          <li className="pb-6 border-b lg:border-0 border-solid border-gray/50">
            <Link to="/">Resources</Link>
          </li>
          <li className="py-6">
            <Link to="/">Login</Link>
          </li>
          <li className="w-full">
            <Button className="w-full">
              <Link to="/">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;

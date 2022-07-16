import React from "react";
import { Link } from "react-router-dom";
import Container from "./sub-components/Container";
import Text from "./sub-components/Text";
import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-lightblack text-white py-16">
      <Container>
        <div className="flex flex-wrap gap-24 gap-y-10 flex-col md:flex-row text-center md:text-start">
          <div className="grow">
            <Link className="inline-block" to="/">
              <img src={logo} className="brightness-0 invert" alt="Logo" />
            </Link>
          </div>
          <div>
            <h4 className="font-bold mb-6">Features</h4>
            <ul>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Link Shortening</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Branded Links</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Analytics</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Blog</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Developers</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Support</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">About</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Our Team</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Careers</Link>
                </Text>
              </li>
              <li className="mb-2">
                <Text className="hover:text-cyan">
                  <Link to="/">Contact</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="fill-blue-500"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <img src={pinterestIcon} alt="Pinterest Icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

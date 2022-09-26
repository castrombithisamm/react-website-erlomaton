import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	const [srcollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav srcollNav={srcollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						Erlomaton
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								About Us
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="generalsuplies"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								General Supplies
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="contactus"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Contact Us
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="signup"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Sign Up
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink
							to="/signin"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}
						>
							Sign In
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;

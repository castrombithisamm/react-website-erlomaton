import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg loop autoPlay muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>General Supplies Made Easy</HeroH1>
				<HeroP>
					Sign up for a new account today so we can track your orders.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;

import React from "react";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-7.svg";
import Icon3 from "../../images/svg-8.svg";
import Icon4 from "../../images/svg-4.svg";

import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
} from "./ServicesElements";

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Supplies of Office Stationery</ServicesH2>
					<ServicesP>
						Whether you have a home office or a dedicated space for your whole
						team, you need somewhere to sit and work.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Supplies of Electrical Appliances</ServicesH2>
					<ServicesP>
						We supply Electrical Parts, Workshop Equipment, Ventilation
						Equipment, Electrical Wiring Accessories, Conventional Lighting, LED
						Lighting Equipment, Wood Working Machines, Fire and Safety
						Equipment.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Supplies of Cutlery and Utensils</ServicesH2>
					<ServicesP>
						We supply a wide category of products from display and catering
						ware, chafing dishes, vacuum ware, teaware and kitchen tools.
					</ServicesP>
				</ServicesCard>
				
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;

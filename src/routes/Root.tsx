import React from "react";
import "./Root.css";
import { Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Popover from "@mui/material/Popover";

function Root() {
	const [homeanchorElement, setHomeAnchorElement] =
		React.useState<null | SVGSVGElement>();

	const [aboutAnchorElement, setAboutAnchorElement] =
		React.useState<null | SVGSVGElement>();

	const [loginAnchorElement, setLoginAnchorElement] =
		React.useState<null | SVGSVGElement>();

	const handleHomePopoverOpen = (event: React.MouseEvent<SVGSVGElement>) => {
		setHomeAnchorElement(event.currentTarget);
	};

	const handleAboutPopoverOpen = (event: React.MouseEvent<SVGSVGElement>) => {
		setAboutAnchorElement(event.currentTarget);
	};

	const handleLoginPopoverOpen = (event: React.MouseEvent<SVGSVGElement>) => {
		setLoginAnchorElement(event.currentTarget);
	};
	const handleHomePopoverClose = () => {
		setHomeAnchorElement(null);
	};

	const handleAboutPopoverClose = () => {
		setAboutAnchorElement(null);
	};

	const handleLoginPopoverClose = () => {
		setLoginAnchorElement(null);
	};
	const homeOpen = Boolean(homeanchorElement);
	const aboutOpen = Boolean(aboutAnchorElement);
	const loginOpen = Boolean(loginAnchorElement);

	return (
		<div className="container">
			<header className="header">
				<ul className="list-container">
					<li>
						<h1>Taskify!</h1>
					</li>
					<li className="list-item" id="home">
						<Link href="/Home" id="house">
							<SvgIcon
								component={HomeIcon}
								fontSize="large"
								color="success"
								className="home"
								aria-owns={homeOpen ? "mouse-over-popover" : undefined}
								aria-haspopup="true"
								onMouseEnter={handleHomePopoverOpen}
								onMouseLeave={handleHomePopoverClose}
							></SvgIcon>
							<Popover
								id="mouse-over-popover"
								sx={{ pointerEvents: "none" }}
								open={homeOpen}
								anchorEl={homeanchorElement}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								onClose={handleHomePopoverClose}
								disableRestoreFocus
							>
								<Typography sx={{ p: 1 }}>Home</Typography>
							</Popover>
						</Link>
					</li>
					<li className="list-item" id="about">
						<Link href="" id="about" underline="hover">
							<SvgIcon
								component={InfoIcon}
								fontSize="large"
								sx={{ color: "blue" }}
								id="info"
								aria-owns={aboutOpen ? "mouse-over-popover1" : undefined}
								aria-haspopup="true"
								onMouseEnter={handleAboutPopoverOpen}
								onMouseLeave={handleAboutPopoverClose}
							></SvgIcon>
							<Popover
								id="mouse-over-popover1"
								sx={{ pointerEvents: "none" }}
								open={aboutOpen}
								anchorEl={aboutAnchorElement}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								onClose={handleAboutPopoverClose}
								disableRestoreFocus
							>
								<Typography sx={{ p: 1 }}>About Me</Typography>
							</Popover>
						</Link>
					</li>
					<li className="list-item" id="login">
						<Link href="" id="login" underline="hover">
							<SvgIcon
								component={LoginIcon}
								fontSize="large"
								id="logan"
								aria-owns={loginOpen ? "mouse-over-popover" : undefined}
								aria-haspopup="true"
								onMouseEnter={handleLoginPopoverOpen}
								onMouseLeave={handleLoginPopoverClose}
								color="error"
							></SvgIcon>
							<Popover
								id="mouse-over-popover"
								sx={{ pointerEvents: "none" }}
								open={loginOpen}
								anchorEl={loginAnchorElement}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								onClose={handleLoginPopoverClose}
								disableRestoreFocus
							>
								<Typography sx={{ p: 1 }}>Login And Signup</Typography>
							</Popover>
						</Link>
					</li>
					<li>
						<DarkModeIcon fontSize="large" className="dark"></DarkModeIcon>
					</li>
					<li>
						<FaceIcon
							fontSize="large"
							color="secondary"
							className="face"
						></FaceIcon>
					</li>
				</ul>
			</header>
			<Outlet />
		</div>
	);
}

export default Root;

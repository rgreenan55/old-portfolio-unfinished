import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import { AppBar, Box, Icon, IconButton, Tabs, Tab, Toolbar, Typography, SvgIcon } from "@mui/material";
import MouseTrail from "./MouseTrail.js";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SteamIcon from "@mui/icons-material/SportsEsports";    // Replace this with actual icon

const medias = [
	{link: 'mailto:rjgreenan55@gmail.com', component: <EmailIcon sx={{ fontSize: '30px'}} />},
	{link: 'https://www.linkedin.com/in/robert-greenan/', component: <LinkedInIcon sx={{ fontSize: '30px'}} />},
	{link: 'https://github.com/rgreenan55', component: <GitHubIcon sx={{ fontSize: '30px'}} />},
	{link: 'https://steamcommunity.com/id/Boebi_G', component: <SteamIcon sx={{ fontSize: '30px'}} />}
];

const MainLayout = ({ routes }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [tabValue, setTabValue] = React.useState(location.pathname.substring(1));

	const handleChange = (event, newTabValue) => {
		setTabValue(newTabValue);

		if (event !== 'exterior') {
			navigate(newTabValue);
		}
	};

	React.useEffect(() => {
		handleChange('exterior', location.pathname.substring(1));
	}, [location]);

	return (
		<React.Fragment>
			<MouseTrail />
			{/* Header */}
			<AppBar>
					<Toolbar>
						{/* Title */}
						<Box sx={{ mr: '15px', display: 'flex', flexGrow: 1 }}>
							<QuestionMarkIcon sx={{ mr: 2, fontSize: 30 }} />
							<Typography noWrap variant='h5'> 
								Robert Greenan
							</Typography>
						</Box>
						
						{/* Links */}
						<Box sx={{ mr: '10%', display: 'flex' }}>
							<Tabs value={tabValue} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
								{routes.map(route => (
									<Tab
										key={route}
										label={route}
										value={route}
										sx={{ m: '2px', color: '#FFFFFF' }}
									/>
								))}
							</Tabs>
						</Box>

						{/* Social Media Links */}
						<Box sx={{ mr: '10%', display: 'flex' }}>
							{medias.map((media, i) => (
								<IconButton
									key={i}
									color='secondary'
									size='30px'
									href={media.link}
									target='_blank'
								>
									{media.component}
								</IconButton>
							))}
						</Box>
					</Toolbar>
			</AppBar>
			<Toolbar />
		</React.Fragment>
	)
}

export default MainLayout;

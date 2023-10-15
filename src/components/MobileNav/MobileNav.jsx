import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Home, List } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MobileNav = () => {
	const nav = useNavigate();
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ display: { xs: 'block', md: 'none' }, color: 'text.secondary' }}>
			<BottomNavigation sx={{ backgroundColor: 'background.paper' }} showLabels value={value} onChange={(e, value) => setValue(value)}>
				<BottomNavigationAction label="Home" icon={<Home />} onClick={() => nav('/')} />
				<BottomNavigationAction label="Ditt bibiliotek" icon={<List />} onClick={() => nav('/Library')} />
			</BottomNavigation>
		</Box>
	);
};

export default MobileNav;

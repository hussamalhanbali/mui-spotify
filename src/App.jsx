import { Box, Button, Stack } from '@mui/material';
import './App.css';

function App({ spotifyApi }) {
	console.log(spotifyApi);
	return (
		<Box className="App">
			<h1>Techover Self Made - Spotify</h1>
			<Stack spacing={2} direction={'row'}>
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
		</Box>
	);
}

export default App;

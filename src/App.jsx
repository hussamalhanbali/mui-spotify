import { Box } from '@mui/material';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App({ spotifyApi }) {
	console.log(spotifyApi);
	return (
		<Box className="App">
			<Home />
		</Box>
	);
}

export default App;

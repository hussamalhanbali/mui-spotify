import { Box, Divider, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow';

const SongTable = ({ songs, loading, spotifyApi }) => {
	console.log({ songs, loading, spotifyApi });

	const renderSongs = () => {
		if (loading) {
			return [1, 2, 3, 4, 5].map((e, i) => <SongRow loading={loading} key={i} i={i} images={null} />);
		}
		return songs.map((song, i) => (
			<SongRow
				album={song.album.name}
				images={song.album.images}
				title={song.name}
				artist={song.artists[0].name}
				duration={song.duration_ms / 1000}
				spotifyApi={spotifyApi}
				position={song.position}
				contextUri={song.contextUri}
				key={i}
				i={i}
			/>
		));
	};

	return (
		<Box p={{ xs: 3, md: 4 }} sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
			<Grid container px={2} p={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid sx={{ width: 35, display: 'flex', alignItems: 'center' }} item>
					#
				</Grid>
				<Grid sx={{ flex: 1, display: 'flex', alignItems: 'center' }} item>
					Title
				</Grid>
				<Grid xs={3} sx={{ display: { xs: 'none', md: 'flex' } }} item>
					Album
				</Grid>
				<Grid xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} item>
					<AccessTimeIcon sx={{ width: 20, height: 20 }} />
				</Grid>
			</Grid>
			<Box>
				<Divider sx={{ width: '100%', height: 1 }} />
			</Box>
			{/* <SongRow images={0} artist={'Drake'} album='Her Loss' title={'Rich Flex'} duration='3:32' i={1} loading={false}/> */}
			{renderSongs()}
		</Box>
	);
};

export default SongTable;

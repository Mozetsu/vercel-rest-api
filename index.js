const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.json({ status: 'Online' });
});

app.get('/users', (req, res) => {
	res.json({
		users: [
			{
				id: 1,
				name: 'ice',
			},
			{
				id: 2,
				name: 'thunder',
			},
			{
				id: 3,
				name: 'plasma',
			},
		],
	});
});

app.listen(PORT, '0.0.0.0', () => console.log(`running at ${PORT}`));

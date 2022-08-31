const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e1f2dbc0d7mshd0d7051c04779b7p1b61bbjsnec1444b0cac3',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: '{"search":"Rajdhani"}'
};

fetch('https://trains.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
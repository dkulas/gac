fetch("https://api.github.com/users/<username>")
	.then(data => data.json())
	.then(data => {
		console.log(data);
});
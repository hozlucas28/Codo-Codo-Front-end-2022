function findUsers() {
	const url = 'https://reqres.in/api/users';
	const config = {
		timeout: 1000
	};

	axios
		.get(url, config)
		.then(function (response) {
			// Instrucciones en caso de éxito.
			console.log(response);
		})
		.catch(function (error) {
			// Instrucciones en caso de error.
			console.log(error);
		})
		.then(function () {
			// Instrucciones que siempre se ejecutaran.
		});
}

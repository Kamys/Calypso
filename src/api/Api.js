class Api{
	/**
	 * Key for save auth token in localStorage.
	 * @type {string}
	 */
	static keyAuthToken = 'auth_token';

	static registration = (fullName, login, password) => {
		return new Promise((resolve, reject) => {

			const data = {
				username: login,
				password: password,
				fio: fullName,
				ref_user_type: 1
			};

			fetch('http://likeme-server.net.ru/api/Tests/user/register', {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				},
				mode: 'cors'
			}).then((response) => response.json())
				.then((json) => handleResponse(json)).catch((err) => {
				throw new Error(err);
			});

			function handleResponse (json) {
				if (json.status) {
					resolve(json.data.messages);
					let authToken = json.data['auth_token'];
					localStorage.setItem(Api.keyAuthToken, JSON.stringify(authToken));
				} else {
					reject(json.data.messages);
				}
			}
		});

	};

	static getAuthToken = () => {
		return localStorage.getItem(Api.keyAuthToken);
	}
}

export default Api;
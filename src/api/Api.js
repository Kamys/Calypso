function Api() {
	this.registration = (fullName, login, password) => {

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
			}).then((response) => {
				return response.json();
			}).then((json) => {
				if (json.status) {
					resolve(json.data.messages);
				} else {
					reject(json.data.messages);
				}
			}).catch((err) => {
				throw new Error(err);
			});
		});
	};
}

export default Api;
function URLS() {
	function Login() {
		const URL = "https://host.hangovergaming.dk/exam/api/login";
		return URL;
	}
	function User() {
		const URL = "https://host.hangovergaming.dk/exam/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://host.hangovergaming.dk/exam/api/info/admin";
		return URL;
	}

	function Quote() {
		const URL = "https://host.hangovergaming.dk/exam/api/fetch";
		return URL;
	}

	function Dog() {
		const URL = "https://host.hangovergaming.dk/exam/api/fetch/dogpic";
		return URL;
	}
	function Cat() {
		const URL = "https://host.hangovergaming.dk/exam/api/fetch/catpic";
		return URL;
	}

	return { Login, User, Admin, Quote, Dog, Cat };
}
export default new URLS();

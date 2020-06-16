function URLS() {
	function Login() {
		const URL = "https://host.hangovergaming.dk/exam/api/login";
		return URL;
	}
	function User() {
		const URL = "https://host.hangovergaming.dk/exam/api/user/user";
		return URL;
	}

	function Admin() {
		const URL = "https://host.hangovergaming.dk/exam/api/user/admin";
		return URL;
	}

	function Quote() {
		const URL = "https://host.hangovergaming.dk/exam/api/fetch";
		return URL;
	}

	function Courses() {
		const URL = "https://host.hangovergaming.dk/exam/api/course/all";
		return URL;
	}

	return { Login, User, Admin, Quote, Courses };
}
export default new URLS();

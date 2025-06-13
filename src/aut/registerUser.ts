import axios from 'axios';

interface UserData {
	name: string;
	email: string;
	password: string;
	coursesBought?: string[];
}

async function registerUser(userData: UserData) {
	try {
		const newUser = { ...userData, coursesBought: [] };
		const response = await axios.post('http://localhost:8001/users', newUser);
		return response.data;
	} catch (error: any) {
		if (error.response && error.response.data && error.response.data.message) {
			throw error.response.data.message;
		} else {
			throw 'An error occurred';
		}
	}
}

export { registerUser };

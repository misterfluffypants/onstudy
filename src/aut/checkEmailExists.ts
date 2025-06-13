import axios from 'axios';

async function checkEmailExists(email: string) {
	try {
		const response = await axios.get(`${"http://localhost:8001/users"}?email=${email}`);
		return response.data.length > 0;
	} catch (error: any) {
		throw error.response?.data?.message || 'An error occurred';
	}
}

export { checkEmailExists };
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import About_onstudy from './pages/about_onstudy/AboutOnstudy';
import Courses from './pages/courses/courses';
import PageCourse from './pages/courses/course/PageCourse';
import Admin from './admin/admin';
import Profiel from './pages/profiel/profiel';
import Login from './pages/register&singin/LogIn';
import Singin from './pages/register&singin/SingIn';
import './styles/main.scss';

// json-server --watch courses.json --port 8000
// json-server --watch users.json --port 8001
// json-server --watch mentors.json --port 8002

function useData() {
	const [loading, setLoading] = useState(true);
	const [coursesData, setCoursesData] = useState([]);
	const [coursesCount, setCoursesCount] = useState(0);
	const [usersCount, setUsersCount] = useState(0);
	const [usersData, setUsersData] = useState([]);
	const [mentorsData, setMentorsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [coursesResponse, mentorsResponse, usersResponse] = await Promise.all([
					axios.get('http://localhost:8000/courses'),
					axios.get('http://localhost:8002/mentors'),
					axios.get('http://localhost:8001/users')
				]);

				setCoursesData(coursesResponse.data);
				setCoursesCount(coursesResponse.data.length);
				setMentorsData(mentorsResponse.data);
				setUsersData(usersResponse.data);
				setUsersCount(usersResponse.data.length);
				setLoading(false);
			} catch (error) {
				console.error('Ошибка получения данных:', error);
			}
		};

		fetchData();
	}, []);

	return { loading, coursesData, coursesCount, usersCount, usersData, mentorsData };
}

function App() {
	const { loading, coursesData, coursesCount, usersCount, usersData, mentorsData } = useData();
	const location = useLocation();
	const hideHeaderFooter = /^(\/login|\/register|\/adminkaasdsafdgfassd)$/.test(location.pathname);

	return (
		<div className="content">
			{!hideHeaderFooter && <Header />}
			<Routes>
				<Route path="/" element={<Home coursesCount={coursesCount} usersCount={usersCount} mentorsData={mentorsData} coursesData={coursesData} />} />
				<Route path="/courses" element={<Courses data={coursesData} />} />
				<Route path="/course/:name/:id" element={<PageCourse data={coursesData} />} />
				<Route path="/about-us" element={<About_onstudy usersCount={usersCount} coursesCount={coursesCount} />} />
				<Route path="/adminkaasdsafdgfassd" element={<Admin />} />
				<Route path="/profile/:name" element={<Profiel usersData={usersData} coursesData={coursesData} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Singin />} />
			</Routes>
			{!hideHeaderFooter && <Footer />}
		</div>
	);
}

export default App;

import Hero from '../../components/hero';
import About_us from './sections/AboutUs';
import Popular_courses from './sections/PopularCourses';
import Mentors from './sections/mentors';
import Choice from './sections/choice';
import Statistics from './sections/statistics';
import TypeCourse from '../../type/courses';
import TypeMentors from '../../type/mentors';
import '../../styles/pages/home/home.scss';

interface HomeProps {
	coursesCount: number;
	coursesData: TypeCourse[];
	mentorsData: TypeMentors[];
	usersCount: number;
}

function Home({ coursesCount, coursesData, mentorsData, usersCount }: HomeProps) {
	return (
		<main>
			<Hero />
			<About_us />
			<Statistics usersCount={usersCount} coursesCount={coursesCount} />
			<Popular_courses coursesData={coursesData} />
			<Choice />
			<Mentors mentorsData={mentorsData} />
		</main>
	);
}

export default Home;

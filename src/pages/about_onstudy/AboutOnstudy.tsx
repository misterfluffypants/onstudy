import Statictics from "./sections/statictics";
import Hero from '../../components/hero';
import Founders from "./sections/founders";

interface StatisticsProps {
	coursesCount: number;
	usersCount: number;
}

function About_onstudy({ coursesCount, usersCount }: StatisticsProps) {
	return (
		<main>
			<Hero />
			<Statictics usersCount={usersCount} coursesCount={coursesCount} />
			<Founders />
		</main>
	);
}

export default About_onstudy;
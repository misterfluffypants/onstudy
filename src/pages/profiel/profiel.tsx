import { useState, useEffect } from 'react';
import TypeUsers from '../../type/users';
import TypeCourse from '../../type/courses';
import CardCourse from '../../components/CardCourse';
import { Link } from 'react-router-dom';
import '../../styles/pages/profiel/profiel.scss';

interface ProfielProps {
	usersData: TypeUsers[];
	coursesData: TypeCourse[];
}

function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function Profiel({ usersData, coursesData }: ProfielProps) {
	const [user, setUser] = useState<TypeUsers | null>(null);
	const [userCourses, setUserCourses] = useState<TypeCourse[]>([]);

	useEffect(() => {
		const currentUser = usersData[0];
		if (currentUser) {
			setUser(currentUser);

			const coursesBought = currentUser.coursesBought || [];
			const courses = coursesData.filter(course => coursesBought.includes(course.name));
			setUserCourses(courses);
		}
	}, [usersData, coursesData]);

	const renderUserCourses = () => {
		if (userCourses.length > 0) {
			return (
				<div className="users__courses-row">
					{userCourses.map((course, index) => (
						<CardCourse key={index} course={course} />
					))}
				</div>
			);
		} else {
			return (
				<p className="user__dont-have">
					У вас пока нет купленных курсов. <Link className='buy__course' to="/courses">Купить</Link>
				</p>
			);
		}
	};

	return (
		<main>
			<section className="continue__greeting">
				<div className="container">
					<div className="row">
						<div className="greeting">
							<h2 className="greeting__user title__font">{user ? `${capitalizeFirstLetter(user.name)}, привет!` : 'Привет!'}</h2>
							<p className="greeting__text">Сегодня прекрасный момент, чтобы расширить свои горизонты или применить знания на практике.</p>
						</div>
					</div>
					<div className="user-courses">
						<h2 className="users__courses title__font">Ваши курсы:</h2>
						{renderUserCourses()}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Profiel;

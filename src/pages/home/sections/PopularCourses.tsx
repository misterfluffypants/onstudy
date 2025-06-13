import '../../../styles/pages/home/sections/popular-courses/popular-courses.scss'
import '../../../styles/pages/home/sections/popular-courses/popular-courses_media.css'
import CoursesCard from '../../../components/CardCourse'
import TypeCourse from '../../../type/courses';

interface PopularCoursesProps {
	coursesData: TypeCourse[];
}

function Popular_courses({ coursesData }: PopularCoursesProps) {
	return (
		<section className="popular__courses" >
			<div className="container">

				<div className="popular__courses-text-content">
					<h2 className="popular__courses-title title__font">Популярные курсы</h2>
					<p className="popular__courses-text">
						Готовы совершить прыжок в мир обучения нового века? Не ждите, первый курс за наш счет!
					</p>
				</div>
				<div className="row">
					{coursesData.slice(0, 4).map(course => (
						<CoursesCard key={course.id} course={course} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Popular_courses;
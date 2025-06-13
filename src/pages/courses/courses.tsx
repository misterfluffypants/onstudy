import CardCourse from '../../components/CardCourse';
import TypeCourse from '../../type/courses';
import '../../styles/pages/courses/courses.scss';
import '../../styles/pages/courses/courses_media.scss';

interface CoursesProps {
	data: TypeCourse[];
}

function Courses({ data }: CoursesProps) {
	const freeCourses = data.filter((course) => course.price === 'Free' || course.price === 'Бесплатно');
	const allCourses = data.filter((course) => course.price !== 'Free' && course.price !== 'Бесплатно');

	const renderCourses = (courses: TypeCourse[]) => {
		return courses.map((course) => <CardCourse key={course.id} course={course} />);
	};

	return (
		<main className="courses">
			<section className="all__courses">
				<div className="container">
					<h2 className="all__courses-title title__font">Все курсы</h2>
					<div className="row">
						{renderCourses(allCourses)}
					</div>
				</div>
			</section>
			<section className="free__courses">
				<div className="container">
					<h2 className="free__courses-title title__font">Бесплатные курсы</h2>
					<div className="row">
						{renderCourses(freeCourses)}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Courses;

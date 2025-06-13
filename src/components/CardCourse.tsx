import { Link } from 'react-router-dom';
import TypeCourse from '../type/courses';
import '../styles/components/card-course/card-course.scss';

interface CardCourseProps {
	course: TypeCourse;
}

function CardCourse({ course }: CardCourseProps) {
	const { id, type, name, price, image } = course;
	const maxNameLength = 20;
	const limitedName = name.length > maxNameLength ? `${name.substring(0, maxNameLength)}...` : name;

	return (
		<Link to={`/course/${name}/${id}`} className="course__card">
			<div className="box">
				<div className="course__box-card-left">
					<h6 className="course__text">{type}</h6>
					<h2 className="course__name title__font">{limitedName}</h2>
					<p className="price">{price}</p>
				</div>
				<div className="course__box-card-right">
					<img src={image} alt="" />
				</div>
			</div>
		</Link>
	);
};

export default CardCourse;

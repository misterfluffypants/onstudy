import '../styles/components/mentor-course/mentor-course.scss';
import TypeMentors from '../type/mentors';

interface CardMentorProps {
	mentor: TypeMentors;
}

function MentorCard({ mentor }: CardMentorProps) {
	const { firstName, lastName, description, photoLinkUrl } = mentor;

	return (
		<div className="mentor__card">
			<img className="mentor__photo" src={photoLinkUrl} alt="Mentor Photo" />
			<div className="mentor__card-box">
				<div>
					<h2 className="mentor__name">{`${firstName} ${lastName}`}</h2>
					<p className="mentor__description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default MentorCard;

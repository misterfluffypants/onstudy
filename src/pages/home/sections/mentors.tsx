import '../../../styles/pages/home/sections/mentors/mentors.scss'
import '../../../styles/pages/home/sections/mentors/mentors_media.css'
import MentorCard from '../../../components/MentorCard';
import TypeMentors from '../../../type/mentors';

interface MentorsProps {
	mentorsData: TypeMentors[];
}

function Mentors({ mentorsData }: MentorsProps) {
	return (
		<section className="mentors">
			<div className="container">
				<div className="text__content">
					<h2 className="mentors__title title__font">Наши менторы</h2>
					<p className="mentors__text">
						Получите руководство от увлеченных и опытных профессионалов.
					</p>
				</div>
				<div className="row">
					{mentorsData.slice(0, 3).map(mentor => (
						<MentorCard key={mentor.id} mentor={mentor} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Mentors;
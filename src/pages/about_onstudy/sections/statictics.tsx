import students from '../../../images/Students.svg'
import courses from '../../../images/Courses.svg'
import reviews from '../../../images/Reviews.svg'
import '../../../styles/pages/about_onstudy/sections/statictics/statictics.scss'
import '../../../styles/pages/about_onstudy/sections/statictics/statictics_media.css'

interface StatisticsProps {
	coursesCount: number;
	usersCount: number
}

function Statistics({ coursesCount, usersCount }: StatisticsProps) {
	return (
		<section className="statistics">
			<div className="container">
				<div className="box__flex">
					<p className="choise__text">
						Мы предлагаем большой выбор курсов для профессионального и личностного развития.
					</p>
					<div className="statistics__statistic">
						<img className="statistic__image" src={students} alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">{usersCount}+ студентов</h4>
							<p className="information">Учиться и трудятся</p>
						</div>
					</div>
				</div>
				<div className="statictics">
					<div className="statistics__statistic">
						<img className="statistic__image" src={courses} alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">{coursesCount}+ курсов</h4>
							<p className="information">В различных областях</p>
						</div>
					</div>
					<div className="statistics__statistic">
						<img className="statistic__image" src={reviews} alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">99% удовлетворены</h4>
							<p className="information">Мы делаем обучение интересным!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Statistics;
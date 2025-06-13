import '../../../styles/pages/home/sections/about-us/about-us.scss'
import '../../../styles/pages/home/sections/about-us/about-us_media.css'

function About_us() {
	return (
		<section className="about_us">
			<div className="container">
				<div className="box__flex">
					<h2 className="about_us__title title__font">О нас</h2>
					<p className="about_us__text">
						Мы - команда энтузиастов образования, создавших платформу, чтобы помочь студентам по всему миру достичь своих целей в обучении и карьере. В OnStudy мы стремимся сделать обучение доступным и удобным для всех, независимо от их расположения или ресурсов.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About_us;
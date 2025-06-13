import '../../../styles/pages/about_onstudy/sections/found/found.scss'
import '../../../styles/pages/about_onstudy/sections/found/found_media.css'
import founder__img from '../../../images/mentor.png'

function Founders() {
	return (
		<section className="founders">
			<div className="container">
				<h2 className="founders__title title__font">Основатели платформы</h2>
				<div className="row">
					<div className="founder__card">
						<img src={founder__img} alt="" className="founder__img" />
						<h2 className="founder__name">Иванов Александр</h2>
					</div>
					<div className="founder__card">
						<img src={founder__img} alt="" className="founder__img" />
						<h2 className="founder__name">Смирнова Елена</h2>
					</div>
					<div className="founder__card">
						<img src={founder__img} alt="" className="founder__img" />
						<h2 className="founder__name">Попов Дмитрий</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Founders;
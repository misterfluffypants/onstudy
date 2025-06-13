import '../styles/components/footer/footer.scss'
import '../styles/components/footer/footer_media.scss'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__box">
					<h4 className="footer__text">&copy; 2024 Music — by Playboi Carti</h4>
					{/* <h4 className="footer__text">&copy; 2024 Music — by mirlanbekov nurzhigit</h4> */}
					<div className="social__links">
						<img className="social__link" src="" alt="" />
						<img className="social__link" src="" alt="" />
						<img className="social__link" src="" alt="" />
						<img className="social__link" src="" alt="" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/components/hero/hero.scss'
import '../styles/components/hero/hero_media.css'

function Hero() {
	const [animationPlayed, setAnimationPlayed] = useState(false);

	useEffect(() => {
		const animationAlreadyPlayed = localStorage.getItem('animationPlayed');
		if (!animationAlreadyPlayed) {
			const timeline = gsap.timeline({ delay: .1 });

			timeline.from(".small__circle", { opacity: 0, scale: 0, ease: "power3.out" })
				.from(".bigger__small-circle", { opacity: 0, scale: 0, ease: "power3.out" })
				.from(".big__circle", { opacity: 0, scale: 0, ease: "power3.out" })
				.from(".bigger__big-circle", { opacity: 0, scale: 0, ease: "power3.out" });

			gsap.from(".hero__title", {
				duration: 1,
				delay: 2,
				opacity: 0,
				y: 20,
				ease: "power3.out",
				stagger: {
					each: .1,
					from: "start"
				}
			});

			setAnimationPlayed(false);
			localStorage.setItem('animationPlayed', 'false');
		}
	}, []);

	return (
		<section className="hero">
			<div className="container">
				<h1 className="hero__title">OnStudy</h1>
			</div>
			<div className="circles">
				<div className="bigger__big-circle"></div>
				<div className="big__circle"></div>
				<div className="bigger__small-circle"></div>
				<div className="small__circle"></div>
			</div>
		</section>
	);
}

export default Hero;

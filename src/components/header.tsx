import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from '../images/WhiteLogo.svg';
import '../styles/components/header/header.scss';
import '../styles/components/header/header_media.css';

function Header() {
	useEffect(() => {
		const header = document.querySelector('.header');

		if (header) {
			const headerHeight = header.clientHeight;

			gsap.set(header, { y: 0, position: 'fixed', width: '100%', zIndex: 1000, top: 0 });

			let lastScroll = 0;

			const handleScroll = () => {
				const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
				if (currentScroll > lastScroll) {
					gsap.to(header, { y: -headerHeight, duration: .1, ease: 'power2.inOut' });
				} else {
					gsap.to(header, { y: 0, duration: .1, ease: 'power2.inOut' });
				}
				lastScroll = currentScroll <= 0 ? 0 : currentScroll;
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const menu = document.querySelector('.menu__body');
		const menuBtn = document.querySelector('.menu__icon');
		const body = document.body;

		const toggleMenu = () => {
			if (menu && menuBtn) {
				menu.classList.toggle('active');
				menuBtn.classList.toggle('active');
				body.classList.toggle('lock');
			}
		};

		const closeMenu = (e: any) => {
			if (menu && menuBtn && e.target instanceof HTMLElement && e.target.classList.contains('menu__body')) {
				menu.classList.remove('active');
				menuBtn.classList.remove('active');
				body.classList.remove('lock');
			}
		};

		if (menu && menuBtn) {
			menuBtn.addEventListener('click', toggleMenu);
			menu.addEventListener('click', closeMenu);
			menu.querySelectorAll('.menu__link').forEach(link => {
				link.addEventListener('click', toggleMenu);
			});
		}

		const anchors = document.querySelectorAll('a[href*="#"]');

		const scrollHandler = (event: any) => {
			event.preventDefault();
			const anchor = event.target;
			const blockID = anchor.getAttribute('href')?.substring(1);
			const targetBlock = document.getElementById(blockID || '');

			if (targetBlock) {
				targetBlock.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		};

		anchors.forEach(anchor => {
			anchor.addEventListener('click', scrollHandler);
		});

		return () => {
			if (menu && menuBtn) {
				menuBtn.removeEventListener('click', toggleMenu);
				menu.removeEventListener('click', closeMenu);
				menu.querySelectorAll('.menu__link').forEach(link => {
					link.removeEventListener('click', toggleMenu);
				});
			}
			anchors.forEach(anchor => {
				anchor.removeEventListener('click', scrollHandler);
			});
		};
	}, []);

	return (
		<header className="header">
			<div className="container-header">
				<nav className="nav">
					<Link to="/">
						<div className="logo">
							<img src={Logo} alt="logo" />
							<h2 className="name">OnStudy</h2>
						</div>
					</Link>
					<div className="menu__body">
						<ul className="menu__list">
							<li><Link className="menu__link" onClick={handleClick} to="/">Главная</Link></li>
							<li><Link className="menu__link" onClick={handleClick} to="/courses">Курсы</Link></li>
							<li><Link className="menu__link" onClick={handleClick} to="/about-us">О Нас</Link></li>
						</ul>
					</div>
					<div className="header__burger-btn">
						<Link to="/login" className="header__button">Войти</Link>
						<div className="menu__icon">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;

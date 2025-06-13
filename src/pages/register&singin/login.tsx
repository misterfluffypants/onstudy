import { Link } from 'react-router-dom';
import Logo from '../../images/BlackLogo.svg'
import '../../styles/pages/register&login/login/login.scss'
import '../../styles/pages/register&login/login/login_media.css'

function LogIn() {
	return (
		<main className='login__main'>
			<section className='login'>
				<div className="form">
					<form action="" className="form__org">
						<div className="logo__block">
							<img className="logo" src={Logo} alt="logo" />
							<h2 className="login__title">Вход в профиль</h2>
						</div>
						<div className="input__box">
							<div className="input__block">
								<input
									type="email"
									placeholder="Электронная почта"
									className="login__input"
									required
								/>
							</div>
							<div className="input__block">
								<input
									type="password"
									placeholder="Пароль"
									className="login__input"
									required
								/>
							</div>
						</div>
						{/* <a href="#" className="forgot">Не помню пароль</a> */}
						<div className="login__btn">
							<button type="submit" className="login__button">Войти</button>
						</div>
					</form>

					<div className="login__btn">
						<button className="button"><Link to="/register">Создать профиль</Link></button>

					</div>

				</div>
				<div className="circles">
					<div className="bigger__big-circle"></div>
					<div className="big__circle"></div>
					<div className="bigger__small-circle"></div>
					<div className="small__circle"></div>
				</div>
			</section>
		</main>
	);
}

export default LogIn;
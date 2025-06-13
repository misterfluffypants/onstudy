import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/BlackLogo.svg';
import Arrow from '../../images/arrow.svg';
import { registerUser } from '../../aut/registerUser';
import { checkEmailExists } from '../../aut/checkEmailExists';
import '../../styles/pages/register&login/singin/singin.scss';
import '../../styles/pages/register&login/singin/singin_media.css';

interface UserData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

function checkPasswordsMatch(password: string, confirmPassword: string): boolean {
	return password === confirmPassword;
}

function SingIn() {
	const [userData, setUserData] = useState<UserData>({ name: '', email: '', password: '', confirmPassword: '' });
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserData(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const emailExists = await checkEmailExists(userData.email);
			if (emailExists) {
				setError('Email уже используется');
				return;
			}

			if (!checkPasswordsMatch(userData.password, userData.confirmPassword)) {
				setError('Пароли не совпадают');
				return;
			}

			if (userData.password.length < 6 || userData.password.length > 18) {
				setError('Пароль должен содержать от 6 до 18 символов');
				return;
			}

			const { confirmPassword, ...userDataWithoutConfirmPassword } = userData;

			const response = await registerUser(userDataWithoutConfirmPassword);
			console.log('Регистрация прошла успешно:', response);

			window.location.href = `/profile/${userData.name}`;
		} catch (error: any) {
			setError(error.message);
		}
	};

	return (
		<main className='singin__main'>
			<section className='singin'>
				<div className="form">
					<form className="form__org" onSubmit={handleSubmit}>
						<Link to="/login"><img className="arrow" src={Arrow} alt="arrow" /></Link>
						<div className="logo__block">
							<img className="logo" src={Logo} alt="logo" />
							<h2 className="singin__title">Регистрация</h2>
						</div>
						<div className="input__box">
							<div className="input__block">
								<input
									className="singin__input"
									type="text"
									placeholder="Имя"
									name="name"
									value={userData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="input__block">
								<input
									className="singin__input"
									type="email"
									placeholder="Электронная почта"
									name="email"
									value={userData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="input__block">
								<input
									className="singin__input"
									type="password"
									placeholder="Пароль"
									name="password"
									value={userData.password}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="input__block">
								<input
									className="singin__input"
									type="password"
									placeholder="Повторите пароль"
									name="confirmPassword"
									value={userData.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						{error && <p className="password__error">{error}</p>}
						<button type="submit" className="singin__button">Регистрация</button>
					</form>
					<p className="offer">Нажимая на кнопку, я принимаю оферу и соглашаюсь на обработку персональных данных</p>
					<p className="haveaccaunt">Уже есть аккаунт? <Link to="/login">Войдите</Link></p>
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

export default SingIn;

import logo from '../img/Kraken_logo.jpeg'
import lupa from '../img/search.png'
import empty_profile from '../img/empty_profile.png'

const isAuth = false
const ShowAuthWindow = false
const ShowReg = false

export default function _header() {
    return(
		<div className="head_back">
			<div className="header centered">
				
				<button  className="logo">
					<img src={logo}/>
					
				</button>
				<button className="head_button_left">
					<p>Главная</p>
				</button>                
				<button className="head_button_left">
					<p>Новинки</p>
				</button>
				<div className="search">
					<input type="text" placeholder="Поиск..."/>
					<button>
						<img src={lupa} alt=""/>
					</button>
				</div>    
				<button className="head_button_right">
					<p>Библиотека</p>
				</button>
				<button className="head_button_right profile" onClick={() => {
					if(ShowAuthWindow) ShowAuthWindow = false
					if(!ShowAuthWindow) ShowAuthWindow = true
				}}>
					<div className="profile_pic">
						<img src={empty_profile} alt={empty_profile}/>
					</div>
					<p>Профиль</p>
				</button>
			</div>
			{ShowAuthWindow ? (
				isAuth ? (
					<div className="auth">
						<button>
							<img src={logo} alt=""/>
							<p>Профиль</p>
						</button>
						<button>
							<img src={logo} alt=""/>
							<p>Лайки</p>
						</button>
						<button>
							<img src={logo} alt=""/>
							<p>Плейлисты</p>
						</button>
						<button>
							<img src={logo} alt=""/>
							<p>Подписки</p>
						</button>
					</div>
				)
				:
				(
					ShowReg ? (
						<div className='reg'>
							<input type="text" name="" id="" placeholder="Логин"/>
							<input type="text" name="" id="" placeholder="Почта"/>
							<input type="text" name="" id="" placeholder="Пароль"/>
							<input type="text" name="" id="" placeholder="Повторите пароль"/>
							<button onClick={()=>{
								console.log('Нажата кнопка регистрации')
							}}>
								<p>Зарегестрироваться</p>
							</button>
							<button onClick={()=>{ShowReg = false}}>
								<p>Войти</p>
							</button>
						</div>
					)
					:
					(
					<div className='login'>
						<input type="text" name="" id="" placeholder="Логин"/>
						<input type="text" name="" id="" placeholder="Пароль"/>
						<button onClick={console.log('Нажата кнопка войти')}>
							<p>Войти</p>
						</button>
						<button onClick={()=>{ShowReg = true}}>
							<p>Зарегестрироваться</p>
						</button>
					</div>
					)	
				)
			)
			:
			(
			<div></div>
			)
			}
			
		</div>
    )
}
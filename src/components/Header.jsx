import logo from '../img/Kraken_logo.jpeg'
import lupa from '../img/search.png'
import empty_profile from '../img/empty_profile.png'

const isAuth = false

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
				<button className="head_button_right profile">
					<div className="profile_pic">
						<img src={empty_profile} alt={empty_profile}/>
					</div>
					<p>Профиль</p>
				</button>
			</div>
			{isAuth ? (
				<div className="auth">
					<button>
						<img src="src/img/Kraken_logo.jpeg" alt=""/>
						<p>Профиль</p>
					</button>
					<button>
						<img src="src/img/Kraken_logo.jpeg" alt=""/>
						<p>Лайки</p>
					</button>
					<button>
						<img src="src/img/Kraken_logo.jpeg" alt=""/>
						<p>Плейлисты</p>
					</button>
					<button>
						<img src="src/img/Kraken_logo.jpeg" alt=""/>
						<p>Подписки</p>
					</button>
				</div>
			)
			:
			<div className='loginout'>

			</div>
			}
		</div>
    )
}
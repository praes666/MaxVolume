import { createRoot } from 'react-dom/client'

import _header from './components/Header.jsx'
import _mainpage from './components/Mainpage.jsx'
import _player from './components/Player.jsx'

import './styles/const.css'
import './styles/header.css'
import './styles/player.css'
import './styles/mainpage.css'

createRoot(document.getElementById('root')).render(
    <div className='full'>
        <_header/>
            <_mainpage />
        <_player/>
    </div>
)

import prev from '../img/player/previous.png'
import pause from '../img/player/pause.png'
import play from '../img/player/play.png'
import next from '../img/player/next.png'
import shuffle from '../img/player/shuffle.png'
import repeat from '../img/player/repeat.png'
import volume from '../img/player/volume.png'
import like from '../img/player/liked.png'
// import unlike from '../img/player/unliked.png'

import { useState } from 'react'

import logo from '../img/Kraken_logo.jpeg'

export default function Player(){
    const[isPlaying, setPlaying] = useState(false)
    const[showVolume, setVolume] = useState(false)

    function PlayControl(){
        if(isPlaying)
			{setPlaying(false)}
		if(!isPlaying)
			{setPlaying(true)}
    }

    function volymeControl(){
        if(showVolume)
			{setVolume(false)}
		if(!showVolume)
			{setVolume(true)}
    }

    return(
        <div className="inv">
            <div className='centered'>
                <div className="player">
                    <div className="side_button">
                        <button className="player_button">
                            <img src={prev} alt=""/>
                        </button>

                        {isPlaying ?
                        <button className="player_button" onClick={PlayControl}>
                            <img src={play} alt=""/>
                        </button>
                        :
                        <button className="player_button" onClick={PlayControl}>
                            <img src={pause} alt=""/>
                        </button>
                    }
                        
                        <button className="player_button">
                        <img src={next} alt=""/>
                        </button>

                        <button className="player_button">
                            <img src={repeat} alt=""/>
                        </button>
                        <button className="player_button">
                            <img src={shuffle} alt=""/>
                        </button>
                    </div>
                    <div className="button_mid">
                        <p className="time">--:--</p>
                        <input type="range" min="0" max="" />
                        <p className="time">--:--</p>
                    </div>
                    <div className="side_button">
                        <button className="player_button" onClick={volymeControl}>
                            <img src={volume} alt=""/>
                        </button>
                        {showVolume ? (
                            <div className='volume'>
                                <input type="range" orient="vertical"/>
                            </div>
                        ):<div></div>
                        }
                        
                        <button className="player_button">
                            <img src={like} alt=""/>
                        </button>
                        <div className="trackinfo">
                            <img src={logo} alt=""/>
                            <div className='ti_text'>
                                <p className='track_name'>Название трека</p>
                                <p className='track_author'>Автор</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
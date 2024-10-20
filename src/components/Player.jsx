import prev from '../img/player/previous.png'
import pause from '../img/player/pause.png'
import play from '../img/player/play.png'
import next from '../img/player/next.png'
import shuffle from '../img/player/shuffle.png'
import repeat from '../img/player/repeat.png'
import volume from '../img/player/volume.png'
import like from '../img/player/liked.png'
// import unlike from '../img/player/unliked.png'

import track from '../track.mp3'

import { useState, useRef, useEffect }from 'react'

import logo from '../img/Kraken_logo.jpeg'

export default function Player(){
    const[isPlaying, setPlaying] = useState(false)
    const[currentTime, setCurrentTime] = useState(0)
    const[duration, setDuration] = useState(0)

    const[showVolume, setVolumeActive] = useState(false)
    const[currentVolume, setVolume] = useState(1)

    const audioRef = useRef(null)

    const timeUpdateF = () => {
        setCurrentTime(audioRef.current.currentTime)
        setDuration(audioRef.current.duration)
    }

    const DurSliderChange = (e) => {
        audioRef.current.currentTime = e.target.value
        setCurrentTime(e.target.value)
    }
    
    const playerPlay = () => {
        audioRef.current.play()
        setPlaying(true)
    }
    const playerPause = () => {
        audioRef.current.pause()
        setPlaying(false)
    }
    
    const playerControl = () => {
        audioRef.current.volume = currentVolume * 0.1
        if(isPlaying){playerPause()}
        else{playerPlay()}
    }

    function volumeControl(){
        if(showVolume){setVolumeActive(false)}
		else{setVolumeActive(true)}
    }

    function timeFormating(time){
        const minutes = Math.floor(time/60)
        const seconds = Math.floor(time%60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    useEffect(() => {

        audioRef.current.addEventListener("timeupdate", timeUpdateF)
        return() => {
            audioRef.current.removeEventListener("timeupdate", timeUpdateF)
        }})

    return(
        <div className="inv">
            <div className='centered'>
                <div className="player">
                    <div className="side_button">
                        <button className="player_button">
                            <img src={prev} alt=""/>
                        </button>

                        <button className="player_button" onClick={playerControl}>
                        {isPlaying ? <img src={pause} alt=""/> : <img src={play} alt=""/> }
                        </button>

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
                        <p className="time">{timeFormating(currentTime)}</p>
                        <input
                        type="range"
                        value={currentTime}
                        max={duration}
                        onChange={DurSliderChange}
                        />
                        <p className="time">{timeFormating(duration)}</p>
                    </div>
                    <div className="side_button">
                        <button className="player_button" onClick={volumeControl}>
                            <img src={volume} alt=""/>
                        </button>
                        {showVolume ? (
                            <div className='volume'>
                                <input type="range" defaultValue="50"/>
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
            <audio ref={audioRef} src={track} preload='auto'></audio>
        </div>
    )
}
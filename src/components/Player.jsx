

export default function _player(){
    return(
        <div className="inv">
            <div className="player">
                <div className="side_button">
                    <button className="player_button">
                        <img src="sys_img/previous.png" alt=""/>
                    </button>
                    <button className="player_button">
                        <img src="sys_img/pause.png" alt=""/>
                    </button>
                    <button className="player_button">
                        <img src="sys_img/next.png" alt=""/>
                    </button>
                </div>
                <div className="button_mid">
                    <p className="time">--:--</p>
                    <input type="range" min="0" max="" value="100"/>
                    <p className="time">--:--</p>
                </div>
                <div className="side_button">
                    <button className="player_button">
                        <img src="sys_img/repeat.png" alt=""/>
                    </button>
                    <button className="player_button">
                        <img src="sys_img/shufle.png" alt=""/>
                    </button>
                    <button className="player_button">
                        <img src="sys_img/unliked.png" alt=""/>
                    </button>
                    <button className="player_button">
                        <img src="sys_img/svo.jpg" alt=""/>
                    </button>
                </div>
            </div>
        </div>

    )
}
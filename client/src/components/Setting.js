import React from "react";
import { useNavigate } from "react-router-dom";
import logout from './image/logout.png'
import './style/setting.css'
import Navbar from './navbar'
import bapcai from './image/bapcai.png'
import setvalue from './image/setvalue.png'
import reset from './image/reset.png'
import update from './image/update.png'

function Setting({onLogOut}, {onReset}) {
    const navigate = useNavigate();
    //Handle logout
    const handleLogOut = () => {
      onLogOut()
      navigate('/login')
    };
    return (
        <div>
            <div className = "header" onClick = {handleLogOut}>
                <img src= {logout} alt= "" />
            </div>
            <div className = "navbar">
                <Navbar></Navbar>
            </div>
            <div className = "mainSetting">
                <h1>BẮP CẢI</h1>
                <div className = "child">
                    <div className = "settingImage">
                        <img src= {bapcai} alt= "" />
                    </div>
                    <div className = "setting">
                        <h2>Nhiệt độ:</h2>
                        <div className = "nhietdo">
                            <div className = "setvalue">
                                <img src = {setvalue} alt = "" />
                            </div>
                            <div className = "min">
                                <input type = "number" id= "value" placeholder = "minimum" />
                            </div>
                            <div className = "max">
                                <input type = "number" id= "value" placeholder = "maximum" />
                            </div>
                        </div>
                        <h2>Độ ẩm đất:</h2>
                        <div className = "amdat">
                            <div className = "setvalue">
                                <img src = {setvalue} alt = "" />
                            </div>
                            <div className = "min">
                                <input type = "number" id= "value" placeholder = "minimum" />
                            </div>
                            <div className = "max">
                                <input type = "number" id= "value" placeholder = "maximum" />
                            </div>
                        </div>
                        <h2>Độ ẩm không khí:</h2>
                        <div className = "khongkhi">
                            <div className = "setvalue">
                                <img src = {setvalue} alt = "" />
                            </div>
                            <div className = "min">
                                <input type = "number" id= "value" placeholder = "minimum" />
                            </div>
                            <div className = "max">
                                <input type = "number" id= "value" placeholder = "maximum" />
                            </div>
                        </div>
                        <div className = "final">
                            <div className = "reset">
                                <button type = "button">
                                    <img src = {reset} alt = "" />
                                </button>
                            </div>
                            <div className = "update">
                                <button type = "button">
                                    <img src = {update} alt = "" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
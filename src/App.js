import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Redirect } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./Pages/Header/HeaderPage";
import PomodoroPage from "./Pages/Pomodoro/PomodoroTimer";
import SettingsPage from "./Pages/Authorisation/AuthorisationPage";
import Bot from "./Bot/Bot";
import Clock from "./Pages/Clock/Clock";
import LinksFromChat from "./Pages/LikesFromChat/LinksFromChat";
import SoundLibrary from "./Pages/SoundLibrary/SoundLibrary";
import Test_SoundLibrary from "./Pages/SoundLibrary/Test/Test_SoundLibrary_Line";
import Test_Show_lines from "./Pages/SoundLibrary/Test/Test_Show_Lines";
import Sound_library_Main from "./Pages/SoundLibrary/Test/Sound_Library_Main";
import UseMemo from "./Learning/UseMemo/useMemo";
import AddTrackButton from "./Pages/SoundLibrary/Test/AddTrackButton";
import ButtonDelateTrack from "./Pages/SoundLibrary/Test/ButtonDelateTrack";
import FollowersPage from "./Pages/Followers/FollowersPage";
import { useEffect } from "react";
import twitchLogo from './Pages/twitchLogo.png'
import StylePage from "./Pages/StylePage/StylePage";

const soundList = [
  {
    id: 0,
    name: "bitok",
    url: "https://www.myinstants.com/media/sounds/bitok.mp3",
  },
  {
    id: 1,
    name: "addicted",
    url: "https://www.myinstants.com/media/sounds/nghngh.mp3",
  },
  {
    id: 2,
    name: "breeze",
    url: "https://www.myinstants.com/media/sounds/6896785.mp3",
  },
  {
    id: 3,
    name: "authority",
    url: "https://www.myinstants.com/media/sounds/88775.mp3",
  },
  {
    id: 4,
    name: "counter",
    url: "https://www.myinstants.com/media/sounds/965856756.mp3",
  },
  {
    id: 5,
    name: "sms",
    url: "https://www.myinstants.com/media/sounds/75464556.mp3",
  },
  {
    id: 6,
    name: "acquaintance",
    url: "https://www.myinstants.com/media/sounds/534534.mp3",
  },
  {
    id: 7,
    name: "mark",
    url: "https://www.myinstants.com/media/sounds/574376456454.mp3",
  },
  {
    id: 8,
    name: "expertise",
    url: " https://www.myinstants.com/media/sounds/534bfd5345.mp3",
  },
  {
    id: 9,
    name: "few",
    url: "https://www.myinstants.com/media/sounds/534535.mp3",
  },
  {
    id: 10,
    name: "electron",
    url: "https://www.myinstants.com/media/sounds/5345345.mp3",
  },
  {
    id: 11,
    name: "decide",
    url: "https://www.myinstants.com/media/sounds/5737355-3435.mp3",
  },
  {
    id: 12,
    name: "Tuturu",
    url: "https://www.myinstants.com/media/sounds/tuturu_1.mp3",
  },
  {
    id: 13,
    name: "ethnic",
    url: "https://www.myinstants.com/media/sounds/45754.mp3",
  },
  {
    id: 14,
    name: "theory",
    url: "https://www.myinstants.com/media/sounds/59i56756756.mp3",
  },
  {
    id: 15,
    name: "ancestor",
    url: "https://www.myinstants.com/media/sounds/458756756.mp3",
  },
  {
    id: 16,
    name: "lamp",
    url: "https://www.myinstants.com/media/sounds/37455634.mp3",
  },
  {
    id: 17,
    name: "professor",
    url: "https://www.myinstants.com/media/sounds/34545634.mp3",
  },
  {
    id: 18,
    name: "empire",
    url: "https://www.myinstants.com/media/sounds/384685756.mp3",
  },
  {
    id: 19,
    name: "sticky",
    url: "https://www.myinstants.com/media/sounds/387356.mp3",
  },
  {
    id: 20,
    name: "solution",
    url: "https://www.myinstants.com/media/sounds/579867867.mp3",
  },
  {
    id: 21,
    name: "sweep",
    url: "https://www.myinstants.com/media/sounds/69690686.mp3",
  },
  {
    id: 22,
    name: "growth",
    url: "https://www.myinstants.com/media/sounds/2352342.mp3",
  },
  {
    id: 23,
    name: "mass",
    url: "https://www.myinstants.com/media/sounds/21235513.mp3",
  },
  {
    id: 24,
    name: "representative",
    url: "https://www.myinstants.com/media/sounds/35346376.mp3",
  },
  {
    id: 25,
    name: "hold",
    url: "https://www.myinstants.com/media/sounds/457635634.mp3",
  },
  {
    id: 26,
    name: "discipline",
    url: "https://www.myinstants.com/media/sounds/nghngh.mp3",
  },
  {
    id: 27,
    name: "stake",
    url: "https://www.myinstants.com/media/sounds/5641321681632.mp3",
  },
];

const CreateLibrary = () => {
  if (localStorage.getItem("SoundLibrary") === null) {
    localStorage.setItem("SoundLibrary", JSON.stringify(soundList));
  }
}
CreateLibrary();

if (!sessionStorage.getItem("messages")) {
  const message = []
  sessionStorage.setItem("messages", JSON.stringify(message));
}

if (localStorage.getItem("StandartSound") === null) {
  localStorage.setItem("StandartSound", "...");
}

if (localStorage.getItem("FirstMessageSound") === null) {
  localStorage.setItem("FirstMessageSound", "...");
}



function App() {
  useEffect(() => {
    if (localStorage.getItem("ConectionStatus") === "Connected") {
      try {
        document.getElementById("settingChannelButton").style.color = "#01beff"
        document.getElementById("connectionsStatus").style.color = "#01beff";
        document.getElementById("connectionsStatus").innerHTML = "Connected";
      } catch {}
    }
    if (localStorage.getItem("ConectionStatus") === "Disconnected") {
      try {
        document.getElementById("connectionsStatus").style.color = "red";
        document.getElementById("connectionsStatus").style.color = "red";
        document.getElementById("connectionsStatus").innerHTML = "Disconnected";
      } catch {}
    }
  });

  if (localStorage.getItem("style") === null){
    localStorage.setItem("style", JSON.stringify("https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"))
    localStorage.setItem("red", 0)
    localStorage.setItem("green", 75)
    localStorage.setItem("blue", 146)
    localStorage.setItem("alpha", 0.425)
  }

  const style = `radial-gradient(rgba(${localStorage.getItem("red")},  ${localStorage.getItem("green")},  ${localStorage.getItem("blue")}, ${localStorage.getItem("alpha")}), rgba(0, 18, 53, 0.863)),
  url(${localStorage.getItem("style")})`
  document.body.style.backgroundImage = style


  
  return (
    <div className="App">
      <div className={s.logoHeader}>
        <div className={s.headerText}>
          <img
            className={s.twitchLogo}
            src={twitchLogo}
            alt="logo"
          />
         <span style={{fontFamily: "Verdana", fontSize: "26px"}}>Twitch Sound Alerts</span> 
        </div>
      </div>

      <h4></h4>
      <Header />
      <Bot />
      <Clock />

    

      <Routes>
        <Route path="/" to="/followers" element={<SettingsPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/chat" element={<LinksFromChat />} />
        <Route path="/sound" element={<SoundLibrary />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/style" element={<StylePage />} />
        {/* <Route path="/messages" element={<LinksFromChat />} /> */}
      </Routes>
    </div>
  );
}

export default App;

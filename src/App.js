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

const soundList = [
  {
    id: 0,
    name: "bitok",
    url: "https://www.myinstants.com/media/sounds/bitok.mp3",
  },
  {
    id: 1,
    name: "light 1",
    url: "https://www.myinstants.com/media/sounds/514562.mp3",
  },
  {
    id: 2,
    name: "duck 1",
    url: "https://www.myinstants.com/media/sounds/56162.mp3",
  },
  {
    id: 3,
    name: "duck 2",
    url: "https://www.myinstants.com/media/sounds/89146.mp3",
  },
  {
    id: 4,
    name: "short 1",
    url: "https://www.myinstants.com/media/sounds/5456233.mp3",
  },
  {
    id: 5,
    name: "sms",
    url: "https://www.myinstants.com/media/sounds/0195.mp3",
  },
  {
    id: 6,
    name: "short 2",
    url: "https://www.myinstants.com/media/sounds/0184.mp3",
  },
  {
    id: 7,
    name: "sms 2",
    url: "https://www.myinstants.com/media/sounds/0180.mp3",
  },
  {
    id: 8,
    name: "short 3",
    url: "https://www.myinstants.com/media/sounds/0173.mp3",
  },
  {
    id: 9,
    name: "short 4",
    url: "https://www.myinstants.com/media/sounds/789145.mp3",
  },
  {
    id: 10,
    name: "electron",
    url: "https://www.myinstants.com/media/sounds/84986653.mp3",
  },
  {
    id: 11,
    name: "pock",
    url: "https://www.myinstants.com/media/sounds/56253.mp3",
  },
  {
    id: 12,
    name: "Tuturu",
    url: "https://www.myinstants.com/media/sounds/tuturu_1.mp3"
  }
];

const CreateLibrary = () => {
  if (localStorage.getItem("SoundLibrary") === null) {
    localStorage.setItem("SoundLibrary", JSON.stringify(soundList));
  }
};

CreateLibrary();

if (!sessionStorage.key("messages")) {
  sessionStorage.setItem("messages", "...");
}

if (localStorage.getItem("StandartSound") === null) {
  localStorage.setItem("StandartSound", "...");
}

if (localStorage.getItem("FirstMessageSound") === null) {
  localStorage.setItem("FirstMessageSound", "...");
}

function App() {
  return (
    <div className="App">
      <div className={s.logoHeader}>
        <div className={s.headerText}>
          <img
            className={s.twitchLogo}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png"
            alt="logo"
          />
          Twitch Sound Alerts
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
      </Routes>
    </div>
  );
}

export default App;

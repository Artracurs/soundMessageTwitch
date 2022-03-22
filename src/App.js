import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./Pages/Header/HeaderPage";
import FollowersPage from "./Pages/FollowersPage/FollowersPage";
import PomodoroPage from "./Pages/Pomodoro/PomodoroTimer";
import SettingsPage from "./Pages/Authorisation/AuthorisationPage";
import Bot from "./Bot/Bot";
import Clock from "./Pages/Clock/Clock";
import LikesFromChat from "./Pages/LikesFromChat/LinksFromChat";
import SoundLibrary from "./Pages/SoundLibrary/SoundLibrary";
import Main from "./Pages/FollowersPage/Main/Main";

function App() {
  return (
    <div className="App">
      <div className={s.logoHeader}>
        <div className={s.headerText}><img className={s.twitchLogo} src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="logo"/>Twitch Sound Alerts</div>
      </div>

      <h4></h4>
      <Header />
      <Bot />
      <Clock />

      <Routes>
        <Route path="/" to="/followers" element={<FollowersPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/chat" element={<LikesFromChat />} />
        <Route path="/sound" element={<SoundLibrary />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;

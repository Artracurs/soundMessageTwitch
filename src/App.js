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

// const muter = document.getElementById("muter")
// console.log(muter);

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
        <Route path="/" to="/followers" element={<Test_SoundLibrary />} />
        <Route path="/followers" element={<></>} />
        <Route path="/chat" element={<LinksFromChat />} />
        <Route path="/sound" element={<SoundLibrary />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;

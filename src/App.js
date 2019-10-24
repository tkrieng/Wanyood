import React from 'react';
import { isHoliday } from './holidays';
import './App.css';

var today = new Date()
var tomorrow = new Date(today.toDateString())
tomorrow.setDate(tomorrow.getDate() + 1)
const wanyood = isHoliday(tomorrow)
var wanyoodText = wanyood ? 'เออ หยุด' : 'หยุดพ่อมึง'
var soundFile = wanyood ? './yay.wav' : './fuck.wav'
var sound = new Audio(soundFile)
sound.load()
sound.play()

function App() {
  return (
    <div className="App">
      <p className="question">
        พรุ่งนี้หยุดปะ?
      </p>
      <p className="answer">
        {wanyoodText}
      </p>
    </div >
  );
}

export default App;

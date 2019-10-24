import React from 'react';
import { isHoliday } from './holidays';
import './App.css';

var today = new Date()
var tomorrow = new Date(today.toDateString())
tomorrow.setDate(tomorrow.getDate() + 1)
const wanyood = isHoliday(tomorrow)
var wanyoodText = wanyood ? 'เออ หยุด' : 'หยุดพ่อมึง'
var soundFile = wanyood ? './yay.wav' : './fuck.wav'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <p className="question">
          พรุ่งนี้หยุดปะ?
        </p>
        <p className="answer">
          {wanyoodText}
        </p>
        <audio autoPlay src={soundFile} />
      </div >
    );
  }
}

export default App;

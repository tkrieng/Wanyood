import React from 'react';
import { isHoliday } from './holidays';
import './App.css';

const today = new Date()
var tomorrow = new Date()
const wanyood = isHoliday(today) ? 'เออ หยุด' : 'หยุดพ่อมึง'

function App() {
  return (
    <div className="App">
      <p className="question">
        วันนี้หยุดปะ?
      </p>
      <p className="answer">
        {wanyood}
      </p>
    </div >
  );
}

export default App;

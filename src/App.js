import React from 'react';
import { isHoliday } from './holidays';
import './App.css';

const today = new Date()
var tomorrow = new Date(today.toDateString())
tomorrow.setDate(tomorrow.getDate() + 1)
const wanyood = isHoliday(tomorrow) ? 'เออ หยุด' : 'หยุดพ่อมึง'

function App() {
  return (
    <div className="App">
      <p className="question">
        พรุ่งนี้หยุดปะ?
      </p>
      <p className="answer">
        {wanyood}
      </p>
    </div >
  );
}

export default App;

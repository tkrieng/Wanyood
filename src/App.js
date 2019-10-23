import React from 'react';
import { isHoliday } from './holidays';

const today = new Date()
const wanyood = isHoliday(today) ? 'เออ หยุด' : 'หยุดพ่อมึง'

function App() {
  return (
    <div className="App">
      <p>
        {wanyood}
      </p>
    </div >
  );
}

export default App;

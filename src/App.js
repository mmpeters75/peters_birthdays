import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(2019,5,18);
  var secondDate = new Date();

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  var firstDate2 = new Date(2020,0,10);
  console.log(firstDate2);

  var diffDays2 = Math.round(Math.abs((firstDate2.getTime() - secondDate.getTime())/(oneDay)));

  return (
    <div id="parent">
      <div class="row">
        <div class="column">
          <img src="https://4.bp.blogspot.com/-NpiejDEE5Ys/XD9B60tqp_I/AAAAAAAANSI/zKI_HZTE6oUSUeegMPYySwtLSLhhB-KGQCLcBGAs/s400/20190108_102351.jpg" alt="Xander"/>
        </div>
        <div class="column">
          <h2>{diffDays} Days to Xander's Birthday</h2>
        </div>
      </div>
      <div class="row">
        <div class="column">
        <img src="https://4.bp.blogspot.com/-RH3sCHvpgpI/W7FO3vUuE7I/AAAAAAAALbI/SPp8-p2G9xY-_HZ7xJVxNdK1GdFB-LraQCLcBGAs/s400/DSC_0440.jpg" alt="William"/>
        </div>
        <div class="column">
          <h2>{diffDays2} Days to William's Birthday</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

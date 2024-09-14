import React from 'react';
import './PlayerProfile.css';  // Optional: You can add CSS here or import inline styles

const PlayerProfile = () => {
  return (
    <div className="page">
      <div id="page-wrapper" className="container">
        <div id="playerProfile">
          <div className="cb-col cb-col-100 cb-bg-white">
            <div className="cb-col cb-col-20 cb-col-rt">
              <img height="152" width="152" alt="Virat Kohli" src="https://static.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg" />
            </div>
            <div className="cb-col cb-col-80 cb-player-name-wrap">
              <h1 className="cb-font-40">Virat Kohli</h1>
              <h3 className="cb-font-18 text-gray">India</h3>
            </div>
          </div>
        <div className='container'>
          <div className="cb-col cb-col-100 cb-bg-grey">
            <div className="cb-col cb-col-33 text-black">
              <div className="cb-hm-rght">
                <div className="cb-font-16 text-bold">Personal Information</div>
                <div className="cb-col cb-col-40 text-bold cb-lst-itm-sm">Born</div>
                <div className="cb-col cb-col-60 cb-lst-itm-sm">Nov 05, 1988 (35 years)</div>
                <div className="cb-col cb-col-40 text-bold cb-lst-itm-sm">Birth Place</div>
                <div className="cb-col cb-col-60 cb-lst-itm-sm">Delhi</div>
                <div className="cb-col cb-col-40 text-bold">Height</div>
                <div className="cb-col cb-col-60">5 ft 9 in (175 cm)</div>
                <div className="cb-col cb-col-40 text-bold cb-lst-itm-sm">Role</div>
                <div className="cb-col cb-col-60 cb-lst-itm-sm">Batsman</div>
                <div className="cb-col cb-col-40 text-bold cb-lst-itm-sm">Batting Style</div>
                <div className="cb-col cb-col-60 cb-lst-itm-sm">Right Handed Bat</div>
                <div className="cb-col cb-col-40 text-bold cb-lst-itm-sm">Bowling Style</div>
                <div className="cb-col cb-col-60 cb-lst-itm-sm">Right-arm medium</div>
              </div>
            </div>
          </div>


          <div className="cb-col cb-col-67 cb-bg-white cb-plyr-rt-col">
            <div className="cb-hm-rght cb-player-bio">
              <div className="cb-plyr-tbl">
                <div className="cb-font-16 text-bold cb-lst-dom">Batting Career Summary</div>
                <table className="table cb-col-100 cb-plyr-thead">
                  <thead>
                    <tr className="cb-bg-grey cb-font-12">
                      <th></th>
                      <th className="cb-plyr-th text-right">M</th>
                      <th className="text-right">Inn</th>
                      <th className="text-right">NO</th>
                      <th className="text-right">Runs</th>
                      <th className="text-right">HS</th>
                      <th className="text-right">Avg</th>
                      <th className="text-right">BF</th>
                      <th className="text-right">SR</th>
                      <th className="text-right">100</th>
                      <th className="text-right">200</th>
                      <th className="text-right">50</th>
                      <th className="text-right">4s</th>
                      <th className="text-right">6s</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Test</strong></td>
                      <td className="text-right">113</td>
                      <td className="text-right">191</td>
                      <td className="text-right">11</td>
                      <td className="text-right">8848</td>
                      <td className="text-right">254</td>
                      <td className="text-right">49.16</td>
                      <td className="text-right">15924</td>
                      <td className="text-right">55.56</td>
                      <td className="text-right">29</td>
                      <td className="text-right">7</td>
                      <td className="text-right">30</td>
                      <td className="text-right">991</td>
                      <td className="text-right">26</td>
                    </tr>
                    {/* Additional rows for ODI, T20I, IPL */}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;

import React from 'react';

import './ChapterPage.css';

const ChapterPage = () => {
  return (
    <>
      <div className="container">

        <div className="chapter-header">
          <div className="chapter-title">
            <div className="chapter-colors">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="68" height="68" viewBox="0 0 68 68">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="RectangleMask" data-name="RectangleMask" width="68" height="68" rx="7" fill="#fff"/>
                  </clipPath>
                </defs>
                <g id="ChapterColors" data-name="ChapterColors" transform="translate(-160 -134)">
                  <g id="Mask1" data-name="Mask1" transform="translate(160 134)" clipPath="url(#clip-path)">
                    <path id="Color1" data-name="Color1" d="M0,0H68.3L0,68.3Z" fill="#bf5700"/>
                  </g>
                  <g id="Mask2" data-name="2" transform="translate(160 134)" clipPath="url(#clip-path)">
                    <path id="Color2" data-name="Color2" d="M68.3,0V68.3H0Z" fill="#fff"/>
                  </g>
                </g>
              </svg>
            </div>
            <h1 className="chapter-title-text">University of Texas at Austin</h1>
          </div>
          <div className="chapter-info">
            <h2 className="chapter-location">Austin, Texas - United States</h2>
          </div>
        </div>

        <div className="container-chapterpage">

          <section className="section-chapter-heads">
            <div className="chapter-head-card">
              <div className="chapter-head-title">President</div>
              <div className="chapter-head-displayname">antzu</div>
              <div className="chapter-head-name">Anthony Giacinto</div>
            </div>
            <div className="chapter-head-card">
              <div className="chapter-head-title">Vice President</div>
              <div className="chapter-head-displayname">Jet</div>
              <div className="chapter-head-name">William Maxwell</div>
            </div>
          </section>

          <section className="section-roster">
            <h3 className="section-title">Primary Roster</h3>
            <ul className="roster-list">
              <li className="player">
                <div className="player-info">
                  <div className="player-picture"></div>
                  <div className="player-info-text">
                    <div className="player-displayname">antzu</div>
                    <div className="player-name">Anthony Giacinto</div>
                  </div>
                </div>
                <div className="player-info-alt">
                  <div className="player-rank"><img src="https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank22.png"></img></div>
                  <div className="player-role">Captain</div>
                </div>
              </li>
              <li className="player">
                <div className="player-info">
                  <div className="player-picture"></div>
                  <div className="player-info-text">
                    <div className="player-displayname">Jet</div>
                    <div className="player-name">William Maxwell</div>
                  </div>
                </div>
                <div className="player-info-alt">
                  <div className="player-rank"><img src="https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank22.png"></img></div>
                  <div className="player-role"></div>
                </div>
              </li>
              <li className="player">
                <div className="player-info">
                  <div className="player-picture"></div>
                  <div className="player-info-text">
                    <div className="player-displayname">Aviator</div>
                    <div className="player-name">Kory de la Rosa</div>
                  </div>
                </div>
                <div className="player-info-alt">
                  <div className="player-rank"><img src="https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank22.png"></img></div>
                  <div className="player-role"></div>
                </div>
              </li>
              <li className="player player-sub">
                <div className="player-info">
                  <div className="player-picture"></div>
                  <div className="player-info-text">
                    <div className="player-displayname">Benda</div>
                    <div className="player-name"></div>
                  </div>
                </div>
                <div className="player-info-alt">
                  <div className="player-rank"></div>
                  <div className="player-role">Sub</div>
                </div>
              </li>
              <li className="player player-sub">
                <div className="player-info">
                  <div className="player-picture"></div>
                  <div className="player-info-text">
                    <div className="player-displayname">Scribbs</div>
                    <div className="player-name">Dylan</div>
                  </div>
                </div>
                <div className="player-info-alt">
                  <div className="player-rank"></div>
                  <div className="player-role">Coach</div>
                </div>
              </li>
            </ul>
          </section>

          <section className="section-events">
            <h3 className="section-title section-title-card">Previous Events</h3>
            <ul className="event-list">
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">CCA Summer Series 2021 - West</div>
                <div className="event-placement">13th - 16th</div>
              </li>
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">CCA Summer Series 2021 - West Division II</div>
                <div className="event-placement">4th</div>
              </li>
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">CRL Spring 2019 - South</div>
                <div className="event-placement">9th - 16th</div>
              </li>
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">CRL Fall 2018 - South</div>
                <div className="event-placement">9th - 10th</div>
              </li>
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">DreamHack Austin - AVGL Collegiate Series 2018</div>
                <div className="event-placement">2nd</div>
              </li>
              <li className="event-card">
                <div className="event-logo"></div>
                <div className="event-name">CRL Fall 2017 - South</div>
                <div className="event-placement">7th - 8th</div>
              </li>
            </ul>
          </section>

        </div>

      </div>
    </>
  );
};

export default ChapterPage;
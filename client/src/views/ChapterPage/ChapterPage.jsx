import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../ChapterPage/ChapterPage.css';

const ChapterPage = () => {
  const [chapterInfo, setChapterInfo] = useState([]);
  const [players, setPlayers] = useState([]);
  const [offsetY, setOffsetY] = useState(0);
  const { chapter } = useParams();

  document.title = `${chapterInfo.school} - College Carball Association`;

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    const fetchChapterAPI = async () => {
      let res = await fetch(`http://localhost:3000/api/chapters/${chapter}`);
      res = await res.json();
      setChapterInfo(res);
    }

    const fetchPlayersAPI = async () => {
      let res = await fetch(`http://localhost:3000/api/players`);
      res = await res.json();
      setPlayers(res);
    }

    fetchChapterAPI();
    fetchPlayersAPI();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="container">

        <div className="chapterpage-header">
          <div className="chapter-colors">
            {(chapterInfo.color_primary && chapterInfo.color_secondary) &&
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="68" height="68" viewBox="0 0 68 68">
                <defs>
                  <clipPath id="clipPath">
                    <rect id="rectangleMask" data-name="rectangleMask" width="68" height="68" rx="7"/>
                  </clipPath>
                </defs>
                <g id="chapterColors" data-name="chapterColors">
                  <g id="mask1" data-name="mask1" clipPath="url(#clipPath)">
                    <path id="color1" data-name="color1" d="M0,0H68.3S55.539,21.357,38.465,38.432,0,68.3,0,68.3Z" transform="" fill={chapterInfo.color_primary}/>
                    <path id="color2" data-name="color2" d="M68.3,0V68.3H0Z" fill={chapterInfo.color_secondary}/>
                  </g>
                </g>
              </svg>
            }
          </div>
          <div>
            <h1 className={String(chapterInfo.school).length > 46 ? ('chapter-title chapter-title-long') : ('chapter-title')}>{chapterInfo.school}</h1>
            <div className="chapter-info">
              {(() => {
                let chapterLocation;
                if(chapterInfo.country) {
                  chapterLocation = chapterInfo.country;
                  if(chapterInfo.state) {
                    chapterLocation = `${chapterInfo.state} - ` + chapterLocation;
                    if(chapterInfo.city) {
                      chapterLocation = `${chapterInfo.city}, ` + chapterLocation;
                    }
                  }
                }
                return <h2 className="chapter-location">{chapterLocation}</h2>;
              })()}
              {chapterInfo.region &&
                <h2 className="chapter-region">{chapterInfo.region} Conference</h2>
              }
            </div>
          </div>
        </div>

        <div className="chapterpage-design">
          <div className="design-chapter-region" style={{ transform: `translateY(${ offsetY * 0.4 }px)` }}>{chapterInfo.region}</div>
        </div>

        <div className="chapterpage-container">
          {(chapterInfo.president_id || chapterInfo.vice_president_id) &&
            <section className="section-chapter-heads">
              {players.map(player => {
                if(player.player_id == chapterInfo.president_id) {
                  return (
                    <div key={player} className="chapter-head-card">
                      <div className="chapter-head-title">President</div>
                      <div className="chapter-head-displayname">{player.username}</div>
                      <div className="chapter-head-name">{player.full_name}</div>
                    </div>
                  );
                }
              })}
              {chapterInfo.vice_president_id &&
                players.map(player => {
                  if(player.player_id == chapterInfo.vice_president_id) {
                    return (
                      <div key={player} className="chapter-head-card">
                        <div className="chapter-head-title">Vice President</div>
                        <div className="chapter-head-displayname">{player.username}</div>
                        <div className="chapter-head-name">{player.full_name}</div>
                      </div>
                    );
                  }
                })
              }
            </section>
          }
        </div>

      </div>
    </>
  );
};

export default ChapterPage;
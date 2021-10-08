import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../ChapterPage/ChapterPage.css';

const ChapterPage = () => {
  const [chapterInfo, setChapterInfo] = useState([]);
  const [offsetY, setOffsetY] = useState(0);
  const { chapter } = useParams();

  document.title = `${chapterInfo.school} - College Carball Association`;

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    const fetchAPI = async () => {
      let res = await fetch(`http://localhost:3000/api/chapters/${chapter}`);
      res = await res.json();
      setChapterInfo(res);
    }

    fetchAPI();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let chapterTitle = String(chapterInfo.school);
  let chapterTitleLong;
  let chapterLocation;
  let chapterRegion;

  if(chapterTitle.length > 46) {
    chapterTitleLong = 'chapter-title-long';
  }

  if(chapterInfo.country) {
    chapterLocation = chapterInfo.country;
    if(chapterInfo.state) {
      chapterLocation = `${chapterInfo.state} - ` + chapterLocation;
      if(chapterInfo.city) {
        chapterLocation = `${chapterInfo.city}, ` + chapterLocation;
      }
    }
  }

  if(chapterInfo.region) {
    chapterRegion = `${chapterInfo.region} Conference`;
  }

  return (
    <>
      <div className="container">

        <div className="chapter-header">
          <div className="chapter-colors">
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
          </div>
          <div>
            <h1 className={`chapter-title ${chapterTitleLong}`}>{chapterInfo.school}</h1>
            <div className="chapter-info">
              <h2 className="chapter-location">{chapterLocation}</h2>
            </div>
          </div>
          
        </div>

        <div className="page-design">
          <div className="design-chapter-region" style={{ transform: `translateY(${ offsetY * 0.4 }px)` }}>{chapterInfo.region}</div>
        </div>

        <div className="container-chapterpage">

        </div>

      </div>
    </>
  );
};

export default ChapterPage;
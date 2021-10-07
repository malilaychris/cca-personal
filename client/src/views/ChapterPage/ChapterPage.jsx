import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../ChapterPage/ChapterPage.css';

const ChapterPage = () => {
  const [chapterInfo, setChapterInfo] = useState([]);
  const { chapter } = useParams();

  const [offsetY, setOffsetY] = useState(0);
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

  let chapterLocation = '';

  if(chapterInfo.country) {
    chapterLocation = `${chapterInfo.country}`;
    if(chapterInfo.state) {
      chapterLocation = `${chapterInfo.state} - ` + chapterLocation;
      if(chapterInfo.city) {
        chapterLocation = `${chapterInfo.city}, ` + chapterLocation;
      }
    }
  }

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
                    <path id="Color1" data-name="Color1" d="M0,0H68.3L0,68.3Z" fill={`${chapterInfo.color_primary}`}/>
                  </g>
                  <g id="Mask2" data-name="2" transform="translate(160 134)" clipPath="url(#clip-path)">
                    <path id="Color2" data-name="Color2" d="M68.3,0V68.3H0Z" fill={`${chapterInfo.color_secondary}`}/>
                  </g>
                </g>
              </svg>
            </div>
            <h1 className="chapter-title-text">{chapterInfo.school}</h1>
          </div>
          <div className="chapter-info">
            <h2 className="chapter-location">{chapterLocation}</h2>
          </div>
        </div>

        <div className="chapter-region" style={{ transform: `translateY(${ offsetY * 0.4 }px)` }}>{chapterInfo.region}</div>

        <div className="container-chapterpage">

        </div>

      </div>
    </>
  );
};

export default ChapterPage;
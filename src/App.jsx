import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

function Header () {
  const [arrowCount, setArrowCount] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setArrowCount(prev => (prev < 4 ? prev + 1 : 1));
    if (window.innerWidth < 800) {
      setArrowCount(1);
    }
    if (window.innerWidth < 990) {
      setArrowCount(prev => (prev < 3 ? prev + 1 : 1));
    }
  }, 340);

  return () => clearInterval(interval);
}, []);

  return (
    <header>
      <div>
        <span>
          {[...Array(arrowCount)].map((_, i) => (
            <FontAwesomeIcon key={`${arrowCount}-${i}`} icon={faAnglesRight} />
          ))}
        </span>
        <div className="favicon-container">
          <img src="/public/favicon.ico" alt="Favicon" id="favicon" />
        </div>
        <span>
          {[...Array(arrowCount)].map((_, i) => (
            <FontAwesomeIcon key={`${arrowCount}-${i}`} icon={faAnglesLeft} />
          ))}
        </span>
      </div>
      <h1>Bienvenue sur le portfolio de <cite>SanguinatorX</cite> !</h1>
    </header>
  );
}

function App () {
  const textColor = useSelector((state) => state.textColor);
  return (
    <div className='App' style={{ color: textColor }}>
      <Header />
      <p>
        Je suis un développeur passionné par la création de projets innovants et fonctionnels.
        Sur ce portfolio, vous trouverez une sélection de mes travaux les plus récents,
        ainsi que des informations sur mes compétences et mon parcours professionnel.
      </p>
      <p>
        N'hésitez pas à parcourir les différentes sections pour en savoir plus sur mes projets et mes expériences.
        Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter !
      </p>
    </div>
  )
}

export default App;

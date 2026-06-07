import './App.css';

function Header () {
  return (
    <header>
      <div className="favicon-container">
        <img src="/public/favicon.ico" alt="Favicon" id="favicon" />
      </div>
      <h1>Bienvenue sur le portfolio de <cite>SanguinatorX</cite> !</h1>
    </header>
  );
}

function App () {
  return (
    <div className='App'>
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

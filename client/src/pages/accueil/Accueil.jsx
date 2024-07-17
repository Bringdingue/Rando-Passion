import "./Accueil.css";
import accueilImage from "../../assets/images/Passerelles.jpg";

function Accueil() {
  return (
    <main>
      <div className="accueil-container">
        <h1>Présentation</h1>
        <p>
          Bienvenue sur Rando’Passion, votre plateforme dédiée aux passionnés de
          randonnées ! Que vous soyez un randonneur expérimenté ou un novice
          désireux de découvrir les merveilles de la nature, notre site est fait
          pour vous. Ici, vous pouvez échanger des conseils et partager vos
          itinéraires préférés. Notre communauté est fondée sur la passion
          commune pour la marche, la découverte de nouveaux paysages et le
          respect de l'environnement. Rejoignez-nous pour vivre des aventures
          inoubliables, découvrir des sentiers méconnus et rencontrer d'autres
          amoureux de la nature. N'attendez plus, inscrivez-vous et commencez à
          explorer le monde à pied avec nous. Ensemble, faisons de chaque
          randonnée une expérience unique et enrichissante. Bonne randonnée sur
          Rando’Passion !
        </p>
      </div>
      <img className="accueil-image" src={accueilImage} alt="passerelles" />
    </main>
  );
}

export default Accueil;

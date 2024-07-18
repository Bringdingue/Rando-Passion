import "./MesRandos.css";
import maRandoImage from "../../assets/images/Passerelles.jpg";

function MesRandos() {
  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <main>
      <div className="mes-randos">
        <div className="img-container">
          <h1>Mes Randos</h1>
          <img className="ma-rando-image" src={maRandoImage} alt="" />
        </div>
        <h2>Passerelles himalayennes du Monteynard</h2>
      </div>
      <div className="text-mes-randos">
        <h3>lieux: Treffort</h3>
        <h3>description:</h3>
        <p>
          D'une longueur de 12,5 km, le circuit de randonnée des passerelles
          himalayennes est une boucle originale qui vous fera franchir les
          gorges du Drac et celles de l'Ebron en empruntant successivement la
          passerelle himalayenne du Drac (220m) et la passerelle himalayenne de
          l'Ebron (180m).
        </p>
        <p>publié part:</p>
      </div>

      <form>
        <div>
          <label htmlFor="comments">
            Commentaires:
            <textarea
              name="comments"
              id="comments"
              placeholder="Commentaires"
              onInput={adjustTextareaHeight}
            />
          </label>
        </div>
      </form>
    </main>
  );
}

export default MesRandos;

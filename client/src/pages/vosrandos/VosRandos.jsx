import { useState, useEffect } from "react";
import "./VosRandos.css";
import { Link } from "react-router-dom";
import addImage from "../../assets/images/plus.png";

function VosRandos() {
  const [randos, setRandos] = useState([]);

  // URL de base de l'API
  const ApiUrl = import.meta.env.VITE_API_URL;

  // Fonction pour récupérer les données des randonnées
  const fetchRandoData = async () => {
    try {
      const response = await fetch(`${ApiUrl}/vosRandos/randoByUser?user=1`);
      if (!response.ok) {
        throw new Error("The network response was not OK");
      }
      const data = await response.json();

      setRandos(data);
    } catch (err) {
      console.error("Menu data recovery failed:", err);
    }
  };

  useEffect(() => {
    fetchRandoData();
  }, []);

  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <main>
      <div className="vos-randos">
        <div className="img-container">
          <div className="add">
            <h1>Vos Randos</h1>
            <Link to="/Ajout-Rando">
              <img className="add-image" src={addImage} alt="add" />
            </Link>
          </div>
        </div>
        {randos.map((rando) => (
          <div key={rando.id}>
            <img
              className="vos-rando-image"
              src={`/images/${rando.image}`}
              alt={rando.title}
            />
            <h2>{rando.title}</h2>
            <div className="text-vos-randos">
              <h3>lieux: {rando.location}</h3>
              <h3>description:</h3>
              <p>{rando.description}</p>
              <p>publié par: {rando.user_id}</p>
            </div>
          </div>
        ))}
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

export default VosRandos;

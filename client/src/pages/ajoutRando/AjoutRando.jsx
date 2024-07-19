import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AjoutRando() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const [randoForm, setRandoForm] = useState({
    title: "",
    location: "",
    description: "",
    userId: 1, // Valeur par défaut pour l'utilisateur connecté
  });
  const navigate = useNavigate();

  const handleRandoForm = (e) => {
    const { name, value } = e.target;
    setRandoForm({ ...randoForm, [name]: value });
  };
  // console.log("coucou");
  // console.log(randoForm);

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/vosRandos`, {
        method: "POST",
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(randoForm), // Envoyer l'objet randoForm directement
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      notifySuccess("Rando ajoutée avec succès");

      // Rediriger vers la page VosRandos
      navigate("/Vos-Randos");
    } catch (error) {
      console.error("Erreur lors de l'ajout de la rando:", error);
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <div className="ajout-rando">
      <h1>Ajouter une Rando</h1>
      <form onSubmit={handleSubmitForm} className="form-container">
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            className="nes-input"
            value={randoForm.title}
            onChange={handleRandoForm}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Lieu</label>
          <input
            type="text"
            name="location"
            className="nes-input"
            value={randoForm.location}
            onChange={handleRandoForm}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="nes-input"
            value={randoForm.description}
            onChange={handleRandoForm}
            required
          />
        </div>
        <button type="submit" className="validate">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AjoutRando;

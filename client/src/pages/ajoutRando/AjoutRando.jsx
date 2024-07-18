import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AjoutRando.css";

function AjoutRando() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState(1); // Vous pouvez changer cette valeur pour correspondre à l'utilisateur connecté
  const navigate = useNavigate();

  console.info(setUserId);

  const ApiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("user_id", userId);

    try {
      const response = await fetch(`${ApiUrl}/vosRandos`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.info("Rando added successfully:", data);

      // Redirect to VosRandos page
      navigate("/vosRandos");
    } catch (error) {
      console.error("Error adding rando:", error);
    }
  };

  return (
    <div className="ajout-rando">
      <h1>Ajouter une Rando</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Lieu:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AjoutRando;

import { useState } from "react";
import "./AjoutRando.css";

function AjoutRando() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Ajouter une Rando</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group0">
            <label>
              Nom de la rando:
              <input
                id="pseudo2"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group1">
            <label>
              Lieu:
              <input
                id="mail2"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group2">
            <label>
              Description:
              <textarea
                id="mot2"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group3">
            <label>
              Image:
              <input
                id="confirm-mot2"
                type="file"
                name="image"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
          <div className="form-group4">
            <button type="submit" className="validate2">
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AjoutRando;

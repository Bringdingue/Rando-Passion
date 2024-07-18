import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Inscription.css";

function Register() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      notifyFail("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/auth/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: registerForm.username,
          email: registerForm.mail,
          password: registerForm.password,
        }),
      });

      if (response.status === 201) {
        notifySuccess(
          "Votre profil a bien été créé. Vous pouvez vous connecter"
        );
        setTimeout(() => {
          navigate("/connexion");
        }, 2000);
      } else {
        const errorData = await response.json();
        notifyFail(errorData.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error(err);
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <div className="form-group1">
        <label htmlFor="username">Pseudo</label>
        <input
          type="text"
          name="username"
          className="nes-input"
          value={registerForm.username}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group2">
        <label htmlFor="mail">Adresse mail</label>
        <input
          type="email"
          name="mail"
          className="nes-input"
          value={registerForm.mail}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group3">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          className="nes-input"
          value={registerForm.password}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group4">
        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          className="nes-input"
          value={registerForm.confirmPassword}
          onChange={handleRegisterForm}
        />
      </div>
      <button type="submit" className="validate2">
        S'enregistrer
      </button>
    </form>
  );
}

export default Register;

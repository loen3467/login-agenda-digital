import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SignInGoogle } from "./SignInGoogle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Captcha from "./Captcha";

export function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errMsg, setErrMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const captchaRef = useRef(null);

  const tooglePassVisible = () => {
    setVisible(!visible);
  };

  const Ingresar = (e) => {
    e.preventDefault();

    if (!values.email || !values.pass) {
      setErrMsg("Llenar todos los campos.");
      return;
    }
    if (!captchaRef.current.getValue()) {
      setErrMsg("Por favor acepta el captcha.");
      return;
    }
    setErrMsg("");

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setErrMsg(error.message);
        console.log(error);
        console.log(error.code);
        let message = "";
        switch (error.code) {
          case "auth/invalid-credential":
            message = "Email y contraseña incorrectas.";
            break;
          default:
            message =
              "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.";
            break;
        }
        setErrMsg(message);
      });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={Ingresar}>
        <h1 className="title">Iniciar Sesión</h1>
        <div className="social-container">
          <SignInGoogle />
        </div>
        <span>o utiliza tu cuenta</span>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />
        <div className="w-full relative">
          <input
            type={visible ? "text" : "password"}
            placeholder="Contraseña"
            autoComplete="current-password"
            required
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <button
            type="button"
            onClick={tooglePassVisible}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 hover:text-gray-600 focus:outline-none"
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <Captcha ref={captchaRef} />
        <a href="#">Olvidaste tu contraseña</a>
        <div
          className={`mb-4 w-full p-2 bg-red-100 border border-red-400 text-red-700 rounded-md ${
            errMsg ? "block" : "hidden"
          }`}
        >
          {errMsg}
        </div>
        <button className="btn-login" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

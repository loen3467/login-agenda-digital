import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Captcha from "./Captcha";

export function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    confPass: "",
  });
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [visible, setVisible] = useState({ pass: false, confPass: false });

  const tooglePassVisible = () => {
    setVisible((prev) => ({ ...prev, pass: !prev.pass }));
  };
  const toogleConfPassVisible = () => {
    setVisible((prev) => ({ ...prev, confPass: !prev.confPass }));
  };

  const Register = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.pass || !values.confPass) {
      setErrMsg("Llene todos los campos vacíos.");
      return;
    }
    if (values.pass !== values.confPass) {
      setErrMsg("Las contraseñas no coinciden.");
      return;
    }
    if (!captchaRef.current.getValue()) {
      setErrMsg("Por favor acepta el captcha.");
      return;
    }
    setErrMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
        navigate("/");
      })
      .catch((error) => {
        setErrMsg(error.message);
      });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={Register}>
        <h1 className="title">Crea tu Cuenta</h1>
        <input
          type="text"
          placeholder="Nombre"
          autoComplete="given-name"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <div className="w-full relative">
          <input
            type={visible.pass ? "text" : "password"}
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
            {visible.pass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="w-full relative">
          <input
            type={visible.confPass ? "text" : "password"}
            placeholder="Confirme su contraseña"
            autoComplete="current-password"
            required
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                confPass: event.target.value,
              }))
            }
          />
          <button
            type="button"
            onClick={toogleConfPassVisible}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 hover:text-gray-600 focus:outline-none"
          >
            {visible.confPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <Captcha ref={captchaRef} />
        <div
          className={`mb-4 w-full p-2 bg-red-100 border border-red-400 text-red-700 rounded-md ${
            errMsg ? "block" : "hidden"
          }`}
        >
          {errMsg}
        </div>
        <button className="btn-login" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

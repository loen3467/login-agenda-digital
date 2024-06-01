import styled from "styled-components";
import logoAgendaDigital from "../../assets/logo_ad.jpg";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useState } from "react";
export function LoginContainer() {
  const [loginPanel, setLoginPanel] = useState(false);
  const handleLoginPanel = () => {
    setLoginPanel(!loginPanel);
  };
  return (
    <Container>
      <div
        className={`container ${loginPanel ? "right-panel-active" : ""}`}
        id="container"
      >
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="title">¡Bienvenido de Nuevo!</h1>
              <p>
                Para mantenerse conectado con nosotros, inicie sesión con su
                información personal
              </p>
              <button
                className="btn-login ghost"
                id="signIn"
                onClick={handleLoginPanel}
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="title">¡Hola, Amigo!</h1>
              <p>
                Introduce tus datos personales y comienza tu viaje con nosotros.
              </p>
              <button
                className="btn-login ghost"
                id="signUp"
                onClick={handleLoginPanel}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .title {
    font-weight: bold;
    margin: 0;
    font-size: 2.5rem;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 1rem;
  }

  a {
    color: #000000;
    font-size: 1rem;
    text-decoration: none;
    margin: 15px 0;
    &:hover {
      color: gray;
    }
  }

  .btn-login {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;

    transition: transform 80ms ease-in;
    transition: all 0.25s ease;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
      cursor: pointer;
    }
    &:active {
      transform: scale(0.95);
    }
    &:focus {
      outline: none;
    }
  }
  .ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25), 0 1rem 1rem rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 800px;
    max-width: 100%;
    min-height: 680px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
    .btniniciar {
      display: flex;
      align-items: center;
      gap: 12px;
      border-style: none;

      img {
        width: 30px;
      }
      background-color: white;

      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 400;
      font-size: 0.9rem;
      transition: all 0.25s ease;
      box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
        cursor: pointer;
      }
    }
  }
`;

{
  /* <Container>
      <section className="imgseccion">
        <h1>BIENVENIDOS</h1>
        <h1>AGENDA DIGITAL</h1>
        <img src={logoAgendaDigital} alt="" />
        <div className="fondocontent">
          <img src={astronauta} />
        </div>
        <h4>Hola, inicia sesión con tu cuenta o crea una si no tienes.</h4>
      </section>
      <section className="panelsesion">
        <LoginEmailPassword />
      </section>
    </Container> */
}

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   padding: 30px;
//   background: radial-gradient(#b5ffff, #239089);
//   flex-direction: column-reverse;
//   width: 100%;

//   .imgseccion {
//     background: radial-gradient(#b5ffff, #239089);

//     border-radius: 15px;
//     padding: 20px;

//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     text-align: center;
//     gap: 35px;
//     margin-top: 20px;
//     box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.12);
//     h1 {
//  font-size: 35px;
//  font-weight: 650;
//  color: #ffffff;
// //     }
// //     .fondocontent {
//  display: flex;
//  justify-content: center;
//  img {
//    width: 50%;
//    -webkit-animation: flotar 3s ease-in-out infinite;
//    animation: flotar 3s ease-in-out infinite;
//  }
// //     }
// //   }

// //   .panelsesion {
// //     display: flex;
// //     flex-direction: column;
// //     gap: 40px;
// //     height: 100%;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     h2 {
//  color: white;
//  text-align: center;
//  font-weight: 600;
//  font-size: 2.5rem;
// //     }
// //     .btniniciar {
//  display: flex;
//  align-items: center;
//  gap: 12px;
//  border-style: none;

//  img {
//    width: 30px;
//  }
//  background-color: white;

//  padding: 15px 30px;
//  border-radius: 50px;
//  font-weight: 400;
//  font-size: 0.8rem;

//  transition: all 0.25s ease;
//  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);

//  &:hover {
//    transform: translateY(-5px);
//    box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
//    cursor: pointer;
//  }
// //     }
// //     .social {
//  gap: 20px;
//  display: flex;
//  justify-content: center;
//  align-content: space-between;
//  color: white;
//  font-size: 30px;
//  position: relative;
//  bottom: 0;

//  .icons:hover {
//    transform: translateY(10px);
//    transition: all 0.5s;
//  }
// //     }
// //   }
// //   @media (min-width: 64em) {
// //     flex-direction: row;
// //     .imgseccion {
//  margin-top: 0;
//  width: 50%;
// //     }
// //     .panelsesion {
//  width: 50%;
// //     }
// //   }
// //   @media (max-width: 48em) {
// //     .imgseccion {
//  .fondocontent {
//    img {
//      /* width: 80%; */
//    }
//  }
// //     }
// //   }
// //   @keyframes flotar {
// //     0% {
//  transform: translate(0, 0);
// //     }
// //     50% {
//  transform: translate(0, 20px);
// //     }
// //     100% {
//  transform: translate(0, 0px);
// //     }
// //   }
// // `;

import { useEffect } from "react";
import CineTitle from "../CineTitle";
import "../../styles/login.css";

const Login = () => {
  document.addEventListener("DOMContentLoaded", (e) => {
    let $register = document.querySelector(".register-block");
    $register.style.display = "none";

    let $loginBlock = document.querySelector(".login-block");

    document.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.matches(".link-register")) {
        $loginBlock.style.display = "none";
        $register.style.display = "block";
      }
      if (e.target.matches(".link-login")) {
        $loginBlock.style.display = "block";
        $register.style.display = "none";
      }
    });
  });
  useEffect(() => {}, []);
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page mx-auto w-md-50">
      <CineTitle display="d-none" width="80" height="80" />
      <h3>Login</h3>
      <section className="">
        <aside>
          <div className="login-block">
            <form id="login-form" className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Usuario
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Recordar contraseña
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Acceder
                </button>
              </div>
            </form>
            <p>
              ¿No tienes una cuenta?
              <a href="#" className="link-register">
                Registrarse
              </a>
            </p>
          </div>
          <div className="register-block">
            <form id="register-form" className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
            <p>
              ¿Ya tienes una cuenta?
              <a href="#" className="link-login">
                LogIn
              </a>
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Login;

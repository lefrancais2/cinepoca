import CineTitle from "../CineTitle";

const Login = () => {
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      <CineTitle />
      <h3>Login</h3>
      <section>
        <form>
          <div>
            <input type="text" name="name" placeholder="Nombre" />
          </div>
          <div>
            <input type="text" name="user" placeholder="Usuario" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Correo electronico" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Contraseña" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Repetir Contraseña"
            />
            <div>
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;

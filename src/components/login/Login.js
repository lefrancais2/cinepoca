import CineTitle from "../CineTitle";

const Login = () => {
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      <CineTitle />
      <h3>Login</h3>
      <section>
        {/* <form>
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
        </form> */}
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;

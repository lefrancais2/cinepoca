const Error404 = () => {
  return (
    <main
      className="flex-grow-1 bg-white bg-md-light container-page"
      style={{ height: "100vh" }}
    >
      <section
        style={{
          width: "100%",
          padding: "50px 50px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "4rem" }}>
          <i className="fas fa-exclamation-circle"></i>Error 404
        </h2>
        <p>La página que intentas acceder no existe.</p>
      </section>
    </main>
  );
};

export default Error404;

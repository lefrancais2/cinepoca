import cinta from "../assets/cinta_orange.svg";

const CineTitle = () => {
  return (
    <section className="title-page d-flex flex-row bg-light align-items-center justify-content-center">
      <aside>
        <h1 className="fw-bold">
          {/* <img src={filmadora} className="d-none d-md-inline-block" width="80" height="80" alt="" /> */}
          <img
            src={cinta}
            className="d-none d-md-inline-block"
            width="80"
            height="80"
            alt=""
          />
          CINEPOCA
        </h1>
      </aside>
    </section>
  );
};

export default CineTitle;
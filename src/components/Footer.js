import "../styles/footer.css";
import logo from "../assets/cinta_orange.svg";

const Footer = () => {
    return (
        <footer className="bg-dark flex-grow-0">
            {/* <h3 className="text-white">Footer</h3> */}
            <section className="footer-section">
                <div className="flex-grow-1 align-center">
                    <h6 className="subtitle-footer">SIGUENOS</h6>
                    <div className="footer-icon footer-icon-fb">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="footer-icon footer-icon-tw">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="footer-icon footer-icon-in">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="footer-icon footer-icon-mail">
                        <i className="far fa-envelope"></i>
                    </div>
                </div>
                <div className="flex-grow-1">
                    <h6 className="subtitle-footer">MOVIL</h6>
                    <div className="drive-icons">
                        <div>
                            <i className="fab fa-apple"></i>
                        </div>
                        <div>
                            <i className="fab fa-android"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-logo">
                <figure>
                    <img src={logo} alt="logo cinepoca" width="80" height="80"/>
                </figure>
                <div>
                    <h3>CINEPOCA</h3>
                </div>
            </section>
        </footer>
    )
}

export default Footer;

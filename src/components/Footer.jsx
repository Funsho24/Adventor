import React from "react";
import "../styles/footer.css";
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'

const Footer = () => {
  return (
    <div className="foot">
      <section className="footer">
        <div className="aboutt">
          <h3>About Adventor.</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
          </section>
          <section className="menu">
              <div className="home">
                  <h4>Quick Menu</h4>
                  <ul>
                      <li>Home</li>
                      <li>Stories</li>
                      <li>Trending Stories</li>
                      <li>Popular stories</li>
                  </ul>
              </div>
              <div className="sign">
                  <ul>
                      <li>Sign up</li>
                      <li>Login</li>
                      <li>Contact us</li>
                  </ul>
              </div>
          </section>
          <section className="subscribee">
              <div className="newsletter">
                  <h4>Subscribe to our newsletter</h4>
              </div>
              <div className="mail">
                  <input type="email" placeholder="Email address" />
                  <button className="btnsub">subscribe</button>
              </div>
          </section>

          <section className="terms">
              <hr />
              
              <div className="policy">
                  <h5>Terms and Policy</h5>
              </div>
              <div className="icon">
                  <a className="a" href="#">
                      <img src={twitter} alt="twitter logo" />
                  </a>
                   <a className="b" href="#">
                      <img src={facebook} alt="facebook logo" />
                  </a>
                   <a className="c" href="#">
                      <img src={insta} alt="insta logo" />
                  </a>
              </div>
          </section>
    </div>
  );
};

export default Footer;

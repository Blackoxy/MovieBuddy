import React from "react";
import logo from "../assets/movie-buddy-logo.png";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const quoteUrl = "http://localhost:4000/quote";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  componentDidMount = () => {
    fetch(quoteUrl)
      .then(response => response.json())
      .then(data => {
        var num = this.getRandom(0, data.result.length);
        var quote = data.result[num].quote;
        console.log(quote);
      });
  };

  render() {
    //let RandomNumber = this.getRandom(0, data.results.length);

    return (
      <section className="container-fluid">
        <div className="main-content">
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div>
                <div className="header">
                  <img
                    className="buddyLogo"
                    src={logo}
                    alt="movie buddy logo"
                  />
                </div>
                <button className="loginButton">
                  <a href="/secret">Login/Signup</a>
                </button>
                {!this.props.auth.isAuthenticated() && (
                  <button
                    className="btn btn-info"
                    onClick={this.props.auth.login}
                  >
                    Login
                  </button>
                )}
                <div>
                  <h2>`Quote:`</h2>
                  <h2>`Movie:`</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-space-between m-0">
            <div className="main-nav">
              <div className="col-sm-6 ml-auto">
                {this.state.visible ? (
                  <nav>
                    <ul>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                ) : null}
              </div>

              {this.state.visible ? (
                <FontAwesomeIcon
                  onClick={this.toggle}
                  className="fa-2x nav-toggle"
                  icon={faTimes}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={this.toggle}
                  className="fa-2x nav-toggle"
                  icon={faBars}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;

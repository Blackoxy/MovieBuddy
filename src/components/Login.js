import React, { Component } from "react";
import logo from "../assets/movie-buddy-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Panel } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

const quoteUrl = "http://localhost:4000/quote";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      quoteData: "hello",
      quote: "",
      movie: "",
      reveal: false
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  getRandom = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  };

  componentDidMount = () => {
    fetch(quoteUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quoteData: data.result
        });
      })
      .then(() => {
        let num = this.getRandom(0, this.state.quoteData.length);
        console.log(this.state.quoteData.length);
        let quote = this.getQuote(num);
        let movie = this.getMovie(num);
        this.setState({
          quote: quote,
          movie: movie
        });
      });
  };

  getQuote = num => this.state.quoteData[num].quote;

  getMovie = num => this.state.quoteData[num].movie;

  showMovie = () => {
    this.setState({
      reveal: true
    });
  };

  render() {
    if (!this.state.reveal) setTimeout(this.showMovie, 4000);
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
                <div className="m-3">
                  <Jumbotron>
                    <h1>Welcome to Movie Buddies!</h1>
                    <p>
                      Never go to the movies alone again! We match you with your
                      movie soulmate!
                    </p>
                  </Jumbotron>
                  ;
                  <Panel>
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">
                        Guess the Movie!
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <h2>"{this.state.quote}"</h2>
                      <h2 className={this.state.reveal ? "" : "invisible"}>
                        <em> {this.state.movie}</em>
                      </h2>
                    </Panel.Body>
                  </Panel>
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

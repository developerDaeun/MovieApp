import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Frozen1",
    poster: "https://photo.jtbc.joins.com/news/2014/01/02/20140102091902118.jpg"
  },
  {
    title: "Frozen2",
    poster: "https://upload.wikimedia.org/wikipedia/ko/7/7f/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD2_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  },
  {
    title: "Moana",
    poster: "https://lh3.googleusercontent.com/proxy/q_7n7Vg0wrRYzqQIDZ-ERXaR3SfOG-lRzLSvMduxutdvQL5jejPRYQ-gHbA6ol0vWDZFKDZ5jaO-Owx4tOAR0zvGYk3O6XiQR8Yukuz9njuyVO-ommdjJv1L1E84HTfvuSdjk7JROHcoQHm-QoEd10q4e3c_fT8u6ERqunjTRwmMgosHgFwnmUMkiCVRSidfT6LFzPAYz20bapb04xnXyUiGyjLIpgI938cOREfuvtFs5tFWX4teMynBdM3PNeZGxCbWNGUPv0rlSY-ZYslRCJrkWvbsxV5aPB8eUum66gbpK10LmWqggm3Dyzy0D0hVdFXTvjXLHIU7vL2rSKoU-PVNjmtL_1Zz0WeEWNO_gOWt5e-m4WvgCjtrMfBfwDc6CDntHSS5IImyNsXqm8Dk_4aRfg-XZnzLtqjcYVVDvMUkGWQkpw9ddflE_c2PRlwFHdahn22gzLtcWLHMVC4-OzQumBn3MkyvYouIiOvpBJeTLbkiEBr8hmJs31dkgdfptS3BhxmWVasF82QtFs78obzXMR4vwDmUNAjHLtbFup_XS4Xz5v4rkrCupUHSU6qTBVHryuCcZ1Uld6wArlWzX2xN_71LGKOYDwuHCC74-ZISWw"
  },
  {
    title: "Mermaid",
    poster: "https://i.pinimg.com/originals/ff/ae/6c/ffae6c42eb0d9264242a70a53351961a.jpg"
  }
]

class App extends Component {

  state = { greeting: 'Hello!' }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({greeting: 'Hello again!'})
    }, 2000)
  }

  render(){
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;

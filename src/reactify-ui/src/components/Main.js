import React, {Component} from 'react';
import ChordCards from './ChordCards'
import {Note, Scale, Chord} from "tonal"
import * as Key from "tonal-key";
import DropdownList from "./DropdownList"
import DropdownChords from "./DropDownChords"
import ScaleDropDownList from './ScaleDropDownList'
import ScaleCards from './ScaleCards'
// import SideGuitar from "/static/media/sidebarGuitar.334dd5b3.jpg"

class Main extends Component {
  constructor() {
    super();
    this.state = {
      key: "C",
      chords: [],
      keyQuality: "major",
      modalScales: "major"
    }
  }
  
  getKeys = (value) => {
    this.setState({
      keyQuality: value
    })
  };
  
  getChords = (value) => {
    this.setState({
      key: value,
      chords: Key.chords(value + this.state.keyQuality)
    }, () => window.scales_chords_api_onload())
  };
  
  getScale = (value) => {
    this.setState({
      modalScales: value})
  };
  

  render() {
    let scale = this.state.key + " " + this.state.keyQuality;
    let getModeNames = Scale.modeNames(scale);
    let selectedMode = getModeNames.filter(t => t[1] === this.state.modalScales);
    console.log(getModeNames);
    return (
        <div>
          
          
          <nav className="side-nav">
            <ul>
              <li>
                <DropdownList getKeys={this.getKeys} />
              </li>
              <li>
                <DropdownChords getChords={this.getChords} />
              </li>
              <li>
                <ScaleDropDownList getScale={this.getScale}/>
              </li>
            </ul>
          </nav>
          
          <section className="chord-cards">
              {this.state.chords.map(chord => {
                  return <ChordCards chord={chord} key={chord.id} />
              })}
          </section>
          
          <section className="scale-cards">
            <ScaleCards selectedMode={selectedMode[0]} />
            <img className="mode-image" src={`/static/img/guitar-${this.state.modalScales}-${this.state.key.replace('#', '-sharp')}.jpg`} />
          </section>

        </div>
    );
  }
}


export default Main

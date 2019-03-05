import React, {Component} from 'react';
import ChordCards from './ChordCards'
import {Note, Scale, Chord} from "tonal"
import * as Key from "tonal-key";
import DropdownList from "./DropdownList"
import DropdownChords from "./DropDownChords"
import ScaleDropDownList from './ScaleDropDownList'
import ScaleCards from './ScaleCards'
// import SideGuitar from "/static/media/sidebarGuitar.334dd5b3.jpg"

const sidenav = {
  height: '100%',
  width: '160px',
  position: 'fixed',
  zIndex: '1',
  top: '56px',
  left: '0',
};

const sideNavA = {
  padding: '6px 8px 6px 16px',
  textDecoration: 'none',
  fontSize: '25px',
  color: '#818181',
  display: 'block'
};

const chordCards = {
  display: 'flex',
  justifyContent: 'flex-end'
};


class Main extends Component {
  constructor() {
    super();
    this.state = {
      key: "C",
      chords: [],
      keyQuality: "major",
      modalScales: "ionian"
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
    
    
    return (
        <div>
              {/*style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}*/}
              {/*className="d-flex flex-column"*/}
          
          <div style={sidenav}>
            <div style={sideNavA}>
              <DropdownList getKeys={this.getKeys} />
              <br/>
              <DropdownChords getChords={this.getChords} />
              <br/>
              <ScaleDropDownList getScale={this.getScale}/>
              <br/>
            </div>
          </div>
          
          
          
          <div style={chordCards}>
              {this.state.chords.map(chord => {
                  return <ChordCards chord={chord} key={chord.id} />
              })}
          </div>
          
          <div className="scale-cards">
            <ScaleCards selectedMode={selectedMode[0]} />
          </div>
          

        </div>
    );
  }
}


export default Main

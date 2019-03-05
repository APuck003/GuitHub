import React, {Component} from 'react';


class DropDownChords extends Component {
  
  render() {
    
    return (
        <div>
          <select onChange={(e) => this.props.getChords(e.target.value)}>
            
            <option value="C">
              C
            </option>
            
            <option value="C#">
              C#
            </option>
            
            <option value="Db">
              Db
            </option>
            
            <option value="D">
              D
            </option>
            
            <option value="Eb">
              Eb
            </option>
            
            <option value="E">
              E
            </option>
            
            <option value="F">
              F
            </option>
            
            <option value="F#">
              F#
            </option>
            
            <option value="Gb">
              Gb
            </option>
            
            <option value="G">
              G
            </option>
            
            <option value="Ab">
              Ab
            </option>
            
            <option value="A">
              A
            </option>
            
            <option value="Bb">
              Bb
            </option>
            
            <option value="B">
              B
            </option>
            
          </select>
        </div>
    );
  }
}


export default DropDownChords;

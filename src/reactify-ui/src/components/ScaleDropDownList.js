import React, {Component} from 'react';
import * as Key from "tonal-key";


class ScaleDropDownList extends Component {

  scaleLoop = () => {
    let modeArray = Key.modeNames()
    
    
    let modeArrayHolder = modeArray.map(mode => {
      return <option value={`${mode}`} key={mode.id}>{`${mode}`}</option>
    })
    return modeArrayHolder
  }

  render() {

    return (
        <div>
          <select onChange={(e) => this.props.getScale(e.target.value)}>
            {this.scaleLoop()}
          </select>
        </div>
    );
  }
}


export default ScaleDropDownList;

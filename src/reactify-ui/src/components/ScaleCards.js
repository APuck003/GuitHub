import React, {Component} from 'react';
import * as Key from "tonal-key";

class ScaleCards extends Component {
  
  render() {
    let formattedMode = this.props.selectedMode && this.props.selectedMode.join(' ')
    console.log(formattedMode)
    
    return (
        
        <div>
          {Key.scale(formattedMode).map(note => {
            return (
                <div>
                  {/*<h3 style={{decorations: 'none'}}>{note}</h3>*/}
                </div>
                
            )
          })}
        </div>
    );
  }
}


export default ScaleCards;

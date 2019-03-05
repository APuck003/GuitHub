import React, {Component} from 'react';

class ChordCards extends Component {
  
  
  
  render() {
    
    // console.log("ChordCard props: ", this.props.chord)
    
    
    return (
       
        <div>
          <div>
            <ins className="scales_chords_api" chord={`${this.props.chord}`} output="sound" instrument="guitar" />
          </div>
          
          <div>
            <ins className="scales_chords_api" width='75%' chord={`${this.props.chord}`} output="image" />
          </div>
          
        </div>
    );
  }
}

export default ChordCards;

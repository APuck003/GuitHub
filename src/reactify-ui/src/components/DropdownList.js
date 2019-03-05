import React, {Component} from 'react';


class DropdownList extends Component {
  
  render() {
    
    return (
        <div>
          <select onChange={(e) => this.props.getKeys(e.target.value)}>
            <option value="major">
              Major
            </option>
            <option value="minor">
              Minor
            </option>
          </select>
        </div>
    );
  }
}


export default DropdownList;

import React, { Component } from 'react';
export const settingsContext = React.createContext();

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
     //Number of items to display per screen (number).
      itemsPerPage: 3,
      //Default sort field (string).
      sort: 'Ascending',
      //Display or Hide completed items (boolean).
      show: true,
      //Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
      //done
    };
  }

  render() {
    return (
      <settingsContext.Provider value={this.state}>
        {this.props.children}
      </settingsContext.Provider>
    );
  }
}
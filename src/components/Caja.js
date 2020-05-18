import React, {Component} from 'react';
import '../styles/Caja.css';
import colorAppStore from '../stores/ColorAppStore';


class Caja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        color: colorAppStore.getActiveColor()
    }
  }

  componentDidMount(){
      colorAppStore.on( 'storeUpdated', this.updateColor )
  }

  componentWillMount(){
    colorAppStore.removeListener( 'storeUpdated', this.updateColor )
  }

  updateColor = () => {
      this.setState( {
          color: colorAppStore.getActiveColor()
      })

  }

  render() {
    return (
      <div className="Caja">
          <div className="color-container" style={{backgroundColor: this.state.color}}></div>
      </div>
    );
  }
}

export default Caja;
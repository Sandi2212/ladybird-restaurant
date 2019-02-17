import React, {Component} from 'react';
import Food from "./Food/Food"
import Wine from "./Wine/Wine"
import Cocktails from "./Cocktails/Cocktails"
import './Menus.css'

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: 'food'
        }
    }

    handleClick = (e) => {
      const activeMenu = e.target.id
      if (!['wine', 'food', 'cocktails'].includes(activeMenu)) {return null;}
      this.setState({activeMenu})
    }

    render() {
      const activeMenu = this.state.activeMenu
      const renderActiveMenue = (selectedMenu) => {
        if (selectedMenu === 'food') {
          return <Food />
        } else if (selectedMenu === 'wine') {
          return <Wine />
        } else {
          return <Cocktails />
        }
      }
      return (
          <div className="Menus">
              <h1 className="menus_header">MENUS</h1>
              <div className="menus_titles">
                  <h1 id="food" className="menus__link" onClick={this.handleClick}>Food</h1>
                  <h1 id="cocktails" className="menus__link" onClick={this.handleClick}>Cocktails</h1>
                  <h1 id="wine" className="menus__link" onClick={this.handleClick}>Wine</h1>
              </div>
              {renderActiveMenue(activeMenu)}
          </div>
      )
    }
}

export default Menus

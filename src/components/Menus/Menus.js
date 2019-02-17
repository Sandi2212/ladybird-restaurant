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
                  <h1 className="menus_food">Food</h1>
                  <h1 className="menus_cocktails">Cocktails</h1>
                  <h1 className="menus_wine">Wine</h1>
              </div>
              {renderActiveMenue(activeMenu)}
          </div>
      )
    }
}

export default Menus

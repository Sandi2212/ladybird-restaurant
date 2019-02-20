import React, {Component} from 'react';
import Food from "./Food/Food"
import Wine from "./Wine/Wine"
import Cocktails from "./Cocktails/Cocktails"
import ReserveButton from '../ReserveButton/ReserveButton'
import './Menus.css'

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: 'food',
            menuIsLeaving: false,
        }
    }

    handleClick = async (e) => {
      const activeMenu = e.target.id
      if (!['wine', 'food', 'cocktails'].includes(activeMenu)) {return null;}
      await this.setState({menuIsLeaving: true})
      setTimeout(() => {
        this.setState({
          activeMenu: activeMenu,
          menuIsLeaving: false
        })
      }, 500)
    }

    render() {
      const menuIsLeaving = this.state.menuIsLeaving
      const activeMenu = this.state.activeMenu
      const renderActiveMenu = (selectedMenu) => {
        if (selectedMenu === 'food') {
          return <Food chefLoggedOn={this.props.chefLoggedOn} />;
        } else if (selectedMenu === 'wine') {
          return <Wine chefLoggedOn={this.props.chefLoggedOn} />;
        } else {
          return <Cocktails chefLoggedOn={this.props.chefLoggedOn} />;
        }
      }
      return (
          <div className="Menus">
              <h1 className="menus_header">MENUS</h1>
              <div className="menus_titles">
                  <h1 id="food" className={`menus__link ${activeMenu === 'food' && 'menus__link--active'}`} onClick={this.handleClick}>Food</h1>
                  <h1 id="cocktails" className={`menus__link ${activeMenu === 'cocktails' && 'menus__link--active'}`} onClick={this.handleClick}>Cocktails</h1>
                  <h1 id="wine" className={`menus__link ${activeMenu === 'wine' && 'menus__link--active'}`} onClick={this.handleClick}>Wine</h1>
              </div>
              <div className={`menus__active ${menuIsLeaving ? 'menus__active-leaving' : null}`}>
                {renderActiveMenu(activeMenu)}
              </div>
              <div className="menus__reserve-button">
                <ReserveButton />
              </div>
          </div>
      )
    }
}

export default Menus

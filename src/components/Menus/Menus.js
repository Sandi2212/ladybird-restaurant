import React, {Component} from 'react';
import './Menus.css'

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: ''
        }
    }
        render() {
        return (
        <div className="Menus">

        <h1 className="menus_header">MENUS</h1>
        
        <div className="menus_titles">
        <h1 className="menus_food">Food</h1>
        <h1 className="menus_cocktails">Cocktails</h1>
        <h1 className="menus_wine">Wine</h1>
    
        </div>
        </div>
    )
    }

}






export default Menus
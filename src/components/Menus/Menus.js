import React, {Component} from 'react';
import axios from "axios"
import './Menus.css'

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFood : null,
            allWine: null,
            allCocktails:null
        }
    }

    getWineData = async () => {
        await axios.get("http://localhost:5000/wines").then(response => {
          const allWine = response.data;
          this.setState({allWine});
        });
     }
    getCocktailsData = async () => {
        await axios.get("http://localhost:5000/cocktails").then(response => {
            console.log (response.data)
          const allCocktails = response.data;
          this.setState({allCocktails});
        });
     }
    getFoodData = async () => {
        await axios.get("http://localhost:5000/foods").then(response => {
          const allFood = response.data;
          this.setState({allFood});
        });
     }
  
     componentDidMount(){
        this.getWineData();
        this.getCocktailsData();
        this.getFoodData();
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
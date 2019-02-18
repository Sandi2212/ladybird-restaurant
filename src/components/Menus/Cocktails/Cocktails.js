import React , {Component} from "react";
import axios from "axios";
import "./Cocktails.css";

class  Cocktails extends Component{
    constructor(){
        super()
        this.state={
            allCocktails: [], 
        }
    }

    getCocktailsData = async () => {
        const resp = await axios.get("/cocktails")
        const allCocktails = resp.data;
        this.setState({allCocktails});
    }
    componentDidMount(){
        this.getCocktailsData();
    }
  
    render(){
        const allCocktails = this.state.allCocktails
        const alcoholicCocktails = allCocktails.filter(cocktail => {
	    return cocktail.alcohol_free === false
        }).map(cocktail => {
	    return (
		<div className="cocktails__row" key={cocktail.id}>
            <h4>{cocktail.name} <span className="cocktail__price">
            {cocktail.small_price}
             { cocktail.large_price ? `/ ${cocktail.large_price}` : null }
            </span></h4>
			<p>{cocktail.ingredients}</p>
               </div>
        )
        })  

        const alcoholFreeCocktails = allCocktails.filter(cocktail => {
            return cocktail.alcohol_free === true
            }).map(cocktail => {
            return (
                <div className="cocktails__row" key={cocktail.id}>
                    <h4>{cocktail.name} <span className="cocktail__price">
                    {cocktail.small_price}
                    { cocktail.large_price ? `/ ${cocktail.large_price}` : null }
                    </span></h4>
                    <p>{cocktail.ingredients}</p>
                </div>
            )
            })
        return (
            <div className="Cocktails">
                {alcoholicCocktails}
                <h3>Zero Proof</h3>
                {alcoholFreeCocktails}
            </div>
        )
    }
}
export default Cocktails

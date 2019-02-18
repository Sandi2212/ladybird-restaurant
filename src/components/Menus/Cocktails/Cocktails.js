import React , {Component} from "react"
import axios from "axios"
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
        const { allCocktails } = this.state;

        console.log("STATE", this.state);
        return(
            <div className="Cocktails">
              {
                  allCocktails.map(cocktail => {
                      return (
                        <div key={cocktail.id}>
                        <span><h2>{ cocktail.name }</h2></span>
                        <span>{ cocktail.small_price } { cocktail.large_price ? `/ ${cocktail.large_price}` : '' }</span>
                        <div>{ cocktail.ingredients } </div>
                        </div>
                      )
                  })
              }
            </div>
        )
    }
}
export default Cocktails

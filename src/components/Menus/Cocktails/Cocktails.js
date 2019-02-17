import React , {Component} from "react"
import axios from "axios"
class  Cocktails extends Component{
    constructor(){
        super()
        this.state={
            allCocktails:null 
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
        return(
            <div className="Cocktails">

            </div>
        )
    }
}
export default Cocktails

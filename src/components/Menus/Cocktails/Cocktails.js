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
    await axios.get("http://localhost:5000/cocktails").then(response => {
     
        const allCocktails = response.data;
        this.setState({allCocktails});
    });
    }
    componentDidMount(){
        this.getCocktailsData();
   
     }
  
render(){
    return(


    <div>

    </div>
)
}

}
export default Cocktails
import React , {Component} from "react"
import axios from "axios"

class  Wine extends Component{
    constructor(){
        super()
        this.state={
            allWine:null,
            allBeer:null
        
    }
}

getWineData = async () => {
    await axios.get("http://localhost:5000/wines").then(response => {
      const allWine = response.data;
      this.setState({allWine});
    });
 }
getBeerData = async () => {
    await axios.get("http://localhost:5000/beers").then(response => {
      const allBeer = response.data;
      this.setState({allBeer});
    });
 }
 componentDidMount(){
    this.getWineData();
    this.getBeerData();
 }

render(){
    return(


    <div>

    </div>
)
}

}
export default Wine
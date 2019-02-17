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
        const response = await axios.get("/wines")
        const allWine = response.data;
        this.setState({allWine});
    }
    
    getBeerData = async () => {
        const response = await axios.get("/beers")
        const allBeer = response.data;
        this.setState({allBeer});
    }
    
    componentDidMount(){
        this.getWineData();
        this.getBeerData();
    }

    render(){
        return(
            <div className="Wine">
                <h1>Wine Component</h1>
            </div>
        )
    }
}
export default Wine

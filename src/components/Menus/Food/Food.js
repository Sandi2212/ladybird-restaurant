import React , {Component} from "react"
import axios from "axios"
class  Food extends Component{
    constructor(){
        super()
        this.state={
            allFood:null,
            allFondues:null,
            allDesserts:null
        }
    }
    
    getFonduesData = async () => {
        const response = await axios.get("/fondues")
        const allFondues = response.data;
        this.setState({allFondues});
    }
    getDessertsData = async () => {
        const response = await axios.get("/desserts")
        const allDesserts = response.data;
        this.setState({allDesserts});
    }
    getFoodData = async () => {
        const response = await axios.get("/foods")
        const allFood = response.data;
        this.setState({allFood});
    }
  
    componentDidMount(){
        this.getFonduesData();
        this.getDessertsData();
        this.getFoodData();
    }
  
    render(){
        return(
            <div className="Food">
                <h1>Food Component</h1>
            </div>
        )
    }
}

export default Food
   

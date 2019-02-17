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
        await axios.get("http://localhost:5000/fondues").then(response => {
          
          const allFondues = response.data;
          this.setState({allFondues});
        });
     }
        getDessertsData = async () => {
        await axios.get("http://localhost:5000/desserts").then(response => {
       
          const allDesserts = response.data;
          this.setState({allDesserts});
        });
     }
        getFoodData = async () => {
        await axios.get("http://localhost:5000/foods").then(response => {
        
          const allFood = response.data;
          this.setState({allFood});
        });
     }
  
     componentDidMount(){
        this.getFonduesData();
        this.getDessertsData();
        this.getFoodData();
     }
  
render(){
    return(


    <div>

    </div>
)
}

}
export default Food
   

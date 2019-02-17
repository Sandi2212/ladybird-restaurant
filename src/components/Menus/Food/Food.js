import React , {Component} from "react";
import axios from "axios";

import "./Food.css";

class  Food extends Component{
    constructor(){
        super()
        this.state={
            allFoods:null,
            allFondues:null,
            allDesserts:null,
            url:"http://localhost:5000"
        }
    }

    renderFoodData = foodData => (
        foodData.map((foodItem, index) => (
            <div key={index} className="oc-food-item">
                <h3 className="oc-food-item-title">
                    {foodItem.name}
                    <span className="oc-food-item-price"> {foodItem.price} </span>
                </h3>
                <p className="oc-food-item-ingredients"> {foodItem.ingredients} </p>
            </div>
        ))
    )

    getFonduesData = async () => {
        const response = await axios.get(`${this.state.url}/fondues`)
        const allFondues = response.data;
        console.log(allFondues)
        this.setState({allFondues});
    }

    getDessertsData = async () => {
        const response = await axios.get(`${this.state.url}/desserts`)
        const allDesserts = response.data;
        console.log(allDesserts)
        this.setState({allDesserts});
    }

    getFoodsData = async () => {
        const response = await axios.get(`${this.state.url}/foods`)
        const allFoods = response.data;
        console.log(allFoods)
        this.setState({allFoods});
    }
  
    componentDidMount(){
        this.getFonduesData();
        this.getDessertsData();
        this.getFoodsData();
    }
  
    render(){
        const foods = this.state.allFoods && this.renderFoodData(this.state.allFoods);
        const fondues = this.state.allFondues && this.renderFoodData(this.state.allFondues);
        const desserts = this.state.allDesserts && this.renderFoodData(this.state.allDesserts);
        return (
          <div className="oc-food-component">
            {foods}
            <h3 className="oc-food-item-header">
              Ladybird fondues (for 2-3)
            </h3>
            <p className="oc-fondue-info">Served with bread & assorted accoutrements</p>
            {fondues}
            <h3 className="oc-food-item-header">Desserts</h3>
            {desserts}
            <p className="oc-menu-note">
                <span className="oc-menu-note-label"> Note </span>
                <span className="oc-menu-note-colon"> : </span>
                <span className="oc-menu-note-message"> The entire menu can be made gluten free, please ask your server</span>
            </p>
          </div>
        );
    }
}

export default Food
   

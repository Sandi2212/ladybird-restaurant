import React, { Component } from "react";
import axios from "axios";

import "./Food.css";

class Food extends Component {
    constructor() {
        super();
        this.state = {
            allFoods: null,
            allFondues: null,
            allDesserts: null
        };
    }

    deleteItem = async (itemId, foodType) => {
        let url = `/${foodType}/${itemId}`;
        const response = await axios.delete(url);
        if (response.data) {
            this.getFoodsData();
            this.getDessertsData();
            this.getFonduesData();
        }
    };

    renderFoodData = (foodData, foodType) =>
        foodData.map((foodItem, index) => (
            <div key={index} className="oc-food-item">
                <h3 className="oc-food-item-title">
                    {foodItem.name}
                    <span className="oc-food-item-price">
                        {foodItem.a_la_carte
                            ? foodItem.price + "/EA"
                            : foodItem.price}
                    </span>
                    {this.props.chefLoggedOn ? (
                        <span>
                            <a href="#oc-edit-item-modal">
                                <button className="oc-crud-button">Edit</button>
                            </a>
                            <button
                                className="oc-crud-button"
                                onClick={() => {
                                    this.deleteItem(foodItem.id, foodType);
                                }}
                            >
                                Delete
                            </button>
                        </span>
                    ) : null}
                </h3>
                <p className="oc-food-item-ingredients">
                    {" "}
                    {foodItem.ingredients}{" "}
                </p>
            </div>
        ));

    getFonduesData = async () => {
        const response = await axios.get("/fondues");
        const allFondues = response.data;
        this.setState({ allFondues });
    };

    getDessertsData = async () => {
        const response = await axios.get("/desserts");
        const allDesserts = response.data;
        this.setState({ allDesserts });
    };

    getFoodsData = async () => {
        const response = await axios.get("/foods");
        const allFoods = response.data;
        this.setState({ allFoods });
    };

    componentDidMount() {
        this.getFonduesData();
        this.getDessertsData();
        this.getFoodsData();
    }

    render() {
        const foods =
            this.state.allFoods &&
            this.renderFoodData(this.state.allFoods, "foods");
        const fondues =
            this.state.allFondues &&
            this.renderFoodData(this.state.allFondues, "fondues");
        const desserts =
            this.state.allDesserts &&
            this.renderFoodData(this.state.allDesserts, "desserts");
        return (
            <div className="oc-food-component">
                {foods}
                <h3 className="oc-food-item-header">
                    Ladybird fondues (for 2-3)
                </h3>
                <p className="oc-fondue-info">
                    Served with bread & assorted accoutrements
                </p>
                {fondues}
                <h3 className="oc-food-item-header">Desserts</h3>
                {desserts}
                <p className="oc-menu-note">
                    <span className="oc-menu-note-label"> Note </span>
                    <span className="oc-menu-note-colon"> : </span>
                    <span className="oc-menu-note-message">
                        {" "}
                        The entire menu can be made gluten free, please ask your
                        server
                    </span>
                </p>
                <div id="oc-edit-item-modal" className="oc-modal">
                    <a href="#close" title="close" className="oc-close">
                        X
                    </a>
                    <form>
                        <label className="oc-input-label">
                            Dish
                            <br />
                            <input
                                className="oc-input"
                                name=""
                                placeholder="Name of the Dish"
                                type="text"
                            />
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Price
                            <br />
                            <input
                                className="oc-input"
                                name=""
                                placeholder="Price of the Dish"
                                type="text"
                            />
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Ingredients
                            <br />
                            <input
                                className="oc-input"
                                name=""
                                placeholder="List of the Ingredients"
                                type="text"
                            />
                        </label>
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Food;

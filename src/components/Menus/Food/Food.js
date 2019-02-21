import React, { Component } from "react";
import axios from "axios";

import "./Food.css";

class Food extends Component {
  constructor() {
    super();
    this.state = {
      allFoods: null,
      allFondues: null,
      allDesserts: null,
      foodItemToEdit: null,
      idOfItemToEdit: null,
      foodTypeOfItemToEdit: null,
      foodTypeOfItemToCreate:null
    };
  }

  handleEditButtonClick = (idOfItemToEdit, foodTypeOfItemToEdit, foodItemToEdit) => {
    this.setState({ idOfItemToEdit, foodTypeOfItemToEdit, foodItemToEdit });
  }

  handleCreateButtonClick = (foodTypeOfItemToCreate) => {
    this.setState({ foodTypeOfItemToCreate });
  }

  onFormChange = async (evnt) => {
    this.setState({[evnt.target.name]: evnt.target.value})
  }

  onEditFormSubmit = async (evnt) => {
    evnt.preventDefault();
    const updatedFoodItem = {
        name: this.state.dish,
        ingredients: this.state.ingredients,
        price: this.state.price
    }
    const url = `/${this.state.foodTypeOfItemToEdit}/${this.state.idOfItemToEdit}`;
    await axios.put(url, updatedFoodItem).then(() => {
        this.getFoodsData();
        this.getDessertsData();
        this.getFonduesData();
    })
  }

  onCreateFormSubmit = async (evnt) => {
    evnt.preventDefault();
    const foodItemToCreate = {
        name: this.state.dish,
        ingredients: this.state.ingredients,
        price: this.state.price
    }
    const url = `/${this.state.foodTypeOfItemToCreate}`
    await axios.post(url, foodItemToCreate)
    .then(() => {
        this.getFoodsData();
        this.getDessertsData();
        this.getFonduesData();
    })
  }

  deleteItem = async (itemId, foodType) => {
    await axios.delete(`/${foodType}/${itemId}`).then(() => {
        this.getFoodsData();
        this.getDessertsData();
        this.getFonduesData();
    })
  }

  renderFoodData = (foodData, foodType) =>
    foodData.map((foodItem, index) => (
      <div key={index} className="oc-food-item">
        <h3 className="oc-food-item-title">
          {foodItem.name}
          <span className="oc-food-item-price">
            {foodItem.a_la_carte ? foodItem.price + "/EA" : foodItem.price}
          </span>
            {this.props.chefLoggedOn ? (
            <span>
                <a href="#oc-edit-item-modal">
                    <button className="oc-crud-button" onClick={() => { this.handleEditButtonClick(foodItem.id, foodType, foodItem) } }>Edit</button>
                </a>
                <button className="oc-crud-button" onClick={() => { this.deleteItem(foodItem.id, foodType) } }>Delete</button>
            </span>
            ) : null}
        </h3>
        <p className="oc-food-item-ingredients"> {foodItem.ingredients} </p>
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
      this.state.allFoods && this.renderFoodData(this.state.allFoods, "foods");
    const fondues =
      this.state.allFondues && this.renderFoodData(this.state.allFondues, "fondues");
    const desserts =
      this.state.allDesserts && this.renderFoodData(this.state.allDesserts, "desserts");
    const foodItem = this.state.foodItemToEdit
    const foodTypeToEdit = this.state.foodTypeOfItemToEdit && this.state.foodTypeOfItemToEdit.slice(0, -1);
    const foodTypeToCreate = this.state.foodTypeOfItemToCreate && this.state.foodTypeOfItemToCreate.slice(0, -1);
    return (
    !this.props.chefLoggedOn 
    ? 
    <div className="oc-food-component">
        {foods}
        <h3 className="oc-food-item-header">Ladybird fondues (for 2-3)</h3>
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
            The entire menu can be made gluten free, please ask your server
          </span>
        </p>
    </div>
    :
      <div className="oc-food-component">
        <div id="oc-edit-item-modal" className="oc-modal">
            <a href="#close" title="close" className="oc-close">X</a>
                    <h1 className="oc-modal-title">Edit <span className="oc-capitalize">{foodTypeToEdit}</span></h1>
            <form onChange={this.onFormChange} onSubmit={this.onEditFormSubmit}>
                <label className="oc-input-label">
                    Dish
                <br />
                    <input className="oc-input" name="dish" placeholder="Name of the Dish" type="text" defaultValue={foodItem && foodItem.name}/>
                </label>
                <br />
                <label className="oc-input-label">
                    Price
                <br />
                    <input className="oc-input" name="price" placeholder="Price of the Dish" type="number" defaultValue={foodItem && foodItem.price}/>
                </label>
                <br />
                <label className="oc-input-label">
                    Ingredients
                <br />
                    <input className="oc-input" name="ingredients" placeholder="List of the Ingredients" type="text" defaultValue={foodItem && foodItem.ingredients}/>
                </label>
                <br />
                <button className="oc-edit-button">Submit</button>
            </form>
        </div>
        <a href="#oc-create-item-modal" onClick={() => { this.handleCreateButtonClick("foods") }}><button className="oc-crud-button oc-new-button">New</button></a>
        {foods}
        <h3 className="oc-food-item-header">Ladybird fondues (for 2-3)</h3>
        <p className="oc-fondue-info">
          Served with bread & assorted accoutrements
        </p>
        <a href="#oc-create-item-modal" onClick={() => { this.handleCreateButtonClick("fondues") }}><button className="oc-crud-button oc-new-button">New</button></a>
        {fondues}
        <h3 className="oc-food-item-header">Desserts</h3>
        <a href="#oc-create-item-modal" onClick={() => { this.handleCreateButtonClick("desserts") }}><button className="oc-crud-button oc-new-button">New</button></a>
        {desserts}
        <p className="oc-menu-note">
          <span className="oc-menu-note-label"> Note </span>
          <span className="oc-menu-note-colon"> : </span>
          <span className="oc-menu-note-message">
            {" "}
            The entire menu can be made gluten free, please ask your server
          </span>
        </p>
        <div id="oc-create-item-modal" className="oc-modal oc-create-modal">
            <a href="#close-create" title="close-create" className="oc-create-close">X</a>
                    <h1 className="oc-create-modal-title">New <span className="oc-capitalize">{foodTypeToCreate}</span></h1>
                <form onChange={this.onFormChange} onSubmit={this.onCreateFormSubmit}>
                <label className="oc-input-label oc-create-label">
                    Dish
                <br />
                    <input className="oc-input" name="dish" placeholder="Name of the Dish" type="text" />
                </label>
                <br />
                    <label className="oc-input-label oc-create-label">
                    Price
                <br />
                    <input className="oc-input" name="price" placeholder="Price of the Dish" type="number" />
                </label>
                <br />
                    <label className="oc-input-label oc-create-label">
                    Ingredients
                <br />
                    <input className="oc-input" name="ingredients" placeholder="List of the Ingredients" type="text" />
                </label>
                <br />
                <button className="oc-edit-button oc-create-button">Submit</button>
            </form>
        </div>
      </div>
    );
  }
}

export default Food;

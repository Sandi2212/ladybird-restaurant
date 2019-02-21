import React, { Component } from "react";
import axios from "axios";
import "./Wine.css";

class Wine extends Component {
    constructor() {
        super();
        this.state = {
            allWine: null,
            allBeer: null,
            idOfDrinkToEdit: null,
            typeOfDrinkToEdit: null,
            typeOfDrinkToCreate: null
        };
    }

    handleEditButtonClick = (idOfDrinkToEdit, typeOfDrinkToEdit) => {
        this.setState({ idOfDrinkToEdit, typeOfDrinkToEdit });
    }

    handleCreateButtonClick = (typeOfDrinkToCreate) => {
        this.setState({ typeOfDrinkToCreate });
    }

    onFormChange = async (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value })
    }

    onWineEditFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const updatedWine = {
            category: this.state.category,
            varietal: this.state.varietal,
            vineyard: this.state.vineyard,
            region: this.state.region,
            year: this.state.year,
            glass_price: this.state.glass_price,
            bottle_price: this.state.bottle_price
        }
        const url = `/${this.state.typeOfDrinkToEdit}/${this.state.idOfDrinkToEdit}`;
        await axios.put(url, updatedWine).then(() => {
            this.getWineData();
            this.getBeerData();
        })
    }

    onWineCreateFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const wineToCreate = {
          category: this.state.category,
          varietal: this.state.varietal,
          vineyard: this.state.vineyard,
          region: this.state.region,
          year: this.state.year,
          glass_price: this.state.glass_price,
          bottle_price: this.state.bottle_price
        };
        const url = `/${this.state.typeOfDrinkToCreate}`
        await axios.post(url, wineToCreate).then(() => {
            this.getWineData();
            this.getBeerData();
        })
    }

    onBeerEditFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const updatedBeer = {
            category: this.state.category,
            name: this.state.name,
            brewery: this.state.brewery,
            region: this.state.region,
            container: this.state.container,
            oz: this.state.oz,
            abv: this.state.abv,
            price: this.state.price
        }
        const url = `/${this.state.typeOfDrinkToEdit}/${this.state.idOfDrinkToEdit}`;
        await axios.put(url, updatedBeer).then(() => {
            this.getWineData();
            this.getBeerData();
        })
    }

    onBeerCreateFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const beerToCreate = {
          category: this.state.category,
          name: this.state.name,
          brewery: this.state.brewery,
          region: this.state.region,
          container: this.state.container,
          oz: this.state.oz,
          abv: this.state.abv,
          price: this.state.price
        };
        const url = `/${this.state.typeOfDrinkToCreate}`
        await axios.post(url, beerToCreate).then(() => {
            this.getWineData();
            this.getBeerData();
        })
    }

    deleteItem = async (drinkId, drinkType) => {
        await axios.delete(`/${drinkType}/${drinkId}`).then(() => {
            this.getWineData();
            this.getBeerData();
        })
    }

    renderWines = category => {
        return (
            <div className="drink-list">
                <h2>{category}</h2>
                {this.state.allWine
                    .filter(wine => {
                        return wine.category === category;
                    })
                    .map(whiteWine => {
                        return (
                            <ul key={whiteWine.id}>
                                <li className="winelist">
                                    <div>
                                        <h3 className="drink-title">
                                            {whiteWine.varietal}
                                            <span className="price">
                                                {whiteWine.glass_price &&
                                                whiteWine.bottle_price
                                                    ? `${
                                                          whiteWine.glass_price
                                                      } / ${
                                                          whiteWine.bottle_price
                                                      }`
                                                    : whiteWine.bottle_price ||
                                                      whiteWine.bottle_price}
                                            </span>
                                            {this.props.chefLoggedOn ? (
                                                <span>
                                                    <a href="#oc-edit-item-modal">
                                                        <button className="oc-crud-button" onClick={() => { this.handleEditButtonClick(whiteWine.id, "wines") }}>Edit</button>
                                                    </a>
                                                    <button className="oc-crud-button" onClick={() => { this.deleteItem(whiteWine.id, "wines") }}>Delete</button>
                                                </span>
                                            ) : null}
                                        </h3>

                                        <p>
                                            {whiteWine.vineyard
                                                ? `${whiteWine.vineyard}`
                                                : ""}
                                            {whiteWine.region &&
                                            whiteWine.vineyard
                                                ? ` / `
                                                : ""}
                                            {whiteWine.region
                                                ? `${whiteWine.region}`
                                                : ""}
                                            {whiteWine.region && whiteWine.year
                                                ? ` / `
                                                : ""}
                                            {whiteWine.year
                                                ? whiteWine.year
                                                : ""}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        );
                    })}
            </div>
        );
    };

    renderBeer = category => {
        return (
            <div className="drink-list">
                <h2>{category}</h2>
                {this.state.allBeer
                    .filter(beer => {
                        return beer.category === category;
                    })
                    .map(beer => {
                        return (
                            <ul key={beer.id}>
                                <li className="winelist">
                                    <div>
                                        <h3 className="drink-title">
                                            {beer.name}
                                            <span className="price">
                                                {beer.price}
                                            </span>
                                            {this.props.chefLoggedOn ? (
                                                <span>
                                                    <a href="#oc-edit-beer-modal">
                                                        <button className="oc-crud-button" onClick={() => { this.handleEditButtonClick(beer.id, "beers") }}>Edit</button>
                                                    </a>
                                                    <button className="oc-crud-button" onClick={() => { this.deleteItem(beer.id, "beers") }}>Delete</button>
                                                </span>
                                            ) : null}
                                        </h3>

                                        <p>
                                            {beer.brewery
                                                ? `${beer.brewery}`
                                                : ""}
                                            {beer.region && beer.brewery
                                                ? ` / `
                                                : ""}
                                            {beer.region
                                                ? `${beer.region}`
                                                : ""}
                                            {beer.container && beer.region
                                                ? ` / `
                                                : ""}
                                            {beer.container
                                                ? beer.container
                                                : ""}
                                            {beer.oz && beer.container
                                                ? ` / `
                                                : ""}
                                            <span className="beer-oz">
                                                {beer.oz ? `${beer.oz} oz` : ""}
                                            </span>
                                            {beer.abv && beer.oz ? ` / ` : ""}
                                            {beer.abv ? `${beer.abv}%` : ""}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        );
                    })}
            </div>
        );
    };

    getWineData = async () => {
        const response = await axios.get("/wines");
        const allWine = response.data;
        this.setState({ allWine });
    };

    getBeerData = async () => {
        const response = await axios.get("/beers");
        const allBeer = response.data;
        this.setState({ allBeer });
    };

    componentDidMount() {
        this.getWineData();
        this.getBeerData();
    }

    render() {
        return this.state.allWine && this.state.allBeer ? (
        !this.props.chefLoggedOn 
        ?
          <div className="wines">
            {this.renderWines("white")}
            {this.renderWines("rose")}
            {this.renderWines("red")}
            {this.renderWines("bubbles")}
            {this.renderWines("dessert wine")}
            {this.renderBeer("beer")}
            {this.renderBeer("boozy kombucha")}
            {this.renderBeer("cider")}
          </div> 
        :
        <div className="wines">
            <div id="oc-edit-item-modal" className="oc-modal oc-wine-modal">
                <a href="#close" title="close" className="oc-close">X</a>
                <h1 className="oc-modal-title">Edit Item</h1>
                <form onChange={this.onFormChange} onSubmit={this.onWineEditFormSubmit}>
                    <label className="oc-input-label">
                        Category
                    <br />
                        <input className="oc-input" name="category" placeholder="Category of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Varietal
                    <br />
                        <input className="oc-input" name="varietal" placeholder="Varietal of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Vineyard
                    <br />
                        <input className="oc-input" name="vineyard" placeholder="Vineyard of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Region
                    <br />
                        <input className="oc-input" name="region" placeholder="Region of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Year
                    <br />
                        <input className="oc-input" name="year" placeholder="Year of the Wine" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Glass Price
                    <br />
                        <input className="oc-input" name="glass_price" placeholder="Glass Price of the Wine" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Bottle Price
                    <br />
                        <input className="oc-input" name="bottle_price" placeholder="Bottle Price of the Wine" type="number" />
                    </label>
                    <br />
                    <button className="oc-edit-button">Submit</button>
                </form>
            </div>
            <div id="oc-create-item-modal" className="oc-modal oc-create-modal">
                <a href="#close-create" title="close-create" className="oc-create-close">X</a>
                <h1 className="oc-create-modal-title">Create Item</h1>
                    <form onChange={this.onFormChange} onSubmit={this.onWineCreateFormSubmit}>
                    <label className="oc-input-label oc-create-label">
                        Category
                    <br />
                        <input className="oc-input" name="category" placeholder="Category of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Varietal
                    <br />
                        <input className="oc-input" name="varietal" placeholder="Varietal of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Vineyard
                    <br />
                        <input className="oc-input" name="vineyard" placeholder="Vineyard of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Region
                    <br />
                        <input className="oc-input" name="region" placeholder="Region of the Wine" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Year
                    <br />
                        <input className="oc-input" name="year" placeholder="Year of the Wine" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Glass Price
                    <br />
                        <input className="oc-input" name="glass_price" placeholder="Glass Price of the Wine" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Bottle Price
                    <br />
                        <input className="oc-input" name="bottle_price" placeholder="Bottle Price of the Wine" type="number" />
                    </label>
                    <br />
                    <button className="oc-edit-button oc-create-button">Submit</button>
                </form>
            </div>
            <a href="#oc-create-item-modal" onClick={() => { this.handleCreateButtonClick("wines") }}>
                <button className="oc-crud-button oc-new-button">New</button>
            </a>
            {this.renderWines("white")}
            {this.renderWines("rose")}
            {this.renderWines("red")}
            {this.renderWines("bubbles")}
            {this.renderWines("dessert wine")}
            <a href="#oc-create-beer-modal" onClick={() => { this.handleCreateButtonClick("beers") }}>
                <button className="oc-crud-button oc-new-button">New</button>
            </a>
            {this.renderBeer("beer")}
            {this.renderBeer("boozy kombucha")}
            {this.renderBeer("cider")}
            <div id="oc-edit-beer-modal" className="oc-modal">
                <a href="#close" title="close" className="oc-close">X</a>
                <h1 className="oc-modal-title">Edit Item</h1>
                <form onChange={this.onFormChange} onSubmit={this.onBeerEditFormSubmit}>
                    <label className="oc-input-label">
                        Category
                    <br />
                        <input className="oc-input" name="category" placeholder="Category of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Name
                    <br />
                        <input className="oc-input" name="name" placeholder="Name of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Brewery
                    <br />
                        <input className="oc-input" name="brewery" placeholder="Brewery of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Region
                    <br />
                        <input className="oc-input" name="region" placeholder="Region of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Container
                    <br />
                        <input className="oc-input" name="container" placeholder="Container of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Ounces
                    <br />
                        <input className="oc-input" name="oz" placeholder="Ounces of the Beer" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Alcohol By Volume
                    <br />
                        <input className="oc-input" name="abv" placeholder="ABV of the Beer" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label">
                        Price
                    <br />
                        <input className="oc-input" name="price" placeholder="Price of the Beer" type="number" />
                    </label>
                    <br />
                    <button className="oc-edit-button">Submit</button>
                </form>
            </div>
            <div id="oc-create-beer-modal" className="oc-modal oc-create-modal">
                <a href="#close-create" title="close-create" className="oc-create-close">X</a>
                <h1 className="oc-create-modal-title">Create Item</h1>
                <form onChange={this.onFormChange} onSubmit={this.onBeerCreateFormSubmit}>
                    <label className="oc-input-label oc-create-label">
                        Category
                    <br />
                        <input className="oc-input" name="category" placeholder="Category of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Name
                    <br />
                        <input className="oc-input" name="name" placeholder="Name of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Brewery
                    <br />
                        <input className="oc-input" name="brewery" placeholder="Brewery of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Region
                    <br />
                        <input className="oc-input" name="region" placeholder="Region of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Container
                    <br />
                        <input className="oc-input" name="container" placeholder="Container of the Beer" type="text" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Ounces
                    <br />
                        <input className="oc-input" name="oz" placeholder="Ounces of the Beer" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Alcohol By Volume
                    <br />
                        <input className="oc-input" name="abv" placeholder="ABV of the Beer" type="number" />
                    </label>
                    <br />
                    <label className="oc-input-label oc-create-label">
                        Price
                    <br />
                        <input className="oc-input" name="price" placeholder="Price of the Beer" type="number" />
                    </label>
                    <br />
                    <button className="oc-edit-button oc-create-button">Submit</button>
                </form>
            </div>
        </div>
        ) : "Loading"  
    }
}
export default Wine;

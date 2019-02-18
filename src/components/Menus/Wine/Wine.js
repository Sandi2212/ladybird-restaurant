import React, { Component } from "react";
import axios from "axios";
import "./Wine.css";

class Wine extends Component {
    constructor() {
        super();
        this.state = {
            allWine: null,
            allBeer: null
        };
    }

    renderWines = category => {
        return (
            <div className="drink-list">
                <h2>{category}</h2>
                {this.state.allWine
                    .filter(wine => {
                        return wine.category == category;
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
                        return beer.category == category;
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
        ) : (
            "Loading"
        );
    }
}
export default Wine;

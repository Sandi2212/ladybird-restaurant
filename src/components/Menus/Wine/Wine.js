import React, { Component } from "react";
import axios from "axios";
import "./Wine.css";

class Wine extends Component {
    constructor() {
        super();
        this.state = {
            allWine: null,
            allBeer: null,
            whiteWine: null,
            redWine: null,
            rose: null
        };
    }

    whiteWines = () => {
        return (
            <div className="white-wine">
                {this.state.allWine
                    .filter(wine => {
                        return wine.category == "white";
                    })
                    .map(whiteWine => {
                        return (
                            <ul key={whiteWine.id}>
                                <li className="winelist">
                                    <div>
                                        <h3 className="drink-title">
                                            {whiteWine.varietal}
                                            <span>
                                                {whiteWine.glass_price
                                                    ? `${
                                                          whiteWine.glass_price
                                                      } / ${
                                                          whiteWine.bottle_price
                                                      }`
                                                    : whiteWine.bottle_price}
                                            </span>
                                        </h3>

                                        <span>{whiteWine.vineyard}</span>
                                        <br />
                                        <span>
                                            {whiteWine.region} /{whiteWine.year}
                                        </span>
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
        console.log(allWine);
        this.setState({ allWine });
    };

    getBeerData = async () => {
        const response = await axios.get("/beers");
        const allBeer = response.data;
        console.log(allBeer);
        this.setState({ allBeer });
    };

    componentDidMount() {
        this.getWineData();
        this.getBeerData();
    }

    render() {
        return this.state.allWine && this.state.allBeer ? (
            <div className="wines">{this.whiteWines()}</div>
        ) : (
            "Loading"
        );
    }
}
export default Wine;

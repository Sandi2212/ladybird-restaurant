import React , {Component} from "react";
import axios from "axios";
import "./Cocktails.css";

class  Cocktails extends Component{
    constructor(){
        super()
        this.state = {
          allCocktails: [],
          cocktailToEdit: null,
          idOfCocktailToEdit: null
        };
    }

    handleEditButtonClick = (idOfCocktailToEdit, cocktailToEdit) => {
        this.setState({ idOfCocktailToEdit, cocktailToEdit});
    }

    deleteItem = async (itemId) => {
        await axios.delete(`/cocktails/${itemId}`).then(() => {
            this.getCocktailsData();
        })
    }

    onFormChange = async (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value })
    }

    onEditFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const updatedCocktail = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            alcohol_free: this.state.alcohol_free,
            small_price: this.state.small_price,
            large_price: this.state.large_price
        }
        const url = `/cocktails/${this.state.idOfCocktailToEdit}`;
        await axios.put(url, updatedCocktail).then(() => {
            this.getCocktailsData();
        })
    }

    onCreateFormSubmit = async (evnt) => {
        evnt.preventDefault();
        const foodItemToCreate = {
          name: this.state.name,
          ingredients: this.state.ingredients,
          alcohol_free: this.state.alcohol_free,
          small_price: this.state.small_price,
          large_price: this.state.large_price
        };
        await axios.post("/cocktails", foodItemToCreate).then(() => {
            this.getCocktailsData();
        })
    }

    getCocktailsData = async () => {
        const resp = await axios.get("/cocktails")
        const allCocktails = resp.data;
        this.setState({allCocktails});
    }
    componentDidMount(){
        this.getCocktailsData();
    }
  
    render(){
        const allCocktails = this.state.allCocktails
        const cocktail = this.state.cocktailToEdit
        const alcoholicCocktails = allCocktails.filter(cocktail => {
	    return cocktail.alcohol_free === false
        }).map(cocktail => {
	    return (
		<div className="cocktails_list" key={cocktail.id}>
                    <h4 className="cocktails_title">{cocktail.name} 
                    <span className="cocktails_price">
                    {cocktail.small_price || ''}
                    {cocktail.small_price &&  cocktail.large_price && ' / ' }
                    {cocktail.large_price || ''}
                    </span>
                    {this.props.chefLoggedOn ? (
                        <span>
                            <a href="#oc-edit-item-modal">
                                <button className="oc-crud-button" onClick={() => { this.handleEditButtonClick(cocktail.id, cocktail) }}>Edit</button>
                            </a>
                            <button className="oc-crud-button" onClick={() => { this.deleteItem(cocktail.id) }}>Delete</button>
                        </span>
                    ) : null}
                    </h4>
                    <p className="cocktails_ingredient">
                    {cocktail.ingredients}
                    </p>
               </div>
        )
        })  

        const alcoholFreeCocktails = allCocktails.filter(cocktail => {
            return cocktail.alcohol_free === true
            }).map(cocktail => {
            return (
                <div className="cocktails_list" key={cocktail.id}>
                    <h4 className="cocktails_title">
                    {cocktail.name}
                    <span className="cocktails_price">
                    {cocktail.small_price || ''}
                    {cocktail.small_price &&  cocktail.large_price && ' / ' }
                    {cocktail.large_price || ''} 
                    </span>
                    {this.props.chefLoggedOn ? (
                        <span>
                            <a href="#oc-edit-item-modal">
                                <button className="oc-crud-button" onClick={() => { this.handleEditButtonClick(cocktail.id, cocktail) }}>Edit</button>
                            </a>
                            <button className="oc-crud-button" onClick={() => { this.deleteItem(cocktail.id) }}>Delete</button>
                        </span>
                    ) : null}
                    </h4>
                    <p className="cocktails_ingredient">
                    {cocktail.ingredients}
                    </p>
                </div>
            )
            })
        return !this.props.chefLoggedOn 
            ? 
            <div className="cocktails">
                {alcoholicCocktails}
                <h3 className="zero_proof">Zero Proof</h3>
                {alcoholFreeCocktails}
            </div>
            :
            <div className="cocktails">
                <div id="oc-edit-item-modal" className="oc-modal">
                    <a href="#close" title="close" className="oc-close">X</a>
                    <h1 className="oc-modal-title">Edit Cocktail</h1>
                    <form onChange={this.onFormChange} onSubmit={this.onEditFormSubmit}>
                        <label className="oc-input-label">
                            Name
                        <br />
                            <input className="oc-input" name="name" placeholder="Name of the Cocktail" type="text" defaultValue={cocktail && cocktail.name}/>
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Ingredients
                        <br />
                            <input className="oc-input" name="ingredients" placeholder="Ingredients in the Cocktail" type="text" defaultValue={cocktail && cocktail.ingredients}/>
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Alcohol Free?
                        <br />
                            <input className="oc-input" name="alcohol_free" placeholder="Is Cocktail Alcoholic?" type="text" defaultValue={cocktail && cocktail.alcohol_free}/>
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Small Price
                        <br />
                            <input className="oc-input" name="small_price" placeholder="Price of a Small" type="number" defaultValue={cocktail && cocktail.small_price}/>
                        </label>
                        <br />
                        <label className="oc-input-label">
                            Large Price
                        <br />
                            <input className="oc-input" name="large_price" placeholder="Price of a Large" type="number" defaultValue={cocktail && cocktail.large_price}/>
                        </label>
                        <br />
                        <button className="oc-edit-button">Submit</button>
                    </form>
                </div>
                <a href="#oc-create-item-modal"><button className="oc-crud-button oc-new-button">New</button></a>
                {alcoholicCocktails}
                <h3 className="zero_proof">Zero Proof</h3>
                <a href="#oc-create-item-modal"><button className="oc-crud-button oc-new-button">New</button></a>
                {alcoholFreeCocktails}
                <div id="oc-create-item-modal" className="oc-modal oc-create-modal">
                    <a href="#close-create" title="close-create" className="oc-create-close">X</a>
                    <h1 className="oc-create-modal-title">New Cocktail</h1>
                        <form onChange={this.onFormChange} onSubmit={this.onCreateFormSubmit}>
                        <label className="oc-input-label oc-create-label">
                            Name
                        <br />
                            <input className="oc-input" name="name" placeholder="Name of the Cocktail" type="text" />
                        </label>
                        <br />
                        <label className="oc-input-label oc-create-label">
                            Ingredients
                        <br />
                            <input className="oc-input" name="ingredients" placeholder="Ingredients in the Cocktail" type="text" />
                        </label>
                        <br />
                        <label className="oc-input-label oc-create-label">
                            Alcohol Free?
                        <br />
                            <input className="oc-input" name="alcohol_free" placeholder="Is Cocktail Alcoholic?" type="text" />
                        </label>
                        <br />
                        <label className="oc-input-label oc-create-label">
                            Small Price
                        <br />
                            <input className="oc-input" name="small_price" placeholder="Price of a Small" type="number" />
                        </label>
                        <br />
                        <label className="oc-input-label oc-create-label">
                            Large Price
                        <br />
                            <input className="oc-input" name="large_price" placeholder="Price of a Large" type="number" />
                        </label>
                        <br />
                        <button className="oc-edit-button oc-create-button">Submit</button>
                    </form>
                </div>
            </div>
    }
}
export default Cocktails

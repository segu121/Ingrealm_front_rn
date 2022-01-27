import {Component} from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./ingredientList.css"

class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.state = {ingredients : []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/ingredients')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ingredients: data})
            });
    }

    async remove(id) {
        await fetch(`/ingredients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedIngredients = [...this.state.ingredients].filter(i => i.id !== id);
            this.setState({ingredients: updatedIngredients});
        });
    }

    render() {
        const {ingredients, isLoading} = this.state;

        if(isLoading) {
            return <p>Loading...</p>;
        }

        const ingredientsList = ingredients.map(ingredient => {
            return <tr key={ingredient.id}>
                <td>{ingredient.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{ingredient.name}</td>
                <td>{ingredient.inciname}</td>
                <td>{ingredient.category}</td>
                <td>{ingredient.description}</td>
                <td>{ingredient.naturalRating}</td>
                <td>{ingredient.rating}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/ingredients/" + ingredient.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(ingredient.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/ingredients/new">Add Ingredient</Button>
                    </div>
                    <h3>Ingredients</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">ID</th>
                            <th width="20%">Name</th>
                            <th width="15%">INCI Name</th>
                            <th width="10%">Category</th>
                            <th width="30%">Description</th>
                            <th width="5%">Nat. Rat.</th>
                            <th width="5%">Rating</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ingredientsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default IngredientList;
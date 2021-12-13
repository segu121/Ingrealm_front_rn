import {Component} from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.state = {ingredients: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/admin-panel')
            .then(response => response.json())
            .then(data => this.setState({ingredients: data}));
    }

    async remove(id) {
        await fetch(`/admin-panel/${id}`, {
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
                <td style={{whiteSpace: 'nowrap'}}>{ingredient.name}</td>
                <td>{ingredient.naturalRating}</td>
                <td>{ingredient.description}</td>
                <td>{ingredient.INCIName}</td>
                <td>{ingredient.rating}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin-panel/" + ingredient.id}>Edit</Button>
                        <Button size="sm" color="primary" onClick={() => this.remove(ingredient.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/admin-panel/new">Add Ingredient</Button>
                    </div>
                    <h3>Ingredients</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">ID</th>
                            <th width="20%">Name</th>
                            <th width="10%">Nat. Rat.</th>
                            <th width="30%">Description</th>
                            <th width="15%">INCI Name</th>
                            <th width="10%">Rating</th>
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
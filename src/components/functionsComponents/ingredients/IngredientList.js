import {Button, ButtonGroup, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";
import "./ingredientList.css";
import PaginationComponent from "./PaginationComponent";
import SearchBar from "./SearchBar";
import {useEffect, useState} from "react";


function IngredientList(props) {

    const [state, setState] = useState({ingredients: []});
    const [currentPage, setCurrentPage] = useState(1);
    const [ingPerPage, setIngPerPage] = useState(25);
    const [searchIng, setSearchIng] = useState("");

    const displayResult = () => { // handleChange???

        if (searchIng === "") {
            return currentIngredients
        } else {

            const displayFilter = ingredients.filter(e => e.inciname.toUpperCase().includes(searchIng.toUpperCase()))
                .map(value => {
                    return ingredientToComponent(value);
                })

            // }
            console.log(displayFilter)
            return displayFilter;
        }
    }


    useEffect(() => {
        console.log(props)
        fetch('/ingredients')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setState({ingredients: data})
            })
    }, []);


    const remove = async (id) => {
        await fetch(`/ingredients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedIngredients = [...state.ingredients].filter(i => i.id !== id);
            setState({ingredients: updatedIngredients});
        });
    }

    const {ingredients, isLoading} = state;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // jeżeli słowo jest puste to tylko mapujemy, w przeciwnym razie jeszcze filtrujemy
    // paginacja po wyszukiwaniu powinna wracać do pierwotnego stanu
    // jak połączyć SearchBar? przekazać hooka w parametrze
    const ingredientsList = ingredients.map((value) => {
        return ingredientToComponent(value)
    });

    function ingredientToComponent(ingredient) {
        return (
            <tr key={ingredient.id}>
                <td>{ingredient.id}</td>
                <td>{ingredient.name}</td>
                <td>{ingredient.inciname}</td>
                <td>{ingredient.category}</td>
                <td style={{display: "flex", maxHeight: '200px', overflow: "auto"}}>{ingredient.description}</td>
                <td>{ingredient.naturalRating}</td>
                <td>{ingredient.rating}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/ingredients/" + ingredient.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => remove(ingredient.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        )

    }

    //Get current ingredients (pagination)
    const indexOfLastIngredient = currentPage * ingPerPage;
    const indexOfFirstPost = indexOfLastIngredient - ingPerPage;
    const currentIngredients = ingredientsList.slice(indexOfFirstPost, indexOfLastIngredient);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    const selectedIng = (e) => {
        console.log(e)
        setSearchIng(e);
        // setSelectedWord(e);
        // console.log(selectedWord)
    }

    return (
        <div className="IngredientsList">
            <SearchBar
                placeholder="Enter a INCI name..."
                data={ingredients}
                // wordToSend={(searchIng => setSearchIng(searchIng))}
                newArg={selectedIng}
            />
            <Container fluid>
                <div className="add-btn">
                    <Button color="success" tag={Link} to="/ingredients/new">Add Ingredient</Button>
                </div>
                <h3>Ingredients</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="5%">ID</th>
                        <th width="5%">Name</th>
                        <th width="15%">INCI Name</th>
                        <th width="20%">Category</th>
                        <th width="35%">Description</th>
                        <th width="5%">Nat. Rat.</th>
                        <th width="5%">Rating</th>
                        <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayResult()}
                    {/*{currentIngredients}*/}
                    </tbody>
                </Table>
            </Container>
            <PaginationComponent
                ingredientsPerPage={ingPerPage}
                totalIngredients={ingredients.length}
                paginate={paginate}
            />
        </div>
    );
}

export default IngredientList
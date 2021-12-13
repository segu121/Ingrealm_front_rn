import React, { useEffect, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useParams} from "react-router";


function IngredientEdit(props){

    let [item, setItem] = useState({
        name: '',
        naturalRating: '',
        description: '',
        INCIName: '',
        rating: '',
    });
    let { id } = useParams();
    const history = useNavigate();


    useEffect( () => {
        console.log(props);
        if (id !== 'new') {
            fetch(`/clients/${id}`)
                .then(response => response.json())
                .then(data => setItem(data));
        }
    },[]);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let newItem = {...item};
        newItem[name] = value;
        setItem(newItem);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const {item} = this.state;

        await fetch('/admin-panel/' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        history.push('/admin-panel');
    }


        // const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Ingredient' : 'Add Ingredient'}</h2>;

        return (
            <div>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="naturalRating">Natural Rating</Label>
                        <Input type="number" name="naturalRating" id="naturalRating" value={item.naturalRating || ''}
                               onChange={handleChange} autoComplete="naturalRating"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={item.description || ''}
                               onChange={handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="INCIName">INCI Name</Label>
                        <Input type="text" name="INCIName" id="INCIName" value={item.INCIName || ''}
                               onChange={handleChange} autoComplete="INCIName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">Rating</Label>
                        <Input type="number" name="rating" id="rating" value={item.rating || ''}
                               onChange={handleChange} autoComplete="rating"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/admin-panel">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
        );
}
export default IngredientEdit;
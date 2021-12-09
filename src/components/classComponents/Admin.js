import React from 'react'
import { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    addIngredientForm() {
        return (
            <div className='ingredient-form'>
                <form>
                    <div className='ingName'>
                        <label>
                            Enter ingredient name:
                            <input type="text"/>
                        </label>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.addIngredientForm()}
            </div>
        )
    }
}

export default Admin
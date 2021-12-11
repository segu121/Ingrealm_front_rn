import React from 'react'
import { Component } from 'react';
import IngredientList from "./IngredientList";

class Admin extends Component {


    // ingredientsTable() {
    //     const columns = [
    //         { field : 'id', headerName: 'ID', width: 70},
    //         { field : 'name', headerName: 'Name', width: 150},
    //         { field : 'rating', headerName: 'Rating', type: 'number', width: 70},
    //         { field : 'description', headerName: 'Description', width: 300},
    //     ];
    //
    //     const rows = [
    //         { id: 1, name: 'ingredient1', rating: 1.0, description: 'aaaaaa'},
    //         { id: 2, name: 'ingredient2', rating: 1.0, description: 'aaaaaa'},
    //         { id: 3, name: 'ingredient3', rating: 1.0, description: 'aaaaaa'},
    //         { id: 4, name: 'ingredient4', rating: 1.0, description: 'aaaaaa'},
    //         { id: 5, name: 'ingredient5', rating: 1.0, description: 'aaaaaa'},
    //         { id: 6, name: 'ingredient6', rating: 1.0, description: 'aaaaaa'},
    //     ];
    //
    //     return (
    //         <div style={{height: 600, width: '100%'}}>
    //             <DataGrid
    //                 rows={rows}
    //                 columns={columns}
    //                 pageSize={50}
    //                 rowsPerPageOptions={[50]}
    //                 checkboxSelection
    //             />
    //         </div>
    //     );
    // };
    //
    // addIngredientForm() {
    //     return (
    //         <div className='ingredient-form'>
    //             <form>
    //                 <div className='ingName'>
    //                     <label>
    //                         Enter ingredient name:
    //                         <input type="text"/>
    //                     </label>
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // };

    render() {
        return (
            <div>
                <IngredientList/>
            </div>
        );
    };
}

export default Admin
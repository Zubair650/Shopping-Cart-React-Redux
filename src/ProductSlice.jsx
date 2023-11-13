import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    products: [
        { id: 1, type: 'T-Shirt', name:'Red T-Shirt', price: 500, img: 'https://i.ibb.co/zQ0DtRq/Mens-Standard-Fit-Heathered-Short-Sleeve-V-Neck-T-Shirt01-600x764.jpg' },
        { id: 2, type: 'Jeans', name:'Western', price: 600, img: 'https://i.ibb.co/qgZc3kc/creaslim-0-QDEj5dn-UMk-unsplash.jpg' },
        { id: 3, type: 'Shoe', name:'Snickers', price: 400,img: 'https://i.ibb.co/g6vMT5x/usama-akram-s-g-YAb-QTo-Xk-unsplash.jpg' },
        { id: 4, type: 'Jacket', name:'Modern Jacket', price: 400, img: 'https://i.ibb.co/ScHMGKm/Mens-Standard-Fit-Deconstructed-Knit-Blazer01-600x764.jpg' },
        { id: 5, type: 'T-Shirt', name:'Black T-Shirt', price: 400, img: 'https://i.ibb.co/b5vhR8b/Mens-Standard-Fit-Short-Sleeve-Crew-T-Shirt01-1-600x764.jpg' },
        { id: 6, type: 'Jacket', name:'Light jeans', price: 400, img: 'https://i.ibb.co/LSnb1Jb/Mens-Lightweight-Puffer-Jacket01-600x764.jpg' },
        { id: 7, type: 'Jeans', name:'Dark', price: 400, img: 'https://i.ibb.co/qgZc3kc/creaslim-0-QDEj5dn-UMk-unsplash.jpg' },
        { id: 8, type: 'T-Shirt', name:'Blue T-Shirt', price: 400, img: 'https://i.ibb.co/SVN1qQw/Mens-Standard-Fit-Short-Sleeve-V-Neck-T-Shirt01-1-600x764.jpg' },
        { id: 9, type: 'T-Shirt', name:'White T-Shirt', price: 400, img: 'https://i.ibb.co/7tBHcb0/Mens-Standard-Fit-Crew-T-Shirt01-600x764.jpg' },
        { id: 10, type: 'Jeans', name:'Traditional', price: 400, img: 'https://i.ibb.co/qgZc3kc/creaslim-0-QDEj5dn-UMk-unsplash.jpg' },
    ],
    products2: []
}

export const pSlice = createSlice({
    name: 'products',
    initialState: initialBooks,
    reducers: {
        showProducts: (state) => state,
        addProducts: (state, action) => {
            state.products2.push(action.payload)
        },
        updateProducts: (state, action) => {
            const { id, type, price, quantity } = action.payload;
            const productToUpdate = state.products2.find((p) => p.id === id);
            if (productToUpdate) {
                productToUpdate.type = type;
                productToUpdate.price = price;
                productToUpdate.quantity = quantity;
            } else {
                console.error(`Product with ID "${id}" not found in state.`);
            }
        },
        deleteProducts: (state, action) => {
            const id = action.payload;
            state.products2 = state.products2.filter((p) => p.id !== id)
        }
    }
});

export const { showProducts, addProducts, updateProducts, deleteProducts } = pSlice.actions;
export default pSlice.reducer;
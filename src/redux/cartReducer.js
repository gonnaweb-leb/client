import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(item => item.id == action.payload.id)
            if (product) {
                // if (action.payload.quantity <= 5 - product.quantity) { product.quantity += action.payload.quantity }
                if (action.payload.quantity <= 5) { product.quantity = action.payload.quantity }
                // else {product.quantity = 5}
                // product.quantity > 5 ? product.quantity = 5 : product.quantity += action.payload.quantity
            } else { state.products.push(action.payload) }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.products = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer
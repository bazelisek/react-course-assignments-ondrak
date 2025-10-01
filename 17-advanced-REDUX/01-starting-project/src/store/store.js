import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    contents: [],
    visible: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        toggleVisibility(state) {
            console.log("Toggling");
            state.visible = !state.visible;
        },
        addItemToCart(state, action) {
            const index = state.contents.findIndex(p => p.item.title === action.payload.title);
            if (index === -1){
                state.contents.push({item: action.payload, amount: 1});
                return;
            }
            state.contents[index].amount += 1;
        },
        subtractItemFromCart(state, action) {
            const index = state.contents.findIndex(p => p.item.title === action.payload.title);
            if (index === -1) {return;}
            if (state.contents[index].amount === 1) {
                state.contents.splice(index, 1);
                return;
            }
            state.contents[index].amount -= 1;
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default store;

export const cartActions = cartSlice.actions;

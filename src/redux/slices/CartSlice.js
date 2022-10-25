import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemm: (state, action) => {
        const newItem = action.payload
        // const existingItem = state.cartItems.find((item)=> item.id === newItem.id )
        const existingItem = state.cartItems.find(item => item.id === newItem.id)

        state.totalQuantity++

        if (!existingItem){
            state.cartItems.push({
                id: newItem.id,
                productName: newItem.productName,
                Image: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        } else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.price) + Number(newItem.price)
        }


        state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price)  * Number(item.quantity)
        }, 0)

        alert('product added')
        console.log(state.totalQuantity)
        console.log(state.totalAmount)
        console.log(state.cartItems)
        console.log(state.newItem)

    }
  }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer
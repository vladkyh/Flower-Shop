// import { createSlice } from '@reduxjs/toolkit'
// const initialState= {
//     totalPrice: 0,
//     items: []
//   }
// export const cardSlice = createSlice({
//   name: 'card',
//   initialState,
//   reducers: {
//     addProduct(state, action){
//     const findItem = state.items.find(obj => obj.id === action.payload.id)
    
//     if(findItem){
//       findItem.count++
//     } else{
//       state.items.push({
//         ...action.payload,
//         count:1
//       })
      
//     }
    
    
//       // state.totalPrice 
//       state.totalPrice = state.items.reduce((sum,obj)=>{
        
//         return obj.count * obj.price + sum;
//       },0)
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const {removeProduct, clearProduct ,addProduct,minusProduct  } = cardSlice.actions

// export default cardSlice.reducer
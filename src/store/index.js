import {  createSlice } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
import productDetails from '../productDetails'

const initialState={
    store1Items:productDetails.productItems,
    store2Items:productDetails.productItems,
    store3Items:productDetails.productItems,
    store1Bill:[],
    store2Bill:[],
    store3Bill:[],
    currentStore:'',
    store1Total:0,
    store2Total:0,
    store3Total:0
  
}
const productSlice = createSlice({
    name:'retail',
    initialState,
    reducers:{       
         removeItems(state,action){
            console.log("remove Items")
            const newproduct = action.payload
            // console.log("Remove Items")
          
            // console.log(action.payload)
            // const type=action.payload.type   
            
        switch(newproduct.type){    
        case "store1":
        let p=newproduct.item.price
        // console.log("price...",p)
        state.store1Items = [...state.store1Items,{name:newproduct.item.name,price:p}]
        console.log("store1items",newproduct.item)
        // state.store1Items = [...state.store1Items,{price:newproduct.item.price}]
        state.store1Bill=state.store1Bill.filter(item => item.id !== newproduct.item.name)
        state.store1Total=0
        state.store1Bill.map( item => state.store1Total+=item.amount)  
        console.log(state.store1Items)
        break;
        case "store2":
            // state.store2Items = [...state.store2Items,{id:action.payload.item.id,name:action.payload.item.name,price:action.payload.item.price}]
        state.store2Bill=state.store2Bill.filter(item => item.id !== newproduct.name)
        state.store2Total=0
        state.store2Bill.map( item => item.total+=item.amount)  
        console.log(state.store2Bill[0])
        break;
        case "store3":
            // state.store3Items = [...state.store3Items,{id:action.payload.item.id,name:action.payload.item.name,price:action.payload.item.price}]
        state.store3Bill=state.store3Bill.filter(item => item.id !== newproduct.name)
        state.store3Total=0
        state.store3Bill.map( item => state.store3Total+=item.total)
        break;
        default:alert("Not Deleted")
    }

    },
         addItems(state, action){
             
            const newproduct = action.payload
            
           
            switch(newproduct.currentStore){
            case "store1":
                // let p=state.store1Items.filter(item=>item.name===newproduct.newItem.name)
                // console.log(state.store1Items[0],"hh",p[0])
                
            state.store1Bill.push({
                                id:newproduct.newItem.name,
                                name:newproduct.newItem.name,
                                price:newproduct.newItem.price,
                                quantity:newproduct.newItem.quantity,
                                amount:newproduct.newItem.price*newproduct.newItem.quantity,
                                total:newproduct.newItem.total
                                })
                                state.store1Items=state.store1Items.filter(item=>item.name !== newproduct.newItem.name)
                                state.store1Total=0;
                                state.store1Bill.map( item => state.store1Total+=item.amount)  
                                console.log(newproduct.newItem)
                                break;
            case "store2":state.store2Bill.push({
                                id:newproduct.newItem.name,
                                name:newproduct.newItem.name,
                                price:newproduct.newItem.price,
                                quantity:newproduct.newItem.quantity,
                                amount:newproduct.newItem.price*newproduct.newItem.quantity,
                                total:newproduct.newItem.total
                                })
                                state.store2Items=state.store2Items.filter(item=>item.name !== newproduct.newItem.name)
                                state.store2Bill.map( item => state.store2Total+=item.amount) 
                                break;
            case "store3":state.store3Bill.push({
                id:newproduct.newItem.name,
                name:newproduct.newItem.name,
                price:newproduct.newItem.price,
                quantity:newproduct.newItem.quantity,
                amount:newproduct.newItem.price*newproduct.newItem.quantity,
                total:newproduct.newItem.total
                                })
                                state.store3Items=state.store3Items.filter(item=>item.name !== newproduct.newItem.name)
                                state.store3Bill.map( item => state.store3Total+=item.amount)    
                                break;
            default:alert("Select the proper store")
            
       }
         },
         updateCurrentStore(state,action){

                state.currentStore=action.payload.currentstore;
                // console.log(action.payload.currentStore)
         },
    }
     
})
// useDispatch(retial.actions.addItems)
 console.log(productSlice)
export const generateBill = productSlice.actions;
export default productSlice;
// export default store;


// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     retial: retialReducer,
//   },
// })

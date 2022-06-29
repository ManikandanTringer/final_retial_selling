import React from 'react'
import { useState } from 'react';
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, createFilterOptions } from '@mui/material';
import productDetail from '../productDetails';
import pr from '../productDetails';
// import InputAdornm ent from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import "../App.css"
// import { store } from '../store/store';
import { generateBill } from '../store';
let cr = productDetail;
let productDetails = productDetail;


 const Shops = () => {

  const store1item=useSelector((state)=>state.retail.store1Items)
    const store2item=useSelector((state)=>state.retail.store2Items)
    const store3item=useSelector((state)=>state.retail.store3Items)
    console.log("arrayOfObjects",store1item[0][1])
    const [newItem,setNewItem]=useState({name:'',price:'',quantity:'0 '})
    const [open, setOpen] = React.useState(false);
    const [selectedName1,setSelectedName1]=useState([])
    const [selectedName2,setSelectedName2]=useState([])
    const [selectedName3,setSelectedName3]=useState([])
    const [selectedPrice,setSelectedPrice]=useState('')
    const [currentStore,setCurrentStore]=useState('')
    // let productDetails1 = productDetails;
    
    const dispatch=useDispatch()
    const handleClickOpen = (e) => {
      setOpen(true); 
      setCurrentStore(e.target.id)  
      // let t=e.target.id
      dispatch(generateBill.updateCurrentStore({currentstore:e.target.id}))
        
    }
    const handleClose = () => {
      setOpen(false);
      console.log(cr.productItems)
      productDetails.productItems = cr.productItems;
     
      // console.log(newItem)
    };
   
    // const handleChange = e => {
    //   const { name, value } = e.target;
    //   setNewItem(prevState => ({
    //       ...prevState,
    //       [e.target.name]: value
          
    //   }));
    //   console.log(value)  
    //   checkPrice()
      
    // }
              //     const handlePrice = e =>{
              //     // const handlePrice = e ={(event,value)=>{
              //       // const price = useSelector((state) => state.productDetails.productItems((m) => {
              //         // console.log(m)
                    
                    
              //         // return m.name == e.target.value ? console.log(m.price)
              //     // }))
              //       setNewItem(prevState=>({...prevState,name: value,price:productDetails.productItems.price}))}}
              //     // console.log(newItem)
              // };
  const handleName = value => { 
    // console.log(value)
    // const { name, value } = e.target;
    setNewItem(prevState => ({
        ...prevState,
        name: value
    }));

    let getprice=productDetails.productItems.filter((data)=>(data.name == value))
    
    setSelectedPrice(getprice[0].price)
    // console.log(newItem)
    setNewItem(prevState => ({
      ...prevState,
      price: getprice[0].price
  }));
  //console.log("handle",currentStore)
  if(currentStore=="store1")
    setSelectedName1([...selectedName1,value])
  else if(currentStore=="store2")
    setSelectedName2([...selectedName2,value])
  else if(currentStore=="store3")
    setSelectedName3([...selectedName3,value])
  console.log(selectedName1)
  console.log(selectedName2)
  console.log(selectedName3)
 // selectedPrice(0)
};

// const checkPrice=(productItem)=>{
//     productDetails.productItems.map((item)=>{
//       if(item.name ==productItem){
//           setSelectedPrice(item.price.toNumber)
//           console.log(item.price,selectedPrice)
//           return selectedPrice;
//       }
     
//     })
//       }

// const selectPrice=(selectName)=>{
//       // console.log(selectName)
//       setSelectedName(selectName)
//       productDetails.productItems.find(checkPrice)

// }

const handleAdd=()=>{
  console.log("currentStore",currentStore)
  if(newItem.name && newItem.quantity!=0)
  dispatch(generateBill.addItems({
    currentStore,
    newItem}),)
    // if(currentStore=="store1")
    productDetails.productItems = productDetails.productItems.filter((item,index) => item.name != newItem.name)

    setNewItem({name:null,price:null,quantity:'0'})
  
}
    
  
    return (
      <div className='entry'>
        <Button id="store1" variant="outlined" onClick={handleClickOpen}> store 1 </Button>
        <Button id="store2" variant="outlined" onClick={handleClickOpen}> store 2 </Button>
        <Button id="store3" variant="outlined" onClick={handleClickOpen}> store 3 </Button>
        <Dialog  open={open} onClose={handleClose}>
          <DialogTitle className="product-form">Bill</DialogTitle>
          <DialogContent className="product-form">
            <DialogContentText>
                
              </DialogContentText>
              <Autocomplete
              id="free-solo-demo"
              className='fields'
              //freeSolo
              // fullWidth
              name="name"
              defaultValue='Select Product'
              options={productDetails.productItems.map((option) => option.name)}
              // getOptionLabel
              getOptionDisabled={(option)=>{
                if(currentStore==="store1"){
                  for(let i=0;i>=selectedName1.length;i++){
                    return selectedName1[i]==option
                  }
                }
                if(currentStore==="store2"){
                  for(let i=0;i>=selectedName2.length;i++){
                    return selectedName2[i]==option
                  }
                }
                if(currentStore==="store3"){
                  for(let i=0;i>=selectedName3.length;i++){
                    return selectedName3[i]==option
                  }
                }
                  
                  selectedName1.map((item)=> {
                    console.log(option==item)  
                   })
                
              // false
                }
              }
              // multiple
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="name" />}
              onChange={(event, value) => {handleName(value)}}
            />
           {/* {selectPrice(newItem.name)} */}
           {/* <Autocomplete
              id="free-solo-demo"
              freeSolo
              name="selectedPrice"
              className='fields'
              options={productDetails.productItems.map((option) => option.price )}//(option.name === newItem.name) ? setSelectedPrice(option.price): null
              renderInput={(params) => <TextField {...params} label="price" />}
              value={Number(selectedPrice)}
              disabled
            
            /> */}
           
            
           <TextField
              autoFocus
              margin="dense"
              id="price"
              disabled
              className='fields'
              name="price"
              label='price'
              type="number"
              fullWidth
              // startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
              onChange={(event,value)=>{setNewItem(prevState=>({...prevState,price: selectedPrice}))}}
              value={Number(selectedPrice)}
                variant="outlined"
            />
             <TextField

              margin="dense"
              id="quantiny"
              // contentEditable={true}
              className='fields'
              name="quantiny"
              type="number"
              label="quantiny"
              fullWidth
              onChange={(event,value)=>{
                console.log(event.target.value)
                setNewItem(prevState=>({...prevState,quantity: event.target.value}))
              }}
              value={newItem.quantity}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions className="product-form">
            <Button className='dialog-action' onClick={handleClose}>Cancel</Button>
            <Button className='dialog-action' onClick={handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>

        
    </div>
  )
}

export default Shops
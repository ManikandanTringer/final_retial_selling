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
    // console.log(store1item[1].name)
    const [newItem,setNewItem]=useState({name:'',price:'',quantity:null,total:0})
    const [open, setOpen] = React.useState(false);
    // const [selectedName1,setSelectedName1]=useState([])
    // const [selectedName2,setSelectedName2]=useState([])
    // const [selectedName3,setSelectedName3]=useState([])
    const [selectedPrice,setSelectedPrice]=useState('')
    const [currentStore,setCurrentStore]=useState('')
    // let productDetails1 = productDetails;
    
    const dispatch=useDispatch()
    const handleClickOpen = (e) => {
      setOpen(true); 
      setCurrentStore(e.target.id)  
      // let t=e.target.id
      // dispatch(generateBill.updateCurrentStore({currentstore:e.target.id}))
        
    }
    const handleClose = () => {
      setOpen(false);
      // console.log(cr.productItems)
      // productDetails.productItems = cr.productItems;
      setNewItem({name:null,price:null,quantity:null,total:0})
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
        name: value,
        quantity:null
    }));

    let getprice=store1item.filter((data)=>(data.name == value))
    
    setSelectedPrice(getprice[0].price)
    // console.log("guadfgu",store1item)
  
    setNewItem(prevState => ({
      ...prevState,
      price: getprice[0].price,
  }));
 
  //console.log("handle",currentStore)
  // if(currentStore=="store1")
  //   setSelectedName1([...selectedName1,value])
  // else if(currentStore=="store2")
  //   setSelectedName2([...selectedName2,value])
  // else if(currentStore=="store3")
  //   setSelectedName3([...selectedName3,value])
  // console.log(selectedName1)
  // console.log(selectedName2)
  // console.log(selectedName3)
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
  console.log("current value",newItem.name , newItem.quantity)
  if(newItem.name && newItem.quantity){
        dispatch(generateBill.addItems({
    currentStore,
    newItem}),)
    // if(currentStore=="store1")
    setNewItem({name:'',price:0,quantity:0})
  }
    // productDetails.productItems = productDetails.productItems.filter((item,index) => item.name != newItem.name)

 
    
    
    // dispatch(generateBill.addItems({
    //   currentStore,
    //   }),)
}
    
  
    return (
      <div className='entry'>
        <Button id="store1" variant="contained" sx={{backgroundColor : "violet"}} onClick={handleClickOpen}> store 1 </Button>
        <Button id="store2" variant="contained" sx={{backgroundColor : "violet"}} onClick={handleClickOpen}> store 2 </Button>
        <Button id="store3" variant="contained" sx={{backgroundColor : "violet"}} onClick={handleClickOpen}> store 3 </Button>
      
        <Dialog  open={open} onClose={handleClose}>
          <DialogTitle className="product-form">Generate Bill</DialogTitle>
          <DialogContent className="product-form">
            <DialogContentText></DialogContentText>
              <Autocomplete
              id="free-solo-demo"
              className='fields'
              freeSolo
              style={{ width: "302px",margin:"3px" }}
              name="name"
              options={currentStore==="store1" ? store1item.map((option) => option.name) : currentStore==="store2" ? store2item.map((option) => option.name) : currentStore==="store3" ? store3item.map((option) => option.name): store1item }
              renderInput={(params) => <TextField variant='filled' className='textfield' {...params} label="Name" onClick={(e)=>e.target.value=""} />}
              onChange={(event, value) => {handleName(value)}}
              
              // onReset
            />
           <TextField
              autoFocus
              className='textfield'
              margin="dense"
              id="price"
              disabled
              name="price"
              label='Price'
              type="number"
             
              fullWidth
              // startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
              onChange={(event,value)=>{setNewItem(prevState=>({...prevState,price: selectedPrice}))}}
              value={Number(selectedPrice)}
                variant="outlined"
            />
             <TextField
               required
              margin="dense"
              id="quantiny"
              // contentEditable={true}
              className='fields'
              name="quantity"
              type="number"
              label="Quantity"
              fullWidth
              // InputProps={{
              //   inputProps: { min: 0 }
              // }}
              onInput={(e)=>{e.target.value=  Math.abs(e.target.value);}}
              onClick={(e)=>e.target.value=""} 
              // onKeyUp={event.target.value.replace(/^[0]*/, "")}
              onChange={(event,value)=>{  
              
                console.log(event.target.value);
                // {let strNum=value.toString();
                // console.log("adsf",strNum.replace(/^0+/, ''));}
                // (value < 0)  ? alert("negative value"): value;
                // if(value>0)
                setNewItem(prevState=>({...prevState,quantity: event.target.value}))
                // newItem.map(item=>{item.total+=item.price*item.quantity})
                // console.log(newItem.total)
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
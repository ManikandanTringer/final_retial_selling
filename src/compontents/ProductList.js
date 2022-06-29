import { Table, TableBody, TableCell, TableRow,TableHead } from '@mui/material'
import React from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { generateBill } from '../store';

let lastId=0;

const ProductList = () => {
    const dispatch=useDispatch()
   
    const store1=useSelector((state)=>state.retail.store1Bill)
    const store2=useSelector((state)=>state.retail.store2Bill)
    const store3=useSelector((state)=>state.retail.store3Bill)
    function handleDelete1(name){
        console.log(name)
        dispatch(generateBill.removeItems({name,type:"store1"}))
        // console.log("Displaying ID",store1.id)
    }
    function handleDelete2(name){
        console.log(name)
    dispatch(generateBill.removeItems({name,type:"store2"}))
    // console.log("Displaying ID",store1.id)
}
function handleDelete3(name){
    console.log(name)
dispatch(generateBill.removeItems({name,type:"store3"}))
// console.log("Displaying ID",store1.id)
}

  return (
      
    <div className='store'>
        <div className='store1'>
        <Table>
            <TableHead >
            <TableRow>
    
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    store1.map((item)=>(
                        <>
                        <TableRow>
                            
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell><DeleteForeverRoundedIcon style={{ color: "red" }} onClick={()=>handleDelete1(item.name)}/></TableCell>
                        </TableRow> 
                        {/* <span className='totalamount'></span> */
                        
                        }
                        </>
                    ))
                }
            </TableBody>
        </Table>
        </div>
        <div  className='store2'>
        <Table>
            <TableHead>
            <TableRow>
            
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    store2.map((item)=>(
                       <> <TableRow>
                           
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell><DeleteForeverRoundedIcon style={{ color: "red" }}  onClick={()=>handleDelete2(item.name)}/></TableCell>
                        </TableRow> 
                       
                        </>
                    ))
                    }
                     {/* <span className='totalamount'></span> */}
            </TableBody>
        </Table>
        </div>
        <div className='store3'>
        <Table>
            <TableHead>
            <TableRow>
            {/* <TableCell>product Id</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    store3.map((item)=>(
                        <>
                        <TableRow>
                            {/* <TableCell>{++lastId}</TableCell> */}
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell><DeleteForeverRoundedIcon style={{ color: "red" }}  onClick={()=>handleDelete3(item.name)}/></TableCell>
                        </TableRow> 
                      
                        </>
                    ))
                    }
                   
            </TableBody>
            {/* {1 ?   <span className='totalamount'>Total:{store3}</span> : ''} */}
        </Table>    
        </div>
    </div>
  )
}

export default ProductList
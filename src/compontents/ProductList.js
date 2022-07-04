import { Table, TableBody, TableCell, tableCellClasses, TableRow,TableHead, TableContainer, Paper, Typography } from '@mui/material'
import React from 'react'
// import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { generateBill } from '../store';
import { styled } from '@mui/material/styles';
import StoreDetails from './StoreDetails';



// let lastId=0;

const ProductList = () => {
    const dispatch=useDispatch()
   
    const store1=useSelector((state)=>state.retail.store1Bill)
    const store2=useSelector((state)=>state.retail.store2Bill)
    const store3=useSelector((state)=>state.retail.store3Bill)
    const store1total=useSelector((state)=>state.retail.store1Total)
    const store2total=useSelector((state)=>state.retail.store2Total)
    const store3total=useSelector((state)=>state.retail.store3Total)
    function handleDelete1(item){
        // console.log(item)
        dispatch(generateBill.removeItems({item,type:"store1"}))
        // console.log("Displaying ID",store1.id)
    }
    function handleDelete2(item){
        // console.log(name)
    dispatch(generateBill.removeItems({item,type:"store2"}))
    // console.log("Displaying ID",store1.id)
}
function handleDelete3(item){
    // console.log(name)
dispatch(generateBill.removeItems({item,type:"store3"}))
// console.log("Displaying ID",store1.id)
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
      <>
    <div className='store'>
        <div className='store1'>
            <h2>Store 1</h2>
            <TableContainer component={Paper}>
        <Table  sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableHead >
            <StyledTableRow>
    
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right" >Price</StyledTableCell>
            <StyledTableCell align="right" >Quantity</StyledTableCell>
            <StyledTableCell align="right" >Amount</StyledTableCell>
            <StyledTableCell align="right" >Delete</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
                {
                    store1.map((item)=>(
                        <>
                        <StyledTableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            
                            <StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
                            <StyledTableCell align="right" >{item.price}</StyledTableCell>
                            <StyledTableCell align="right" >{item.quantity}</StyledTableCell>
                            <StyledTableCell align="right" >{item.amount}</StyledTableCell>
                            <StyledTableCell align="right" ><DeleteForeverRoundedIcon style={{ color: "red" }} onClick={()=>handleDelete1(item)}/></StyledTableCell>
                          
                        </StyledTableRow> 
                        {/* <span className='totalamount'></span> */
                        
                        }
                        </>
                    ))
                }
            </TableBody>

        </Table>
        <Typography>Total : {useSelector((state)=>state.retail.store1Total)}</Typography>
        </TableContainer>
        </div>
        <div  className='store2'>
        <h2>Store 2</h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableHead>
            <StyledTableRow>
            
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right" >Price</StyledTableCell>
            <StyledTableCell align="right" >Quantity</StyledTableCell>
            <StyledTableCell align="right" >Amount</StyledTableCell>
            <StyledTableCell align="right" >Delete</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
                {
                    store2.map((item)=>(
                       <> <StyledTableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                           
                            <StyledTableCell  >{item.name}</StyledTableCell>
                            <StyledTableCell align="right" >{item.price}</StyledTableCell>
                            <StyledTableCell align="right" >{item.quantity}</StyledTableCell>
                            <StyledTableCell align="right" >{item.amount}</StyledTableCell>
                            <StyledTableCell align="right" ><DeleteForeverRoundedIcon style={{ color: "red" }}  onClick={()=>handleDelete2(item)}/></StyledTableCell>
                        </StyledTableRow> 
                       
                        </>
                    ))
                    }
                     {/* <span className='totalamount'></span> */}
                    
            </TableBody>
            
        </Table>
        {/* {store2.map(item=>{store2.amount}) && <Typography>Total</Typography>} */}

        <Typography>Total : {useSelector((state)=>state.retail.store2Total)}</Typography>
        </TableContainer>
        </div>
        <div className='store3'>
        <h2>Store 3</h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableHead>
            <StyledTableRow>
            {/* <TableCell>product Id</TableCell> */}
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell align="right" >Price</StyledTableCell>
            <StyledTableCell align="right" >Quantity</StyledTableCell>
            <StyledTableCell align="right" >Amount</StyledTableCell>
            <StyledTableCell align="right" >Delete</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
                {
                    store3.map((item)=>(
                        <>
                        <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {/* <TableCell>{++lastId}</TableCell> */}
                            <StyledTableCell component="th" scope="row" >{item.name}</StyledTableCell>
                            <StyledTableCell align="right" >{item.price}</StyledTableCell>
                            <StyledTableCell align="right" >{item.quantity}</StyledTableCell>
                            <StyledTableCell align="right" >{item.amount}</StyledTableCell>
                            <StyledTableCell align="right" ><DeleteForeverRoundedIcon style={{ color: "red" }}  onClick={()=>handleDelete3(item)}/></StyledTableCell>
                        </StyledTableRow> 
                      
                        </>
                    ))
                    }
                   
            </TableBody>
            {/* {1 ?   <span className='totalamount'>Total:{store3}</span> : ''} */}
         
        </Table>    
        <Typography  align="center" >Total : {useSelector((state)=>state.retail.store3Total)}</Typography> 
       </TableContainer>
        </div>
        
    </div>
    {/* {store1.length>0 || store2.length>0 || store3.length>0 ? <StoreDetails /> : null} */}
    { store1.length>0 || store2.length>0 || store3.length>0 ? <span><h3>Total of all Store: {store1total+store2total+store3total}</h3></span>:''}
</>
  )
}

export default ProductList
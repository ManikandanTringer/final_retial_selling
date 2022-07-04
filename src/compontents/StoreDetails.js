import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import "../App.css"

const StoreDetails = () => {
    let store1total=useSelector((state)=>state.retail.store1Total)
    let store2total=useSelector((state)=>state.retail.store2Total)
    let store3total=useSelector((state)=>state.retail.store3Total)
        
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'store', headerName: 'Store Name', width: 130 },
      
        {
          field: 'total',
          headerName: 'Total',
          type: 'number',
          width: 100,
        },
      ];
      
      const rows = [
        { id: 1, store: 'store1', total: store1total },
        { id: 2, store: 'store2', total: store2total },
        { id: 3, store: 'store3', total: store3total },
      ];
      

    const [storeBillData,setStoreBillData]=useState([store1total,store2total,store3total])
  return (
    <div  className='store-data'>
      <DataGrid   rows={rows} columns={columns}  
      filterModel={{
          items: [
            {
              columnField: "total",
              operatorValue: ">",
              value: "0"
            }
          ]
        }}
        />
    </div>
   
  )
}

export default StoreDetails
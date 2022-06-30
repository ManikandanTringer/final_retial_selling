import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './compontents/ProductList';
import Shops from './compontents/Shops';

function App() {
  const id=useSelector((state)=>state.id)
  const name=useSelector((state)=>state.name)
  const items=useSelector((state)=>state.store1List)
  const dispatch=useDispatch();
  // const addItem=()=>{
  //   dispatch({type:'ADD',payload:{id:1,name:"soap",price:30,}})
  // }
  return (
    <div className="App">
       <header>
        <h1 className='app-title'> Retail Selling</h1>
       </header>
        {/* <button onClick={()=>console.log('added')}>Add</button> */}
        <Shops />
        <ProductList />
    </div>
  );
}

export default App;

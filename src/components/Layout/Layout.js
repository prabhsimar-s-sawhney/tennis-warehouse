import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
// import data from '../../data/data.json';
import Products from "../Products/Products";
import './Layout.css';
// import { useDispatch } from "react-redux";

const Layout = () => {
  const [data, setData] = useState();
  const[filtered, setFiltered] = useState();
  const [checked, setCheckedItems] = useState({})

  const changeCheckedItems = (e) => {
    const {name,checked} = e.target
    setCheckedItems((prev) => {return {...prev,[name]:checked}})
  }
  useEffect(()=>{
    console.log(checked);
    const allFalse = Object.keys(checked).every((k) => !checked[k])
    console.log(allFalse)
    if(data && !allFalse) {
      setFiltered(data.filter((item)=> {return checked[item.vendor.name]}))
    } else if(allFalse) {
      setFiltered(data)
    }
  },[checked])
  // const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://0c2e-123-63-231-93.ngrok.io/all")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setFiltered(data)
    })
},[])
  return (
    <>
      <div className="grid">
        <div className="left">
          <Filter changeCheckedItems = {changeCheckedItems}/>
        </div>
        <div className="right">
        {filtered && <Products data = {filtered}/>}
        </div>
        
      </div>
    </>
  )
}

export default Layout;
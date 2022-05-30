import React,{useState,useEffect,useRef} from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"


const Products = () => {
  let [data,setData] = useState([]);
  let page = useRef(1);
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  let mypage=(p)=>{
    page.current=p;
  }
  let adddata = (details)=>{
    fetch("http://localhost:8080/products",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
        title:details.title,
        category:details.category,
        gender:details.gender,
        imageSrc:details.imageSrc,
        price:details.price,
      })
    }).then((r)=>r.json()).then((datawa)=>{
      console.log(datawa);
      setData([...data,datawa])
    })
  }
  useEffect(()=>{
    fetch(`http://localhost:8080/products?_page=${page.current}&_limit=3`).then((r)=>r.json()).then((r)=>{
      console.log(r);
      setData(r);
      
    })
    // console.log(data);
  },[])

  return (
    <div>
      <AddProduct adddata={adddata}/>
      {data.map((l)=>(
        <Product key={l.id} l={l} />
      ))}
      
      <Pagination mypage={mypage}/>
    </div>
  );
};

export default Products;

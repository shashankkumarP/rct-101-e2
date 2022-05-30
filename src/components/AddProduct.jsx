import React,{useState,useEffect,useRef} from "react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio } from "@chakra-ui/react";
const AddProduct = ({adddata}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  let [form,setForm] = useState({
    title:"",
    category:"",
    gender:"",
    imageSrc:"",
    price:"",

  });
  // let showbtn = useState(false);
  let mysubmit = (e)=>{
    e.preventDefault();
    console.log(form)
    adddata(form);
  };
  let handleform= (e)=>{
    let {name,value,type} = e.target;
    if(type=="value"){
      setForm({...form,[name]:value})
    }
    
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add Data</Button>
      <Modal>
        <ModalBody pb={6} >
          <Input data-cy="add-product-title" name="form.title"  onChange={handleform}/>
          <Select data-cy="add-product-category" name="form.catogery" onChange={handleform}>
            <option data-cy="add-product-category-shirt" value="shirt">shirt</option>
            <option data-cy="add-product-category-pant" value="pant">pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="form.gender" onChange={handleform} >
            <Radio data-cy="add-product-gender-male" value="male"  ></Radio>
            <Radio data-cy="add-product-gender-female" value="female" ></Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex" ></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" type="number" name="form.price" onChange={handleform}/>
          <Button data-cy="add-product-submit-button" onClick={mysubmit}>Add</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;

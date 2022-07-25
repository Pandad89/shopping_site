import React, { useState } from 'react'
import myApi from '../../Api/Api';

function ModalEdit(props) {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleEdit = async (e) => {

    if (title !== "") {
      props.items[props.index].title = title;
    }
    if (price !== "") {
      props.items[props.index].price = price;
    }
    if (description !== "") {
      props.items[props.index].description = description;
    }
    if (image !== "") {
      props.items[props.index].image = image;
    }

    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
    props.setVisibility('hidden');

    e.preventDefault();

    if(title !== ""){
      const res = await myApi.get('/items')
      
      try {
        const editedItem = {
          title: title,
          price: res.data[props.index].price,
          description: res.data[props.index].description,
          image: res.data[props.index].image,
        };
  
        await myApi.patch(`/items/${res.data[props.index]._id}`, editedItem)
      } catch (err) {
        console.log(err);
      }
    }
    if(price !== ""){
      const res = await myApi.get('/items')
      
      try {
        const editedItem = {
          title: res.data[props.index].title,
          price: price,
          description: res.data[props.index].description,
          image: res.data[props.index].image,
        };
  
        await myApi.patch(`/items/${res.data[props.index]._id}`, editedItem)
      } catch (err) {
        console.log(err);
      }
    }
    if(description !== ""){
      const res = await myApi.get('/items')
      
      try {
        const editedItem = {
          title: res.data[props.index].title,
          price: res.data[props.index].price,
          description: description,
          image: res.data[props.index].image,
        };
  
        await myApi.patch(`/items/${res.data[props.index]._id}`, editedItem)
      } catch (err) {
        console.log(err);
      }
    }
    if(image !== ""){
      const res = await myApi.get('/items')
      
      try {
        const editedItem = {
          title: res.data[props.index].title,
          price: res.data[props.index].price,
          description: res.data[props.index].description,
          image: image,
        };
  
        await myApi.patch(`/items/${res.data[props.index]._id}`, editedItem)
      } catch (err) {
        console.log(err);
      }
    }


    props.renderer = props.renderer + 1;
  }

  // const handleLog = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await myApi.get('/items')
  //     console.log(res.data[props.index]._id)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleChangeimage = (e) => {
    setImage(e.target.value)
  }

  return (
    <div className='ModalBackground' style={{ visibility: props.visibility }}>
      <p className='ModalBackground__Cancel' onClick={() => props.setVisibility('hidden')}>X</p>
      <div className='ModalContainer'>
        <h2>Edit Item</h2>
        <label htmlFor="title">Title</label>
        <input id="title" autoFocus value={title} onChange={handleChangeTitle}></input>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price} onChange={handleChangePrice}></input>
        <label htmlFor="description">Description(up to 30 characters)</label>
        <textarea id="description" value={description} maxLength="30" onChange={handleChangeDescription}></textarea>
        <label htmlFor="image">Image(url)</label>
        <input type="url" id="image" value={image} onChange={handleChangeimage}></input>
        <button className='ModalContainer__Submit' id={props.id} onClick={handleEdit}>Submit</button>
        {/* <button className='ModalContainer__Submit' id={props.id} onClick={handleLog}>LOG</button> */}
      </div>
    </div>
  )
}

export default ModalEdit;
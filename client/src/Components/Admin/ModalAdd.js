import React, { useEffect, useState } from 'react'
import "./Admin.css"


function ModalAdd(props) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleAdd = () => {
        props.items.push({
            title: title,
            price: "$" + price,
            description: description,
            image: image,
        })
        setTitle("");
        setPrice("");
        setDescription("");
        setImage("");
        props.setVisibility('hidden');
    }

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
                <h2>Add Item</h2>
                <label htmlFor="title">Title</label>
                <input id="title" autoFocus value={title} onChange={handleChangeTitle}></input>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" value={price} onChange={handleChangePrice}></input>
                <label htmlFor="description">Description(up to 30 characters)</label>
                <textarea id="description" value={description} maxLength="30" onChange={handleChangeDescription}></textarea>
                <label htmlFor="image">Image(url)</label>
                <input type="url" id="image" value={image} onChange={handleChangeimage}></input>
                <button className='ModalContainer__Submit' onClick={handleAdd}>Submit</button>
            </div>
        </div>
    )
}

export default ModalAdd
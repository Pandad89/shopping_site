import React, { useEffect, useState } from "react";
import "./Admin.css"
import "./ModalAdd"
import ModalAdd from "./ModalAdd";
import "./ModalEdit"

function Admin() {

    const [title, setTitle] = useState([])
    const [price, setPrice] = useState([])
    const [description, setDescription] = useState([])
    const [image, setImage] = useState([]);
    const [visibility, setVisibility] = useState('hidden');
    const [count, setCount] = useState(0);


    const handleLog = () => {
        console.log("Title: " + title)
        console.log("Price: " + price)
        console.log("Description: " + description)
        console.log("Image: " + image)
    }
    // const handleRender = () => {

    // }

    const handleAdd = () => {
        setVisibility('visible')
    }

    const handleEdit = () => {
        console.log("edit")
    }

    const handleDelete = (e) => {
        // console.log(e.target.id)
        title.splice(e.target.id, 1);
        setTitle(title);
        price.splice(e.target.id, 1);
        setPrice(price);
        description.splice(e.target.id, 1);
        setDescription(description);
        image.splice(e.target.id, 1);
        setImage(image);
        setCount(count + 1)
    }

    const handlePrintArr = () => {
        return title.map((item, index) => {
            return (
                <div key={index} className="Admin__RenderedItems">
                    <p className="Admin__Titles__Title">{title[index]}</p>
                    <p className="Admin__Titles__Title">{price[index]}</p>
                    <p className="Admin__Titles__Title">{description[index]}</p>
                    <p className="Admin__Titles__Title" style={{ backgroundImage: `url(${image[index]})`, backgroundSize: '100%'}}></p>
                    <div className="Admin__Titles__Title">
                        <button id={index} onClick={() => console.log(item, index)}>Edit</button>
                        <button id={index} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="Admin">
            <div className="renderer">{count}</div>
            <button onClick={() => handleAdd()}>Add</button>
            <button onClick={() => handleLog()}>Log</button>
            <ModalAdd title={title} price={price} description={description} image={image} visibility={visibility} setVisibility={setVisibility} />
            <div className="Admin__Titles">
                <p className="Admin__Titles__Title">Title</p>
                <p className="Admin__Titles__Title">Price</p>
                <p className="Admin__Titles__Title">Description</p>
                <p className="Admin__Titles__Title">Image</p>
                <p className="Admin__Titles__Title">Options</p>
            </div>
            <div className="Admin__Items">
                {handlePrintArr()}
            </div>

        </div>
    )
}

export default Admin;
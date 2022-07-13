import React, { useEffect, useState } from "react";
import "./Admin.css"
import "./ModalAdd"
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

function Admin() {

    const [items, setItems] = useState([]);
    const [addVisibility, setAddVisibility] = useState('hidden');
    const [editVisibility, setEditVisibility] = useState('hidden');
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedPrice, setEditedPrice] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedImage, setEditedImage] = useState("");

    const handleAdd = () => {
        setAddVisibility('visible')
    }

    const handleEdit = (e) => {
        setEditVisibility('visible')
        setIndex(e.target.id);
    }

    const handleDelete = (e) => {
        console.log(e.target.id)
        items.splice(e.target.id, 1)
        setCount(count + 1);
    }

    const handlePrintArr = () => {
        return items.map((item, index) => {
            return (
                <div key={index} id={index} className="Admin__RenderedItems">
                    <p className="Admin__Titles__Title">{items[index].title}</p>
                    <p className="Admin__Titles__Title">{items[index].price}</p>
                    <p className="Admin__Titles__Title">{items[index].description}</p>
                    {/* <p className="Admin__Titles__Title" style={{ backgroundImage: `url(${items[index].image})`, backgroundSize: '100%' }}></p> */}
                    <img className="Admin__Titles__Title" src={items[index].image}></img>
                    <div className="Admin__Titles__Title">
                        <button id={index} onClick={handleEdit}>Edit</button>
                        <button id={index} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="Admin">
            <div className="renderer">{count}</div>
            <button onClick={() => handleAdd()} className="Admin__AddButton">Add</button>
            <ModalAdd
                items={items}
                index={index}
                setIndex={setIndex}
                visibility={addVisibility}
                setVisibility={setAddVisibility}
            />
            <ModalEdit
                items={items}
                editedTitle={editedTitle}
                setEditedTitle={setEditedTitle}
                editedPrice={editedPrice}
                setEditedPrice={setEditedPrice}
                editedDescription={editedDescription}
                setEditedDescription={setEditedDescription}
                editedImage={editedImage}
                setEditedImage={setEditedImage}
                visibility={editVisibility}
                setVisibility={setEditVisibility}
                handleEdit={handleEdit}
                index={index}
            />
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
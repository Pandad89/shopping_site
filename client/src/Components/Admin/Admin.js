import React, { useEffect, useState } from "react";
import "./Admin.css"
import myApi from "../../Api/Api";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

function Admin(props) {

    const [addVisibility, setAddVisibility] = useState('hidden');
    const [editVisibility, setEditVisibility] = useState('hidden');
    const [renderer, setRenderer] = useState(0);
    const [index, setIndex] = useState(0);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedPrice, setEditedPrice] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedImage, setEditedImage] = useState("");

    useEffect(() => {
        const handlePrintItems = async () => {
            try {
                const res = await myApi.get('/items');
                props.items = [...res.items];
            } catch (err) {
                console.log(err)
            }
        }
        handlePrintItems()
    })

    const handleAdd = () => {
        setAddVisibility('visible')
    }

    const handleEdit = (e) => {
        setEditVisibility('visible')
        setIndex(e.target.id);
    }

    const handleDelete = (e) => {
        props.items.splice(e.target.id, 1)
        setRenderer(renderer + 1);
    }

    const handlePrintArr = () => {
        return props.items.map((item, index) => {
            return (
                <div key={index} id={index} className="Admin__RenderedItems">
                    <p className="Admin__Titles__Title">{props.items[index].title}</p>
                    <p className="Admin__Titles__Title">{props.items[index].price}</p>
                    <p className="Admin__Titles__Title">{props.items[index].description}</p>
                    <img className="Admin__Titles__Title" src={props.items[index].image}></img>
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
            <div className="renderer">{renderer}</div>
            <button onClick={() => handleAdd()} className="Admin__AddButton">Add</button>
            <button onClick={() => console.log(props.items)}>LOG</button>
            <ModalAdd
                items={props.items}
                visibility={addVisibility}
                setVisibility={setAddVisibility}
            />
            <ModalEdit
                items={props.items}
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
import React, { useEffect, useState } from "react";
import "./Admin.css"
import myApi from "../../Api/Api";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import Home from "../Home/Home";

function Admin(props) {
    
    const [data, setData] = useState([])
    const [items, setItems] = useState([]);

        // useEffect(() => {
        //     const handlePrintItems = async () => {
        //         try {
        //             const res = await myApi.get('/items');
        //             setData([...res.data]);
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     }
        //     handlePrintItems()
        // }, [])

        // useEffect(() => {
        //     setItems([...data])
        // },)

    const [renderer, setRenderer] = useState(0)
    const [addVisibility, setAddVisibility] = useState('hidden');
    const [editVisibility, setEditVisibility] = useState('hidden');
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

    const handleDelete = async (e) => {
        const id = e.target.id;
        try {
            const res = await myApi.get('/items');
            await myApi.delete(`/items/${res.data[id]._id}`)
        } catch (err) {
            console.log(err.message);
        }
        items.splice(e.target.id, 1);
        setRenderer(renderer + 1);

    }

    // const handleDelete = (e) => {
    //     props.items.splice(e.target.id, 1)
    //     // setRenderer(renderer + 1);
    // }

    const handlePrintArr = () => {
        return props.items.map((item, index) => {
            return (
                <div key={index} id={index} className="Admin__RenderedItems">
                    <p className="Admin__Titles__Title">{props.items[index].title}</p>
                    <p className="Admin__Titles__Title">${props.items[index].price}</p>
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
            {/* <div className="renderer">{renderer}</div> */}
            <button onClick={() => handleAdd()} className="Admin__AddButton">Add</button>
            {/* <button onClick={() => props.items.push({
                title: "title",
                price: "2",
                description: "description",
                image: "image"
            })}>PUSH</button> */}
            <button onClick={() => console.log(props.items)}>LOG</button>
            <ModalAdd
                items={items}
                setItems={setItems}
                renderer={renderer}
                setRenderer={setRenderer}
                visibility={addVisibility}
                setVisibility={setAddVisibility}
            />
            <ModalEdit
                items={items}
                setItems={setItems}
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
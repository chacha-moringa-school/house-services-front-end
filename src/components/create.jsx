import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useEffect("")
    const [description, setDescription] = useEffect("")
    const [price, setPrice] = useEffect(0)
    const [image_url, setImageUrl] = useEffect("")

    let navigate = useNavigate()


    const handleSubmit = (ev)=>{
        ev.preventDefault()
        const service = {name, description, price, image_url}
        
        fetch('http://localhost:4000/services',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(service)
        })
        .then((res)=>{
            navigate("/")
            return res.json()})
        .then((data)=>{console.log(data)})
    }
    

    return ( 
        <div id= "create">
            <h2>Add New Service</h2>
            <form action="POST" onSubmit={handleSubmit}>
                <label>Service name</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(ev)=> setName(ev.target.value)}
                 />

                 <label >Service description</label>
                 <textarea 
                    required
                    value={description}
                    onChange={(ev)=> setDescription(ev.target.value)}
                 ></textarea>
                 
                <label>Service price</label>
                <input 
                    type="number"
                    required
                    value={price}
                    onChange={(ev)=> setPrice(ev.target.value)}
                 />

                <label>Image url</label>
                <input 
                    type="url"
                    required
                    value={image_url}
                    onChange={(ev)=> setImageUrl(ev.target.value)}
                 />
                 <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Create;
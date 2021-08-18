import React, { useState } from 'react';
import {  useHistory} from 'react-router-dom';
const CreatePost = () => {
    const history = useHistory();
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails = () => {
        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "myfirstapplication")
        data.append("cloud_name", "yesssp")
        fetch("	https://api.cloudinary.com/v1_1/yesssp/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).then(data => {
            setUrl(data.url)
        }).catch(err => {
            console.log(err)
        })
        fetch("/createpost",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization":  "Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    
                    title,body,pic:url
                    
                }) 
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                if(data.error){
                    window.alert("Invalid")

                }else{
                    window.alert("created post successfully")
                    history.push("/login");
                }
            }).catch(err=>{
                console.log(err)
            })
    
        }
    return (
        <>
            <div className='card input-filed' style={{
                margin: "30px auto", maxWidth: "500px", padding: '20px', textAlign: "center"
            }}>
                <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
                <div className="input-group mb-3">
                   
                    <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} className="form-control" id="inputGroupFile01" />
                </div>

                <button type="button" onClick={() => postDetails()} className="btn btn-primary" style={{ maxWidth: '125px', alignSelf: "center" }}>Submit post</button>
            </div>

        </>
    )
}

export default CreatePost
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch() //Usamos el hook useDispatch para poder las funciones de nuestros Slices. 
                                                /*Usamos el hook useState para setear los formularios
                                                de nuestros post. 
                                                
                                                
                                                */
    const [title, setTitle] = useState('') 
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)
                                                        
                                                        /*Seteamos nuestros post mediante la funcion del hook useState.  */
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value) //Extraemos el id del que seleccionemos con el options. 


    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'; //Usamos la funcion every para confirmar que tenemos completo todos ls datos del post. 

    const onSavePostClicked = () => { //GUardamos los post
        if (canSave) {
            try {
                setAddRequestStatus('pending') //Seteams en pendiente la peticion
                dispatch(addNewPost({ title, body: content, userId })).unwrap() 
                                                                            /*Usamos el dispatch para usar nuestra funcion del slicer, usamos el metodo unwrap para eliminar el contenedor de nuestro objeto 
                                                                            para asi poderlo agrupar con el resto en el preapare payload..*/ 
                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    const usersOptions = users.map(user => ( //Seleccionamos nuestros usarios de la store.
        <option key={user.id} value={user.id}> 
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm
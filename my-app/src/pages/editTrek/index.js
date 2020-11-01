import React, {useState, useCallback, useEffect} from "react"
import styles from "./index.module.css"
import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import TextArea from "../../components/textarea"
import Button from "../../components/button"
import getCookie from "../../utils/cookie"
import { useHistory,useParams } from "react-router-dom"

const CrateTrekPage = () => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState(0)
    const history = useHistory();
    const params  = useParams();

    const getData = useCallback(async () => {
        const id = params.trekid
        const response = await fetch(`http://localhost:9999/api/trek/detail?id=${id}`)
    
        if (!response.ok) {
          history.push('/error')
        } else {
          const trek = await response.json()
          setLocation(trek.location)
          setDate(trek.dateTime)
          setImageUrl(trek.imageUrl)
          setDescription(trek.description)
          setLikes(trek.likes)
        }
      }, [params.trekid])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const id = params.trekid
        const response = await fetch(`http://localhost:9999/api/trek/${id}`,{
            method:"PUT",
            body: JSON.stringify({
                location,
                dateTime:date,
                imageUrl,
                description,
                likes
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })
        
        if (response.status === 200) {
            history.push(`/details/${id}`)
        }
    }

    useEffect(() => {
        getData()
      }, [getData])

    return (
        <PageLayout>
            <form className={styles.createTrek} onSubmit={handleSubmit}>                 

                <Input 
                    id="location"
                    type ="text"
                    name="location"
                    placeHolder="Location"
                    label="Location"
                    value = {location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Input 
                    id="date"
                    type ="text"
                    name="date"
                    placeHolder="Date"
                    label="Date"
                    value = {date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextArea 
                    id="description"
                    type ="text"
                    name="description"
                    placeHolder="Description"
                    label="Description"
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input 
                    id="image"
                    type ="text"
                    name="image"
                    placeHolder="Image"
                    label="Image"
                    value = {imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                <Button title="Edit the trek" onClick={handleSubmit}/> 
            </form>
        </PageLayout>
    )
}

export default CrateTrekPage;
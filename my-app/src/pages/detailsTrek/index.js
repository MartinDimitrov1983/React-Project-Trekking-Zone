import React, { useContext, useState, useCallback, useEffect } from "react"
import styles from "./index.module.css"
import d from "./dAttribute"
import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Button from "../../components/button"
import Link from "../../components/link"
import UserContext from "../../Context"
import getCookie from "../../utils/cookie"
import { useHistory, useParams } from "react-router-dom"

const DetailsTrekPage = () => {

  const [trek, setTrek] = useState("")
  const [author, setAuthor] = useState("")
  const history = useHistory();
  const context = useContext(UserContext)
  const params = useParams()
  const creator = context.user.username

  const getData = useCallback(async () => {
    const id = params.trekid
    const response = await fetch(`http://localhost:9999/api/trek/detail/${id}`)

    if (!response.ok) {
      history.push('/error')
    } else {
      const trek = await response.json()
      console.log(trek)
      setTrek(trek)
      setAuthor(trek.author.username)
    }
  }, [params.trekid])

  useEffect(() => {
    getData()
  }, [getData])

  const deleteHandler = async() => {
    const id = params.trekid
    const response = await fetch(`http://localhost:9999/api/trek/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    })
    if (response.status === 200) {
      history.push(`/`)
    }
  }

  const likesHandler = async (y) => {
    const id = params.trekid
    const response = await fetch(`http://localhost:9999/api/trek/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        location: trek.location,
        dateTime: trek.dateTime,
        imageUrl: trek.imageUrl,
        description: trek.description,
        likes: trek.likes + 1
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
  return (
    <PageLayout>
      <div className={`row ${styles["single-trek-details"]} text-center`}>
        <div className={`col-md-12 text-center ${styles["overflow-hidden"]}`}>
          <img className={styles.detailsImg} src={trek.imageUrl} />
          <div className={`${styles["overflow-hidden"]} my-3 p-3`}>
            <h2 className="display-5">{trek.location}</h2>
            <p className={styles.infoType}>Description:</p>
            <p className={styles.trekDescription}>{trek.description}</p>
            <p className={styles.infoType}>Date: <big>{trek.dateTime}</big></p>
            <p className={styles.infoType}>Likes: <big>{trek.likes}</big></p>
            <p className={styles.infoType}>Organizer: <big>{author}</big></p>
          </div>
          <div className={styles.buttonsTogether}>
            {creator === author && <Link className={styles.aButton} href={`/edit/${trek._id}`} alt="picture">
              <svg version="1.1" id="edit-button" width="30px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 293.129 293.129" style={{ enableBackground: "new 0 0 293.129 293.129" }} xmlSpace="preserve">
                <path d={d.d1} />
                <path d={d.d2} />
                <path d={d.d3} />
              </svg>
                            Edit the trek
                        </Link>}
            {creator === author && <Link className={styles.aButton} href="" onClick={deleteHandler}>
              <svg version="1.1" width="30px" id="remove-button" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 507.2 507.2" style={{ enableBackground: "new 0 0 507.2 507.2" }} xmlSpace="preserve">
                <circle style={{ fill: "rgb(248, 184, 8)" }} cx="253.6" cy="253.6" r="253.6" />
                <path style={{ fill: "rgb(248, 184, 8)" }} d="M147.2,368L284,504.8c115.2-13.6,206.4-104,220.8-219.2L367.2,148L147.2,368z" />
                <path style={{ fill: "#FFFFFF" }} d={d.d4} />
                <path style={{ fill: "#D6D6D6" }} d={d.d5} />
                <path style={{ fill: "#FFFFFF" }} d={d.d6} />
              </svg>
                          Close the trek
                        </Link>}

            {creator !== author && <Link className={styles.aButton} href="" onClick={likesHandler}>
              <svg version="1.1" width="30px" id="like-button" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style={{ enableBackground: "new 0 0 50 50" }} xmlSpace="preserve">
                <path style={{ fill: "rgb(248, 184, 8)" }} d={d.d7} />
                <path style={{ fill: "rgb(241, 212, 131)" }} d={d.d8} />
              </svg>
                          Like
                        </Link>}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DetailsTrekPage;
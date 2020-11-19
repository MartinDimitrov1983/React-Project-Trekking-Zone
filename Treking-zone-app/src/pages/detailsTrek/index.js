import React, { useContext, useState, useCallback, useEffect } from 'react'
import styles from './index.module.css'
import PageLayout from '../../page-layout'
import Link from '../../components/link'
import { DeleteIcon, EditIcon, LikeIcon } from '../../components/icons'
import UserContext from '../../Context'
import { config } from '../../utils'
import { useHistory, useParams } from 'react-router-dom'

const DetailsTrekPage = () => {

  const [trek, setTrek] = useState('')
  const [author, setAuthor] = useState('')
  const history = useHistory();
  const context = useContext(UserContext)
  const params = useParams()
  const creator = context.user.username

  const getData = useCallback(async () => {
    const id = params.trekid
    const response = await fetch(`${config.trekURL}detail/${id}`)

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

  const deleteHandler = async () => {
    const id = params.trekid
    const response = await fetch(`${config.trekURL}${id}`, {
      method: 'DELETE',
      headers: config.authHeader
    })
    if (response.status === 200) {
      history.push(`/`)
    }
  }

  const likesHandler = async (y) => {
    const id = params.trekid
    const response = await fetch(`${config.trekURL}${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        location: trek.location,
        dateTime: trek.dateTime,
        imageUrl: trek.imageUrl,
        description: trek.description,
        likes: trek.likes + 1
      }),
      headers: config.authHeader
    })
    if (response.status === 200) {
      history.push(`/details/${id}`)
    }
  }
  return (
    <PageLayout>
      <div className={`row ${styles['single-trek-details']} text-center`}>
        <div className={`col-md-12 text-center ${styles['overflow-hidden']}`}>
          <img className={styles.detailsImg} src={trek.imageUrl} />
          <div className={`${styles['overflow-hidden']} my-3 p-3`}>
            <h2 className='display-5'>{trek.location}</h2>
            <p className={styles.infoType}>Description:</p>
            <p className={styles.trekDescription}>{trek.description}</p>
            <p className={styles.infoType}>Date: <big>{trek.dateTime}</big></p>
            <p className={styles.infoType}>Likes: <big>{trek.likes}</big></p>
            <p className={styles.infoType}>Organizer: <big>{author}</big></p>
          </div>
          <div className={styles.buttonsTogether}>
            {creator === author &&
              <Link className={styles.aButton} href={`/edit/${trek._id}`} alt='picture'>
                <EditIcon />
                  Edit the trek
              </Link>}
            {creator === author &&
              <Link className={styles.aButton} href='' onClick={deleteHandler}>
                <DeleteIcon />
                  Close the trek
              </Link>}

            {creator !== author &&
              <Link className={styles.aButton} href='' onClick={likesHandler}>
                <LikeIcon />
                  Like
                </Link>}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DetailsTrekPage
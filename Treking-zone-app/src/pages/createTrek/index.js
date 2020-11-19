import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../page-layout'
import Input from '../../components/input'
import Button from '../../components/button'
import TextArea from '../../components/textarea'
import { config } from '../../utils'


const CrateTrekPage = () => {

    const [location, setLocation] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`${config.trekURL}`, {
            method: 'POST',
            body: JSON.stringify({
                location: location,
                dateTime: dateTime,
                description: description,
                imageUrl: imageUrl
            }),
            headers: config.authHeader
        })
        // if response is ok then history.push
        // try catch bloc
        history.push('/')
    }

    return (
        <PageLayout>
            <form className={styles.createTrek} onSubmit={handleSubmit}>
                <div className='text-center mb-4'>
                    <h1 className='h3 mb-3 font-weight-normal'>Wish for a new adventure!</h1>
                    <p>Fill up the following information!</p>
                </div>

                <Input
                    id='location'
                    type='text'
                    name='location'
                    placeHolder='Location'
                    label='Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Input
                    id='dateTime'
                    type='text'
                    name='dateTime'
                    placeHolder='Date'
                    label='Date'
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                />
                <TextArea
                    id='description'
                    type='text'
                    name='description'
                    placeHolder='Description'
                    label='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    id='image'
                    type='text'
                    name='image'
                    placeHolder='Image'
                    label='Image'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button title='Make a wish =)' />
            </form>
        </PageLayout>
    )
}

export default CrateTrekPage
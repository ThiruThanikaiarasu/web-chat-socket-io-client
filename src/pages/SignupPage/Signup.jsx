import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import './Signup.css'
import { Link } from 'react-router-dom'
import logo from '../assets/profile.png'



const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState(null)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [imagePreview, setImagePreview] = useState(null)

    const validateImage = (event) => {
        const file = event.target.files[0]
        if(file.size >= 1048576){
            return alert("Max file size is 1mb")
        }
        else{
            setImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const uploadImage = async () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'ad4yfcbc')
        try{
            setUploadingImage(true)
            let res = await fetch('https://api.cloudinary.com/v1_1/dmdzzwuqd/image/upload', {
                method : 'post',
                body : data
            })

            const urlData = await res.json()
            setUploadingImage(false)
            return urlData.url
        }
        catch(error){
            setUploadingImage(false)
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!image) return alert('Please upload your profile picture')
        const url = await uploadImage(image);
        console.log(url)
    }

    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column ">
                    <Form style={{width : "80vw", maxWidth : 500}} onSubmit={handleSubmit}>
                        <h1 className="text-center">Create account</h1>
                        <div className="signup-profile-pic__container">
                            <img src={imagePreview || logo} alt="" className='signup-profile-pic'/>
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className='fas fa-plus-circle add-picture-icon'></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg, image/jpg" onChange={validateImage}/>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Your Name" 
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email"   
                                placeholder="Enter email" 
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {uploadingImage ? 'Signing you up..' : 'Signup'}
                        </Button>
                        <div className='py-4'>
                            <p className='text-center'>
                                Already have an account? <Link to='/login'>Login</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="signup__bg"></Col>
            </Row>
        </Container>
    )
}

export default Signup
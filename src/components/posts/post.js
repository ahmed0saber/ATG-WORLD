import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

function App() {
    const [posts, setPosts] = useState()
    const [loaded, setLoaded] = useState(false)

    const getData = () => {
        const url = "https://ahmed0saber.github.io/ATG-WORLD/data.json?1"
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPosts(data)
        })
    }

    useEffect(() => {
        if(!loaded){
            console.log('data')
            getData()
            setLoaded(true)
        }
    }, [])

    return (
        <Container Style="margin-top:0px;">
            {posts ? posts.map(post =>
                <div key={post.id} className="border rounded mb-3 w-100">
                    <img className="w-100" src={post.img} alt={`post ${post.id}`}/>
                    <div className="p-3">
                        <strong>{post.tag}</strong>
                        <h4 className="mt-2">{post.title}</h4>
                        <p>{post.content}</p>
                        <div Style="display:flex; justify-content:space-between; align-items:center;">
                            <div Style="display:flex; justify-content:flex-start; align-items:center; width:50%">
                                <img src={post.owner.img} alt={`${post.owner.name}`}/>
                                <strong Style="padding-left:8px;">{post.owner.name}</strong>
                            </div>
                            <span><i class="fa fa-eye"></i> {post.views} views</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    )
}

export default App;

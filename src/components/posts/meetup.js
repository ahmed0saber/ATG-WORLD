import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

function App() {
    const [job, setJob] = useState({
        "id": "3",
        "img": "https://ahmed0saber.github.io/ATG-WORLD/data-images/post3.png",
        "tag": "🗓️ Meetup",
        "title": "Finance & Investment Elite Social Mixer @Lujiazui",
        "content": "Fri, 12 Oct, 2018     Ahmedabad, India",
        "views": "1.4k",
        "owner": {"name":"Ronal Jones", "img":"https://ahmed0saber.github.io/ATG-WORLD/data-images/user3.png"}
    })

    return (
        <Container Style="margin-top:0px;">
            {job ? 
                <div key={job.id} className="border rounded mb-3">
                    <img className="w-100" src={job.img} alt={`job ${job.id}`}/>
                    <div className="p-3">
                        <strong>{job.tag}</strong>
                        <h4 className="mt-2">{job.title}</h4>
                        <p>{job.content}</p>
                        <Button className="w-100 mb-3" variant="outline-danger">Visit Website</Button>
                        <div Style="display:flex; justify-content:space-between; align-items:center;">
                            <div Style="display:flex; justify-content:flex-start; align-items:center; width:50%">
                                <img src={job.owner.img} alt={`${job.owner.name}`}/>
                                <strong Style="padding-left:8px;">{job.owner.name}</strong>
                            </div>
                            <span><i class="fa fa-eye"></i> {job.views} views</span>
                        </div>
                    </div>
                </div>
            : null}
        </Container>
    )
}

export default App;

import React  from 'react'
import vedioBg from '../vedio/vedio.mp4'
const Main = () => {

return (
    <div className='main'>
    <h2> Hotstar</h2>
    <video src={vedioBg} autoPlay loop muted />
 
    </div>
)
}

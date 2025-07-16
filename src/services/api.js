import axios from "axios"

export const getMeetToken=(room,user)=>{
   
    const params={
        "roomName":room,
        "participantName":user
    }
    const res = axios.get(`https://swift-meetup-backend.vercel.app/getToken`,{params}) 
    return res
}
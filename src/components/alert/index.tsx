import { createStyles, makeStyles, Theme, Tooltip, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./index.css"




const Alert = () => {
   
const [alertType,setAlertType]=useState("Neutral")
const [closed,setClosed]=useState(false)

// useEffect(()=>{
//     setInterval(()=>{setClosed(true)},5000)
// },[])
return (
    <div>
    {!closed?
    <div className={`alertDiv ${alertType}`}>
        
        <Typography className="alertMessage"><span className="alertType"> {alertType} </span>Training certification decreased by 7% this month due to only 60% completion of the batter fry module</Typography>
        <CloseIcon onClick={()=>setClosed(true)}/>
    </div>:<></>}
    </div>
)
}

export default Alert
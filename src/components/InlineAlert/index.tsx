import { createStyles, makeStyles, Theme, Tooltip, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
// import "./index.css"

export interface AlertProps{
    alertType: string
}
export const TestProps={
    getProps:(alertType:string)=>""
}
const InlineAlert = (props:AlertProps) => {
   
   TestProps.getProps= (alertType:string)=>{
    if(alertType=="Warning") return "Warning"
    else if(alertType=="Neutral") return props.alertType
    else if(alertType=="Success") return props.alertType
    return ""
}

// const [closed,setClosed]=useState(false)
const [alertSvg,setAlertSvg]=useState("")

useEffect(()=>{
    
    if(props.alertType==="Warning") setAlertSvg("../assets/Warning alert.svg")
    else if(props.alertType=="Neutral") setAlertSvg("../assets/Neutral alert.svg")
    else if(props.alertType=="Success") setAlertSvg("../assets/Success alert.svg")

},[props])
return (
    <div>
    
    <div className={`alertDiv ${props.alertType}`}>

        <Typography className="alertMessage"><img src={alertSvg}/><span className="alertType"> {props.alertType} </span>Training certification decreased by 7% this month due to only 60% completion of the batter fry module</Typography>
        {/* <CloseIcon onClick={()=>setClosed(true)}/> */}
    </div>
    </div>
)
}

export default InlineAlert


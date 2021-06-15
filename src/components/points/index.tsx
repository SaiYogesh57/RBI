import React from "react"
import {data} from "./points.json"
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core'
import "./index.scss"
const PointsDetails=()=>{

    return(
        <div className="points">
            <p className="points-title" >Points Details</p>
            <div className="points-container">
                {
                    data.map((point,index)=>(
                    <div key={index} className="points-card">
                        <div></div>
                        <div className="points-card-container">
                        <p className="points-card-detail">{point.detail}</p>
                        <p className="points-card-period">{point.period}</p>
                        <p className="points-card-category">{point.category} Category</p>
                        <TableRow>
                            <TableCell className="table-cell">
                                Standard
                            </TableCell>
                            <TableCell className="table-cell">
                                Points Deducted
                            </TableCell>
                        </TableRow>
                        {point.standards.map((standard)=><TableRow>
                            <TableCell className="table-cell">
                               <li> {standard.standard}</li>
                            </TableCell>
                            <TableCell className="table-cell-points">
                                {standard?.points?`${standard.points} pts`:""}
                            </TableCell>
                        </TableRow>)}
                        </div>

                        <div className='points-card-categories'>
                            View All Categories
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}
export default PointsDetails;
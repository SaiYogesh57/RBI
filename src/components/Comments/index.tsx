import React, { useState } from "react"
import "./index.scss"
import {data} from "./comments.json"
import Pagination from '@material-ui/lab/Pagination';
const Comments = () => {
    const [page, setPage] = React.useState(1);
    const [pageItems,setPageItems]=useState(data.slice(0,6))
    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setPageItems(data.slice((value-1)*6,value*6))
      };
    return (
        <div className="root">
            <div className="comment-header">
                <p className="header-title">Comments</p>
                <div className="header-legend">
                    <p className="header-legend-item">
                        <div className="legend-div escalation"></div>Escalation & Risks
                    </p>
                    <p className="header-legend-item">
                        <div className="legend-div problem"></div>Problems
                    </p>
                    <p className="header-legend-item">
                        <div className="legend-div suggestion"></div>Suggestions & Praises
                    </p>
                </div>
            </div>
            <div className="comments-container">
                {
                    pageItems.map((comment,index)=>(
                        <div className={`comment-card level${comment.level}`} key={index}>
                            <div className="comment-card-title">
                                <p className="comment-date">
                                    {comment.date}
                                </p>
                                <p className='comment-title'>
                                    {comment.title}
                                </p>
                            </div>   
                            <div>
                                <p className='comment-level'>Level{comment.level}-{comment.title}</p>
                            </div> 
                            <div className="comment-description">
                                {comment.description}
                            </div>       
                        </div>   
                    ))
                }
            </div>
            <Pagination variant="text" count={Math.ceil(data.length/6)} page={page}  onChange={handlePage}/>
        </div>
    )
}

export default Comments
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from "react";
import "./index.scss";
import { data } from "./reviews.json"
const GoogleReviews = () => {
    const [cancelClicked,setCancelClicked]=useState(true)
    const [utilClicked,setUtilClicked]=useState("")
    const [page, setPage] = React.useState(1);
    const [timePeriod, setTimePeriod] = useState('current');
   
   const [dropDown, setDropDown] = useState([{name:"July 2020 to Dec 2020",value:"July 2020 to Dec 2020"},{name:"Jan 2020 to Dec 2020",value:"Jan 2020 to Dec 2020"}]);

    const handleSort=(sort:string)=>{
      if(sort==="low") setPageItems(data.sort((a,b)=>a.stars-b.stars))
      else if(sort==="high") setPageItems(data.sort((a,b)=>b.stars-a.stars));
      setCancelClicked(true)
    }
  
  const [pageItems,setPageItems]=useState(data.slice(0,8))
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setPageItems(data.slice((value-1)*8,value*8))
  };
  const handleSearch=(event)=>{
    const searchTerm=event.target.value
   const searchArray=data.filter(rev=>rev.review.indexOf(searchTerm)>-1)
   setPageItems(searchArray)
  }

  return (
    <div className="root">
      <div className="rest-details">
        <div className="rest-detail">
          <p className="rest-name">Restaurant #123</p>
          <p className="rest-address">31st & 5th Ave,NY 0000</p>
        </div>
        <img src="../../assets/Average level star.svg" className="average-svg"></img>
        <div className="timePeriodDropDown">
          <FormControl className="formControl" variant="outlined">
            <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
              Time Period:
            </InputLabel>
            <Select
              labelId='demo-simple-select-placeholder-label-label'
              id='demo-simple-select-placeholder-label'
              value={timePeriod}
              onChange={(event) => setTimePeriod(String(event.target?.value))}
              displayEmpty
              className="selectEmpty"
            >
              {dropDown.map(({ value, name }, index) => (
                <MenuItem key={index} value={value}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="headers">
        <div className="headers-left">
          <p className="headers-title">Google Reviews Deep Dive</p>
          <p className="headers-stars">
            <div className="stars-color one"></div>1-2 Stars
          </p>
          <p className="headers-stars">
            <div className="stars-color three"></div>3 Stars
          </p>
          <p className="headers-stars">
            <div className="stars-color five"></div>4-5 Stars
          </p>
        </div>
        <div className="headers-right">
         
          <FormControl  variant="outlined">
          {/* <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-search"
            placeholder="Search"
            className="search-input"
            onChange={handleSearch} 
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  
                  edge="start"
                >
                  <img src="../../assets/icons8-search.svg"></img>
                </IconButton>
              </InputAdornment>
            }
          
          />
        </FormControl>
         
<div className="filtered">
        <div className="filterHeadings"><Typography>Sort By</Typography>
       {!cancelClicked&&utilClicked==="sort"?<ExpandLess onClick={()=>setCancelClicked(true)}/>:<ExpandMoreIcon id="sort-button" onClick={()=>{setCancelClicked(false);setUtilClicked("sort")}}/>}
        
        </div>
        <div id="sort-div" className={!cancelClicked&&utilClicked==="sort"?"filteredHovered":"filteredHoveredCancel"}>
<FormControl variant="outlined" className="headers-sort">
          <Button onClick={()=>handleSort("low")}>Low to High</Button>
          <Button onClick={()=>handleSort("high")}>High to Low</Button>
</FormControl></div>
</div>
        </div>
      </div>
      <div className="reviews">
        {pageItems.map((review, index) => (
          <div
            className={
              review.stars <= 2
                ? "angry review-container"
                : review.stars >= 4
                ? "success review-container"
                : "neutral review-container"
            }
            key={index}
          >
            <div className="review-head">
              <p>{review.date}</p>
              {Array(Math.floor(review.stars))
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={"/assets/Star - medium.svg"}
                    className="review-star"
                  ></img>
                ))}
              {Array(Math.floor(5 - review.stars))
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={"/assets/Polygon 1.svg"}
                    className="review-star"
                  ></img>
                ))}
            </div>
            <div className="review-content">
              <img
                src={
                  review.stars <= 2
                    ? "/assets/icons8-angry.svg"
                    : "/assets/icons8-neutral.svg"
                }
              ></img>
              <p className="review-desc">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination variant="text" count={Math.ceil(data.length/8)} page={page}  onChange={handlePage}/>
    </div>
  );
};
export default GoogleReviews;

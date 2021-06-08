import React from "react"
import "./index.scss"


const GoogleReviews=()=>{

    const reviews=[
        {
            date:"2/20/21",
            stars:3,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:3,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:2,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:4,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:3,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:3,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:5,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        },
        {
            date:"2/20/21",
            stars:1,
            review:"I just paid $25.11 for a whopper original chicken leg coke and medium onion rings. I ordered the 2 for $5 and got only 1 of each. Ordered 2 whoppers and 2 originals. Plus I’m missing my fries too!!! Then they were microwaving coffee. Worst service!!! I try calling to let them know I’m missing items and no one picks up"
        }
    ]
    return(
        <div className="root">
            <div className="rest-details">
                <div className="rest-detail">
                    <p className="rest-name">Restaurant #123</p>
                    <p className="rest-address">31st & 5th Ave,NY 0000</p>
                </div>
            </div>

            <div className="headers">
                <p className="headers-title">Google Reviews Deep Dive</p>
                <p className="headers-stars">1-2 Stars</p>
                <p className="headers-stars">3 Stars</p>
                <p className="headers-stars">4-5 Stars</p>
            </div>
            <div className="reviews">
            {reviews.map((review,index)=>
            <div className={review.stars<=2?"angry review-container":review.stars>=4?"success review-container":"neutral review-container"} key={index}>
                  <div className="review-head">
                        <p>{review.date}</p> 
                        {Array(Math.floor(review.stars)).fill(0).map((_,index)=><img  key={index} src={"/assets/Star - medium.svg"} className="review-star"></img>)}
                        {Array(Math.floor(5-review.stars)).fill(0).map((_,index)=><img  key={index} src={"/assets/Polygon 1.svg"} className="review-star"></img>)}
                  </div>  
                <div className="review-content">
                    <img src={review.stars<=2?"/assets/icons8-angry.svg":"/assets/icons8-neutral.svg"}></img>
                    <p className="review-desc">{review.review}</p>
                </div>

            </div>)}
            </div>


        </div>
    )
}
export default GoogleReviews;
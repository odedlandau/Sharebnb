import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import StarIcon from '@mui/icons-material/Star'
import Carousel from 'react-material-ui-carousel'
import heartIcon from '../../assets/img/heart-icon.svg'
import heartRed from '../../assets/img/heart-red.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import arrowLeft from '../../assets/img/arrow-left.svg'


export const StayPreview = ({ stay }) => {

  // const loggedInUser = useSelector(state => state.userModule.loggedInUser)
  // const { likedByUsers } = stay
  var heartPic = heartIcon
  var [idx, setIdx] = useState(0)
  var [isLiked, setIsLiked] = useState(false)

  // const addLikedList = () => {
  //   setIsLiked(!isLiked)
  //   if (!likedByUsers.includes(loggedInUser))
  //     likedByUsers.push(loggedInUser)
  //   else likedByUsers.pop()
  // }

  const moveIndex = (arrow) => {
    if (arrow === "right") idx++
    else idx--
    setIdx(idx)
  }

  const addLikedList = (ev) => {
    ev.preventDefault()
    setIsLiked(!isLiked)
    heartPic = heartRed
  }

  return (
    <section className="stay-preview">

      <Carousel className="carousel-wrapper"
        autoPlay={false}
        cycleNavigation={false}
        animation={"slide"}
        navButtonsProps={{
          style: {
            backgroundColor: "#ffffff",
            color: "#222222",
          },
        }}>
        {stay.imgUrls.map(imgUrl =>
          <Link to={`/stay/${stay._id}`}>
            <div className="preview-img-container">
              <img key={imgUrl} src={imgUrl} alt="image" />
            </div>
          </Link>
        )}
      </Carousel>


      {/* <Link to={`/stay/${stay._id}`}>
        <div className="preview-img-container square-ratio">
          <img className="preview-img" src={stay.imgUrls[idx]} alt="image" />
        </div>
      </Link> */}

      <img className="heart-icon" src={heartPic} onClick={addLikedList} />
      {/* <img className="arrow-right" src={arrowRight} onClick={() => moveIndex("right")} />
      <img className="arrow-left" src={arrowLeft} onClick={() => moveIndex("left")} /> */}

      <div className="stay-info">
        <p className="stay-name">{`${stay.loc.city}, ${stay.loc.country}`} <span className="rating"><StarIcon className="star" />4.95</span></p>
        <p className="stay-distance">1,109 kilometers</p>
        <p className="stay-date">Nov 30 - Dec 5</p>
        <p className="stay-price">{`$${stay.price}`}<span>night</span></p>
      </div>
    </section >
  )
}
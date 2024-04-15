import React from 'react'
import './Card.css'
import book_icon from '../../assets/card/book-icon.png'
import line_dot from '../../assets/card/line-dot.png'
import s_h from '../../assets/card/sexual-harassment.png'

export default function Card(props) {
  return (
    <>
        <div className="card" style={{backgroundColor:props.color}}>
            <div className="imgs">
                <img src={book_icon} alt="book-icon" className="logo" />
                <span className="law">LAW</span>
                <img src={props.img} alt="bg-img" className='bg-img' />
                <img src={line_dot} alt="" className='line-dot' />
            </div>
            <h2>{props.txt1}</h2>
            <p className='card-text'><a href={props.link}>Know More</a></p>
        </div>
    </>
  )
}

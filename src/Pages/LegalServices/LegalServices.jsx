import React from 'react'
import './LegalServices.css'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/lawer-query.jpg'
import img2 from '../../assets/lawyer-sigup.png'
import img3 from '../../assets/student-squad.png'

export default function LegalServices() {
  return (
    <>
        <Navbar/>
        <div className="servives">
            <div className="service1 list">
                <div className="img"><img src={img1} alt="" className='img1' /></div>
                <div className="text">
                    <h1>Legal Query</h1>
                    <p>Have a legal query which we haven't  answered above? Ask us here! </p>
                    <button>Submit Query</button>
                </div>
            </div>
            <div className="service2 list">
                <div className="img"><img src={img2} alt="" className='img2' /></div>
                <div className="text">
                    <h1>Need a Lawyer</h1>
                    <p>If you are a member of the Pink Legal community, and you want our help to connect you with a lawyer, please fill up this form. Please go through our website and the 'Know Your Rights' section before you proceed.</p>
                    <button>Click Here</button>
                </div>
            </div>
            <div className="service3 list">
                <div className="img"><img src={img3} alt="" className='img2' /></div>
                <div className="text">
                    <h1>Lawyer's Sign Up</h1>
                    <p>If you are a lawyer working in any of these fields- criminal, family, property, or cyber law and would like to collaborate with Pink Legal to take up cases for female clients, please sign up!</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

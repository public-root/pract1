import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

export default function About() {
  return (
    <>
        <Navbar/>
        <section className="about">
            <h1>MEDONA</h1>
            <p>MEDONA is the first-ever website in India which is dedicated to women’s rights and women’s laws. MEDONA was founded with two important goals in mind: </p>
            <div className="partition">
                <p className='p-text'><strong>Empower women and reduce gender inequality in India.</strong> Gender equality is one of the 17 UN Goals for Sustainable Development. India is ranked 112th on the World Economic Forum’s Global Gender Gap Report, which reflects the extent of gender inequality in India. Pink Legal will contribute towards reducing this gender inequality by empowering women with the knowledge of their legal rights, as we believe that knowledge and information are two of the strongest instruments to facilitate change.</p>
                <p className='p-text'><strong>Bridge the gap between laws in India and the common people.</strong> Laws in India are drafted in an extremely complex legal language. We also have a complicated legal process and multiple laws for similar rights. Therefore, although laws are made for the benefit of people, they feel alienated from the law. Pink Legal addresses this issue by explaining the laws and legal processes to people in their language, making laws friendly, accessible, and less intimidating.</p>
            </div>
        </section>
    </>
  )
}

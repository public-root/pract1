import React from 'react'
// import './ZeroFir.css'
import hero_img from '../../assets/faq-banner.png'
import Navbar from '../../components/Navbar/Navbar'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicsPolice from '../../components/Similar_Topic/SimilarTopicsPolice'
import Tribe from '../../components/Tribe/Tribe'

export default function ZeroFir() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Zero FIR</h1>
            </div>
        </section>
        <section className="accordian">
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What is a Zero FIR?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Zero FIR is an FIR that can be filed in any police station, regardless of the place where the crime is committed or the jurisdiction of the police station.</p>
                <p>An FIR is the first step by which the criminal justice system is set into motion, and the police can conduct a detailed investigation. Generally, an FIR has to be filed in the police station which has jurisdiction over the crime scene. However, in urgent and serious <a href="../../glossary.html" class="link-clr">cognizable offences</a> (like rape, murder, etc.), to avoid wasting any time, you can get a Zero FIR registered in any police station, regardless of jurisdiction.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="2. What is the purpose of a Zero FIR?"  summary="The purpose of a Zero FIR is to help victims of serious crimes (such as women) to complaint quickly, in the nearest police station, without having to go from one police station to another in search of jurisdiction. It is also useful when you know/suspect a serious crime has been committed, and urgently need an FIR registered so that police can start their investigation. (For eg- in the Disha rape and murder case , the police should have let the victim’s family file a Zero FIR, instead of sending them away saying they don’t have jurisdiction)" />
        <Accord title="3. Where can I file a Zero FIR?" summary="You can file a Zero FIR in any police station. It can be the nearest police station to you. It need not be the police station in whose jurisdiction the crime took place." />
        <Accord title="4. What is the procedure to file a Zero FIR?" summary="The procedure to file a Zero FIR is the same as a regular FIR (See FIR ). Instead of giving an FIR number which is registered with the police station, the police will number the FIR as ‘0.’ Once it is transferred to the police station with jurisdiction, it will be assigned a number." />
        <Accord  title="5. What happens after I file a Zero FIR?" summary="After the Zero FIR is lodged, it will be transferred for investigation to the police station under whose area the concerned crime took place." />
        <Accord  title="6. What if the Police refuse to register Zero FIR?" summary="If the police refuse to register a Zero FIR, you can take the same steps as when the police refuse to register a regular FIR" />
        </section>
        <SimilarTopicsPolice/>
        <Tribe/>

    </>
  )
}

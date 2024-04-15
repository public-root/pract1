import React from 'react'
import './Stalking.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Similar_Topic from '../../components/Similar_Topic/Similar_Topic';
import Tribe from '../../components/Tribe/Tribe';

export default function Stalking() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Stalking</h1>
                <p>Section 354D, Indian Penal Code</p>
            </div>
        </section>
        <section className="accordian">
            <div className="head">MEANING</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What constitutes stalking under the Indian Penal Code?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If a man does any of the following acts, it is considered stalking:</p>
                <p><u>Physical stalking</u></p>
                <ol class="panel-body-lists">
                    <li>Following a woman and contacting her/trying to contact her, or</li>
                    <li>
                        <p>Spying on the woman or watching her (Despite clear indication of disinterest and no-consent by the woman)</p>
                    </li>
                </ol>
                <p><u>Online stalking</u></p>
                <p>Monitors the woman’s use of any online browsing or communication (such as browsing, email, whatsapp, social media, etc.)</p>
                <p>For examples of stalking and sexual harassment, see "What You Should Know About <a href="../sexual-harassment/sexual-harassment.html" class="link-clr">Sexual Harassment</a>".</p>
            </div>
            </AccordionDetails>
            </Accordion>
            <div className="head">PUNISHMENT</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              2. What is the punishment for stalking?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The punishment for stalking depends on the previous criminal history of the offender:</p>
                <ol class="panel-body-lists">
                    <li>For a first time offender- imprisonment up to 3 years and fine</li>
                    <li>For a second time/repeat offender- imprisonment up to 5 years and fine</li>
                </ol>
                <p><strong>Nature of offence:</strong></p>
                <table style={{width:"50%"}}>
                    <tbody><tr>
                        <th><a href="../police/list-of-cognizable-offences.html" class="link-clr" style={{borderBottom: "none"}}>Cognizable</a></th>
                        <th><a href="../../glossary.html" class="link-clr" style={{borderBottom: "none"}}>Bailable </a>(for first time offender)
                            <br/><a href="../../glossary.html" class="link-clr" style={{borderBottom: "none"}}> Non-bailable</a> (for second time offender)</th>
                    </tr>
                </tbody></table><br/>
                <p><strong><u> COMPLAINT AGAINST STALKING:</u></strong></p>
                <p>Please see "What You Should Know About <a href="../sexual-harassment/sexual-harassment.html" class="link-clr"> Sexual Harassment</a>" and <a href="../police/police-complaint.html" class="link-clr"> Police Complaint</a>.</p>
            </div>
            </AccordionDetails>
            </Accordion>
        </section>
        <Similar_Topic/>
        <Tribe/>    

    </>
  )
}

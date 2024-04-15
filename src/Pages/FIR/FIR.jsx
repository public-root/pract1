import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicsPolice from '../../components/Similar_Topic/SimilarTopicsPolice';
import Tribe from '../../components/Tribe/Tribe';


export default function FIR() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>FIR</h1>
            </div>
        </section>
        <section className="imp-points">
                <p style={{color:"gray",fontSize:"1.2rem",marginBottom:"0rem"}}>Before you read about an FIR, You should know how to file a police complaint</p>
            <div className="imp-border">
                    <div className="points">
                        <h1>YOUR RIGHTS ABOUT FIR IN A SNAPSHOT</h1>
                        <ul>
                            <li>- You can file an FIR if you are the victim/you have seen or know that a crime has been committed</li>
                            <li>- You can file an FIR in any police station (called zero FIR). The police cannot refuse to file the FIR.</li>
                            <li>- You can also file an FIR without going to the police station (see below).</li>
                            <li>- For FIR about certain offences (molestation, sexual harassment, stalking, eve-teasing, acid attack, and rape), a woman police officer should record your FIR, as far as possible (see below).</li>
                            <li>- Delay does not matter. The police cannot refuse to register an FIR even if there is a delay (see below).</li>
                        </ul>
                    </div>
            </div>
        </section>
        <section className="accordian">
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What is an FIR?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>An FIR (First Information Report) is the earliest form in which the police write a report about an offence. It is usually lodged after a police complaint is made. It contains preliminary details about the offence like date, time, place, and identity of the accused (if known), etc.</p>
                <p> <u>Important</u>: An FIR can only be lodged for a cognizable offence ( <a class="link-clr" href="../../glossary.html">glossary</a>). You can see the list of cognizable offences here ( <a href="../police/list-of-cognizable-offences.html">List of Cognizable Offences</a>).</p>
                <p>For a non-cognizable offence (<a href="../../glossary.html" class="link-clr">glossary</a>), you need to file a complaint directly with the Magistrate court (under Section 190, Criminal Procedure Code). Only when the Magistrate court takes cognizance of the offence (i.e. the court thinks an offence was most probably committed and needs police investigation) the police will investigate a non-cognizable offence(Section 154, Criminal Procedure Code). To understand further, please see Police Complaint to Court Trial- <a href="police-complaint-to-trial-step-by-step-process.html">Step-by-Step process</a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="2. What is the purpose/importance of an FIR?" summary="An FIR is very important as it sets the i process into motion. Investigation can be started only after filing of the FIR. (Lalitha Kumar v Govt. of UP)" />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Who can file an FIR?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The police will file the FIR after you file a police complaint. Anyone can file a police complaint- whether it is the victim, victim’s family/friends, or any witness to a crime. You can understand more about police complaint here ( <a href="../police/police-complaint.html">Police Complaint</a>)</p>
                <p>Basically, it is not necessary that a crime is committed against the person who gives the police complaint.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="4. What happens after the police file an FIR?" summary="The FIR sets the criminal justice system into motion for a cognizable offence. After the FIR, the police will conduct a detailed investigation."/>
        <Accord title="5. Where I can file an FIR?" summary="You can file a complaint(after which the police will lodge an FIR) in any police station. Generally, an FIR is filed in the police station in whose jurisdiction the crime was committed. However, if it is urgent, you can go to any police station convenient for you. This police station will then forward the FIR to the concerned police station in whose jurisdiction the crime was committed (this is called Zero FIR). No police officer can refuse to register an FIR, even if the crime happens outside their jurisdiction."/>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              6. Do the police HAVE to file an FIR when I give a complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If you give a complaint about a cognizable offence( <a href="../../glossary.html">glossary</a>), it is compulsory for the police to register an FIR. The police may register the FIR immediately (for a serious offence like rape, murder, etc.) or may conduct some preliminary investigation and then register the FIR within 2-3 days (for offences like domestic violence, dowry, etc.).
                </p>
                <p>If you give a complaint about a non-cognizable offence( <a href="../../glossary.html" class="link-clr">glossary</a>), the police cannot register an FIR. They will direct you to file a complaint with the Magistrate. See <a href="../police/police-complaint.html" clas="link-clr">Police Complaint</a> to Court Trial- Step-by-Step Process. </p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="7. Do the police have to conduct an investigation before registering the FIR?/ What if the police say they need to investigate before registering an FIR?" summary="The Supreme Court has held that if the offence is a cognizable offence ( glossary) then the police has to immediately register an FIR. The police can conduct their investigation/enquiry after registering the FIR ( Lalitha Kumar v Govt. of UP). In practice, the police register an FIR immediately if it is a very serious cognizable offence (like rape, murder, kidnapping etc.). For slightly less serious offences, the police generally conduct a preliminary investigation and then register an FIR in 2-3 days."/>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              8. Can the police refuse to register an FIR?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The police may refuse to register an FIR only in the following circumstances:</p>
                <ol class="pl-3">
                    <li>Your complaint is for a non-cognizable offence( <a href="../../glossary.html" class="link-clr">glossary</a>), or</li>
                    <li>Your complaint is for a cognizable offence, but when the police do a preliminary investigation, they find that it is a non-cognizable offence( <a href="../../glossary.html" class="link-clr">glossary</a>).</li>
                </ol>
                <p>If the Police conclude that it is a non-cognizable offence, then the police have to give the complainant a report on the findings of the inquiry and the reasons for concluding that it is non-cognizable Section 157, Code of Criminal Procedure. If you are not satisfied with the police report, or you feel that the offence is cognizable (see List of Cognizable Offences) and the police are refusing to register the FIR due to some other reasons (like pressure from an influential person), you can take the steps given below.</p>
            </div>
            </AccordionDetails>
        </Accordion>        
        <div className="head">AFTER FILING FIR</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              9. What happens after filing an FIR?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>After filing an FIR:</p>
                <ol class="pl-3">
                    <li>The police will give you the FIR number for your FIR</li>
                    <li>The police will start a detailed investigation into the offence.</li>
                    <li>Simultaneously, a copy of the FIR is sent to the Magistrate court. To understand in detail, see Police Complaint to Court Trial- <a href="police-complaint-to-trial-step-by-step-process.html" class="link-clr">Step-by-Step Process</a>.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="10. Can FIR be produced as evidence during the trial?" summary="Yes, FIR can be produced as evidence during the trial. However, it is not a substantial (important) piece of evidence. It can be used only to corroborate (support) or contradict the information provided by the informant."/>
        <Accord title="11. Can the contents of the FIR be changed at later point of time?" summary="No, after registering the FIR, the contents of the FIR cannot be changed. However, you can give additional information to the Police later on at any point, through your statement."/>
        <Accord title="12. What happens if you give wrong/false information in FIR?" summary="Filing false FIR is a crime in India. If you give false information to the Police, then you can be punished for furnishing false information to a public servant (punishable with imprisonment up to 6 months) (Section 177, Indian Penal Code) or for injuring a person by the filing of such complaint (punishable with imprisonment up to 2 years) (Section 211, Indian Penal Code)."/>
        <Accord title="13. What happens when the Police file FIR in the wrong manner?" summary="When you are filing your police complaint, make sure to double-check all the facts and details. The police will have to file the FIR based on the complaint (unless they find that the offence does not exist and give an explanation for it in their report). However, if the police officer deliberately records the FIR in a wrong manner, he/she can be charged under the offence “Public servant framing an incorrect document with intent to cause injury.” (Section 167, Indian Penal Code) The punishment for this offence is imprisonment for up to 3 years. Practically, such cases where a victim files a case against the police are rare."/>
        </section>
        <SimilarTopicsPolice/>
        <Tribe/>
    </>
  )
}

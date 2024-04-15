import React from 'react'
import './PoliceComplaint.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicsPolice from '../../components/Similar_Topic/SimilarTopicsPolice'
import Tribe from '../../components/Tribe/Tribe'

export default function PoliceComplaint() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Police Complaint</h1>
            </div>
        </section>
        <section className="accordian">
            <h1 className="head">WHAT IT IS</h1>
            <Accord title="1. What is a police complaint?" summary="A police complaint is a first-hand account of any offence or crime, which describes in layman’s words what happened. Basically, it is a narration of facts about the incident. See how to write a police complaint below."/>
            <Accord title="2. What is the purpose of a police complaint?" summary="The police can start an investigation and lodge an FIR only after you give the complaint. It can also be used as evidence in the criminal trial. Filing a complaint shows that you are genuinely affected by the incident and wish to report it; it will help to prove your case better."/>
            <Accord title="3. What is the difference between a police complaint and an FIR?" summary="A police complaint contains the narration of facts and the incident which a complainant gives to the police. An FIR is the first report made by the police about the offence after you make a police complaint. An FIR is only made for cognizable offences ( glossary ). For further details on FIR, see "/>
            <h1 className="head">FILING A COMPLAINT</h1>
            <Accord title="4. Who can file a police complaint?" summary="Anyone can file a police complaint- whether it is the victim, victim’s family/friends, or any witness to a crime. Therefore, if you know someone who is a victim of any crime, you can file a police complaint on their behalf (if the victim will not have a problem with that)."/>
            <Accord title="5. Where should I file a police complaint?" summary="You should file the police complaint in the jurisdiction where the crime is committed. For example, if the incident occurs in Jubilee Hills, Hyderabad, you should go to the Jubilee Hills police station. You can find out which police station has jurisdiction through a simple google search. In case of urgency, for a cognizable offence( "/>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              6. Can I file a police complaint without going to the police station?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Yes, you can write/type your complaint and send it to the police station through Registered Post Acknowledgment Due. Address it to a senior police officer of the level of Deputy Commissioner or Commissioner of Police. The officer then directs the Station House Officer (of the police station of the area where the incident occurred) to lodge an FIR or conduct an investigation. The police may then come over to the residence of the victim/person giving the complaint, to take her statement.
                </p>
                <p>Nowadays, many police stations in metro cities let you file a complaint online- through email or their app. You can do a simple google search to find out if this facility is available in your city. The police departments in some metro cities have launched mobile applications through which one can easily register FIR even without going to the police station, like Delhi (Himmat) and Hyderabad (Hawk Eye).</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              7. When should I file a police complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Ideally, you should file the police complaint as soon as an incident takes place. This will help the police to take fast action and evidence of the crime will not be lost.
                </p>
                <p>In cases of domestic violence, sexual harassment, rape, etc. women usually take time to come out and report the crime due to mental trauma and stigma. That is okay. Even if there is a delay, you can still go file a police complaint. The police will write down the reason for the delay.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              8. What is the procedure to file a police complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The procedure to file a police complaint is given below:
                </p>
                <ol type="a" class="pl-3">
                    <li> <u>Inform-</u> You go to the police station and inform the police about the offence.</li>
                    <li> <u>Written form-</u>If you provide information orally, the police will write it down for
                        you. You can also choose to write down your complaint yourself (we recommend
                        this).
                        You can either write your complaint before-hand and take it to the police station or in case of urgency, you can go directly to the police station and tell them you need to file a complaint. The police may give you a complaint form to write down the complaint. If you need more paper, you can ask the police. You can also
                        ask for a blank paper to write your complaint and attach it to the form.</li>
                    <li><u>Read Over</u>- you are giving an oral complaint which the police is writing down, the police will read over all the information provided by you for confirmation. This
                        step is not necessary if you give a written complaint.</li>
                    <li><u>Verification and signature-</u> Police will ask you to verify the facts again and sign
                        the complaint.</li>
                    <li><u>Stamp and Complaint Number- </u> The police will stamp the complaint carrying the
                        Daily Diary Number and give you a Complaint Number.</li>
                    <li><u>Your Copy-</u> The police will provide you with a free xerox copy of your complaint, which should also be signed and stamped.</li>
                </ol>
                <p> <u> Remember:</u> Your police complaint can be used to support or contradict evidence in the
                    trial in court. Therefore, make sure that all the details you give are accurate. If you are
                    not sure about any detail, it is better to leave it out or give an approximate figure (for
                    eg- if you don’t remember the exact time, you can say it was in the afternoon). DO NOT put down anything that you are not sure of because it can be used against you later to contradict your statement.</p>
                <p> <em>We have given you a sample complaint below for reference.</em></p>
            </div>
            </AccordionDetails>
        </Accordion>
            
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              9. What happens after I file a police complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>After you file the police complaint:</p>
                <ol type="a" class="pl-3">
                    <li>The police will give you a complaint number and a free xerox copy of the complaint, for your record. (Section 154, Criminal Procedure Code)</li>
                    <li>If the complaint is for a non-cognizable offence, the police will direct you to file a complaint with the Magistrate. To understand the entire process from filing a complaint to a court trial, see Criminal Process.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        </section>
        <SimilarTopicsPolice/>
        <Tribe/>
    </>
  )
}

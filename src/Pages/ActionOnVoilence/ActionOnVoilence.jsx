import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicVoilence from '../../components/Similar_Topic/SimilarTopicVoilence';
import Tribe from '../../components/Tribe/Tribe';

export default function ActionOnVoilence() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Taking Action</h1>
                <h1> Action Against </h1>
                <h1> At Home</h1>
            </div>
        </section>
        <section className="accordian">
            <div className="head">Option I</div>
            <div className="head">File A Police Complaint (for general details, see Police Complaint)</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
                1. For what purpose can I file a police complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>You can file a police complaint for the following purposes:</p>
                <ol class="pl-3">
                    <li> <strong>Cruelty-</strong> Against any serious physical or mental harassment by your husband/husband’s family. (Section 498A, Indian Penal Code) For more details, see <a href="cruetly.html" class="link-clr">Cruelty</a>)</li>
                    <li> <strong><em>Stridhan</em>-</strong> To get back your <em>stridhan</em> if you have been asked to leave the matrimonial home without the <em>stridhan</em>. (Section 406C, Indian Penal Code) For more details, see <a href="../property-rights/stridhan.html" class="link-clr"><em>Stridhan</em></a>)</li>
                </ol>
                <p> <u>Remember:</u> You can even file a complaint under both/multiple laws together. </p>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
                2. What will the police do when I file a complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ol type="a" class="panel-body-lists">
                    <li><strong> For a complaint against cruelty:</strong> After you file the police complaint, the police will conduct a preliminary investigation. They may come to your matrimonial house to ask questions or conduct a search. After this, they will lodge an FIR against the accused persons. After the FIR, the matter will proceed to a criminal case in court. For further details, see <a href="../police/police-complaint.html" class="link-clr">Police Complaint and Procedure</a>
                        <p><u>Arrest without warrant</u>: If your case is very serious, the police have the power under Section 498A to arrest the person without <a href="../../glossary.html" class="link-clr">warrant</a>. Section 498A is a <a href="../../glossary.html" class="link-clr">non-bailable offence </a> Once arrested, the person will only be released if the court(Magistrate Court/High Court) <a href="../../glossary.html" class="link-clr">grants him/her bail. </a>
                        </p>
                        <p> <u>Remember</u>: S.498A is a very strong legal provision, meant for the protection of women. An FIR registered under Section 498A can only be quashed(cancelled) by the High Court. You cannot take it back.
                        </p>
                    </li>
                    <li> <strong>For a complaint for return of <em> stridhan:</em></strong> The police will call your husband/husband’s family to the police station and ask them to return your stridhan. If they still refuse, then the police will register a criminal complaint against them, under Section 406C, Indian Penal Code. For more details on stridhan, see here <a href="../property-rights/stridhan.html" class="link-clr"><em>stridhan </em></a>.
                    </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Where can you file the police complaint?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>You can file in a police station having jurisdiction over any of the three places:</p>
                <ol type="a" class="pl-3">
                    <li>Your matrimonial home </li>
                    <li> The place where you are staying (if not staying in matrimonial home)</li>
                    <li>Where the incident of harassment/violence took place </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="4. When should you file the police complaint? What if there is a delay?" summary="Preferably as soon as possible after the incident. Even if there is a delay, the police have to register your complaint. However, the more the delay, the more difficult it will be for you to prove the incident. They may also raise questions on why you kept quiet for so long. To protect yourself from such questions, always report any incident of harassment to a trusted family member/friend. (For details on how to collect evidence, see below)" />
        <Accord title="5. What is the advantage of filing a police complaint over a court case?" summary="If you file a police complaint, you will get immediate relief. Under criminal laws, police can take swift actions. Often, filing a police complaint is itself enough to stop the harasser from harassing you. You may not need to go for a court case at all." />
        <div className="head">Option II</div>
        <div className="head">File A Court Case</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. Under which laws can I file a court case?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p> Which laws you file the court case under, depends on the situation:</p>
                <ol type="a" class="panel-body-lists">
                    <li>For harassment of any kind in your matrimonial home, you can file a case under the Domestic Violence Act- Section 12. A complaint under the Domestic Violence Act should be through a specific form- called the Domestic Incident Report. For details on what is domestic violence, see here <a href="domestic-violence.html" class="link-clr">domestic violence</a> The advantages of filing a case under the Domestic Violence Act are explained below.</li>
                    <li>If your husband/husband’s family also harassed/took dowry, you can file a case under the Dowry Prohibition Act- Section 3 if they took dowry, Section 4 if they only demanded dowry ( to <a href="dowry.html" class="link-clr"> Dowry</a>). Usually, dowry harassment also involves other kinds of harassment, and a case is filed under Dowry Prohibition Act and Domestic Violence Act together. </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="2. Can I directly file a court case, without a police complaint?" summary="Yes, you can directly file a court case also, under the applicable law, like Dowry Prohibition Act or the Domestic Violence Act." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Where should you file the court case?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>You should file the case in the court of the Metropolitan Magistrate or Judicial Magistrate (First Class), which has jurisdiction over any of the following: </p>
                <ol type="a" class="pl-3">
                    <li>Your matrimonial home</li>
                    <li> The place where you are staying (if not staying in matrimonial home)</li>
                    <li> Where the incident of harassment/violence took place</li>
                    <li> Where the accused works (carries out own business/is employed)- this is specifically for the Domestic Violence Act</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>

        <Accord title=" 4. What relief can the court give you?" summary="The relief that the court will give you depends on which law you have filed the case under. For specific reliefs against domestic violence, see- Domestic Violence. For specific reliefs against dowry harassment, see Dowry" />
        <Accord title="5. What if I have already filed a police complaint?" summary="If your police complaint has proceeded towards a criminal case in court, the cases you file under the Domestic Violence Act and/or the Dowry Prohibition Act, will be clubbed with the ongoing criminal case." />
        <Accord title="6. Do I need to engage a lawyer for the court case?" summary="Since a case for cruelty (Section 498A, Indian Penal Code), dowry harassment, and domestic violence, is a criminal case, the state will provide you with free legal aid. A public prosecutor will by default be appointed to represent you in the case. You can also engage a private lawyer, if you find it more comfortable. Most complainants prefer to engage a private lawyer." />
        <Accord title="7. How long will the court case take?" summary="On an average, a case may take around 2-3 years to be fully closed, but this depends from court to court. However, in the meantime, the court will grant temporary orders (called interim orders) to give you relief while the case is pending. You can ask for interim orders in the first or second court hearing itself." />
        </section>
        <SimilarTopicVoilence/>
        <Tribe/>
    </>
  )
}

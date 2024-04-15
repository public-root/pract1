import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicProperty from '../../components/Similar_Topic/SimilarTopicProperty';
import Tribe from '../../components/Tribe/Tribe';

export default function Stridhan() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Stridhan</h1>
            </div>
        </section>
        <section className="accordian">
            <Accord title="1. What is stridhan?" summary="A woman’s property(such as cash, jewellery, real estate, etc.) is called Stridhan. The woman is the exclusive owner of her stridhan and she has complete control over it. Even if the stridhan is kept with someone else (for eg- jewellery is kept with family members), it belongs only to the woman. (Section 14, Hindu Succession Act, 1956)" />
            <Accord title="2. What are my rights over stridhan?" summary="Your stridhan is your exclusive property and no one else has any rights over it. You have full rights to keep it with you, store it in your control, and use it however you want. If you ever have to leave your matrimonial home, you can take your stridhan along with you. In case your husband’s family is not letting you take your stridhan, you can immediately file a " />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             3. How can I protect my stridhan?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ol type="a" class="pl-3">
                    <li>Make a list of all your stridhan and sort it out into different categories like- cash, jewellery, property, other valuables, etc.</li>
                    <li>Store your stridhan in such a way that you have control over it. For eg- in your own bank locker or in a joint-locker which you can also access.</li>
                    <li>Never handover your stridhan to anyone whom you do not trust. Remember, your stridhan is yours only, and no one has the right to ask you for it.</li>
                    <li>Don’t feel pressurised if your husband’s family tries to take your stridhan. Tell them you will not give it to anyone. If they try to harass you, you can immediately file a <a href="../../topics/police/police-complaint.html" class="link-clr">Police Complaint</a> for harassment (under Section 498A Indian Penal Code).</li>
                    <li>If you feel your stridhan is not safe in your matrimonial house, store it with someone you trust, like your parents.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accord title="4. My husband’s family has taken my stridhan. How can I get it back?" summary="If your husband’s family is refusing to return your stridhan, you can file a Police Complaint under Section 406C, Indian Penal Code. The police will call your husband/husband’s family to the police station and ask them to return your stridhan. If they still refuse, then the police will register a criminal complaint against them, under Section 406C, Indian Penal Code. " />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             5. How to file a police complaint to get back my stridhan?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ol type="a" class="pl-3">
                    <li>Make a list of all the stridhan that is in possession of the husband/husband’s family.</li>
                    <li>File a police complaint under Section 406C, Indian Penal Code. Read the steps to file a Police Complaint <a href="../../topics/police/police-complaint.html" class="link-clr">here</a></li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        </section>
        <SimilarTopicProperty/>
        <Tribe/>
    </>
  )
}

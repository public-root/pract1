import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicVoilence from '../../components/Similar_Topic/SimilarTopicVoilence';
import Tribe from '../../components/Tribe/Tribe';

export default function Cruelty() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Cruelty</h1>
                <p>Section 498A, India Penal Code</p>
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
              1. What is cruelty?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p><strong>‘Cruelty’ under Section 498A means:</strong></p>
                <ul>
                    <p>- Any act which causes a serious mental or physical injury to a married woman (like beating, slapping, kicking, or constant mental torture which will affect the mental health) or</p>
                    <p>- Any act which drives a married woman to commit suicide or</p>
                    <p>- Any harassment of a married woman for dowry</p>
                </ul>
                <p>Simply put, any kind of serious harassment will come under cruelty.</p>
            </div>
            </AccordionDetails>
            </Accordion>
            <Accord title="2. What is the difference between cruelty and harassment?" summary="Cruelty means harassment which is of a serious nature, which is likely to cause mental or physical injury to the married woman. Harassment can include acts of harassment which are of a less serious nature (like taunting or ridiculing). Such harassment will be covered under Domestic Violence Act "/>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Who is protected under cruelty?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Protection under Section 498A is available to every married woman, irrespective of age, religion, region, etc. </p>
                <p>
                    An unmarried woman or a woman in a live-in relationship is not protected under cruelty. However, she will be protected under the <a href="domestic-violence.html" class="link-clr">Domestic Violence Act</a> </p>
            </div>
            </AccordionDetails>
            </Accordion>
            <div className="head">COMPLAINT</div>
            <Accord title="4. Who can file a complaint against cruelty?" summary="The married woman suffering from cruelty, or any other person on her behalf, who is related to her through blood, marriage, or adoption. " />
            <Accord title="5. Against who can you file a complaint under cruelty?" summary="You can file a complaint against cruelty against the husband or any relative of the husband who commits acts of cruelty." />
            <Accord title="6. When should I file a complaint against cruelty?" summary="You should ideally file a complaint as soon as possible after the incident. This will ensure that evidence remains intact and the police can take swift action." />
            <Accord title="7. Can I file a complaint against past cruelty?" summary="Yes, you can. However, usually a police complaint is filed when something triggers- for example, an incident of cruelty has recently happened. Then along with the triggering incident, you can also file a complaint for the past incidents. If there’s no triggering incident, but you wish to complain, you can also directly file a court case. See Taking Action Against Violence at Home" />
        </section>
        <SimilarTopicVoilence/>
        <Tribe/>
    </>

  )
}

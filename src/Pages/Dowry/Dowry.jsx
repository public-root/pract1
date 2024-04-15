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

export default function Dowry() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Dowry Harassment</h1>
            </div>
        </section>
        <section className="accordian">
            <div className="head">Meaning</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What is Dowry?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Dowry means any kind of money, goods, cash, jewellery, property, etc. which the husband’s side demands from the wife’s side, for marriage. (Section 2, Dowry Prohibition Act) </p>
                <p><u>What is not dowry:</u></p>
                <p>Any gifts <em>willingly</em> given to the bride or groom at the time of marriage, without any demand from the other side.
                </p>
                <p><u>Remember:</u></p>
                <p>Dowry demand can be made against <u>anyone</u> (i.e. woman, her parents, her relatives, her guardians) and at any time (i.e. before, at the time of, or after marriage).</p>
            </div>
            </AccordionDetails>
            </Accordion>
            <Accord title="2. Does dowry include the money and other assets brought by the bride at the time of her marriage?" summary="Money, assets and other gifts brought by the bride, that are given to her without any demand from the husband’s side, are not considered. For dowry, there should be a demand. " />
            <Accord title="3. What is the difference between stridhan and dowry?" summary="Stridhan  is the property of a woman (such as cash, jewellery, real estate, etc.) which is given to a woman out of love and affection. Whereas, dowry includes assets and property demanded from the woman’s side by the husband’s side, in connection with marriage. For more details on streedhan, see here Stridhan" />
            <Accord title="4. Is it okay to give/take dowry because it is a customary practice?" summary="No, just because something has been done as a custom, does not make it correct or legal. The Dowry Prohibition Act clearly states that asking for dowry, taking dowry, or even giving dowry is illegal. The aim of this law is to protect girls and their families from dowry harassment from the husband’s side." />
            <Accord title="5. What if the groom’s side make expensive demands for wedding arrangements?" summary="You are not required to make any wedding arrangements beyond your budget and affordability. If the groom’s side makes demands on you or your family for expensive wedding arrangements, it can be considered as dowry demand. You have every right to refuse." />
            <div className="head">LEGAL PROVISIONS</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              6. Is dowry legal in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>No, the following acts are illegal in India and punishable under the Dowry Prohibition Act, 1961:</p>
                <ol type="a" class="pl-3">
                    <li>Demanding for dowry: 6 months-2 years imprisonment + fine up to Rs. 10,000 (Section 4, Dowry Prohibition Act).
                    </li>
                    <li> Taking dowry (Section 3, Dowry Prohibition Act)</li>
                    <li> Giving dowry (Section 3, Dowry Prohibition Act)</li>
                    <li> Helping someone to take or give dowry (Section 3, Dowry Prohibition Act)</li>
                </ol>
                <p>For punishment for each act, see below.</p>
            </div>
            </AccordionDetails>
            </Accordion>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              7. Which legal provisions in India protect women against dowry harassment?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The following legal provisions protect women against dowry:</p>
                <ol type="a" class="pl-3">
                    <li> Dowry Prohibition Act- makes demanding/taking/giving dowry illegal</li>
                    <li> Section 498A, Indian Penal Code- makes <a href="cruetly.html" class="link-clr">harassment of a woman for dowry a crime</a> </li>
                    <li> Section 304B, Indian Penal Code- defines ‘dowry death’ (for more details, see below)</li>
                    <li> Section 113-A, Indian Evidence Act- presumption that husband/relatives drove the woman to suicide (for more details, see below)</li>
                </ol>
            </div>
            </AccordionDetails>
            </Accordion>
            <div className="head">PUNISHMENT/RELIEFS</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              8. What is the punishment for dowry in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The punishment for dowry in India is as follows:</p>
                <ol type="1" class="pl-3">
                    <li> <u>Demanding for dowry:</u> 6 months-2 years imprisonment + fine up to Rs. 10,000 (Section 4, Dowry Prohibition Act).
                    </li>
                    <li> <u>Taking dowry:</u> 5 years imprisonment + fine of Rs.15,000 or the value of dowry (whichever is higher) (Section 3, Dowry Prohibition Act)</li>
                    <li><u>Giving dowry:</u> 5 years imprisonment + fine of Rs.15,000 or the value of dowry (whichever is higher) (Section 3, Dowry Prohibition Act)
                    </li>
                    <li>
                        <u>Helping someone to take or give dowry:</u> 5 years imprisonment + fine of Rs.15,000 or the value of dowry (whichever is higher) (Section 3, Dowry Prohibition Act)
                    </li>
                </ol>
            </div>
            </AccordionDetails>
            </Accordion>
            <Accord title="9. Can I be punished for giving dowry?" summary="Yes, giving dowry is a punishable offence. For punishment, see above. (Section 3, Dowry Prohibition Act) " />
            <Accord title="10. Can I be punished for taking dowry?" summary="Yes, taking dowry is a punishable offence. For punishment, see above. (Section 4, Dowry Prohibition Act, 1961)" />
            <Accord title="11. If I helped someone in giving/taking dowry, will I be liable?" summary="Abetting i.e. helping someone in giving/taking dowry is considered equal to taking/giving dowry. It is a punishable offence. For punishment, see above. (Section 3, Dowry Prohibition Act, 1961)" />
            <Accord title="12. Can I be punished for demanding dowry even if I do not take any?" summary="Asking for dowry, irrespective of whether you take it or not, is a punishable offence. For punishment, see above. (Section 4, Dowry Prohibition Act, 1961)" />
            <Accord title="13. What happens to the dowry which has already been given to the husband/husband’s family?" summary="If dowry has been taken by any person other than the married woman, that person needs to transfer the dowry to the woman, within 3 months of receipt. If the person does not do so, he/she shall be punished with imprisonment of 6 months-2 years + fine of Rs.10,000.(Section 6, Dowry Prohibition Act)" />
        </section>
        <SimilarTopicVoilence/>
        <Tribe/>
    </>
  )
}

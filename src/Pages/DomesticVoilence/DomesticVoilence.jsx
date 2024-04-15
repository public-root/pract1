import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicsPolice from '../../components/Similar_Topic/SimilarTopicsPolice';
import SimilarTopicVoilence from '../../components/Similar_Topic/SimilarTopicVoilence';
import Tribe from '../../components/Tribe/Tribe';


export default function DomesticVoilence() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Domestic Voilence</h1>
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
              1. What is domestic violence?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Domestic Violence means any kind of physical, sexual, emotional, or economic abuse against a woman which causes any kind of physical or mental injury to a woman. It also includes demand for dowry. (Section 3, Domestic Violence Act)
                </p>
                <p>The definitions of physical, sexual, emotional, and economic abuse are explained below:</p>
                <ol type="a" class="pl-3">
                    <li> <u>Physical Abuse-</u> Causing bodily injury to the woman. For eg- slapping, beating, kicking, etc.</li>
                    <li> <u>Sexual Abuse-</u> Any sexual conduct which abuses, humiliates, degrades or violates the woman would be sexual violence. For eg- forcing the woman to have sexual intercourse when she is not in a state to, forcing a woman to watch pornography, forcefully filming any sexual act of the woman, etc.</li>
                    <li> <u>Emotional Abuse-</u>Insulting or humiliating the woman, or threatening her about physical abuse; for example name-calling, or taunting a woman about not having children/not having a male child, etc.</li>
                    <li><u>Economic Abuse-</u> Any of the following:
                        <ol type="i" class="pl-5">
                            <li>Not maintaining the woman or depriving her of money necessary to maintain herself/children/household.</li>
                            <li> Not returning the woman’s <a href="../property-rights/stridhan.html" class="link-clr">stridhan</a> , etc.</li>
                            <li> Disposing of property/assets to which the woman would also have a right.</li>
                        </ol>
                        <p><u> Remember:</u></p>
                        <ul>
                            <li>Usually, domestic violence is a combination of multiple types of abuses. Anything which causes harassment to a woman in her house will come under domestic violence.</li>
                            <li> Even threatening to hurt the woman or her family members is domestic violence.
                            </li>
                        </ul>
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
              2. What ingredients are necessary to constitute domestic violence?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p> The following ingredients are necessary to constitute domestic violence:</p>
                <ol class="pl-3">
                    <li>
                        <p>The woman should be or have been in a domestic relationship* with her harasser at any point in time.</p>
                        <p><sup>*</sup><u>Domestic Relationship</u> means being related to the person through marriage, or blood(family members) or live-in, or adoption. (Section 2(f), Domestic Violence Act).</p>
                    </li>
                    <li>
                        <p>The woman should have lived in a shared household* with her harasser at any point in time.</p>
                        <p> <sup>*</sup> <u>Shared Household</u> means any house shared by the woman with her harasser.</p>
                    </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>

        <div className="head">Rights Under Domestic Violence Act</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. Who does the Domestic Violence Act protect?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The Domestic Violence Act protects each and every woman in India, irrespective of religion, marital status, or age.</p>
                <p><u>Remember:</u> The Domestic Violence Act is not only about domestic violence to married women. It covers domestic violence under all circumstances:</p>
                <ul>
                    <p>- From husband</p>
                    <p>- From husband’s family members</p>
                    <p>- From a woman’s own family members</p>
                    <p>- From a live-in partner</p>
                    <p>- From adoptive parents/family</p>
                </ul>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              4. What rights does the Domestic Violence Act give women?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The Domestic Violence Act helps women have a life free from any kind of violence or abuse at home. A woman is entitled to the following rights under the Domestic Violence Act:</p>
                <ul>
                    <li><strong>Right to stay in her house:</strong> Every woman has the right to live in the house which she shares with her family/husband/husband’s family (i.e. shared household). No one can tell her to leave the house or stop her from living there. (Section 17, Domestic Violence Act)
                    </li>
                    <li><strong>Right to protection against domestic violence:</strong> If the woman has suffered from domestic violence or feels threatened about domestic violence, she can get a protection order from the Magistrate. (Section 18, Domestic Violence Act) For more details, see below.</li>
                    <li><strong>Right to monetary relief:</strong> The woman can ask the Magistrate for monetary relief to meet her expenses and cover for any loss incurred by her. She also has the right to take all her valuables, jewellery, streedhan, etc. (Section 20, Domestic Violence Act) For more details, see below.</li>
                    <li><strong>Right to the custody of children:</strong> The woman can seek custody of her child(ren) at any time from the Magistrate. (Section 21, Domestic Violence Act) For more details, see below.</li>
                </ul>
            </div>
            </AccordionDetails>
        </Accordion>
        
        <div className="head">Complaint</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              5. Who can file a complaint against domestic violence?    
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Anyone can file a complaint against domestic violence:
                </p>
                <ol type="a" class="pl-3">
                    <li>The woman who has been harassed</li>
                    <li> Anyone else on her behalf, like family members, an NGO, etc.</li>
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
              6. Against whom can you file a complaint for domestic violence?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>A domestic violence complaint can be filed against anyone who harasses the woman. This can include:
                </p>
                <ol type="a" class="pl-3">
                    <li>Husband</li>
                    <li> Husband’s family members- like mother-in-law, father-in-law, sister-in-law, brother-in-law live-in partner</li>
                    <li> Own family members</li>
                    <li> Live-in partner</li>
                    <li> Adoptive family</li>
                </ol>
                <p> <strong>Remember:</strong> The ingredients for domestic violence(i.e. domestic relationship and shared household) must exist. For details, see above.
                </p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="7. How can you file a complaint against domestic violence?" summary="To understand how to file a complaint against domestic violence, see Taking Action Against Violence At Home"/>
        </section>
        <SimilarTopicVoilence/>
        <Tribe/>
    </>
  )
}

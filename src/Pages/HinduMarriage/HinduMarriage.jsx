import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicVoilence from '../../components/Similar_Topic/SimilarTopicVoilence';
import SimilarTopicMarriage from '../../components/Similar_Topic/SimilarTopicMarriage';
import Tribe from '../../components/Tribe/Tribe';

export default function HinduMarriage() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Hindu Marriage</h1>
                <p> All YOU NEED TO KNOW ABOUT MARRIAGE UNDER HINDU LAW </p>
            </div>
        </section>
        <section className="accordian">
            <Accord title="1. Which law governs marriage for Hindus?" summary="1. Which law governs marriage for Hindus?" />
            <div className="head">Who Does It Apply To</div>
            <Accord title="2. Who does the Hindu Marriage Act apply to?" summary="The HMA applies to Hindus, Sikhs, Buddhists and Jains. (Section 2, HMA)" />
            <Accord title="3. What if my spouse is not a Hindu?" summary="If your spouse is not a Hindu, you cannot get married under the HMA. In such a case, you can get married under the Special Marriage Act (this is a religion-neutral act under which people from any religion can get married)." />
            <Accord title="4. What if I am an NRI? Can I get married under the Hindu Marriage Act?" summary="Yes, you can, if the conditions for a valid marriage under the HMA are satisfied." />
            <div className="head">Conditions For a Valid Marriage</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              5. What are the conditions for a valid marriage under the Hindu Marriage Act?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The conditions for a valid marriage under the HMA are (Section 5, HMA):
                </p>
                <ol type="a" class="pl-3">
                    <li>Both spouses must be ‘Hindu’ (i.e. Hindu, Sikh, Buddhist, or Jain)</li>
                    <li>Neither spouse should be in an existing marriage (i.e. if you are already married, you cannot marry without dissolving the previous marriage).</li>
                    <li>Both spouses should be mentally sound and capable of giving consent</li>
                    <li>The bridegroom should be at least 21 years old and bride at least 18 years old</li>
                    <li>The spouses should not be related so closely that it is prohibited by law (like parent-child, uncle-niece, aunt-nephew, step parent-child, siblings, first cousins, etc.). However, in some communities, marriages between close relations like first cousins and uncle-niece are common. If it is the custom of that community, then the law will not prohibit the marriage.</li>
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
             6. Which ceremonies are necessary for solemnizing a Hindu marriage?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The marriage can be solemnized by performing the customary ceremonies of the community. If <em>saptapadi</em>(seven steps before the fire) is a customary part of the ceremonies, then <em>saptapadi</em> is must for solemnizing the marriage.
                </p>
                <p><u>Practical tip:</u> Almost all Hindu communities have saptapadi as part of their customs, and therefore it is a necessary ceremony to solemnize a marriage.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="7. What happens to the marriage if the above conditions are not satisfied?" summary="If any of the above conditions are not satisfied, the marriage becomes either void or voidable. Both types are explained in detail below." />
        <div className="head">Invalid Marriage (Void/Voidable)</div>
        <Accord title="8. What is a void marriage?" summary="A void marriage is a marriage which is considered invalid or non-existent from the beginning. A void marriage does not need any formality (like annulment or divorce) to terminate. It is as though the marriage never existed. If you were in a void marriage, it is as though you were not married. (Section 11, HMA)" />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             9. What are the grounds on which a marriage becomes void?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p> A marriage becomes void if-</p>
                <ol type="a" class="pl-3">
                    <li>One of the spouses is already married at the time of this marriage (this is called bigamy). OR</li>
                    <li>If the spouses are so closely related to each other that marriage between them is prohibited by law (see above, conditions for a valid marriage).</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="10. What is a voidable marriage?" summary="A voidable marriage is one which any of the spouses can terminate without having to get a divorce. You can terminate a voidable marriage through a decree of annulment. A voidable marriage is valid when it comes into existence, but becomes invalid when it is annulled. (Section 12, HMA)" />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
            11. What are the grounds on which a marriage becomes voidable?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>A marriage becomes voidable if:</p>
                <ol type="a" class="pl-3"><li>One of the spouses is mentally unsound and incapable of giving consent at the time of marriage</li>
                   <li>The marriage has not been consummated due to impotency of one of the spouses</li>
                   <li>The wife was pregnant with another person’s child at the time of marriage (and the husband was unaware about this)</li>
                   <p>The marriage becomes voidable as soon as any of the above conditions arise.</p></ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
            12. How can I get an annulment decree if my marriage is voidable?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <u>Conditions to apply for an annulment decree:</u>
                <ol type="a" class="pl-3">
                    <li>File for annulment within 1 year from the marriage becoming voidable</li>
                    <li>When you find out about the marriage becoming voidable, you should not voluntarily continue to live with your spouse. You should live separately.
                       <p><u>Where to file for annulment-</u> In the District Court in any of the following places:</p>
                          <ul class="hindu-marriage-list">
                           <li>Where the marriage took place</li>
                           <li>Where you stayed together as a married couple</li>
                           <li>Where you currently live</li>
                           <li>Where your spouse currently lives</li>
                          </ul>
                       </li>     
                           <p><u>Practical tip</u>: It will be easiest for you to file for an annulment in the District Court having jurisdiction where you currently live.</p>
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
            13. What is the difference between annulment and divorce?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>In an annulment, the marriage is simply cancelled. After the annulment, it is considered that the marriage never existed.</p>
                <p>In a divorce, a valid marriage is dissolved. After the divorce, it is considered that the marriage existed till the divorce was granted. Only after the divorce the marriage will not exist anymore. For more information on divorce, see <a href="hindu-divorce.html" class="link-clr">Divorce</a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="14. What happens to children born out of void or voidable marriages?" summary="Children born out of void or voidable marriages are considered legitimate, as if they were born out of a valid marriage. This is because the law does not want to punish a child (by treating him/her as illegitimate) due to no fault of the child. (Section 16, HMA)" />
        </section>
        <SimilarTopicMarriage/>
        <Tribe/>
        
    </>
  )
}

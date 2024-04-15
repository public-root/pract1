import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import marriageimg from '../../assets/marriage-2.png'
import SimilarTopicMarriage from '../../components/Similar_Topic/SimilarTopicMarriage';
import Tribe from '../../components/Tribe/Tribe';

export default function HinduMaintanence() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Hindu Maintenence</h1>
                <p>ALL YOU WANT TO KNOW ABOUT MAINTENENCE AND ALIMONY</p>
            </div>
        </section>
        <section className="accordian">
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What is the difference between maintenance and alimony?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Maintenance is an umbrella term for all types of maintenance- during marriage and after marriage. The maintenance paid after marriage (i.e. on divorce) is called alimony.</p>
                <p>Maintenance with respect to marriage and divorce, is given in three situations:</p>
                <ol type="a" class="pl-3">
                    <li> During marriage</li>
                    <li> During pendency of divorce (this is called interim maintenance)</li>
                    <li> After the divorce is final (this is called alimony)</li>
                </ol>
                <div class="text-center">
                    <img src={marriageimg} class="img-fluid" type="image/jpg"/>
                </div>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Maintenance during Marriage: </div>
        <Accord title="2. What is maintenance during marriage?" summary="Every husband is required by law to pay his wife maintenance during marriage. This means that the husband should provide her financial support, i.e. living expenses and other expenses to help her live a good life. Maintenance by husband to wife was made compulsory to make sure that, women who don’t have means of income or who are homemakers, can live comfortably." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             3. Which law covers maintenance during marriage?

            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>The laws which cover maintenance during marriage (for day-to-day life) are:</p>
                <ol type="a" class="pl-3">
                    <li>Section 18, Hindu Adoptions and Maintenance Act(HAMA) - Lays down the husband’s duty to financially support his wife.</li>
                    <li>Section 125, Code of Criminal Procedure(CrPC) - Lays down the husband’s duty to financially support his wife <em>who is unable to support herself</em>.<br/><br/>
                        <p>Maintenance under Section 18, HAMA is applicable irrespective of the wife’s earning capacity. Maintenance under Section 125, CrPC is <br/>applicable when the wife is unable to maintain herself.</p>
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
            4. What can I do if my husband does not financially support me?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>It is your husband’s duty to financially support you, especially if you don’t have a means of income. If your husband does not financially support you, first try to resolve the matter outside court. You can involve trusted relatives to act as a mediator and solve the issue. If the matter still does not get solved, then you can file a maintenance case in court (for details see below).</p>
                <p><u>Practical tip:</u> Generally, a maintenance case is filed when the marriage goes bad and is clubbed with divorce proceedings. In very few cases, a maintenance case is filed exclusively to ask the husband to financially support his wife. Why so? Because when one partner files a court case against the other, it gets difficult for the partners to live in a happy marriage.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            5. Where can I file a maintenance case if my husband refuses to financially support me?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Where you file the case depends on which law you are filing the case under:
                </p>
                <p><u>If under Section 125 CrPC-</u> Magistrate of First Class having jurisdiction over your matrimonial house (since you are still in the marriage).</p>
                <p><u>If under Section 18, HAMA-</u> In the family court having jurisdiction over your matrimonial house (since you are still in the marriage).</p>
                <p><u>Which law is preferable:</u></p>
                <p>You should file under both laws, as Section 125, CrPC is criminal law and Section18, HAMA is civil law. Under both laws the courts will grant you maintenance. However, under Section 125, CrPC, if you husband disobeys the court order for maintenance, the court can issue a warrant against your husband to either pay the amount or go to jail.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            6. When does a woman get disqualified from claiming maintenance?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Every married woman has the right to maintenance from her husband. However, in certain situations you can get disqualified from asking for maintenance:
                </p>
                <ol class="pl-3">
                    <li>If you are living separately from your husband without his consent, and for no justifiable reason. “Justifiable reason” is subjective and open for interpretation to the court. Example of a justifiable reason - domestic violence or harassment.</li>
                    <li>If you have sexual relations with someone other than your husband. This is a very common counter-allegation raised by the opposite side, to get out of paying maintenance.</li>
                    <li><p>If you convert your religion and stop being a Hindu (only applicable for maintenance under Section 18, HAMA)</p>    
                        <p><u>Practical tip:</u> Courts consider all the facts and circumstances of a case together, and will not look at any point in isolation. Therefore, justifiable reason can vary from case to case, and what comes under ‘justifiable reason’ is really up to the court. As the society is getting more progressive, so are courts.</p>
                    </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>

        <div className="head">Maintenance during Pendency of Divorce</div>
        <Accord title="7. What is maintenance during pendency of divorce?" summary="Divorce proceedings in India on an average take 2-3 years. During this time, the husband and wife usually start living separately. Due to the divorce proceedings, the husband will obviously stop financially supporting his wife. To protect the wife during this period, especially if she has no means of income, she can claim “interim maintenance” i.e. maintenance paid during pendency of divorce." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            8. Which law covers interim maintenance?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p>The laws which provide for interim maintenance are:</p>
                <ol type="a" class="pl-3">
                    <li>Section 24, Hindu Marriage Act(HMA)- This section is gender - neutral, i.e. both wife and husband can ask for interim maintenance from each other.</li>
                    <li>Section 125, CrPC- Only wife can ask for interim maintenance from husband<br/><br/>
                        <p><u>Remember-</u> Interim maintenance is not granted by default (like how every wife is entitled by default to maintenance from the husband). It is only granted if you are unable to financially support yourself during the divorce proceedings.</p>
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
            9. How much interim maintenance can I get?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p> The exact amount of interim maintenance will be decided by the court on a case to case basis. A few factors that courts consider are:</p>
                <ol type="a" class="pl-3">
                    <li>Income of the husband</li>
                    <li>Income of the wife (if she is earning)</li>
                    <li>Financial position of both spouses</li>
                    <li>Facts and circumstances – like, how many minor children, which parent is taking care of the children, etc.</li>
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
            10. How is the interim maintenance paid?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p>Interim maintenance can either be paid as a lump sum (i.e. a one - time payment) or in instalments (like monthly payment). Whether it is to be paid as a lump sum or in instalments depends on what you ask for and what the court decides.</p>
                <p><u>What is better-</u> If your husband has the means to pay you a lump sum amount, this is better, as you don’t have to keep following up for the instalment payments. If your husband does not have the means to pay a lump sum amount (for example- for salaried employees), then you should ask for instalments.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="11. Will interim maintenance cover the cost of divorce proceedings?" summary="Yes, you can claim for covering the cost of your divorce proceedings, like court fees, advocate fees, conveyance to court, etc., under interim maintenance. However, as explained above, courts will consider various factors, and grant interim maintenance only if you are unable to financially support yourself." />
        <Accord title="12. Can my husband claim interim maintenance from me?" summary="Yes, under Section 24, HMA, your husband can also claim maintenance from you, if he is unable to maintain himself, and you are financially stronger than him." />
        <Accord title="13. Where can I file for interim maintenance?" summary="You should file an application for interim maintenance as part of your divorce proceedings. You don’t need to file a separate case for it." />        
        </section>
        <SimilarTopicMarriage/>
        <Tribe/>
    </>
  )
}

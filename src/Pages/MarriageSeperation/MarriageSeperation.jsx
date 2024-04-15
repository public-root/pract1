import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicMarriage from '../../components/Similar_Topic/SimilarTopicMarriage';
import Tribe from '../../components/Tribe/Tribe';

export default function MarriageSeperation() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Hindu Seperation</h1>
                <p>ALL YOU WANT TO KNOW ABOUT DIVORCE UNDER HINDU LAW</p>
            </div>
        </section>
        <section className="accordian">
            <div className="head">ALL YOU WANT TO KNOW ABOUT DIVORCE UNDER JUDICIAL SEPERATION</div>
            <Accord title="1. What is judicial separation?" summary="Judicial separation is when you get a court order permitting you to live separately from your spouse. Under the law, once a couple is married, they are expected to cohabit. Each spouse automatically gets the right to cohabit with the other spouse. Therefore, if you want to formally stop living with your spouse (in case of problems in your marriage), then you can opt for judicial separation." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              2. What is the difference between judicial separation and divorce?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>In judicial separation, you still remain legally married to your spouse. You only start living separately. In a divorce, your marriage itself is put to an end.</p>
                <ul>
                    <li>In a divorce, you are not legally bound as a married couple anymore, but in judicial separation, you continue to remain husband and wife.</li>
                    <li>Divorce can be asked after judicial separation but judicial separation cannot be asked after divorce.</li>
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
              3. When should you choose judicial separation over divorce?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Judicial separation grants a couple the space and time to live separately and resolve their issues. Since the marriage continues to exist, you can let go of the judicial separation at any time and go back to your marriage if you want.</p>
                <p>People usually opt for judicial separation in two situations:</p>
                <ol type="a" class="pl-3">
                    <li>If you feel that there is scope to reconcile your marriage, but you don’t want to live with your spouse. The separation gives both parties space and time to think and resolve the issues.</li>
                    <li>If you don’t want to get a divorce but also don’t want to live with your spouse. For eg- Couples with children often choose to be separated instead of divorced for convenience.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accord title="4. What if I start living separately from my husband without judicial separation?" summary="When a couple gets married, they are expected to live together. If one of them wants to live separately, without the consent of the other, they can do so, but, the other spouse can always file for Restitution of Conjugal Rights" />
            <Accord title="5. Which law covers judicial separation?" summary="The Hindu Marriage Act, Section 10." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             6. How can I file for judicial separation?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ol type="a" class="pl-3">
                    <li>
                        <u> On what grounds-</u> On the same grounds as a contested divorce. See <a href="hindu-divorce.html" class="link-clr">Divorce </a>
                    </li>
                    <li><u>Where-</u> The same District Court where you would file for a divorce. See <a href="hindu-divorce.html" class="link-clr">Divorce</a> </li>
                    <li><u>When-</u> Any time after the marriage. There is no one year waiting period like in divorce.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accord title="7. Can I file for a divorce after judicial separation?" summary="Yes, you can, but only one year after the date when judicial separation has been granted and if you and your husband have not started living together during the separation period. For example, if the court passed the order for judicial separation on 1 st January 2020, then you can file for divorce only after 1 st January 2021, provided you both have not been living together during this period." />
        </section>
        <SimilarTopicMarriage/>
        <Tribe/>
    </>
  )
}

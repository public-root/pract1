import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import marriageimg from '../../assets/marriage-1.png'
import SimilarTopicMarriage from '../../components/Similar_Topic/SimilarTopicMarriage';
import Tribe from '../../components/Tribe/Tribe';

export default function HinduDivorce() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Hindu Divorce</h1>
                <p>ALL YOU WANT TO KNOW ABOUT DIVORCE UNDER HINDU LAW</p>
            </div>
        </section>
        <section className="accordian">
            <div className="head">All You Need To Know About Divorce Under Hindu Law</div>
            <Accord title="1. Which law governs divorce for Hindus?" summary="The Hindu Marriage Act (HMA)." />
            <Accord title="2. Who can file for a divorce under the Hindu Marriage Act?" summary="Anyone who is married under the Hindu Marriage Act. See  Hindu Marriage for who can marry under the Hindu Marriage Act." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              3. What are the types of divorce under the Hindu Marriage Act?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ol type="a" class="pl-3">
                    <li>Contested Divorce (one of the spouses wants a divorce and the other spouse refuses)</li>
                    <li>Divorce by Mutual Consent (both spouses want a divorce)</li>
                    <div class="text-center">
                    <img src={marriageimg} type="image/jpg" class="img-fluid"/>
                    </div>
                    <p><strong>CONTESTED DIVORCE</strong></p>
                    <p>If it is a contested divorce, you have to file it under any of the grounds give below. Unfortunately, there is no provision for divorce when one spouse wants a divorce but none of the grounds below exists (known as no-fault divorce). If only one spouse wants a divorce, it <em>has</em> to be filed under some ground.</p>
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
              4. On what grounds can a Hindu woman divorce her husband?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>A Hindu woman can divorce her husband on <em>any</em> of the following grounds (Section 13, HMA):</p>
                <ol type="a" class="pl-3">
                    <li><strong> <em>Adultery</em>:</strong> When her husband voluntarily had sexual intercourse with any person other than her.</li>
                    <li><strong><em>Cruelty</em>:</strong> When the husband or any of his relatives mentally or physically harass the wife. For more details, see below.</li>
                    <li><strong><em>Desertion</em>:</strong> When the husband leaves his wife. Desertion should be for a continuous period of 2 years immediately before the wife’s petition for divorce. That is, if the husband deserted the wife in January 2020, she can file the petition only after January 2022.</li>
                    <li><strong><em>Mental instability</em>:</strong> When the husband is so mentally unstable that it is impossible and not reasonable to expect the wife to live with him. For example- schizophrenia, psychopathic disorder, etc.</li>
                    <li><strong><em>Physical Diseases</em>:</strong> When the husband is suffering from an STD (sexually transmitted disease) or leprosy.</li>
                    <li><strong><em>Absconding or missing</em>:</strong>When the husband is not heard of being alive for a minimum period of seven years from the people who most likely will have knowledge if the husband had been alive.</li>
                    <li><strong><em>Conversion to another religion</em>:</strong> When the husband converts to another religion and ceases to be a Hindu.</li>
                    <li><strong><em>Abandonment of religion</em>:</strong>When the husband formally declares his abandonment of any kind of religion or order to the world, i.e. the husband becomes a sanyasi.</li>
                    <li><strong><em>No cohabitation</em>:</strong> The husband and wife are not living together for 1 year after the court has passed a decree of separation ( <a href="hindu-separation.html" class="link-clr">Judicial Separation</a>) or restitution of conjugal rights ( <a href="hindu-restitution-of-conjugal-rights.html" class="link-clr">Restitution of Conjugal Rights</a>). For Example: If the court passes a decree in January 2018, the couple has lived separately till January 2019.</li>
                    <li>**<strong><em>Conviction for offence</em>:</strong> When, after marriage, the husband has been convicted as guilty for any of these offences- rape or beastality.</li>
                    <li>**<strong><em>Child marriage</em>:</strong> When the wife was below 15 years of age during the marriage.</li>
                    <li>**<strong><em>Failure to pay maintenance</em>:</strong> When the court has ordered the husband to pay maintenance to his wife, and the husband refuses to do so. For more details on maintenance, see <a href="hindu-maintenance.html" class="link-clr">Maintenance and Alimony</a>.</li>
                </ol>
                <p>Note: The grounds marked with ** are available exclusively to the wife.</p>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accord title="5. On what grounds can a husband divorce his wife under Hindu law?" summary="The husband can file a divorce against his wife on the same grounds as listed above. However, the grounds marked with ** are available only to the wife. These are conviction for an offence, child marriage and failure to pay maintenance." />
        
        </section>
        <SimilarTopicMarriage/>
        <Tribe/>
    </>
  )
}

import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicChild from '../../components/Similar_Topic/SimilarTopicChild';
import Tribe from '../../components/Tribe/Tribe';

export default function MaternityBenefit() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Maternity Benefit</h1>
                <p>ALL YOU NEED TO KNOW ABOUT MATERNITY </p>
                <p>LEAVE AND MATERNITY BENEFITS</p>
            </div>
        </section>
        <section className="accordian">
            <Accord title="1. What are maternity rights?" summary="Maternity rights are the rights given to any woman expecting a child and to new mothers." />
            <Accord title="2. Which law grants women maternity rights in India?" summary="The Maternity Benefit Act, 1961 grants women maternity rights. This Act was amended in 2017." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              3. What maternity rights do women have in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>A pregnant woman/new mother (see who can avail maternity rights below) is entitled to</p>
                <p><strong>The following rights under the Maternity Benefits Act:</strong></p>
                <ol type="a" class="pl-3">
                    <li><u>Paid leave-</u> A pregnant woman has the right to 26 weeks of paid maternity leave. Out of 26 weeks, maximum 8 weeks can be taken before delivery and the remaining can be taken after delivery. For more details, see below. (Section 5, Maternity Benefit Act).</li>
                    <li>Additional paid leave of 1 month if you suffer from any illness arising out of your pregnancy, delivery, or miscarriage (Section 10, Maternity Benefit Act).</li>
                    <li>No physically stressful work at the workplace which can cause harm to the woman or the foetus, such as long hours of standing (Section 5, Maternity Benefit Act).</li>
                    <li>Cannot be dismissed or demoted during her maternity leave (unless she is guilty of gross misconduct). If the employer dismisses her during her leave, he shall pay her the entire maternity benefits, i.e. the salary for the paid maternity leave (Section 12, Maternity Benefit Act).</li>
                    <li><u>Right to a creche-</u> If an establishment has more than 50 employees, it must either set up a creche or have the facility of a creche nearby. The woman is allowed four visits a day to the creche, including her rest time (Section 11A, Maternity Benefit Act).</li>
                    <li>2 Nursing breaks, in addition to regular rest time, until the child completes 15 months (Section 11, Maternity Benefit Act).</li>
                    <li><u>Medical bonus-</u> Any pregnant woman can ask for a medical bonus of thousand rupees if no pre-natal or post-natal care is provided by the employer (Section 8, Maternity Benefit Act).</li>
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
             4. Who can avail maternity rights?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p><strong>You can avail maternity rights if :</strong></p>
                <ol type="a" class="pl-3">
                    <li>You are working in an organization as an employee</li>
                    <li>You are pregnant OR an adopting mother OR a commissioning mother (in case of <a href="" class="link-clr">Surrogacy</a>),</li>
                    <li>Your organization has a minimum of 10 employees (of any gender), and</li>
                    <li>You have worked in the organization for at least 160 days in the period of 12 months before your date of delivery(Section 5).</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Maternity Benefits for Students of Higher Education</div>
        <Accord title="5. Does the Maternity Benefits Act apply to students in higher education?" summary=" The Maternity Benefits Act does not apply to students of higher education (for eg- doctors studying post-graduation), as it is only for ‘employees.’ However, the courts in India have come to the rescue of studying mothers and pregnant women. In one case, the Delhi High Court held that Delhi University’s strict attendance requirement should be relaxed for pregnant candidates and new mothers (Vandana Kandari v University of Delhi)" />
        <div className="head">CLAIMING MATERNITY BENEFITS</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             6. What is the procedure to claim maternity benefit?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>To claim maternity benefits under the Maternity Benefits Act, the woman needs to <u>give a notice in writing</u> to her employer. The notice must state the following details:</p>
                <ul>
                    <li>The period of maternity leave that she wishes to take. This should specify the date from which she will take leave before the delivery (Section 6, Maternity Benefit Act).</li>
                    <li>The maternity benefits that she seeks (from the benefits available to her), such as, medical bonus (Section 6, Maternity Benefit Act).<br/><br/>
                        <p><u>Couldn’t give notice?</u> If the woman has missed giving the notice during her pregnancy, she can give it as soon as possible after the delivery. On giving such notice, she will be entitled to 6 weeks of paid maternity leave from the date of her delivery (Section 6, Maternity Benefit Act).</p>
                    </li>
                </ul>
                <p>Even if you don’t give notice, it does not disentitle you from any of your maternity benefits under the Act.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             7. What can you do if your employer does not grant you maternity benefits?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If your employer refuses to grant you maternity benefits, you can approach the Inspector who is appointed under the Maternity Benefits Act to seek your maternity benefits. The government is required to appoint an Inspector for every area/district to handle disputes under the Maternity Benefits Act. This Inspector is usually a public servant, such as an IAS officer. The Inspector has complete discretion to decide whether the woman is entitled to the maternity benefits which have been denied to her (Section 12, Maternity Benefit Act). </p>
                <p>If there is no Inspector for your district, or if you are not satisfied with the Inspector’s decision, you can always approach the civil court which has jurisdiction over your workplace.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        </section>
        <SimilarTopicChild/>
        <Tribe/>
    </>
  )
}

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicChild from '../../components/Similar_Topic/SimilarTopicChild';
import Tribe from '../../components/Tribe/Tribe';

export default function Abortion() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Abortion</h1>
            </div>
        </section>
        <section className="accordian">
            <Accord  title="1. Is abortion legal in India?" summary="Yes, abortion is legal in India, but only on certain grounds. See below for further details." />
            <Accord  title="2. Which law governs abortion in India?" summary="The Medical Termination of Pregnancy Act, 1971." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              3. What is the procedure to get an abortion in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<ol type="a" class="pl-3">
            		<li>You have to fall under one of the permitted grounds for abortion (explained below)</li>
            		<li>Medical practitioners (either 1 or 2, depending on the week of pregnancy) have to be satisfied that the grounds exist (explained below)</li>
            		<li>Your pregnancy should not exceed 20 weeks (explained below)</li>
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
              4. What are the grounds on which I can get an abortion?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<p>Abortion is permitted in India only on certain grounds, i.e. only if a particular reason exists. If you fall within any of these grounds, you can seek an abortion.</p>
            	<p><strong>For married women (Section 3, MTP Act):</strong></p>
            	<ol type="a" class="pl-3">
            		<li>Failure of a contraceptive device: Married women do not need to give any explanation or reasons for seeking an abortion, you can always say it was a failure of a contraceptive device, and that the pregnancy was unplanned/unwanted.</li>
            		<li>You can also ask for abortion on the grounds given below (for unmarried women), though you don’t need to.</li>
            	</ol>
            	<p><strong>For unmarried women (Section 3, MTP Act):</strong></p>
            	<ol type="a" class="pl-3">
            		<li>Continuation of the pregnancy would cause risk to the life of the pregnant woman – For example, in cases where there are chances that the mother will not survive.</li>
            		<li>Continuation of the pregnancy is likely to cause injury to the woman’s physical or mental health – For example, if any health complications arise. This is a very subjective ground, open to explanation, and will mostly depend on whether your doctor agrees on this or not. Regular medical issues arising out of pregnancy, like diabetes, will not be considered here.</li>
            		<li>There is a substantial risk that if the child is born, it will suffer from mental or physical abnormalities or be seriously handicapped – For example, in cases where the foetus does not develop properly, and there are very few chances it will survive after birth, or it will be so handicapped that it will not have a comfortable life.<br/><br/>
            			<p><u>Remember-</u> Since all the above grounds (except for married women) are related to health, your right to seek abortion mainly depends on whether or not your doctor thinks such grounds exist. Only if the doctor thinks your case falls under any of the above grounds your doctor will agree for carrying out the abortion.</p>
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
              5. How many doctors need to permit my abortion?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<p>An abortion can be done in India only if a registered medical practitioner is satisfied that any of the permitted grounds for the abortion (as explained above) exist. How many registered medical practitioners need to be satisfied depends on the number of weeks of your pregnancy:
            	</p>
            	<ol type="a" class="pl-3">
            		<li><u>Up to 12 weeks:</u> 1 registered medical practitioner</li>
            		<li><u>12-20 weeks:</u> 2 registered medical practitioners
            			<p>Beyond 20 weeks, abortion is not allowed by law.</p>
            		</li>
            	</ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord  title="6. What is the maximum time until which abortion is permitted?" summary="You can get an abortion until up to a maximum of 20 weeks into your pregnancy. Beyond 20 weeks, abortion is not allowed by law. The only case it is permitted is when (on the spot) the doctors have to carry out an emergency abortion to save the mother’s life." />
        <Accord  title="7. Who can carry out an abortion? Who is a registered medical practitioner?" summary="Only a registered medical practitioner can carry out an abortion. A registered medical practitioner is a doctor who is legally permitted to carry out abortions. Basically, a qualified doctor, who is an expert in gynaecology or obstetrics, and whose name is listed in the State Medical Register." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              8. Where can I get an abortion done?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<p>Abortion can only be done in:</p>
            	<ol type="a" class="pl-3">
            		<li>Any government hospital</li>
            		<li>If it is a private hospital or clinic, it needs to have legal permission to carry out abortions</li>
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
             9. Whose consent do I need for an abortion?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<p> <u>Whose consent is needed:</u></p>
            	<ol type="a" class="pl-3">
            		<li>Doctor (registered medical practitioner) – whether you need the consent of one or two depends on the week of your pregnancy (see above)</li>
            		<li>Your own – No abortion can be carried out without the pregnant woman’s consent</li>
            		<li>Legal guardian (if you are a minor, i.e. below 18 years old)</li>
            	</ol>
            	<p><u>Whose consent is not needed:</u></p>
            	<p>Anyone else, including husband, parents, in-laws, any other family members, etc.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="10. Can a married woman get an abortion in India? On what grounds?" summary="Yes, a married woman can get an abortion in India. The easiest grounds on which a married woman to get an abortion is the failure of contraceptive." />
        <Accord title="11. Can an unmarried woman get an abortion in India? On what grounds?" summary="Yes, an unmarried woman can get an abortion in India, however, only on certain grounds. For the details, see above." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             12. Can a minor girl get an abortion in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
            	<p>Yes, a minor girl can get an abortion in India. However, the written consent of her legal guardian is compulsory. She can get an abortion if her case falls under any of the situations in which abortion is permitted.</p>
            	<p><u>Practical tip:</u> Since the girl is a minor, her case will automatically fall under the ground of ‘likely to cause injury to the physical or mental health of the pregnant woman,’ as it is difficult for a minor to raise a child, especially if she is unmarried.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="13. Do I need my husband’s consent to get an abortion?" summary="No, you do not need your husband’s or any other person’s consent to get an abortion. You only need to consent of the doctor." />
        <Accord title="14. Do I need a doctor’s consent to get an abortion?" summary="Yes, a legal abortion can only be carried out on the consent of one/two registered medical practitioners. For more details, see above." />
        </section>
        <SimilarTopicChild/>
        <Tribe/>
    
    </>
  )
}

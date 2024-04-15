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

export default function Surrogacy() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>SUrrogacy</h1>
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
              1. What is surrogacy?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Surrogacy is an alternative method of reproduction where a woman agrees to become pregnant and bear a child for another person. After the child is born, she hands over the child to the person for whom she bore the child.</p>
                <p>The woman who bears the child is called the surrogate mother. The person for who she bears the child is called the commissioning parent.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="2. Is surrogacy legal in India?" summary="Surrogacy is legal in India, but only if the commissioning parent(s) are Indian citizens.  " />
        <Accord title="3. Which law governs surrogacy in India?" summary="Currently, there is no law in India about surrogacy. We only have guidelines issued by the  Ministry of Health. The Surrogacy Bill, 2019 is currently pending before the Parliament, and it has not become law as of March, 2020." />
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              4. What are the types of surrogacy?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>There are four types of surrogacy, as recognised by the Supreme Court of India. These are:</p>
                <ol type="a" class="pl-3">
                    <li><u>Traditional surrogacy-</u> The surrogate mother’s own egg is used, which is fertilised by the sperm of the commissioning father. This type of surrogacy can be used when the commissioning mother is unable to use her egg for reproduction.</li>
                    <li><u>Gestational surrogacy-</u> The egg is not of the surrogate mother- it can either be of the commissioning mother or a third-party donor.</li>
                    <li><u>Altruistic surrogacy-</u> &nbsp;The surrogate mother does not get any payment or money from the surrogacy. She only gets paid for expenses related to the surrogacy like medical expenses, maternity clothing, her food and health expenses, etc.</li>
                    <li><u>Commercial surrogacy-</u> The surrogate mother gets paid for the surrogacy (in addition to payment for her expenses related to surrogacy), just like how one gets paid for providing any service.</li>
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
              5. Is commercial surrogacy permitted in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Yes, so far there is no law which bans commercial surrogacy in India. The Surrogacy Bill, 2019 which is pending before the Parliament, seeks to ban commercial surrogacy in India. However, this Bill has not become law yet.
                </p>
                <p><u>Note:</u> Due to lack of any law on surrogacy, surrogacy falls into a grey area. Therefore, whether commercial surrogacy is permitted is also a grey area, with many varied views. There is no clear-cut view yet, and the above view given by us is our interpretation of this grey area.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              6. Who are the parties involved in surrogacy?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>There are usually 2-3 parties involved in surrogacy. These are:</p>
                <ol type="a" class="pl-3">
                    <li>Commissioning parents, i.e. the parents who want to have a surrogate child (see below for further details).</li>
                    <li>Surrogate mother, i.e. the woman who bears the surrogate child in her womb (see below for further details).</li>
                    <li>Donor, i.e. a third-party (who is not a commissioning parent) who donates his/her sperm/egg. If the commissioning parents are not able to use their own egg or sperm, or in case of single/homosexual parents, they will need a third-party donor (see below for further details).</li>
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
             7. What is the procedure for surrogacy in India?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p><u>Before the surrogacy:</u></p>
                <ol type="a" class="pl-3">
                    <li>The commissioning parents need to identify a clinic or centre which can help them have a surrogate baby.</li>
                    <li>If the commissioning parents are using the egg or sperm of a third-party donor, they need to select a donor. They have the right to know about the characteristics of the donor, like- height, weight, skin colour, educational qualification, profession, family background, any diseases, etc. before accepting the egg or sperm. However, they cannot know the identity of the donor.</li>
                    <li>The commissioning parents have to enter into a legal contract with the surrogate mother. The contract will state the terms and conditions of the surrogacy, the rights of the surrogate mother, etc. The surrogate mother will also agree to give up all her rights over the surrogate child.</li>
                    <li>The commissioning parents have to sign consent forms providing their consent for the surrogacy and all the medical procedures involved in the surrogacy.</li>
                    <p><u>During pregnancy:</u></p>
                    <li>The commissioning parents should take care of all the expenses of the surrogate mother. If it is a commercial surrogacy, they will have to pay the clinic as decided in the contract.</li>
                    <li>Sex selection of the baby is not permitted at any stage of the pregnancy.</li>
                    <li>Divorce during pregnancy- If unfortunately, the commissioning parents get divorced during the surrogate pregnancy, the custody of the child will be decided as per the <a href="../../marriage-and-divorce.html" class="link-clr"> divorce laws in India</a>.</li>
                    <p><u>Upon the birth of the surrogate child::</u></p>
                    <li>If the child is born using the egg and sperm of the commissioning parents, the child will automatically be considered the biological child of the commissioning parents.</li>
                    <li>If the child is born using either egg or sperm from a third-party donor, then the commissioning parents have to formally adopt the child as their own. After the adoption, the child will be considered their biological child.</li>
                    <li>The surrogate child’s birth certificate will have names of the commissioning parents as the parents of the child.</li>
                    <li>A child born through the use of third-party donors shall not have any right to know the identity of the donor until the child turns 18 years old. Once the child turns 18, the child will be provided all the information about the donor, if the child wants.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">SURROGATE MOTHER</div>
        <Accord title="8. Who is a surrogate mother?" summary="The woman who bears the surrogate child in her womb is the surrogate mother." />
        <Accord title="9. Who can be a surrogate mother?" summary="As of March 2020, any woman can be a surrogate mother, provided she is under the age of 45. A woman can be a surrogate mother only thrice in her life." />
        <Accord title="10. Can a relative or known person be the surrogate mother?" summary="A relative, a known person, as well as a person unknown to the couple, may act as a surrogate mother for the couple. In the case of a relative acting as a surrogate, the relative should belong to the same generation as the commissioning mother." />
        <Accord title="11. What rights does the surrogate mother have over the surrogate child?" summary="A surrogate mother does not have any rights over the surrogate child. She is only considered a carrier of the child, and not a parent. In fact, when she enters into a contract for the surrogacy with the commissioning parents, she has to specifically give up all her rights to the child." />
        <div className="head">DONOR</div>
        <Accord title="12. Who can be a third-party donor?" summary="Anyone can be a third-party donor for an egg or sperm, except as given below." />
        <Accord title="13. Can a relative or known person be a donor?" summary="A relative or a known friend of either the wife or the husband cannot be the donor of sperm for surrogacy. There is no such rule about who can be the donor for an egg." />
        <Accord title="14. What rights does the third-party donor have to the surrogate child?" summary="A third-party donor does not have any rights over the surrogate child. At the time of donating his/her sperm/egg, the third-party donor has to sign a contract where the donor agrees to give up all his/her rights to the surrogate child." />
        </section>
        <SimilarTopicChild/>
        <Tribe/>
    </>
  )
}

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Rape.css'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import "../../components/Accordion/Accord.css"
import Similar_Topic from '../../components/Similar_Topic/Similar_Topic'
import Tribe from '../../components/Tribe/Tribe'



export default function Rape() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>All You Need To Know</h1>
                <h1> About Rape Law </h1>
                <h1> In India</h1>
            </div>
        </section>
        <section className="imp-points">
            <div className="imp-border">
                <h1>IMPORTANT POINTS ABOUT RAPE IN A SNAPSHOT!</h1>
                <div className="points">
                    <ol>
                        <li>1. It is not your fault. It is never your fault. The fault lies with the accused. Please don’t ever blame yourself.</li>
                        <li>2. Preserve all evidence. Do not take a bath or wash the clothes. Take them straight for a medical examination so that all evidence can be collected. Remember, if evidence is lost, it makes your case difficult.</li>
                        <li>3. Do not delay in filing a. If you delay, evidence may be lost.</li>
                        <li>4. Go to the hospital first for your medical examination and treatment. You can go to the police after the hospital.</li>
                        <li>5. You do not need to go to the police station personally to file the Police Complaint. Anyone can file it on your behalf (see </li>
                        <li>6. Penetration of the penis into the vagina is not necessary for rape.</li>
                        <li>7. Penetration of the penis into the vagina is not necessary for rape.</li>
                    </ol>
                </div>
            </div>
        </section>
        <section className="accordian">
          <Accord title={"1. Which legal provisions cover rape law in India?"} summary={"The act of rape is defined in Section 375 of the Indian Penal Code. The punishment for rape, and the acts of rape which have higher punishment, are given in Section 376 of the Indian Penal Code."} />
          <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              2. What constitutes rape under Indian law?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Rape means any of the following sexual acts without the woman’s consent (for understanding ‘consent’ see below):</p>
                <ol type="a" class="panel-body-lists">
                    <li>Sexual intercourse- inserting the penis in the vagina/anus/mouth/urethra</li>
                    <li>Oral sex- applying the mouth to the vagina/anus/mouth/urethra</li>
                    <li>Using any other body part (such as finger) to penetrate the vagina/anus/mouth/urethra</li>
                    <li>Forcing the woman to have sexual intercourse or oral sex with any other person</li>
                </ol>
                <p> <u>Important to note:</u></p>
                <p>The definition of ‘vagina’ includes labia majora. This means that complete penetration is not necessary to constitute rape. Any degree of penetration will amount to rape.</p>
            </div>
            </AccordionDetails>
        </Accordion>
          <Accord title={"3. Is penetration necessary to constitute rape?"} summary={"No, penetration is not necessary to constitute rape. Oral sex is also considered rape. Penetration up to the labia majora is also considered rape."} />
          <Accord title={"4. If someone forcefully touches my breasts, buttocks, or other body parts, will it constitute rape?"} summary={"No, it will not be rape, but it will amount to sexual harassment ( molestation under Section 354, Indian Penal Code)."} />
          <Accord title={"5. If someone forces me to have sex/oral sex with another person, will it be rape?"} summary={"Yes, even if someone forces you to do a sexual act with another person, it is considered rape. Both, the person forcing the woman as well as the person committing the sexual act, will be considered guilty of rape."} />
        </section>
        <section className="consent">
            <div className="head">Consent</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              6. What does consent mean in relation to rape?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p class="panel-body-lists"><u> <strong>What is consent?</strong></u></p>
                <p class="panel-body-lists">Consent means a clear expression of willingness to participate in the sexual act, whether by words, gestures, or any other form of verbal or non-verbal communication.</p>
                <p class="panel-body-lists"><strong><u>What is not consent?</u></strong></p>
                <ol type="a" class="panel-body-lists">
                    <li>If you agree to the sexual act out of fear for your safety or the safety of anyone else.</li>
                    <li>If you are intoxicated or under any kind of influence, unknowingly(i.e. if someone drugs/intoxicates you without your knowledge). Date rape comes under this category.</li>
                    <li>If you are under 18 years old, you cannot lawfully give consent. It will be considered statutory rape.</li>
                    <li>If you are unable to communicate your consent.</li>
                    <li>If the woman is of unsound mind (i.e. suffering through some psychological issue which will not allow her to fully understand the implications of the sexual act).</li>
                </ol>
                <p class="panel-body-lists"> <u>Important to Note:</u> Just because you don’t physically resist the act of penetration, does not mean you have consented.</p>
            </div>
            </AccordionDetails>
        </Accordion>
            <Accord title={"7. Does consent have to be necessarily expressed in words?"} summary={" No, consent may be expressed through words, gestures, body language, or any form of verbal or non-verbal communication."} />
            <Accord title={"8. Do I have to say ‘NO’ to show my lack of consent?"} summary={"No, just because you don’t physically resist or put up a fight, does not mean that you have given consent. The law understands that sometimes a woman is forced to submit to a situation, and is not in a position to physically fight."} />
            <Accord title={"9. Do I have to physically resist or put up a fight to show my lack of consent?"} summary={"No, just because you don’t physically resist or put up a fight, does not mean that you have given consent. The law understands that sometimes a woman is forced to submit to a situation, and is not in a position to physically fight."} />
            <Accord title={"10. I consented to sexual activity but changed my mind. Can I withdraw my consent later?"} summary={"You can withdraw your consent at anytime  before or even during the sexual act."} />
            {/* <Accord title={""} summary={""} /> */}
        </section>
        <section className="punishment">
            <div className="head">PUNISHMENT FOR RAPE</div>
            
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              
              11. What is the punishment for rape?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                 <p>The punishment for rape is jail for minimum 10 years and may extend to life imprisonment along with a fine. In extreme cases, the punishment can be death sentence also (Section 376, Indian Penal Code).</p>
                 <u>More Stringent Punishments:</u>
                 <p><br/>Rape committed by the woman’s relative, guardian, teacher, or anyone else in a position of trust or authority over the woman is punished more stringently.</p>
             </div>
            </AccordionDetails>
        </Accordion>
            <Accord title={"12. When is death sentence granted for rape?"} summary={"Death sentence can be granted when a person is convicted for second time under any charge of rape."} />
        </section>
        <Similar_Topic/>
        <Tribe/>
    </>
  )
}

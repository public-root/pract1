import React from 'react'
import './Sexual_Harassment_topic.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Similar_Topic from '../../components/Similar_Topic/Similar_Topic';
import Tribe from '../../components/Tribe/Tribe';

export default function Sexual_Harassment_topic() {
  return (
   <>
   <Navbar/>
    <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Sexual Harassment</h1>
            </div>
    </section>
    <section className="accordian">
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. What constitutes sexual harassment under Indian law?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Sexual harassment means any of the following acts by a man against a woman:</p>
                <ol type="a" class="panel-body-lists">
                    <li> Making unwelcome physical contact.</li>
                    <li> Making unwelcome sexual advances.</li>
                    <li> Making unwelcome sexual gestures.</li>
                    <li> Asking for sexual favours.</li>
                    <li> Showing pornography against the woman’s will.</li>
                    <li> Making sexually coloured comments.</li>
                </ol>
                <p>For examples of sexual harassment, see "What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr"> Sexual Harassment</a>" </p>
            </div>
            </AccordionDetails>
        </Accordion>
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              2. If someone makes unwanted physical contact with me, what can i do?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If a man makes unwanted physical contact which sexual suggestions, it amounts to sexual harassment and is a crime. Such sexual overtures/suggestions should be explicit, i.e. clear.</p>
                <p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment</a>.</p>            
            </div>
            </AccordionDetails>
        </Accordion>
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              3. If someone tries to touch me inappropriately, what can I do?
 
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If a man makes unwanted physical contact with any woman, with sexual suggestions or intent, it amounts to sexual harassment and is a crime.</p>
                <p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment</a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              4. What if someone asks me for sexual favours?
 
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>A man asking a woman for sexual favours, whether in return for something or just by itself, amounts to sexual harassment and is a crime.</p>
                <p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment </a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              5. What if someone cracks sexual jokes which make me uncomfortable?
 
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>If a man makes sexually coloured remarks to a woman, whether as a joke or in any other form, despite knowing that such remarks make her uncomfortable, it amounts to sexual harassment and is a crime.
                </p>
                <p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment</a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
      <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              6. If someone forces me to watch pornography, what can I do?
 
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ul>
                    <p>- If a man forces a woman to watch pornographic videos, photos, or any other pornographic content, it amounts to sexual harassment and is a crime.</p>
                    <p>- Remember, even if you had given consent to watch the pornographic content initially, you can withdraw your consent at any point of time. It will be considered sexual harassment from the point you withdraw your consent.
                        </p><p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment</a>.</p>
                    <p></p>
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
              7. What are examples of sexually coloured comments?
 
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Sexually coloured comments can be of any type and of any intensity. What is important is that there should be a sexual angle to the comment. Below are a few examples of what courts have considered as sexually coloured comment:</p>
                <ol type="a" class="panel-body-lists">
                    <li>Remarks about the victim’s older age, calling the victim sexy, asking the victim to leave the job so that he can “pass good time” with younger girls.</li>
                    <li>Remarks such as calling a female colleague a “heroine” in a sexually suggestive manner</li>
                    <li>A sexual comment by a professor to his student stating she will get good grades if she accepts his “proposal.”
                        <p>Also see What You Should Know About <a href="../sexual-harassment/what-you-should-know-about-sexual-harassment.html" class="link-clr">Sexual Harassment</a>.</p>
                    </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
    </section>
    <Similar_Topic/>
    <Tribe/>
   </>
  )
}

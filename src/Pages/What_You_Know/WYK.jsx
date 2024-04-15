import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './WYK.css'
import hero_img from '../../assets/faq-banner.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Similar_Topic from '../../components/Similar_Topic/Similar_Topic';
import Tribe from '../../components/Tribe/Tribe';

export default function WYK() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>What You Should</h1>
                <h1> Know About </h1>
                <h1> Sexual Harassment</h1>
            </div>
        </section>
        <section className="accordian">
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
                <AccordionSummary
                  expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                 1. What you Should Know About Sexual Harassment?
                </AccordionSummary>
                <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
                <AccordionDetails>
                <div class="summary">
                    <ol class="p-4">
                        <li>Sexual harassment can happen anywhere- whether in a public space, in a workplace or even at home.</li>
                        <li>Sexual harassment need not always be physical. Even non-physical acts like words, gestures, actions, etc. which have a sexual implication can amount to sexual harassment.</li>
                        <li>Anyone can be a sexual harasser (It is not always an stranger in a public place who is a sexual harasser). Sometimes, it can be people whom you don’t expect to do so- like, a colleague at work or an uncle at home.</li>
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
                  2. What constitutes rape under Indian law?
                </AccordionSummary>
                <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
                <AccordionDetails>
                <div class="summary">
                    <p>Sexual harassment is any sexual act by a man (whether spoken words, gestures, or physical actions) that:</p>
                    <ul class="panel-list-style-1">
                        <li>a. Is unwelcome</li>
                        <li>b. You did not ask for</li>
                        <li>c. You did not say it okay to do so</li>
                        <li>d. Makes you uncomfortable</li>
                    </ul>
                    <p>If you checked any of the boxes above, it means the act is an act of sexual harassment.</p>
                </div>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
                <AccordionSummary
                  expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                 3. Sexual harassment that is difficult to identify:
                </AccordionSummary>
                <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
                <AccordionDetails>
                <div class="summary">
                    <p>Sexual harassment has been made so ‘normal’ and accepted in our society, that often women don’t realise that a particular behaviour amounts to sexual harassment. Sexual harassment is easy to identify when it happens in a public place or by an unknown stranger (for example, on a bus or metro or the street). But, in certain situations, sexual harassment is difficult to identify, like:</p>
                    <ol type="a" class=" panel-body-lists">
                        <li>If it happens at home/ your workplace</li>
                        <li>If it is non-physical sexual harassment (like words or gestures) In such situations, women often try to brush it off thinking, ‘He didn’t mean to...</li>
                    </ol>
                    <p>In such situations, women often try to reason out that ‘He didn’t mean to sexually harass me, I am just over-thinking, or I have misunderstood him.’ Stop yourself right there. Just ask yourself- Does it check any of the above boxes? Did it make you feel uncomfortable? If your inner voice says yes, that means it is sexual harassment.</p>
                    <p>Remember, you don’t feel uncomfortable around every man or in every interaction with a man. But if this particular man (remove comma) or this particular…</p>
                </div>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
                <AccordionSummary
                  expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                 4. Examples of Sexual Harassment:
                </AccordionSummary>
                <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
                <AccordionDetails>
                <div class="summary">
                    <p><strong>Physical Harassment:</strong></p>
                    <ol type="a" class="panel-body-lists">
                        <li>Groping you, i.e. touching/squeezing your body parts like breasts, buttocks, thighs, etc. (usually happens in public transport/crowded places).</li>
                        <li>Touching you anywhere on your body, like touching your face, touching your lips, holding your hand, putting his arm around your waist or your shoulder, which makes you uncomfortable.</li>
                        <li>Kissing you or hugging you or rubbing his body against you.</li>
                        <li>Trying to remove any part of your clothing.</li>
                        <li>Trying to put his hands under your clothing, like putting his hands inside your t-shirt/kurta.</li>
                        <li>Using physical force to do any of the above.</li>
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
                 5. Non-physical Harassment (words/gestures):
                </AccordionSummary>
                <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
                <AccordionDetails>
                <div class="summary">
                    <ol type="a" class="pl-3">
                        <li>Whistling at you (usually in the case of eve-teasing on streets).</li>
                        <li>Singing songs with the intent of teasing/troubling you (usually in the case of eve-teasing on streets)</li>
                        <li>Calling you names which have a sexual suggestion like ‘item,’ ‘bomb,’ ‘mirchi,’ ‘pataka,’ ‘sexy,’ ‘maal,’ etc. You will identify these kinds of words instantly when you hear them, especially with the tone in which they are said.</li>
                        <li>Staring at you/staring at your body parts like breasts, buttocks, etc.</li>
                        <li>Showing you pornographic content or sending you pornographic content over whatsapp, social media, email, messages, etc.</li>
                        <li>Telling you adult jokes or cracking adult jokes in your presence, knowing that it will make you uncomfortable. Adult jokes can be shared between close friends who have a comfortable rapport with each other. But if a male person is not a close friend, he should not be sharing such content with you unless you have told him that it is okay.</li>
                        <li>Passing comments about your body or your looks like- ‘you have a beautiful body,’ ‘you have great lips,’ ‘you have a sexy butt,’ ‘I like the shape of your body,’ ‘you look sexy,’ ‘your legs are looking sexy,’ etc. Even sending you messages with such comments (whether through whatsapp, social media, email, etc.) is sexual harassment.</li>
                        <li>Sending you messages over text message/whatsapp/social media/email, etc. about anything related to your body or looks or anything which has a sexual suggestion.</li>
                        <li>Making suggestive hand gestures like cupping of breasts/buttocks, biting of lips, kissing gestures, etc.</li>
                        <li>Making vulgar faces at you.</li>
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

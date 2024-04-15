import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import textimg from '../../assets/property-rights-1.png'
import textimg2 from '../../assets/property-rights-2.png'
import textimg3 from '../../assets/property-rights-5.png'
import SimilarTopicMarriage from '../../components/Similar_Topic/SimilarTopicMarriage';
import SimilarTopicProperty from '../../components/Similar_Topic/SimilarTopicProperty';

export default function HinduInheritance() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Stridhan</h1>
            </div>
        </section>
        <section className="accordian">
            <div className="head">Inheritance Rights of a Woman Under Hindu Law</div>
            <Accord title="1. Does Hindu law permit women to inherit property?" summary="Yes, Hindu law permits women to inherit property and gives them equal rights in inheriting property. Before 2005, Hindu women did not have the right to inherit property. In 2005, the Parliament passed the Hindu Succession Amendment Act, which gave women equal rights to inherit property." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              2. What kind of property can Hindu women inherit?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Hindu women can inherit all types of property:</p>
                <ul class="sexual-harassment-at-workplace-list">
                    <li>Movable property – Like, jewellery, cash, household items (like furniture, appliances, kitchen items), etc.</li>
                    <li>Immovable property – Like, land, apartments, etc.</li>
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
             3. How do Hindu women inherit property?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>There are two ways in which a Hindu woman can inherit property:</p>
                <ol type="a" class="panel-body-lists">
                    <li>If someone leaves you property through a Will (explained below) – called inheritance through Will.</li>
                    <li>If there is no Will, then according to the rules of the Hindu Succession Act (explained below) – called inheritance through succession.</li>
                    <img src={textimg} class="img-fluid" type="image/png"/>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Inheritance Through Will</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
             4. What is a Will?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ul>
                    <li>A Will is a document by which one can decide how to pass on all their property (both movable and immovable) after their death. They can choose who they want to give the property to and how they want to divide their property (if they want to give it to multiple people).</li>
                    <li>A person making a Will can choose to leave their property to whomever they wish - it need not necessarily be to a family member or a legal heir.</li>
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
             5. How can a Hindu woman inherit property through a Will?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p>If someone has left property to you in their will, after that person’s death, you will automatically inherit that property. Usually, there will be an administrator/executor for the will. The administrator/executor will take care of passing on the property according to what is given in the will.
                </p>
                <p><strong>What you need to do:</strong></p>
                <p><u>For movable property</u>:<br/>
                    If it is movable property, you need to simply take physical possession of the movable property.</p>
                <p>In the case of jewellery – make sure to also take the receipts and certificates of authenticity of the jewellery.</p>
                <p><u>For immovable property</u>:<br/>
                    If it is immovable property, what you need to do will depend on whether the property is joint family property or independent property.</p>
                <ol type="a" class="pl-3">
                    <li><u>Joint family property</u>- Joint family property- If you have inherited a share in the joint family property (for eg- there is a joint family house, and you have inherited 1/6th share in it), you cannot clear-cut say that this bedroom or this floor is my share. This is because a joint family property is not physically divided and everyone owns the property together. You just have a share on paper, and you will get that share whenever the property is divided. What to do if you inherit joint family property:
                        <ol type="I" class="pl-5">
                            <li><u>You can let the share remain as it is.</u> You will get your share whenever there is a partition of the house. Or when the joint family sells the house, you will get money equivalent to your share. You can do this if you don’t want to divide the property and if you don’t need the property/money urgently. OR</li>
                            <li><u>You can ask for partition of your share.</u> This means, your share will be carved out from the joint property and given to you. A partition can happen in two ways – you either physically divide the property and carve out your share separately (this can be done by building a wall, making a separate entrance, etc. for your share, depending on the house) or you evaluate the market value of the property and take money equal to your share. The remaining joint-owners of the property will pay you the money in proportion to their share in the property.</li>
                        </ol>
                    </li>
                    <li><u>Independent property</u>- If it is the independent property of the person who made the will (such as, an apartment or land which the person purchased in his/her own name), and not joint family property, then you can directly inherit the independent property without the need for any partition. </li>
                </ol>
                <p class="mt-3 mb-0"><strong>Paperwork for immovable property:</strong></p>
                <ol type="a" class="pl-3">
                    <li>Inheritance through the partition of joint family property:
                        <ol type="I" class="pl-5">
                            <li><u>Partition deed</u>- A partition deed between you and the remaining joint owners. Partition deed will state your share in the property, how it is physically divided, and must have signatures of all the joint owners.</li>
                            <li><u>Mutation proceedings-</u> After the partition deed, you need to get mutation proceedings (explained below).<p></p>
                            </li>
                        </ol>
                    </li>
                    <li>For independent property, you only need mutation proceedings (explained below).<br/><br/>
                        <p><u>Practical tip</u>: The paperwork required may change from state to state because each state government has its own system.</p>
                        <img src={textimg2} class="img-fluid" type="image/png"/>
                    </li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Married Women</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
            6. How can a married woman acquire property?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="panel-body panel-body-adj">
                <p>A married woman can inherit property in the following manner:</p>
                <ul>
                    <li>As a wife, she can inherit from her husband’s property as a Class I heir.</li>
                    <li>As a daughter, she can inherit from her parents’ property as a Class I heir.</li>
                    <li>As a mother –
                        <ul>
                            <li>She can inherit from her son’s property as a Class I heir.</li>
                            <li>She can inherit from her daughter’s property:
                                <ul>
                                    <li>If the daughter is unmarried - She will inherit her daughter’s property along with the daughter’s father (i.e. her husband) as Class III heir, because an unmarried daughter will not have Class I and Class II heirs.</li>
                                    <li>If the daughter is married - She will inherit only if the daughter’s Class I heirs are not alive (see above- Succession of Property of a Hindu Female). This is very rare, as someone or the other from Class I or Class II will be alive.</li>
                                    <img src={textimg3} class="img-fluid" type="image/png"/>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Widow:</div>
        <Accord title="7. What are my inheritance rights as a widow?" summary="The rights of a widow to acquire property are the same as the rights of a married woman to acquire property (explained above)." />
        <div className="head">Separated:</div>
        <Accord title="8. What are my inheritance rights if I am separated from my husband?" summary="If you are separated from your husband (but not divorced), your rights to acquire property are the same as the rights of a married woman to acquire property (explained above)." />
        <Accord title="12. What are my inheritance rights if I am divorced from my husband?" summary="If you are divorced from your husband, you will not be a Class I heir of your husband. However, you can still claim your due share in your husband’s property through alimony." />
        <SimilarTopicProperty/>
        </section>
    </>
  )
}

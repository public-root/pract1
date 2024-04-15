import React from 'react'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Navbar from '../../components/Navbar/Navbar';
import SimilarTopicProperty from '../../components/Similar_Topic/SimilarTopicProperty';
import Tribe from '../../components/Tribe/Tribe';

export default function Mutation() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Mutation</h1>
                <h1>Proceedings</h1>
            </div>
        </section>
        <section className="accordian">
            <div className="head">Mutation</div>
            <Accord title="1. What are mutation proceedings?" summary="Mutation proceedings mean adding your name as the owner/changing the name from the previous owner to your name. You have to do mutation proceedings to officially put your name on government records as the owner of the property. Otherwise, you only have the right on paper but your name is not there on records." />
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            > 
              2. How do I do mutation proceedings?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>To do mutation proceedings, you have to:</p>
                <ol type="a" class="pl-3">
                    <li>Go to the Registrar of the area where the property is located. You can check which registrar’s office to go to online based on the area.</li>
                    <li>Submit the required documents. The documents required vary from state to state. However, you will definitely need these standard documents:
                        <ol type="I" calss="pl-5 ml-3">
                            <li>Will (if you inherit through Will)</li>
                            <li>Partition deed (if you inherit a share in a joint family property through partition)</li>
                            <li>Legal heir certificate (if you inherit joint family property through succession)</li>
                        </ol>
                    </li>
                    <li>You may have to fill some forms and sign them with witnesses. This will vary from state to state.</li>
                    <li>You will have to pay some fees for the mutation. This will vary from state to state.</li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
        <Accord title="3. Will I lose ownership if I don’t do mutation proceedings?" summary="No, you will not lose ownership. Mutation proceedings are only a government record of who is the owner, for payment of property tax and electricity and water connection. They do not grant ownership. Your ownership automatically comes from your inheritance of property. However, mutation proceedings are important to secure your ownership and make sure no one else can claim your property." />
        </section>
        <SimilarTopicProperty/>
        <Tribe/>
    </>
  )
}

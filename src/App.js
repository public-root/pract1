import React from 'react'
import Home from './Pages/Home/Home'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import Rape from './Pages/Rape/Rape'
import Sexual_Harassment from './Pages/Sexual_Harassment/Sexual_Harassment'
import Topics from './Pages/Topics/Topics';
import WYK from './Pages/What_You_Know/WYK';
import Sexual_Harassment_topic from './Pages/Sexual_Harassment_topic/Sexual_Harassment_topic';
import Molestation from './Pages/Molestation/Molestation';
import Stalking from './Pages/Stalking/Stalking';
import PoliceMain from './Pages/PoliceMain/PoliceMain';
import PoliceComplaint from './Pages/PoliceComplaint/PoliceComplaint';
import ZeroFir from './Pages/ZeroFir/ZeroFir';
import FIR from './Pages/FIR/FIR';
import CongnizableOffence from './Pages/CongnizableOffence/CongnizableOffence';
import VoilenceAtHome from './Pages/VoilenceAtHome/VoilenceAtHome';
import DomesticVoilence from './Pages/DomesticVoilence/DomesticVoilence';
import Dowry from './Pages/Dowry/Dowry';
import Cruelty from './Pages/Cruelty/Cruelty';
import ActionOnVoilence from './Pages/ActionOnVoilence/ActionOnVoilence';
import MarriageAndDevorce from './Pages/MarriageAndDevorce/MarriageAndDevorce';
import HinduMarriage from './Pages/HinduMarriage/HinduMarriage';
import HinduDivorce from './Pages/HinduDivorce/HinduDivorce';
import MarriageSeperation from './Pages/MarriageSeperation/MarriageSeperation';
import HinduMaintanence from './Pages/HinduMaintanence/HinduMaintanence';
import PropertyRights from './Pages/PropertyRights/PropertyRights';
import Stridhan from './Pages/Stridhan/Stridhan';
import HinduInheritance from './Pages/HinduInheritance/HinduInheritance';
import Mutation from './Pages/Mutation/Mutation';
import ChildRelated from './Pages/ChildRelated/ChildRelated';
import MaternityBenefit from './Pages/MaternityBenefit/MaternityBenefit';
import Surrogacy from './Pages/Surrogacy/Surrogacy';
import Abortion from './Pages/Abortion/Abortion';
import LegalServices from './Pages/LegalServices/LegalServices';
import About from './Pages/About/About';


export default function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <>
      <ReactLenis root>
        <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='rape' element={<Rape/>}/>
            <Route path='sexual-harassment' element={<Sexual_Harassment/>}/>
            <Route path='topics' element={<Topics/>}/>
            <Route path='what-you-should-know-about-sexual-harassment' element={<WYK/>}/>
            <Route path='sexual-harassment-topic' element={<Sexual_Harassment_topic/>}/>
            <Route path='molestation' element={<Molestation/>}/>
            <Route path='stalking' element={<Stalking/>}/>
            <Route path='police-main' element={<PoliceMain/>}/>
            <Route path='police-complaint' element={<PoliceComplaint/>}/>
            <Route path='zero-fir' element={<ZeroFir/>}/>
            <Route path='fir' element={<FIR/>}/>
            <Route path='list-of-cognizable-offence' element={<CongnizableOffence/>}/>
            <Route path='voilence-at-home' element={<VoilenceAtHome/>}/>
            <Route path='domestic-voilence' element={<DomesticVoilence/>}/>
            <Route path='dowry-harrsment' element={<Dowry/>}/>
            <Route path='cruelty' element={<Cruelty/>}/>
            <Route path='taking-action-against-voilence-at-home' element={<ActionOnVoilence/>}/>
            <Route path='marriage-and-divorce' element={<MarriageAndDevorce/>}/>
            <Route path='hindu-marriage' element={<HinduMarriage/>}/>
            <Route path='hindu-divorce' element={<HinduDivorce/>}/>
            <Route path='hindu-seperation' element={<MarriageSeperation/>}/>
            <Route path='hindu-maintenence' element={<HinduMaintanence/>}/>
            <Route path='property-rights' element={<PropertyRights/>}/>
            <Route path='stridhan' element={<Stridhan/>}/>
            <Route path='hindu-inhertance' element={<HinduInheritance/>}/>
            <Route path='mutation' element={<Mutation/>}/>
            <Route path='child-related' element={<ChildRelated/>}/>
            <Route path='maternity-benefit' element={<MaternityBenefit/>}/>
            <Route path='surrogacy' element={<Surrogacy/>}/>
            <Route path='abortion' element={<Abortion/>}/>
            <Route path='legal-services' element={<LegalServices/>}/>
            <Route path='about' element={<About/>}/>
           

          </Route>
        </Routes>
        </Router>
      </ReactLenis>
    </>
  )
}


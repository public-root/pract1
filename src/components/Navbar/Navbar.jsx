import React from 'react'
import main_logo from '../../assets/main-logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
   <>
   <nav className='nav-main'>
	<div>
		<a href="/"><img className='nav-logo' src={main_logo} alt="img" /></a>
	</div>
	<ul className='nav-list'>
		<li className='nav-list-1'><a href="/">HOME</a></li>
		<li className='nav-list-2' ><a href="/about">ABOUT US</a></li>
		<li className='nav-list-3' ><a href="/topics">KNOW YOUR RIGHTS</a>
		<div className="submenu">
			<div className="inner-submenu">
				<div className="nav-list-sh dropdown">
					<label><a className='heading' href="/sexual-harassment">SEXUAL HARRASEMENT</a></label>
					<ul>
						<li><a href="/rape">Rape</a></li>
						<li><a href="/what-you-should-know-about-sexual-harassment">What You Should Know About Sexual Harrasement</a></li>
						<li><a href="/sexual-harassment-topic">Sexual Harrasement</a></li>
						<li><a href="/molestation">Molestation</a></li>
						<li><a href="/stalking">Stalking</a></li>
					</ul>
				</div>
				<div className="nav-list-police dropdown">
					<label htmlFor=""><a className='heading' href="/police-main">POLICE</a></label>
					<ul>
						<li><a href="/police-complaint">Police Complaint</a></li>
						<li><a href="/zero-fir">Zero FIR</a></li>
						<li><a href="/fir">FIR</a></li>
						<li><a href="/list-of-cognizable-offence">List of Congnizable Offences</a></li>
					</ul>
				</div>
				<div className="nav-list-vat dropdown">
					<label htmlFor=""><a className='heading' href="/voilence-at-home">VIOLENCE AT HOME</a></label>
					<ul>
						<li><a href="/domestic-voilence">Domestic Violence</a></li>
						<li><a href="/dowry-harrsment">Dowry</a></li>
						<li><a href="/cruelty">Cruelty</a></li>
						<li><a href="/taking-action-against-voilence-at-home">Taking Action Against Violence At Home</a></li>
					</ul>
				</div>
				<div className="nav-list-mad dropdown">
					<label htmlFor=""><a className='heading' href="/marriage-and-divorce">MARRIAGE AND DIVORCE</a></label>
					<ul>
						<li><a href="/hindu-marriage">Hindu Marriage</a></li>
						<li><a href="/hindu-divorce">Hindu Divorce</a></li>
						<li><a href="/hindu-seperation">Hindu Seperation</a></li>
						<li><a href="/hindu-maintenence">Hindu Maintanence</a></li>
					</ul>
				</div>
				<div className="nav-list-pr dropdown">
					<label htmlFor=""><a className='heading' href="/property-rights">PROPERTY RIGHTS</a></label>
					<ul>
						<li><a href="/stridhan">Stridhan</a></li>
						<li><a href="/hindu-inhertance">Hindu Inheritance</a></li>
						<li><a href="/mutation">Mutation</a></li>
					</ul>
				</div>
				<div className="nav-list-cr dropdown">
					<label htmlFor=""><a className='heading' href="/child-related">CHILD-RELATED</a></label>
					<ul>
						<li><a href="/maternity-benefit">Maternity Benefit</a></li>
						<li><a href="/surrogacy">Surrogacy</a></li>
						<li><a href="/abortion">Abortion</a></li>
					</ul>
				</div>
			</div>
		</div>
		</li>
		<li className='nav-list-4' ><a href="/legal-services">LEGAL SUPPORT</a></li>
		<li className='nav-list-5' ><a href="/">JOIN US</a></li>
		<li className='nav-list-6' ><a href="/">PINK LEGAL TALK</a></li>
	</ul>
   </nav>
   </>
  )
}

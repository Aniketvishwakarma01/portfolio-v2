import Link from 'next/link'
import Marquee from "react-fast-marquee";
import { FaJava } from 'react-icons/fa';

export default function Coporation2() {
	return (
		<>

			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className="p-lg-8 p-md-6 p-3">
										<div className="d-flex align-items-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Collaboration </span>
										</div>
										<h3 className="fw-medium">
											Worked with <span className="text-300">teams across 2+ projects <br /></span> building real-world  <span className="text-300"> Java & Next.js solutions_ </span>
										</h3>
										<div className="my-5 border border-1 rounded-2 p-3">
											{/* Carausel Scroll */}
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												
												<ul className="carouselTicker__list m-0">
													<li className="carouselTicker__item" title="Agile">
      													<h6 style={{ color: "#5382a1" }}>Agile</h6>
    												</li>

													<li className="carouselTicker__item" title="Scrum">
      													<h6 style={{ color: "#5382a1" }}>Scrum</h6>
    												</li>
													<li className="carouselTicker__item" title="Collaboration">
     													<h6 style={{ color: "#5382a1" }}>Collaboration</h6>
    												</li>
													<li className="carouselTicker__item" title="Version Control">
      													<h6 style={{ color: "#5382a1" }}>Version Control (Git)</h6>
    												</li>
													<li className="carouselTicker__item" title="Code Review">
     													<h6 style={{ color: "#5382a1" }}>Code Review</h6>
    												</li>
												</ul>
											</Marquee>
											<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
												<ul className="carouselTicker__list m-0">
													<li className="carouselTicker__item" title="Eclipse IDE">
     													<h6 style={{ color: "#5382a1" }}>Eclipse</h6>
    												</li>
													<li className="carouselTicker__item" title="VSCode">
      													<h6 style={{ color: "#5382a1" }}>VSCode</h6>
    												</li>
													<li className="carouselTicker__item" title="Spring Tool Suite">
      													<h6 style={{ color: "#5382a1" }}>SpringToolSuit</h6>
													</li>
													<li className="carouselTicker__item" title="GitHub">
      													<h6 style={{ color: "#5382a1" }}>GitHub</h6>
    												</li>
													<li className="carouselTicker__item" title="Postman"> 
      													<h6 style={{ color: "#5382a1" }}>Postman</h6>
    												</li>
												</ul>
											</Marquee>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-center gap-3">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="https://ui-avatars.com/api/?name=Aniket+V&background=0D8ABC&color=fff" alt="zelio" />
															<svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 5 6" fill="none">
																<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2">
												<Link href="skype:live:.cid.61722284b046618e?chat">
													<i className="ri-skype-fill" />
													<span className="text-300">[skype] <span className="text-secondary-2">Anni.dev</span></span>
												</Link>
												<Link href="tel:+919876543210">
													<i className="ri-phone-fill" />
													<span className="text-300">[phone] <span className="text-secondary-2">+91-9369662871</span></span>
												</Link>
												<Link href="mailto:sharmaaniket396@gmail.com">
													<i className="ri-mail-fill" />
													<span className="text-300">[email] <span className="text-secondary-2">sharmaaniket396@gmail.com</span></span>
												</Link>
											</div>
										</div>
									</div>
									<div className="position-absolute d-none d-md-block decorate">
										<div className="rotateme">
											<div className="circle-1-1" />
											<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
												<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
											<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
												<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Git Journaling </span>
								</div>
								<div className="h-100 position-relative">
									<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">25 May:</p>
												 <span className="text-dark">Improved product filtering logic - Next.js shop page</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">14 May:</p>
												<span className="text-dark">Integrated dynamic category-brand relationships</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">10 May:</p>
												<span className="text-dark">Built reusable filter components - FilterBrands & FilterSeasons</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">5 May:</p>
												<span className="text-dark">Created responsive newsletter popup in Next.js</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">15 Apr:</p>
												<span className="text-dark">Launched WordAudit text utility app using React</span>
											</div>
										</li>
									</ul>
									<div className="line-left position-absolute border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}

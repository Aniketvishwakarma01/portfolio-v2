import Link from 'next/link'
import Marquee from 'react-fast-marquee'


export default function Skills2() {
	return (
		<>

			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Projects </span>
									</div>
									<h3>My Skills</h3>
								</div>
								<div className="container mt-8">
									<div className="row">
										<div className="col-lg-6">
											<div className="row">
												<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
														<ul className="carouselTicker__list m-0">
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/html5.png" alt="brand" />
																</Link>
																<span className="tool-tip">HTML</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/css3.jpg" alt="brand" />
																</Link>
																<span className="tool-tip">Css</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/javascript.png" alt="brand" />
																</Link>
																<span className="tool-tip">JavaScript</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/java.png" alt="brand" />
																</Link>
																<span className="tool-tip">Java</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/spring.png" alt="brand" />
																</Link>
																<span className="tool-tip">Spring</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/Springboot.png" alt="brand" />
																</Link>
																<span className="tool-tip">Spring Boot</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/mysql.png" alt="brand" />
																</Link>
																<span className="tool-tip">MySql</span>
															</li>
															
															
														</ul>
													</Marquee>
												</div>
												<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
														<ul className="carouselTicker__list m-0 ">
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/bootstrap.png" alt="brand" />
																</Link>
																<span className="tool-tip">Bootstrap</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-5.svg" alt="brand" />
																</Link>
																<span className="tool-tip">Tailwind</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
																</Link>
																<span className="tool-tip">NextJS</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-6.svg" alt="brand" />
																</Link>
																<span className="tool-tip">React</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/vs code.png" alt="brand" />
																</Link>
																<span className="tool-tip">Vs Code</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/eclipse.svg" height={50} width={50} alt="brand" />
																</Link>
																<span className="tool-tip">Eclipse</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/postman.png" alt="brand" />
																</Link>
																<span className="tool-tip">Postman</span>
															</li>
															
														</ul>
													</Marquee>
												</div>
											</div>
										</div>
										<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
											<div className="row">
												<div className="col-md-10 mx-auto">
													<div className="h-100 position-relative">
														<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Front-End:</p>
																	<span className="text-300">HTML, CSS, JavaScript, React, Next.js</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Back-End:</p>
																	<span className="text-300">Java, Spring, SpringBoot</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Databases:</p>
																	<span className="text-300">MySQL, Hibernate</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Tools &amp; Platforms:</p>
																	<span className="text-300">Git, Vs Code, Eclipse</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Others:</p>
																	<span className="text-300">RESTful APIs, Agile Methodologies</span>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
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
			</section>

		</>
	)
}

import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Expericence </span>
								</div>
								<h3>
									+2
									<span className="text-300">years of </span>
									passion
									<span className="text-300 p-2">
										for <br />
										programming techniques
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/MagicEdTech.png" width={70} height={60} alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Magic EdTech</h5>
														<span className="text-300">Apr 2025 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/Jspider.png" width={70} height={30} alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">JSpiders</h5>
														<span className="text-300">Jul 2024 - Apr 2025</span>
													</div>
												</div>
											</Link>
											
											
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">DM Trainee</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Led improvements in web app performance and <span className="text-secondary-2">user experience</span> for millions of users.</li>
											<li className="text-dark mb-3">Enhanced search features using <span className="text-secondary-2">data-driven techniques</span>.</li>
											<li className="text-dark mb-3">Collaborated with teams to deliver <span className="text-secondary-2">seamless feature integration</span>.</li>
											<li className="text-dark mb-3">Assisted in content creation and <span className="text-secondary-2">digital media campaigns</span>.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">HTML5</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">CSS3</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">JavaScript</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">BootStrap</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">SEO Basics</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

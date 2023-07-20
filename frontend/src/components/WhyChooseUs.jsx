import pic1 from "../images/whychooseus/1.jpg"
import pic2 from "../images/whychooseus/2.jpg"
import pic3 from "../images/whychooseus/3.jpg"
import pic4 from "../images/whychooseus/4.jpg"
import ImageMotion from "../pages/ImageMotion"




const WhyChooseUs = () => {
	return (
		<>
			<ImageMotion />


			<header className=' d-flex justify-content-center align-items-center flex-column about-head-title'>
				Why Choose Us

			</header>





			<div className="container ">
				<div className="timeline ">
					<div className="timeline-row ">

						<div className="timeline-content ">
							<i className="icon-attachment"></i>
							<h4>Wide Range of Choices!</h4>

							<p>Our import-export app offers a vast selection of fruits and vegetables from the United States, ensuring you have access to a diverse range of high-quality produce. </p>

							<div className="thumbs">
								<img className="img-fluid " src={pic1} alt="Maxwell Admin" />

							</div>

						</div>
					</div>

					<div className="timeline-row">

						<div className="timeline-content">
							<i className="icon-code"></i>
							<h4>Reliable and Trusted Suppliers!</h4>
							<p>
								We have established strong partnerships with reputable suppliers across the United States who adhere to strict quality control measures
							</p>
							<div className="thumbs">
								<div className="thumbs">
									<img className="img-fluid " src={pic2} alt="Maxwell Admin" />

								</div>
							</div>

						</div>
					</div>

					<div className="timeline-row">


						<div className="timeline-content">
							<i className="icon-turned_in_not"></i>
							<h4>Seamless Trade Experience!</h4>
							<p>Our import-export app is designed to streamline the trade process, making it efficient and hassle-free for both buyers and sellers. </p>
							<div className="thumbs">
								<div className="thumbs">
									<img className="img-fluid " src={pic3} alt="Maxwell Admin" />

								</div>
							</div>
						</div>
					</div>

					<div className="timeline-row">

						<div className="timeline-content">
							<i className="icon-directions"></i>
							<h4>Customized Solutions</h4>
							<p>We understand that every importer and exporter has unique requirements and preferences. Our app offers customizable solutions to cater to your specific needs. Whether you're looking for specific packaging options, personalized shipping arrangements, or tailored pricing plans, our platform can accommodate your requests.</p>
							<div className="thumbs">
								<div className="thumbs">
									<img className="img-fluid " src={pic4} alt="Maxwell Admin" />

								</div>
							</div>

						</div>
					</div>





				</div>
			</div>

















		</>
	)
}

export default WhyChooseUs

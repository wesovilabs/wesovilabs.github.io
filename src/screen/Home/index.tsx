import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import './styles.css';


function Home() {
    return (
        <div className="App">
            <Hero />
            <main id="main">
                <Features key="features" />
                <AboutUs key="aboutUs" />
                <WhyWesoviLabs key="whyWesoviLabs" />
                <Contact key="contact" />
            </main>
            <Footer/>
        </div>
    );
}

// Hero 

const hero = {
    title: "Welcome to ",
    companyName: "Wesovi Labs",
    slogan: 'Where Innovation Meets Execution: Transforming Visions into Software Reality.',
}

const Hero = () => <section id="hero-animated" className="hero-animated d-flex align-items-center">
    <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
        <img src={process.env.PUBLIC_URL + '/assets/img/hero-carousel-3.svg'} alt="" className="img-fluid animated" />
        <h2>{hero.title}<span>{hero.companyName}</span></h2>
        <p>{hero.slogan}</p>
    </div>
</section>


// Features

const featuresData = [
    {
        icon: 'bi-list-check',
        title: 'Continuous Improvement',
        description: 'Committing to ongoing updates and improvements to enhance software functionality and address emerging challenges.'
    },
    {
        icon: 'bi-calendar4-week',
        title: 'Agile Development',
        description: 'Embracing agile methodologies to respond quickly to changes in requirements and market demands.'
    },
    {
        icon: 'bi-shield-fill-plus',
        title: 'Reliability',
        description: 'Delivering software solutions that are stable, dependable, and perform consistently.'
    },
    {
        icon: 'bi-lightbulb',
        title: 'Innovation',
        description: 'Constantly striving to introduce new and cutting-edge solutions to stay ahead of the technological curve.'
    }
]

const Feature = (props: { icon: string, title: string, description: string, delay: number }) => {
    const iconClassName = `bi ${props.icon} icon`
    return <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={props.delay + ""}>
        <div className="service-item position-relative">
            <div className="icon"><i className={iconClassName}></i></div>
            <h4><a href="" className="stretched-link">{props.title}</a></h4>
            <p>{props.description}</p>
        </div>
    </div>

}

const Features = () => {

    let delay = 0;
    const items = featuresData.map((data) => {
        delay += 200;
        return <Feature {...data} delay={delay} />
    })

    return <section id="featured-services" className="featured-services">
        <div className="container">
            <div className="row gy-4">
                {items}
            </div>
        </div>
    </section>

}

// About us


const aboutUsData = [
    {
        title: "Our story",
        description: "Founded with a passion for innovation and a commitment to excellence, Wesovi Labs has evolved to become a trusted strategic partner for businesses of all sizes. From our humble beginnings, we have grown and adapted to the changing needs of the business world, establishing a strong reputation based on tangible results."
    },
    {
        title: "Our Mission",
        description: "At Wesovi Labs, our mission is to drive the success of our clients through state-of-the-art technological solutions. We strive to be pioneers in adopting the latest trends in software development, cloud infrastructures, and process automation. We are constantly seeking new ways to overcome technological challenges and deliver exceptional value to our clients."
    },
    {
        title: "Our team",
        description: "What sets us apart at Wesovi Labs is our diverse and highly skilled team. We have professionals with extensive experience in a variety of sectors, enabling us to understand the unique complexities of each industry. Our team is committed to excellence, creativity, and collaboration, working together to push boundaries and deliver world-class solutions."
    },
    {
        title: "Our experience",
        description: "With deep expertise in various fields of development, cloud infrastructures, and process automation, we have been involved in transformative projects that have taken our clients to the next level. Our portfolio of successes is a testament to our unwavering commitment to quality and innovation."
    },
];


const aboutUsEntry = (props: { title: string, description: string }) => {
    return <div className="item">
        <div className="d-flex mt-4">

            <h4>{props.title}</h4>
        </div>
        <p style={{ textAlign: 'left' }}>{props.description}</p>
    </div>
}

const AboutUs = () => {

    const sections = aboutUsData.map((section) => {
        return aboutUsEntry({ ...section })
    });

    return <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>About Us</h2>
                <p>At Wesovi Labs, we pioneer innovation, ensuring the success of your business through cutting-edge software solutions. Our commitment to quality guarantees transformative results, as we seamlessly integrate creativity and reliability to propel your business into the future.</p>
            </div>
            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-5">
                    <div className="about-img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/aboutus.jpg'} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    {sections}
                </div>
            </div>
        </div>
    </section>
}


// Why Wesovi Labs

const reasonsToChooseWesoviLabs = [
    {
        header: "Client-centric",
        title: "Client-Centric Approach",
        description:
            "At Wesovi Labs, our clients are at the heart of everything we do. We prioritize your needs, goals, and satisfaction. Our client-centric approach ensures that we tailor our solutions to meet your specific requirements, fostering long-term partnerships built on trust and collaboration.",
        highlights: [
            "We prioritize your needs, goals, and satisfaction as the cornerstone of our service.",
            "We believe in delivering bespoke services that align perfectly with your business objectives.",
            "Through a client-centric mindset, we build relationships based on trust and collaboration, ensuring mutual success."
        ],
        image: '/assets/img/client.png'
    },
    {
        header: "Strategic",
        title: "Strategic Insight",
        description:
            "With a team of seasoned professionals, we bring strategic insight to the table. We go beyond mere development, providing valuable perspectives and recommendations to help you make informed decisions that align with your business objectives and growth strategies.",
        highlights: [
            "Our experts bring extensive experience and expertise to the table, ensuring a wealth of knowledge in strategic decision-making.",
            "Wesovi Labs offers comprehensive services that include valuable perspectives and recommendations, enriching your decision-making process.",
            "Our goal is to help you make informed decisions that align with your business objectives.",
        ],
        image: '/assets/img/strategy.png'
    },
    {
        header: "Technology",
        title: "Cutting-Edge Technology",
        description:
            "Stay ahead in the rapidly evolving tech landscape with Wesovi Labs. We are committed to staying at the forefront of technology trends, incorporating the latest tools and methodologies into our solutions. This dedication ensures that your projects benefit from the most advanced and effective approaches.",
        highlights: [
            "Wesovi Labs is dedicated to staying ahead in the rapidly evolving tech landscape.",
            "By leveraging cutting-edge technologies, Wesovi Labs ensures that your projects benefit from state-of-the-art and effective approaches.",
            "Wesovi Labs follows best practices in the industry.",
        ],
        image: '/assets/img/technology.jpg'
    },
    {
        header: "Security",
        title: "Security and Compliance",
        description:
            "Your data and information security are paramount. Wesovi Labs takes a proactive approach to security, implementing robust measures to safeguard your assets. We adhere to industry standards and compliance requirements, providing you with peace of mind in an increasingly complex digital landscape.",
        highlights: [
            "At Wesovi Labs, your data and information security are our top priority.",
            "Our team anticipates potential risks and implements preemptive measures to ensure the security of your data, adopting a proactive stance in an ever-evolving digital landscape.",
            "We strictly adhere to industry standards and compliance requirements.",
        ],
        image: '/assets/img/compliance.jpg',
    },
    {
        header: "Communication",
        title: "Transparent Communication",
        description:
            "Open and transparent communication is the cornerstone of successful collaboration. Wesovi Labs keeps you informed at every stage of the project, providing regular updates, milestones, and insights. We believe in building strong communication channels to enhance understanding and foster a collaborative environment.",
        highlights: [
            "We prioritize clear and honest communication to build a foundation of trust and understanding with our clients.",
            "Throughout every stage of the project, Wesovi Labs keeps you informed.",
            "We believe in building strong communication channels.",
        ],
        image: '/assets/img/communication.jpg'
    },
    {
        header: "Growth",
        title: "Scalability for Growth",
        description:
            "Prepare your business for the future with scalable solutions from Wesovi Labs. Our designs and architectures are built with scalability in mind, allowing your systems to grow seamlessly as your business expands. Whether you're a startup or an established enterprise, our solutions evolve with you.",
        highlights: [
            "Our scalable solutions are designed to accommodate the growth and evolving needs of your business, ensuring that you stay ahead in a dynamic market.",
            "Our designs and architectures are meticulously crafted with scalability in mind.",
            "Whether you're a startup or an established enterprise, Wesovi Labs has solutions that evolve with you."
        ],
        image: '/assets/img/growth.jpeg'
    },
    {
        header: "Support",
        title: "Dedicated Support",
        description:
            "Our commitment to your success goes beyond project delivery. Wesovi Labs offers ongoing support and maintenance services to ensure the continued optimal performance of your solutions. Our dedicated support team is ready to assist you with any challenges or enhancements you may need.",
        highlights: [
            "We take a proactive approach to identify and address any challenges, and we are ready to assist with enhancements to keep your solutions up-to-date and effective.",
            "Our experienced support professionals are ready to respond to any issues promptly, providing the assistance you need for a seamless and efficient operation of your solutions.",
            "Our dedication extends to providing ongoing support, ensuring that your solutions continue to perform optimally throughout their lifecycle."
        ],
        image: '/assets/img/support.png'
    },
];


const WhyContent = (props: { index: number, title: string, description: string, highlights: string[], image?: string }) => {

    const highlights = props.highlights.map((h) => <li><i className="bi bi-check-circle-fill"></i>{h}</li>)
    let imageClassName = "col-lg-3 order-1 text-center order-lg-2"
    return <div className="tab-pane show active mt-5" >
        <div className="row gy-4">
            <div className={imageClassName} data-aos="fade-up" data-aos-delay="200">
                <img src={process.env.PUBLIC_URL + (props.image || '/assets/img/features-1.svg')} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-9 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <h3>{props.title}</h3>
                <p className="fst-italic">
                    {props.description}
                </p>
                <ul>
                    {highlights}
                </ul>
            </div>
        </div>
    </div>
}


const WhyWesoviLabs = () => {
    let index = 0;
    const contents = reasonsToChooseWesoviLabs.map((reason) => {
        index += 1
        return WhyContent({ index, ...reason })
    })

    return <section id="features" className="features">
        <div className="section-header">
            <h2>Why Wesovi Labs?</h2>
        </div>
        <div className="container" data-aos="fade-up">
            <div className="tab-content">
                {contents}
            </div>
        </div>
    </section>
}

// Contact

type ContactInputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

const Contact = () => {

    const form = useForm<ContactInputs>();
    const { register } = form;

    const [isSent, setSent] = useState<boolean>(false);

    const onSubmit = () => {
        setSent(true);
    }


    return <section id="contact" className="contact">
        <div className="container">

            <div className="section-header">
                <h2>Contact Us</h2>
                <p>Have questions, ideas, or ready to embark on a transformative journey with Wesovi Labs? We're here to help! Our team is dedicated to providing personalized solutions tailored to your unique needs. Whether you're looking for innovative software development, strategic insights, or ongoing support, we're just a message away.</p>
            </div>

        </div>

        <div className="container">

            <div className="row gy-5 gx-lg-5">

                <div className="col-lg-4">

                    <div className="info">
                        <h3>Get in touch</h3>
                        <p>Let's start a conversation and explore how Wesovi Labs can contribute to the success of your business. Reach out to us today, and let's turn your vision into reality.</p>
                        <div className="info-item d-flex">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h4>Email:</h4>
                                <p>hello@wesovilabs.com</p>
                            </div>
                        </div>

                        <div className="info-item d-flex">
                            <i className="bi bi-phone flex-shrink-0"></i>
                            <div>
                                <h4>Call:</h4>
                                <p>+34 682 798 982</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-8">
                    <FormProvider {...form} >
                        <form onSubmitCapture={onSubmit} name="gform" id="gform" encType='text/plain' action="https://docs.google.com/forms/d/e/1FAIpQLScHqDEhxHF-sUNWXrhT_ZSPlfU_6OgdEHXhy3XZgc7ZmQyrcg/formResponse" target="hidden_iframe" className="php-email-form">
                            <div style={{ display: isSent ? 'none' : 'block' }}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" {...register("name", { required: true })} name="entry.1815617335" className="form-control" id="entry.1815617335" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="form-control" name="entry.380282344" id="entry.380282344" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input  {...register("subject", { required: true })} type="text" className="form-control" name="entry.731579712" id="entry.731579712" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea  {...register("message", { required: true })} className="form-control" name="entry.1005831994" id="entry.1005831994" placeholder="Message" required></textarea>
                                </div>

                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </div>
                            <div className="form-group my-3" style={{ display: isSent ? 'block' : 'none' }}>
                                <div className="sent-message d-block">Your message has been sent. Thank you!</div>
                            </div>
                        </form>

                    </FormProvider>
                    <iframe title="contactform" name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} ></iframe>
                </div>

            </div>

        </div>
    </section>;
}


// Footer

const Footer = () => {
    return <footer id="footer" className="footer">

      

        <div className="footer-legal text-center">
            <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Wesovi Labs</span></strong>. All Rights Reserved
                    </div>
                   
                </div>

                <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                    <a href="https://twitter.com/wesovilabs" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="https://medium.com/wesovilabs" className="medium"><i className="bi bi-medium"></i></a>
                    <a href="https://github.com/wesovilabs" className="github"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/company/101235489" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

            </div>
        </div>

    </footer>
};


export default Home;

import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";
import hod_cse from "./members/hod_cse.jpg";
import varma from "./members/varma.jpg";
import sidhartha from "./members/siddardha.jpg";
import hashita from "./members/hashita.jpg";
import eswar from "./members/eswar.jpg";
import gowtham from "./members/Gowtham.jpg";
import venugopal from "./members/venugopal.jpg";
import reshma from "./members/reshma.jpg";
import sudhish from "./members/sudhish.jpg";
import srikar from "./members/srikar.jpg";
import keerthi from "./members/keerthi.jpg";
import sai from "./members/sai rohith.jpg";
import mahalakshmi from "./members/mahalakshmi.jpg";
import akshaya from "./members/akshaya.jpg";
import sirraj from "./members/sriraj.jpg";
import sandeep from "./members/sandeep.jpg";
import uday from "./members/uday bro.jpg";

export default function Team() {
  const faculty_members = [
    {
      name: "Dr. A Rama Ra",
      role: "Faculty Co-ordinator , HOD Dept of CSE",
      image: hod_cse,
    },
    {
      name: "Mr.P.Jaganadh Varma",
      role: "Faculty Co-ordinator",
      image: varma,
    },
  ];
  const core_team_members = [
    {
      name: "Venkata Siddardha Rali",
      role: "Chapter Lead",
      image: sidhartha,
      description: `Leading the way with passion and vision, he is charting a
      course for success and making waves on campus, all while
      inspiring and empowering his peers.`,
      linkedin: "https://www.linkedin.com/in/venkata-siddardha-rali-535561223/",
      twitter: "https://twitter.com/siddu_dev175",
      instagram: "https://www.instagram.com/i_am_sidhardha/",
      email: "mailto:sidhurv8@gmail.com",
    },
    {
      name: "Hashita Pusapati",
      role: "Chapter Co-Lead",
      image: hashita,
      description: `Sailing alongside our Club Captain, she is the wind
      beneath our sails, steering us toward excellence.
      Together, we conquer the campus seas!`,
      linkedin: "https://www.linkedin.com/in/hashita-pusapati-315194226",
      twitter: "https://x.com/Hashitapus5032",
      instagram:
        "https://instagram.com/hashitapusapati?igshid=YTQwZjQ0NmI0OA==",
      email: "mailto:hashitapusapati012@gmail.com",
    },
    {
      name: "Eswara Rao Vetla",
      role: "Technical Head",
      image: eswar,
      description: `Leading the way in the realm of technology, he is the
      genius behind our club's technical brilliance. Prepare for
      a tech-powered revolution!`,
      linkedin: "https://www.linkedin.com/in/eswara-rao-vetla-01152a235/",
      twitter: "https://twitter.com/EswarVetla",
      instagram: "https://www.instagram.com/_eswar_vetla_19/",
      email: "mailto:eswarvetla9119@gmail.com",
    },
    {
      name: "Sai Gowtham Puvvula",
      role: "Technical Head",
      image: gowtham,
      description: `Guiding our tech journey with expertise and innovation, he
      is the driving force behind our club's technical prowess.
      Ready to code the future.`,
      linkedin: "https://www.linkedin.com/in/sai-gowtham-puvvula-607109214/",
      twitter: "https://www.twitter.com/GowthamSai21782",
      instagram: "https://www.instagram.com/p.sai_gowtham/",
      email: "mailto:puvvulasaigowtham@gmail.com",
      github: "https://github.com/p-sai-gowtham",
    },
    {
      name: "Venu Gopal Neyigapula",
      role: "Technical Head",
      image: venugopal,
      description: `Illuminating the path to technological excellence, he lead
      the charge in our club's tech endeavors. Join us as we
      code the future!`,
      linkedin: "https://www.linkedin.com/in/neyigapula-v-78536a1a4/",
      twitter: "https://twitter.com/VNeyigapula",
      instagram: "https://www.instagram.com/_vgopal_/",
      email: "mailto:neyigapulavenugopal@gmail.com",
    },
    {
      name: "Reshma Tejeswani Patarapalli",
      role: "Technical Associate",
      description: `Guiding our tech endeavors with creativity and precision,
      she is the architect behind our club's technical prowess.`,
      image: reshma,
      linkedin: "https://www.linkedin.com/in/reshmatejeswini",
      email: "mailto:reshmatejeswini25@gmail.com",
    },
    {
      name: "Sudish Amiti",
      role: "Technical Associate",
      description: `Fueling our club's technical prowess with innovation and
      knowledge, he is the driving engine behind our
      tech-powered initiatives.`,
      image: sudhish,
      linkedin: "https://www.linkedin.com/in/sudhish-amiti/",
      email: "mailto:sudhishamiti2003@gmail.com",
    },
    {
      name: "Srikar Tenneti",
      role: "Social Media Head",
      image: srikar,
      description: `Watch him work with his turning clicks into campus magic,
      as he harnesses the power of technology to create a
      virtual revolution.`,
      linkedin:
        "https://www.linkedin.com/in/srikar-tenneti-849522235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Tenneti_Srikar?t=1cB7fLx-uI_8Qk1JjMDtsw&s=09",
      instagram:
        "https://www.instagram.com/tinkusrikar_7?igshid=YjJ5MW1zbGp4dDF1",
      email: "mailto:tennetisrikar@gmail.com",
    },
    {
      name: "Bavya Sai Keerthi Thammineni",
      role: "Events Head",
      image: keerthi,
      description: `Orchestrating unforgettable experiences and memorable
      moments, She is the creative genius behind our club's
      events.`,
      linkedin: "https://www.linkedin.com/in/bhavya-sai-keerthi-thammineni",
      twitter: "https://x.com/Bhavya_SKeerthi?t=vydgpHKYclRl380hHROgLQ&s=09",
      email: "mailto:bhavyaskthammineni@gmail.com",
    },
    {
      name: "Sai Rohith",
      role: "Design & Branding Head",
      image: sai,
      description: `Crafting our brand's visual identity with creativity and
      finesse, he is the artistic visionary behind our club's
      look and feel. Prepare for a visual journey!`,
      linkedin: "https://www.linkedin.com/in/sai-rohith-sr2004949/",
      instagram: "https://www.instagram.com/sai_rohith_9492/",
      email: "mailto:rohithsai6861@gmail.com",
    },
    {
      name: "Kirthika Mahalakshmi Ganta",
      role: "PR & Outreach Head",
      image: mahalakshmi,
      description: `Mastering the art of public relations and outreach, she is
      the wizard behind our club's voice and influence, weaving
      strategic communication.`,
      linkedin:
        "https://www.linkedin.com/in/kirthika-mahalaxmi-ganta-b82004250/",
      twitter: "https://x.com/Kirthikam29?t=3NLTPv5O6BAdfCAY6qatzQ&s=09",
      instagram: "https://www.instagram.com/mahaganta",
      email: "mailto:mkmaha29@gmail.com",
    },
    {
      name: "Akshaya Sri Arasada",
      role: "Marketing Head",
      image: akshaya,
      description: `A force to be reckoned with in the world of promotion and
      strategy, she is the driving energy behind our club's
      outreach and impact.`,
      linkedin: "https://www.linkedin.com/in/akshaya-sri-arasada-0a6293254/",
      instagram: "https://www.instagram.com/artful_layouts/",
      email: "mailto:akshayasri0805@gmail.com",
    },
  ];
  const domain_team_members = [
    {
      name: "Sriraj Tata",
      role: "Cyber Security Domain Head",
      image: sirraj,
      description: `Leading the charge in defending our digital kingdom, he is
    the shield against cyber threats and vulnerabilities.`,
      linkedin:
        "https://www.linkedin.com/in/sriraj-tata-0499b7228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://twitter.com/SrirajTata",
      instagram: "https://www.instagram.com/sriraj_tata/",
      email: "mailto:sriraj151203@gmail.com",
    },
    {
      name: "Sandeep Tottadi",
      role: "Web Development Domain Head",
      image: sandeep,
      description: `Crafting online experiences with finesse and innovation,
    they're the architect behind our club's web development
    magic.`,
      email: "mailto:sandeeptottadi@gmail.com",
    },
  ];
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Teams</title>
      </Helmet>
      <div className="row justify-content-center mb-4">
        <div className="col-md-7 text-censter" style={{ marginTop: "150px" }}>
          <h3
            className="mb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span style={{ color: "#2f8d46" }}> Faculty </span> Advisors
          </h3>
        </div>
      </div>
      <div className="py-5 team3">
        <div className="container">
          <div className="row team-members-cards">
            {faculty_members.map((member, idx) => {
              return (
                <div key={idx} className="row team-member-card">
                  <img src={member.image} alt="wrapkit" className="img-fluid" />
                  <div className="col-md-12 content">
                    <div className="pt-2 team-member-card1">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        {member.name}
                      </h5>
                      <h6 className="subtitle">{member.role}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-5 team3">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center">
            <h3 className="mb-3">
              Our <span style={{ color: "#2f8d46" }}> Core Team </span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row team-members-cards">
            {core_team_members.map((member, idx) => {
              return (
                <div key={idx} className="row team-member-card">
                  <img src={member.image} alt="wrapkit" />
                  <div className="content">
                    <div className="pt-2 team-member-card1">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        <span style={{ color: "#2f8d46" }}>
                          {member.name.split(" ").slice(0, -1).join(" ")}{" "}
                        </span>{" "}
                        {
                          member.name.split(" ")[
                            member.name.split(" ").length - 1
                          ]
                        }
                      </h5>
                      <h6 className="subtitle">{member.role}</h6>
                      <p>{member.description}</p>
                      <ul className="list-inline">
                        {member.linkedin && (
                          <li className="list-inline-item">
                            <a
                              href={member.linkedin}
                              className="text-decoration-none d-block px-1"
                            >
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </li>
                        )}
                        {member.twitter && (
                          <li className="list-inline-item">
                            <a
                              href={member.twitter}
                              className="text-decoration-none d-block px-1"
                            >
                              <i className="bi bi-twitter"></i>
                            </a>
                          </li>
                        )}
                        {member.instagram && (
                          <li className="list-inline-item">
                            <a
                              href={member.instagram}
                              className="text-decoration-none d-block px-1"
                            >
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                        )}
                        {member.email && (
                          <li className="list-inline-item">
                            <a
                              href={member.email}
                              className="text-decoration-none d-block px-1"
                            >
                              <i className="bi bi-envelope"></i>
                            </a>
                          </li>
                        )}
                        {member.github && (
                          <li className="list-inline-item">
                            <a
                              href={member.github}
                              className="text-decoration-none d-block px-1"
                            >
                              <i className="bi bi-github"></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-7 text-center">
          <h3 className="mb-3">
            <span style={{ color: "#2f8d46" }}> Domain </span> Heads
          </h3>
        </div>
      </div>
      <div className="py-5 team3">
        <div className="container">
          <div className="row team-members-cards">
            {domain_team_members.map((member, idx) => {
              return (
                <div key={idx} className="row team-member-card">
                  <img src={member.image} alt="wrapkit" className="img-fluid" />
                  <div className="col-md-12 content">
                    <div className="pt-2 team-member-card1">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        <span style={{ color: "#2f8d46" }}>
                          {member.name.split(" ").slice(0, -1).join(" ")}{" "}
                        </span>{" "}
                        {
                          member.name.split(" ")[
                            member.name.split(" ").length - 1
                          ]
                        }
                      </h5>
                      <h6 className="subtitle">{member.role}</h6>
                      <p>{member.description}</p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            href="https://www.linkedin.com/in/sriraj-tata-0499b7228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="text-decoration-none d-block px-1"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="text-decoration-none d-block px-1"
                          >
                            <i className="bi bi-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="text-decoration-none d-block px-1"
                          >
                            <i className="bi bi-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="mailto:sriraj151203@gmail.com"
                            className="text-decoration-none d-block px-1"
                          >
                            <i className="bi bi-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-7 text-center">
          <h3 className="mb-3">
            Founding <span style={{ color: "#2f8d46" }}> Leads </span>
          </h3>
        </div>
      </div>

      <div className="py-5 team3">
        <div className="container">
          <div className="row team-members-cards">
            <div className="row team-member-card">
              <img src={uday} alt="wrapkit" className="img-fluid" />
              <div className="col-md-12 content">
                <div className="pt-2 team-member-card1">
                  <h5 className="mt-4 font-weight-medium mb-0">
                    <span style={{ color: "#2f8d46" }}> Uday </span> Santhosh
                    Kumar
                  </h5>
                  <h6 className="subtitle">Founding Lead 2022 Tenure</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/udaysk3/"
                        className="text-decoration-none d-block px-1"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/UdaySk333"
                        className="text-decoration-none d-block px-1"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/uday_sk_3/"
                        className="text-decoration-none d-block px-1"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="mailto:mailto:burluudaysantoshkumar3@gmail.com"
                        className="text-decoration-none d-block px-1"
                      >
                        <i className="bi bi-envelope"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="http://github.com/udaysk3"
                        className="text-decoration-none d-block px-1"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

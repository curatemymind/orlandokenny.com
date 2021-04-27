import React from 'react';
import ReactModal from 'react-modal'
import './App.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { Container } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import Collapsible from 'react-collapsible';
import ReactGoogleSlides from 'react-google-slides';
import InstagramEmbed from 'react-instagram-embed';
import * as Util from './minor/Util'
import './collapsible.scss'; 
const contact = require('./media/contact.gif')
const projects = require('./media/projects.gif')
const about = require('./media/about.gif')
const resume = require('./media/resume.gif')
const email = require('./media/outlook.png')
const phone = require('./media/phone.png')
const linkedIn = require('./media/linkedIn.png')
const gtihub = require('./media/github.png')
const instagram = require('./media/instagram.png')
const facebook = require('./media/facebook.png')
const headshot = require('./media/headshot.jpg')
const group = require('./media/group_pic.jpg')
const logo = require('./media/We_Are_Up_Next.png')
const cc1 = require('./media/cc1.PNG')
const cc2 = require('./media/cc2.PNG')
const c1 = require('./media/covid1.PNG')
const c2 = require('./media/covid2.PNG')
const c3 = require('./media/covid3.PNG')
const pdf = require('./media/OrlandoKenny_Resume.pdf')
const inDepth = require('./media/In-Depth Analysis (Sense of Self, Orlando Kenny).pdf')
const sos1 = require('./media/sos1.PNG')
const sos2 = require('./media/sos2.PNG')
const sos3 = require('./media/sos3.PNG')
const legacy = require('./media/ex0.png')
const ex1 = require('./media/ex1.png')
const ex2 = require('./media/ex2.png')


function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}
  
/*This page will display a form that will redirect the user to different views based on their input. 
It functions with React states and react Redirects*/
class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      expResume: false,
      expProjects: false,
      expContact: false,
      expAbout: false,
      test: 0,
    };
    this.iconClick = this.iconClick.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  iconClick(id) {
    switch(id)
    {
      case "resume":
        alert("opening resume in new tab...")
        break
      case "projects":
        this.setState({expResume: false, expProjects: true, expContact: false, expAbout: false})
        break
      case "contact":
        this.setState({expResume: false, expProjects: false, expContact: true, expAbout: false})
        break
      case "about":
        this.setState({expResume: false, expProjects: false, expContact: false, expAbout: true})
        break

      default:
        alert("error")
        break
    }
    this.handleOpenModal()
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  

  render()
  {  
    const isMobile = Util.IsMobileUserAgent()
    var maxWidth = 500;
    if(isMobile)
    {
      maxWidth = 250;
    }
    timeout(10000)

    return (   
      <div className="contentWrapper"> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
       <center>
            <br></br>
            <br></br>
        
            <h1>ORLANDO</h1>
            <h6>KENNY</h6>
         
          
        
            <br></br>
            <br></br>
            
              
                
                  <Container fluid >
                    <br></br>
                    <br></br>
                    <a href={pdf} target="_blank">
                  <button id="resume" onClick={e => this.iconClick(e.target.id)}>
                    <img id="resume" src={resume} alt="resume"></img>
                    <br></br>
                    RESUME
                  </button>
                  </a>
                  <button id="projects" onClick={e => this.iconClick(e.target.id)}>
                    <img id="projects" src={projects} alt="projects"></img>
                    <br></br>
                    PROJECTS
                  </button>
                  <button id="contact" onClick={e => this.iconClick(e.target.id)}>
                    <img id="contact" src={contact} alt="contact"></img>
                    <br></br>
                    CONTACT
                  </button>
                  <button id="about" onClick={e => this.iconClick(e.target.id)}>
                    <img id="about" src={about} alt="about"></img>
                    <br></br>
                    ABOUT
                  </button>
                </Container>
                
                
             
            
            {/*mobile modals*/}
            
            {this.state.expResume && 

           

              {/*
              <button onClick={this.handleCloseModal} className="closeModal">CLOSE</button>
              <Container fluid className="modalMinWidth">
                <br></br>
                <br></br>
                <a href={pdf} target="_blank">Open PDF in new tab.</a>
                <iframe src={pdf} className="resume"></iframe>
              </Container>*/}
            
         
          }
            
            {this.state.expProjects && 
            <ReactModal isOpen={this.state.showModal}>
              <button onClick={this.handleCloseModal} className="closeModal">CLOSE</button>
              <br></br>
              <br></br>
              <Container fluid className="modalMinWidth">
              <Collapsible trigger="Sense of Self" open={!isMobile} triggerClassName="sos-trigger" triggerOpenedClassName="sos-trigger" contentInnerClassName="sos-content" >
                  <div className="maxWidthText">
                    <p className="collapseText">
                    In November of 2020, I launched Sense of Self Speakers. The goal was to offer an alternative to the everyday-use, mass produced speakers that we are accustomed to buying.
                    <br></br><br></br>
                    Before I began prototyping the speakers I took a small course on acoustics to better understand how speakers work and how the sound that we hear is created. After this, I devised a process using laser cutting, 3D printing, and sautering that allowed me to create completely customizable sealed speaker enclosures from scratch. I source every speaker component individually and I have designed the enclosure to be an optimal size that maximizes speaker performance and resonant frequency while minimizing distortion. 
                    <br></br><br></br>
                    After standardizing my process, I decided to build a web store that could support my business. With my technical knowledge in React I was able to deploy a web store that functions in an entirely dynamic matter, relying on Stripe as its payment processing method. Everything on the site was made from scratch as it proved to be more cost effective. Once this was done, I published the site and began creating a brand around it. Since its release, I’ve sold ten speakers while amassing thousands of site visits and hundreds of followers. 
                    I look forward to continuing to innovate and optimize my process. 
                      <br></br>
                      <br></br>
                      <a target="_blank" href="https://covid19-central.com/">sosspeakers.com</a>
                      <br></br>
                      <br></br>
                      <a href={inDepth} target="_blank">In-Depth Site Analysis</a>
                      <br></br>
                      <br></br>
                      <a target="_blank" href="https://github.com/orlandokennycs/sosspeakers.com">Github Repository</a>
                      <br></br>
                      <br></br>
                    </p>
</div>
                    <center>
                      
                      <img className="collapseSS" src={sos1}></img>
                      <img className="collapseSS" src={sos2}></img>
                      <img className="collapseSS" src={sos3}></img>
                    </center>
                    
                  
                  
                </Collapsible>  
                <Collapsible trigger="Covid-Central" open={!isMobile} triggerClassName="covid-central-trigger" triggerOpenedClassName="covid-central-trigger" contentInnerClassName="covid-central-content" >
                  <div className="maxWidthText">
                    <p className="collapseText">
                    Role: Team Lead/Creator
                    <br></br>
                    <br></br>
                    Covid-Central is a data centralization tool that hosts reliable information regarding the outbreak of the COVID-19 virus. We provide you five pages (Facts, Stats, News, Resources, and Commentary).
                    <br></br>
                    <br></br>
                    Each of the pages has been designed to serve you with a specific subset of data. Some of these pages allow you to comb through its contents using emotion "flairs". 
                    When a flair is activated, all articles or resources that pertain to that flair will appear.
                    <br></br>
                    <br></br>
                    This was done in an effort to succintly provide you the type of content that you would like to see. Although a lot of the pages are automated and update themselves, 
                    the articles and resources that have an emotion "flair" have been carefully hand picked by our research team. 
                    This project showed me how frameworks like React allow for the quick development of web applications. As a result, I was interviewed by author Mary Stewart and I will be featured in her next book, <i>Creative Inquiry: From Ideation to Implementation</i>.
                    <br></br>
                      <br></br>
                      <a target="_blank" href="https://covid19-central.com/">covid19-central.com</a>
                      <br></br>
                      <br></br>
                      <a target="_blank" href="https://github.com/FSUInnovationHub/covid-central">Github Repository</a>
                      <br></br>
                      <br></br>
                    </p>
</div>
                    <center>
                      <div className="hideSmallMobile">
                    <InstagramEmbed
                      url='https://www.instagram.com/p/B_xLHINlsPL/?igshid=1bh36w8dw2ovr'
                      maxWidth={maxWidth}
                      hideCaption={false}
                      containerTagName='center'
                      protocol=''
                      injectScript
                      onLoading={() => {}}
                      onSuccess={() => {}}
                      onAfterRender={() => {}}
                      onFailure={() => {}}
                    />
                    </div>
                      <img className="collapseSS" src={c1}></img>
                      <img className="collapseSS" src={c2}></img>
                      <img className="collapseSS" src={c3}></img>
                    </center>
                    
                  
                  
                </Collapsible>

                <Collapsible trigger="Raymond James Financial" open={!isMobile} triggerClassName="raymondJames-trigger" triggerOpenedClassName="raymondJames-trigger" contentInnerClassName="raymondJames-content" >
                  <div className="maxWidthText">
                    <p className="collapseText">
                    Role: Intern
                    <br></br>
                    <br></br>
                    During my time at Raymond James Financial I was tasked with converting a legacy PDF document that contained Key Performance Indicators into a new and interactive dashboard. 
                    The legacy PDF document was given to managers and the senior vice presidents at the end of every month. My goal became to offer this data in real time. 
                    In my six weeks at Raymond James I…
                    <br></br>
                    <br></br>
                    <li>Created a drillable month over month view to help TSC Leadership understand the root causes of spikes or dips in metrics over any given month. </li>
                    <li>Created a summary view intended to help managers quickly visualize the delta of eight different metrics at any given month. </li>
                    <br></br>
                    <br></br>
                    Ultimately, this project ended up being valuable for the firm and a great learning experience for me as it introduced me to the importance of data analysis in large data sets. 
                    I hope to one day work closer to the databases that store the data I worked with as I am particularly interested in algorithm efficiency and storing large datasets as efficiently as possible. 
                    <br></br>
                    <br></br>
                    Below is the dashboard that I created:
                    </p>
                    <center>
                      <img className="collapsePic" src={ex1}></img>
                      <br></br>
                      <br></br>
                      <img className="collapsePic" src={ex2}></img>
                      <br></br>
                      <br></br>
                    </center>
                    <br></br>
                      <p className="collapseText">
                        And here is the original PDF report:
                      </p>
                    <center>
                      <img className="collapsePic" src={legacy}></img>
                    </center>
                    
                  </div>


                  
                </Collapsible>

                <Collapsible trigger="CreatorConnect" open={!isMobile} triggerClassName="creatorConnect-trigger" triggerOpenedClassName="creatorConnect-trigger" contentInnerClassName="creatorConnect-content" >
                  <div className="maxWidthText">
                    <p className="collapseText">
                    Role: Team Lead/Creator
                    <br></br>
                    <br></br>
                    CreatorConnect is a web app hosted by the Florida State University Innovation Hub to allow students with technical and innovative skills to advertise their skills to the FSU community and employers for the purpose of accessing enriching opportunities that include engaging on projects, internships, tutoring, and employment. 
                    Currently the program is in the developmental phase and over the Spring of 2020 we finalized a beta version for it. The CreatorConnect beta version...
                    <br></br>
                    <br></br>
                      <li>Uses MongoDB as a relational database.</li>
                      <li>Uses Flask to host a secure backend server with multiple endpoints.</li>
                      <li>Uses ReactJS to host a web app that connects to the Flask endpoints in order to process data.</li>
                      <li>Uses ReactJS to dynamically render HTML components based on the endpoint’s response.</li>
                      <li>Uses CSS techniques to allow for access and compatibility on all devices.</li>
                      <br></br>
                      Due to the outbreak of the COVID-19 virus, the team dissolved but I am currently finishing up the project on my own and I am packaging it so that it is digestible and the next set of interns can work on adding important features to the site.
                      <br></br>
                      <br></br>
                      <a target="_blank" href="https://creatorconnect.netlify.app/">CreatorConnect Beta (Backend Not Active at the moment)</a>
                      <br></br>
                      <br></br>
                      <a target="_blank" href="https://github.com/FSUInnovationHub/CreatorConnect">Github Repository</a>
                      <br></br>
                      <br></br>
                      
                      <center>
                      <ReactGoogleSlides
                        slidesLink="https://docs.google.com/presentation/d/1gncsq4asAyH7OLTj33_0_7QCpc-Nk5C8p4yiyitjmJA/edit?usp=sharing"
                        slideDuration={5}
                        showControls
                        loop
                      />
                      <img className="collapseSS" src={cc1}></img>
                      <img className="collapseSS" src={cc2}></img>
                    </center>
                    </p>
                  </div>

                  
                </Collapsible>

                <Collapsible trigger="WIGS App" open={!isMobile} triggerClassName="wigs-trigger" triggerOpenedClassName="wigs-trigger" contentInnerClassName="wigs-content" >
                <div className="maxWidthText"> 
                <p className="collapseText">
                Role: Creator
                <br></br>
                <br></br>
                In August of 2019, I created an Android app for my brother who owns a small business. He was heading to a convention in New York in the last week of August and needed an application that could host his products and collect potential customer information in an offline manner. I decided to take up the project and after a week I created an app that had three main functionalities…
                <br></br>
                <br></br>
                <li>GALLERY MODE- Uses ViewFlipper to create an automatic slideshow of the company’s chosen works.</li>
                <li>PRODUCT VIEW- Uses ScrollView to create a scrollable catalog of the company’s products.</li>
                <li>SIGN UP- Uses a form to collect potential customer information and store it in a .txt file in the device’s external storage. This is done so that later on the administrator can simply share the .txt file.</li>
                <br></br>
                </p>
              </div>
                
               
                <center><iframe src="https://www.youtube.com/embed/PlWMVp1Ius0" frameborder="0" allowfullscreen></iframe></center>
                
              
                  
                </Collapsible>
               
                <Collapsible trigger="We Are Up Next!" open={!isMobile} triggerClassName="weAreUpNext-trigger" triggerOpenedClassName="weAreUpNext-trigger" contentInnerClassName="weAreUpNext-content" >
                  <div className="maxWidthText">
                    
                      <p className="collapseText">
                      Role: Founder
                      <br></br>
                      <br></br>
                      In the summer of 2017 I had just joined Archbishop McCarthy’s robotics team 7121F. I was going to Panama for the summer and my cousin had told me about a robotics program at her former school that was lacking an instructor. 
                      The school was called El Instituto Profesional y Técnico de la Chorrera, but I will refer to it as IPTCH. 
                      <br></br>
                      <br></br>
                      I saw this as an opportunity and  I reached out to the school’s administrators to ask if I could take over the program for the months that I would be in Panama. Once I received permission to take over their program, I began to build a makeshift curriculum.
                      <br></br>
                      <br></br>
                      This curriculum covered topics from the basics of robotics and programming to using specific platforms like LEGO EV3 to build robots for competitions. When I arrived at the school I was introduced to handful of team members. From there, I began to instruct them. Their equipment was outdated and we quickly began fundraising towards the LEGO EV3 kits. 
                      <br></br>
                      <br></br>
                      I would go on to work with them for 110 hours and we would go on to fundraise $1000. More importantly, I feel that the team members were able to learn a lot. In the future, I hope to be able to run a similar program on a much larger scale.
                      </p>
                    
                  </div>
                  <br></br>
                  <br></br>

                  <center><iframe src="https://youtube.com/embed/jCAOhPQP0TY" frameborder="0" allowfullscreen></iframe>
                  <br></br>
                  <br></br>
                  <img className="collapsePic" src={logo}></img>
                  <br></br>
                  <br></br>
                  <img className="collapsePic" src={group}></img>
                  </center>
                  
                </Collapsible>
              </Container>

             
 
            </ReactModal>}

            {this.state.expContact && 
            <ReactModal isOpen={this.state.showModal} closeTimeoutMS={500}>
              <button onClick={this.handleCloseModal} className="closeModal">CLOSE</button>
              <Container fluid className="modalMinWidth">
                <br></br>
                <a href="mailto:kenny@cs.fsu.edu">
                  <button className="contact" id="projects">
                        <img id="test" className="contactImg" src={email} alt="projects"></img>
                        &nbsp;kenny@cs.fsu.edu
                  </button>
                </a>
                <a href="tel:954-778-1065">
                  <button className="contact" id="projects">
                          <img id="phone" className="contactImg" src={phone} alt="projects"></img>
                          &nbsp;954-778-1065
                  </button>
                </a>  
                <a target="_blank" href="https://www.linkedin.com/in/orlando-kenny/" rel="noopener noreferrer">
                  <button className="contact" id="projects">
                          <img id="test" className="contactImg" src={linkedIn} alt="projects"></img>
                          &nbsp;navigate to
                  </button>
                </a>
                <a target="_blank" href="https://github.com/orlandokennycs" rel="noopener noreferrer">
                  <button className="contact" id="projects">
                          <img id="test" className="contactImg" src={gtihub} alt="projects"></img>
                          &nbsp;orlandokennycs
                  </button>
                </a>
                <a target="_blank" href="https://www.instagram.com/orlandokenny.cs/" rel="noopener noreferrer">
                  <button className="contact" id="projects">
                          <img id="test" className="contactImg" src={instagram} alt="projects"></img>
                          &nbsp;orlandokenny.cs
                  </button>
                </a>
                <a target="_blank" href="https://www.facebook.com/orlandokenny1/" rel="noopener noreferrer">
                  <button className="contact" id="projects">
                          <img id="test" className="contactImg" src={facebook} alt="projects"></img>
                          &nbsp;navigate to
                  </button>
                </a>
            </Container>
            </ReactModal>}
            
            {this.state.expAbout && 
            <ReactModal isOpen={this.state.showModal}>
              <button onClick={this.handleCloseModal} className="closeModal">CLOSE</button>
              <Container fluid className="aboutContainer">
              
              <div className="aboutDiv">
                <br></br>
                <p>
                Hey! 
                My name is Orlando Kenny and I just finished my undergraduate studies with a Bachelor of Science in Computer Science at the Florida State University. 
                I am currently looking for an opportunity to either study or work in the field of Innovation!
                <br></br>
                <br></br>
                I would love to be able to apply my techincal skills in an Innovative atmospehere full of emerging technologies. I even have some experience to show for it! In my time at Florida State, I became
                deeply involved with both the FSU Innovation Hub and the Tallahassee Community College Center for Innovation.
                <br></br>
                <br></br>
                In my time as a computer programming intern at the FSU Innovation Hub I learned modern web development through React and deployed a host of sites that can be found in my projects tab.
                In my time at the TCC Innvoation Center I worked to create my own business (<a href="https://www.sosspeakers.com" target="_blank">sosspeakers.com</a>), but more importantly I helped the Innovation Center Director foster a collaborative community 
                by introducing the Center to over 20 students from different disciplines. 
                <br></br>
                <br></br>
                My greatest personal accomplishment came in the Spring of 2019, covid-central (<a href="https://www.covid19.central.com" target="_blank">covid19-central.com</a>). In a matter of five weeks I organized, worked on, and oversaw the development of a web app from idea to implementation. 
                The purpose of Covid-Central was to quickly deploy a service where users could get reliable information regarding the outbreak of the Covid-19 virus. This project showed me the power of open source software, as we relied on APIs for content like statistics.
                <br></br>
                <br></br>
                More importantly, it showed me how frameworks like React allow for the quick development of web applications. As a result, I was interviewed by author Mary Stewart and I will be featured in her next book, <i>Creative Inquiry: From Ideation to Implementation</i>.
                <br></br>
                <br></br>
                As I previously mentioned, my love resides in Innovation!
                <br></br>
                <br></br>
                Best,
                <br></br>
                Orlando Kenny 
                </p>
                <br></br>
                <br></br>
              </div>
              <div>
              <img className="headshot" src={headshot}></img>
              </div>
              </Container>
            </ReactModal>}
          
{/*
ADD BANNER OT MODALS 
            <div class="ReactModal__Content ReactModal__Content--after-open" tabindex="-1" role="dialog" style="position: absolute; top: 40px; left: 40px; right: 40px; bottom: 40px; border: 1px solid rgb(204, 204, 204); background: rgb(255, 255, 255); overflow: auto; border-radius: 4px; outline: none; padding: 20px;"><button class="closeModal">CLOSE</button></div>

*/}            
        </center>
        
        
      
      </div>

      )
  }
}
export default Home;

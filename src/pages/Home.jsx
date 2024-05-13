import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CoursesSection'
import { tutorList, tutorSection } from '../data/TutorsSection'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import parse from 'html-react-parser'

import '../styles/Home.css'
import { partnerList, partnerSection } from '../data/PartnersSection'
import { contactSection } from '../data/ContactSection'

function Home() {
  return (
    <>
      <Navbar />

      {/* home */}
      <div className='wrapper'>
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">
            {parse(homeSection.content)}
          </div>
        </section>
      </div>

      {/* course */}
      <section id="courses">
        <div className="kolom">
          {parse(courseSection.content)}
        </div>
        <img src={courseSection.image} />
      </section>

      {/* tutors */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">
            {parse(tutorSection.content)}
          </div>

          <Tutors tutorList={tutorList} />
        </div>
      </section>

      {/* partners */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">
            {parse(partnerSection.content)}
          </div>
          <Partners partnerList={partnerList} />
        </div>
      </section>


      <Contact contactSection={contactSection} />
      <Footer />
    </>
  )
}

export default Home

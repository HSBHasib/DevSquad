import React from 'react'
import Banner from '@/components/landingPage/banner/Banner'
import CTASection from '@/components/landingPage/ctaSection/CTASection'
import FAQSection from '@/components/landingPage/faq/FAQSection'
import Review from '@/components/landingPage/review/Review'
import TeamMake from '@/components/landingPage/teamMake/TeamMake'
import ChooseUs from '@/components/landingPage/chooseUs/ChooseUs'
import Navbar from '@/components/landingPage/navbar/Navbar'
import Footer from '@/components/landingPage/footer/Footer'
import Features from '@/components/landingPage/Features/Features'

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <TeamMake />
      <ChooseUs />
      <Review />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default RootPage


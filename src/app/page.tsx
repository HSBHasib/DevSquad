import React from 'react'
import Banner from '@/components/landingPage/banner/Banner'
import CTASection from '@/components/landingPage/ctaSection/CTASection'
import FAQSection from '@/components/landingPage/faq/FAQSection'
import FeaturesSection from '@/components/landingPage/Features/FeaturesSection'
import Review from '@/components/landingPage/review/Review'
import TeamMake from '@/components/landingPage/teamMake/TeamMake'
import ChooseUs from '@/components/landingPage/chooseUs/ChooseUs'

const RootPage = () => {
  return (
    <>
      <Banner />
      <FeaturesSection />
      <TeamMake />
      <ChooseUs />
      <Review />
      <FAQSection />
      <CTASection />
    </>
  )
}

export default RootPage


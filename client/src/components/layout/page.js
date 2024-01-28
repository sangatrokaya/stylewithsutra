'use client'
import React from 'react'
import Footer from '@/components/footer/page'
import Nav from '@/components/navBar/page'

const page = ({ children }) => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
              {children}

              <Footer />

        </div>
      </section>
    </div>
  )
}

export default page
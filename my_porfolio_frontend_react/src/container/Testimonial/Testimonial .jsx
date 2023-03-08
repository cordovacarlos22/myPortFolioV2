import React, { useEffect, useState } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import AppWrapper from '../../wrapper/AppWrapper'

import MotionWrap from '../../wrapper/MotionWrap'

import { urlFor, client } from '../../client'

const Testimonial = () => {


  const [brands, setBrands] = useState([]);
  const [Testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      // console.log(data)
      setTestimonials(data);

    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);

    });
  }, []);



  return (
    <div>
      Testimonial
    </div>
  )
}

export default AppWrapper(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  "app__primarybg"
) 

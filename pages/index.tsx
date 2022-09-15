import type {GetServerSideProps, NextPage} from 'next'
import { Head } from '../utils/seo/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import Features from "../components/Features/Features";
import {fetchProducts} from "../utils/functions/fetchProducts";
import Product from "../components/Products/Product";
import Approach from "../components/Approach/Approach";
import Approved from "../components/Approved/Approved";
import Mission from "../components/Mission/Mission";
import Testimonials from "../components/Testimonials/Testimonials";
import Instagram from "../components/Instagram/Instagram";
import FeelBetter from "../components/Feel Better/FeelBetter";
import Guarantee from "../components/Guarantee/Guarantee";
import CallToAction from "../components/Call To Action/CallToAction";
import Modal from "../components/Modal/Modal";
import { Products } from '../types/typings'

interface Props {
    products: Products[];
}

const Home = ({products} : Props ) => {
  return (
    <div >
      <Head
          title='Vibrants Bio-Frequency Patches | Natural Wellness Made to Stick'
          keywords='Vibrants Bio-Frequency Patches | Natural Wellness Made to Stick'
          description='Vibrants bio-frequency patches help activate the body&#39;s innate ability to naturally restore balance, heal itself and feel better — without drugs or side effects.z'
          ogTitle='Vibrants Bio-Frequency Patches'
          ogType='website'
          ogUrl='https://vibrants.com/'
          ogImage='http://cdn.shopify.com/s/files/1/0535/7273/1054/files/OG_HOME_PAGE.png?v=1653608863'
      />

      <div className='relative'>

          <Header/>
          <main className='mx-6 relative'>
              <Slideshow/>
              <Features/>

              {/*- Product*/}
              <div className='my-32'>
                  <div className='ml-4 md:ml-20'>
                      <h5 className='font-semibold tracking-wide mb-4 text-[14px]'>MEET YOUR VIBRANTS</h5>
                      <h1 className='text-2xl md:text-4xl font-bold'>Start feeling better.</h1>
                  </div>

                  <div className='flex flex-wrap justify-center md:justify-start space-x-4 mx-auto'>
                      {products.map((product) => (
                          <Product product={product} key={product._id} />
                      ))}
                  </div>
              </div>

             <Approach/>
              <Approved/>
              <Mission/>
              <Testimonials/>

          </main>
          <Instagram/>
          <FeelBetter/>
          <Guarantee/>
          <CallToAction/>
          {/*- Footer*/}
          <Modal/>




      </div>
      
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const products = await fetchProducts();

    return {
        props: {
            products,
        },
    }
}

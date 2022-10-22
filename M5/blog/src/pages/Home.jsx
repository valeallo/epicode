import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

export const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Posts></Posts>
    </>
  )
}

export default Home;
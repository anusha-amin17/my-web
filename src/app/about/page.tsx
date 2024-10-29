"use client";
import React from 'react';
import Navbar from '../componment/navbar';
export default async function About() {

    return(
        <div>
            <Navbar/>
      <h3 className='text-center'>THIS IS THE ABOUT PAGE....</h3>
        </div>
    );

    return (
        <div className="bg-black-100 min-h-screen py-12"> 
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center b-8">About Us</h2>
                <p className="text-white-800 text-lg leading-relaxed">
                    This is the ABOUT PAGE. 
                </p>
            </div>
        </div>
    );
}


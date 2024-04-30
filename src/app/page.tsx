"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import {Button, Chip} from "@nextui-org/react";
import { PhoneCallIcon, StarsIcon } from 'lucide-react';
import { StarIcon } from '@heroicons/react/20/solid';
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from './components/Footer';

function DS() {

    const [isVertical, setIsVertical] = React.useState(true);

    const dummyMentors = [
      {
        id: 1,
        image: "url_to_mentor_image_1",
        name: "John Doe",
        company: "Company A",
        experience: "10+ years",
      },
      {
        id: 2,
        image: "url_to_mentor_image_2",
        name: "Jane Smith",
        company: "Company B",
        experience: "8 years",
      },
      {
        id: 3,
        image: "url_to_mentor_image_3",
        name: "Alex Johnson",
        company: "Company C",
        experience: "5 years",
      },
      {
        id: 4,
        image: "url_to_mentor_image_4",
        name: "Emily Brown",
        company: "Company D",
        experience: "7 years",
      },
      {
        id: 5,
        image: "url_to_mentor_image_5",
        name: "Michael Davis",
        company: "Company E",
        experience: "12+ years",
      },
      // Add more dummy data as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    let displayedJobs = dummyMentors.slice(currentIndex, currentIndex + 3);

    const handleArrowClick = (direction: string) => {
      if (direction === "left") {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? dummyMentors.length - 1 : prevIndex - 3));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex === dummyMentors.length - 1 ? 0 : prevIndex + 3));
      }
    };
    


  return (
    <div>

        <div className='flex flex-col justify-center items-center my-8 bg-gray-100'>

        <div className='flex justify-around bg-gradient-to-r from-blue-400  to-violet-400 max-w-0.7 w-full rounded-2xl min-h-[400px]'>

            <div className='flex-col items-center justify-around p-8'>

                <Chip color="primary" className='bg-green-400 px-3 py-2 rounded-lg'>BestSeller</Chip>

                <br />

                <h1 className='bg-gradient-to-r from-orange-400  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans'>
                    Data Science GURU 2.0
                </h1>
                <br />
                <br />
                <p className='bgired-100 max-w-fit text-lg'>
                Join us as we take you on an exhilarating journey into the dynamic world of Digital Marketing with our comprehensive Beginners Certification Course, infused with the power of Artificial Intelligence (AI). Designed specifically for Beginners, Freshers and working professionals with less than two years of experience in entry-level digital marketing roles, this course is your passport to unlocking your potential in the digital marketing landscape and becoming industry-ready.
                </p>
                <br />

                <div className='flex bg-gradient-to-r from-blue-300  to-violet-300 justify-between p-4 rounded-lg'>
                    <div>
                        <p className='text-gray-800'>Type</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>Degree</h3>
                    </div>
                    <div>
                        <p className='text-gray-800'>Start Date</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>30 April 2024</h3>
                    </div>
                    <div>
                        <p className='text-gray-800'>End Date</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>30 April 2024</h3>
                    </div>
                    <div>
                        <p className='text-gray-800'>Duration</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>6 months</h3>
                    </div>
                </div>
                <br />
                <div className='flex justify-center gap-8'>
                    <Button className='border-2 border-blue-700 rounded-lg p-2 hover:bg-orange-400 hover:text-white'>
                        Download Syllabus
                    </Button>
                    <Button className='bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-lg p-2 min-w-44'>
                        Enroll Now
                    </Button>
                </div>


            <br />
            <div className='ml-3 text-sm text-slate-900 gap-4 flex-col flex ' >
                <p className='text-base flex gap-3'>
                    <StarIcon className='w-4'/>
                    Hurry! 327 people have already applied in the last 1 month
                </p>
                <p className='flex gap-3'>
                    <PhoneCallIcon size={16} />
                    For enquiries call: 1800 210 2020
                </p>
            </div>
               
            </div>
            <div className='flex justify-center items-center'>
                <Image
                src="/front.jpeg"
                alt='Loading image'
                width={700}
                height={600}
                className='rounded-3xl bg-clip-border min-w-[500px] min-h-[400px]'
                ></Image>
            </div>

        </div>

           
        </div>

        <div className="flex w-full flex-col p-4">
        <Tabs aria-label="Options" isVertical={true} className='text-xl font-body font-bold  text-blue-700 border-2 border-blue-700  p-3 rounded-lg w-2/5' >
          <Tab key="highlights" title="Key Highlights" className='h-12'>
            <Card>
              <CardBody className="w-full flex">
                <div>
                    <ul>
                        <li>Complimentary Python Programming Bootcamp</li>
                        <li>500+ Hours of Learning</li>
                    </ul>
                </div>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="specialisation" title="Specialisation" className='h-12'>
            <Card>
              <CardBody className="w-full flex justify-end">
                <div>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="assistance" title="Career Assistance" className='h-12'>
            <Card>
              <CardBody className="w-full flex justify-end">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="oppurtunities" title="Job Opputunities" className='h-12'>
            <Card>
                <CardBody className="w-full flex justify-end">
                    skilled Oppurtunities
                    <ul className='ml-3 p-1 text-blue-700 font-mono'>
                        <li className='flex gap-4'>
                            <StarsIcon/>
                            skilledUp Elevate: Virtual hiring drive giving you the opportunity to interview with upGrads 300+ hiring partners
                        </li>
                        <li>
                            Gain exclusive access to upGrads Job Opportunities portal which has 100+ openings from upGrads hiring partners at any given time.
                        </li>
                        <li>
                            Be the first to know vacancies to gain an edge in the application process
                        </li>
                        <li>
                            Connect with companies that are the best match for you
                        </li>
                    </ul>
                </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

        <div className='p-4 bg-gray-100 px-5'>

          <div className='mx-5'>
            <h1 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-3xl font-bold font-sans'>
                About The Course
            </h1>
            <p className='bg-blue-200 text-blue-600 p-3 text-2xl font-bold rounded-md'>
                Data Science is a field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It employs techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, domain knowledge, and information science.
            </p>

            <br />
            <p className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-3xl font-bold font-sans'>
                Key Highlights Of LJMUs MS In Data Science
            </p>
            
            <div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
                What does this course have to offer?
            </h1>
            <ul className="px-2 list-disc text-lg">
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Marketing</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Finance</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Human Resources</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Information Technology</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Operations Management</li>
            </ul>

            </div>

            <div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
                Skills you learn
            </h1>
            <ul className="px-2 list-disc text-lg">
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Marketing</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Finance</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Human Resources</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Information Technology</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Operations Management</li>
            </ul>

            </div>

            <div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
                Achievements
            </h1>
            <ul className="px-2 list-disc text-lg">
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Marketing</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Finance</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Human Resources</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Information Technology</li>
            <li className='px-2'>Earn a WES-recognized MBA Degree with specialization in Operations Management</li>
            </ul>

            </div>
          </div>
            

            <br />
        <div>
        <div className="flex flex-col px-4">
     
      

      <br />

      {/* <div>
        <Syllabus/>
  </div> */}
      <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
         What our learners have achieved
      </h1>
      <div className='grid grid-cols-2 bg-gray-200 justify-between p-4 rounded-lg w-1/2'>
          <div>
              <p className='text-gray-800'>Avg. Salary Hike</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>40%</h3>
          </div>
          <div>
              <p className='text-gray-800'>Hiring Partners</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>300+</h3>
          </div>
          <div>
              <p className='text-gray-800'>Career Transitions</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>100+</h3>
          </div>
          <div>
              <p className='text-gray-800'>Avg. Outcome Achieved</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>90%</h3>
          </div>
      </div>
      
      <div className="flex items-center justify-center gap-5 pt-10 pb-4">
      <div className="w-full p-4 bg-gray-300">
      <div className="flex justify-center items-center p-5">
      <h1 className="text-4xl font-bold uppercase bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Our Mentors</h1>
      </div>
      <div className="flex items-center justify-center gap-5 pb-4">
      <FontAwesomeIcon icon={faArrowLeft} onClick={() => handleArrowClick("left")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      <FontAwesomeIcon icon={faArrowRight} onClick={() => handleArrowClick("right")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
     {displayedJobs.map((mentor) => (
        <div key={mentor.id} className="border border-gray-300 p-4 rounded-md bg-white flex flex-col justify-center items-center">
          <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww' alt='/' />
          <h2 className="text-2xl font-bold">{mentor.name}</h2>
          <p className="text-xl text-blue-900 font-semibold">{mentor.company}</p>
          <p className="text-xl text-blue-900 font-semibold">{mentor.experience}</p>
        </div>
      ))}
      </div>
      </div>
      </div>

      <br />
      <div className='items-start justify-start flex-col flex '>

      <div className='bg-blue-100 text-blue-600 p-3 text-3xl font-bold rounded-md'> 
          <h1>FAQs regarding Data Science Courses</h1>
      </div>
        
        <br />

      <Accordion className='w-1/2'>
      <AccordionItem key="1" aria-label="Accordion 1" title="Question 1" className='hover:bg-blue-300 px-4 rounded-md'>
       <h1>Test</h1> 
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Question 2" className='hover:bg-blue-300 px-4 rounded-md'>
       <h1>Test 2</h1>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Question 3" className='hover:bg-blue-300 px-4 rounded-md'>
        <h1>Test 3</h1>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
        </div>
        </div>
     
        <div className="min-h-screen flex items-center justify-center bg-blue-200">
        <div className="max-w-md w-full p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Not sure about the course?</h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dont worry Contact with us</h2>
        <form className="space-y-4">
        <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Email-Id
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <input
              type="text"
              id="contact"
              className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Enter your Contact"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-800">
              City
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Enter your Subject"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Message
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default DS
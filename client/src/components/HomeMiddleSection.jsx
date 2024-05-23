import React from 'react';
import meetingHomeMiddleSectionPic1 from '../assets/images/meetingHomeMiddleSectionPic1.png';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Efficient Collaborating',
    feedback: `VirtuMeet is probably the most well-received collaboration tool. 
      VirtuMeet is no less than any other tool that has brought people closer together. 
      Its seamless video conferencing capabilities make virtual meetings feel almost as 
      personal as face-to-face interactions. The high-quality video and audio ensure that 
      communication is clear, and the easy-to-use interface means that even the least tech-savvy 
      team members can join and participate without any issues. The screen sharing and recording features 
      are incredibly useful for presentations and keeping records of important discussions. It’s 
      truly a game-changer for remote work.`,
  },
  {
    name: 'Easy To Use',
    feedback: `VirtuMeet is so super easy to use. The user interface is intuitive and simple to navigate. 
      Setting up a video conference is quick and straightforward, making it accessible for users of all skill 
      levels. The platform offers clear instructions and helpful prompts, ensuring that even first-time users 
      can join meetings with ease. The streamlined design reduces the learning curve, allowing teams to focus 
      on collaboration rather than troubleshooting technical issues. Features like one-click meeting links, 
      virtual backgrounds, and integrated chat make the experience even more user-friendly and efficient.`,
  },
  {
    name: 'Mindblowing Service',
    feedback: `The support team is fantastic and always available. Whenever we encounter an issue, their response 
      is swift and effective, ensuring minimal disruption to our video conferences. The reliability of their service 
      means we experience virtually no downtime, which is crucial for our international meetings. The platforms 
      high-definition video quality and consistent connection stability make every session smooth and professional. 
      Features like breakout rooms and interactive tools further enhance our meetings, making collaboration dynamic 
      and engaging. Their commitment to customer satisfaction truly sets them apart.`,
  },
];

export default function HomeMiddleSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div className="middle-section mx-4 md:mx-12 lg:mx-28 my-10 lg:my-20 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-y-10 lg:gap-y-0 lg:gap-x-20">
        <div className="flex justify-center lg:justify-start">
          <img src={meetingHomeMiddleSectionPic1} alt="Meeting Home Middle Section" className="w-full max-w-md lg:max-w-none" />
        </div>

        <div className="bg-purple-300 py-8 px-4 md:px-6 lg:py-12 lg:px-8 flex flex-col justify-center lg:w-2/3">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Meet For You</h2>

            <p className="text-base md:text-lg font-bold text-gray-600 mb-10">
              VirtuMeet is for you. We're here to help you connect, communicate, and express your ideas so you can get more done together. 
              We're proud to be trusted by millions of enterprises, small businesses, and individuals, just like you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-4 relative bg-pink-300 rounded-lg">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full p-4">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">{testimonial.name}</p>
                    <p className="text-gray-600 text-justify font-semibold">{testimonial.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 -left-10">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-400 rounded-full hover:bg-gray-300"
          >
            &larr;
          </button>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 -right-10">
          <button
            onClick={handleNext}
            className="p-2 bg-gray-400 rounded-full hover:bg-gray-300"
          >
            &rarr;
          </button>
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
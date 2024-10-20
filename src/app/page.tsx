"use client";
import React from "react";
import StudentCard from  "./components/StudentCard";

const students = [
  {
    name: "Ghulam Muneer uddin",
    age: 26,
    rollNumber: "abc2121",
    className: "GIAIC",
    imageUrl: "/2.jpg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "03332663014",
    address: "123 Main St, Gulberg, Karachi",
  },
  
  { 
    name: "Muhammad Saif ur Rehman",
    age: 16,
    rollNumber: "xyz2324",
    className: "BBA",
    imageUrl: "/1.jpg",
    gender: "Male",
    city: "Hyderabad",
    phoneNumber: "03318490932",
    address: "H no 3, Latifabad 9,Hyderabad",
    },

  {
    name: "Muhammad Hamood ur Rehman",
    age: 12,
    rollNumber: "klm4345",
    className: "BSIT",
    imageUrl: "/3.jpg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "03142345187",
    address: "Malir town, Khokhrapar 1, Karachi",
  },
];

export default function Home() {
  return (
    <div className="home ">
      
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase card-align: center">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
 <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by :- Ghulam Muneer Uddin
        </h2>
      </div>
    </div>

  );
} 

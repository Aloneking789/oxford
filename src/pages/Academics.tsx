import React from 'react';
import Navbar from "../components/Navbar";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Academics</h1>
      </div>

    
      

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
           
            <h2 className="ml-3 text-3xl font-bold">Rules for Leave:</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700">
              1.A student should not remain absent without prior permission from the Principal. For this, an application for leave must be submitted.<br/>
2. If a student is absent from school for even a single day due to illness or any other emergency, parents must fill out the "Leave Record" in the school diary and inform the class teacher.<br/>
3. If the leave extends beyond three days, a formal leave application must be submitted.<br/>
4. The leave application and leave record must be duly signed by the parents or guardians.
              </p>
            
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
           
            <h2 className="ml-3 text-3xl font-bold">Important Guidelines for Parents:</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700">
1.All our rules and guidelines are designed with the child's safety, well-being, and quality education in mind.<br/>
2.Students are not allowed to make phone calls from the school office during school hours.<br/>
3. Parents are requested not to disturb teachers by calling them for private tuition.<br/>
4.The personal records and medical history of all students must be completed by parents and submitted to the class teacher a day before the working day.<br/>
5.Parents should stay updated on their child's daily progress by regularly checking the school diary and maintaining communication with teachers.<br/>
6.The diary should be checked daily, and assignments should be completed regularly by the student.<br/>
7.In case of any changes in the address or phone number, parents must inform the class teacher and update the diary accordingly.<br/>
8.Any changes should also be recorded in the diary.<br/>
9.During school hours, parents/guardians are not allowed to enter classrooms to meet their children or interact with teachers without permission.<br/>
10.Carrying private bags to school without permission is not allowed.<br/>
</p>
            
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
           
            <h2 className="ml-3 text-3xl font-bold">Guidelines for Students:</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700">
1.Students should come to school wearing clean, properly ironed uniforms and polished shoes. Hair should be trimmed properly, and nails should be cut regularly. Girls with long hair should tie them neatly. Skirts should be of an appropriate length.<br/>
2.Students are not allowed to make phone calls from the school office during school hoursStudents are not allowed to use the school phone without permission.<br/>
3.It is essential to respect school property and resources.<br/>
4.If any school property is damaged in the classroom, the cost of the damage will be recovered from the students of that class. Students should maintain cleanliness in their surroundings. All kinds of paper waste should be disposed of in the dustbin.<br/>
5.Students are not allowed to leave the classroom without an out-pass or teacher’s permission. During school hours, while moving in corridors or staircases, they should always keep to the left and maintain discipline.<br/>
6.The diary should be checked daily, and assignments should be completed regularly by the student.<br/>
7.Students should communicate in a respectful manner and ensure their language is polite and fluent.<br/>
8.Every student must carry their school identity card daily.<br/>
9.Students are expected to bring books as per the timetable.<br/>
10.Any communication sent via the school diary should be acknowledged and signed by parents/guardians.<br/>
11.During exams, every student should appear with full sincerity and dedication.<br/>
12.English is a second language for most of us, but it is also an important medium of education. To improve fluency in spoken English, all students must communicate in English within the school premises (and at home, whenever possible).<br/>
13.Every student must maintain proper behavior and show respect to all staff members.<br/>
14.Respect for elders and kindness towards younger students should be cultivated. Each student should uphold the dignity and reputation of the school.<br/>
15.Students are allowed to play on the sports ground at the designated time only.<br/>
16.Any incidents of bullying or ragging must be reported to the teachers immediately.
</p>
            
          </div>
        </div>
        <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Education Street</p>
              <p>Cityville, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@excellenceacademy.edu</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
                <li><a href="/admissions" className="hover:text-blue-300">Admissions</a></li>
                <li><a href="/academics" className="hover:text-blue-300">Academics</a></li>
                <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </div>
        
    
  )
}

export default Academics








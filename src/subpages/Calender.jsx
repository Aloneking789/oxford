import React from 'react'

const Calender = () => {
  return (
    <div>
    <div className="flex flex-wrap gap-4">
            <a
              href="/admission"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/virtual-tour"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900"
            >
              Virtual Tour
            </a>
          </div>



          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shaping Tomorrow's Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Excellence Academy provides world-class education with a focus on character development,
            academic excellence, and innovative learning methods.
          </p>
          
        </div>
      </div>



      <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75"></div>
      </div>
      
      
    </div>
    </div>
  )
}

export default Calender;

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import Navbar from "../components/Navbar";
import testimonial from "../images/testimonials.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      image: "https://media.istockphoto.com/id/2164057693/photo/portrait-of-confident-indian-female-college-students-with-book-and-backpack-smiling-to-the.jpg?s=2048x2048&w=is&k=20&c=DaClx6tKO2o3ml1LefMb8e5b6zv6g6l2WXz9zIOA5-o=", // Placeholder image
      rating: 5,
      comment: "Excellence Academy has been transformative for my child's education. The teachers are exceptional, and the personal attention each student receives is remarkable. The school's emphasis on both academic excellence and character development sets it apart.",
      date: "January 2024"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Alumni",
      image: "https://media.istockphoto.com/id/1184416291/photo/education-high-school-and-people-concept-happy-smiling-young-indian-woman-or-student-in.jpg?s=2048x2048&w=is&k=20&c=rHFP7U_TqLXFc2V5z81cOwh4rUFi30_f5HgwXEehFFo=",
      rating: 4.5,
      comment: "As a former student, I can confidently say that my years at Excellence Academy laid the foundation for my success in medical school. The rigorous academic program and supportive environment helped shape who I am today.",
      date: "December 2023"
    },
    {
      id: 3,
      name: "Emily Williams",
      role: "Current Student",
      image: "https://media.istockphoto.com/id/1184416291/photo/education-high-school-and-people-concept-happy-smiling-young-indian-woman-or-student-in.jpg?s=2048x2048&w=is&k=20&c=rHFP7U_TqLXFc2V5z81cOwh4rUFi30_f5HgwXEehFFo=",
      rating: 5,
      comment: "I love being a student here! The teachers make learning fun and interesting. There are so many clubs and activities to choose from, and I've made amazing friends.",
      date: "February 2024"
    },
    {
      id: 4,
      name: "Robert Martinez",
      role: "Parent",
      image: "https://media.istockphoto.com/id/153971287/photo/beautiful-woman-outdoors.jpg?s=2048x2048&w=is&k=20&c=RWdp2TfWEvAJdfkNOb0xGoG4favzWJ2GX0qUqReaGaI=",
      rating: 5,
      comment: "The dedication of the staff is unmatched. They go above and beyond to ensure each child succeeds. The recent STEM program additions have been particularly impressive.",
      date: "January 2024"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div> 
    <Navbar />
    <img className="h-60 w-full object-cover" src={testimonial} alt="Testimonials" />
    <div className="min-h-screen bg-[#f7f8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover why families choose Excellence Academy for their children's education
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-lg text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mt-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Overall School Rating
          </h3>
          <div className="flex justify-center mt-4">
            {renderStars(4.9)}
            <span className="ml-2 text-xl font-semibold text-gray-900">4.9/5</span>
          </div>
          <p className="mt-2 text-gray-500">Based on 150+ reviews</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
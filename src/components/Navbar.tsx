import React from 'react';
import { Menu, X, GraduationCap, ChevronDown, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const hideTimeout = React.useRef<number>();

  // Top navbar items
  const topMenuItems = [
    { title: 'Our Results', path: '/results' },
    // { title: 'Mandatory Disclosure', path: '/disclosure' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Online Registration', path: '/registeration', isNew: true },
  ];

  const menuItems = [
    { 
      title: 'Home', 
      path: '/' 
    },
    { 
      title: 'About',
      path: '/about',
      dropdown: [
        { title: 'Our Mission', path: '/about/mission' },
        { title: 'Director Message', path: '/about/director-message' },
        { title: 'Principal Message', path: '/about/principal-message' },
        { title: 'Our Faculties', path: '/about/faculties' },
      ]
    },
    { 
      title: 'Admissions',
      path: '/admission',
      dropdown: [
        { title: 'Prospectus', path: '/admission/prospectus' },
        { title: 'Admission Process', path: '/admission/process' },
        { title: 'Fee Structure', path: '/admission/fees' },
      ]
    },
    { 
      title: 'Academics',
      path: '/academics',
      dropdown: [
        { title: 'Curriculum', path: '/academics/curriculum' },
        { title: 'Academic Calendar', path: '/academics/calendar' },
        { title: 'Departments', path: '/academics/departments' },
      ]
    },
    { title: 'Facilities', path: '/Facilities' },
    { title: 'Activities', path: '/activities' },
    { title: 'Contact', path: '/contact' },
  ];

  const handleMouseEnter = (itemTitle: string) => {
    // Clear any pending timeout and set active dropdown immediately
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setActiveDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the dropdown.
    hideTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay; adjust as needed
  };

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <nav className="bg-[#b8bab9] h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-black-300 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-black-300 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-black-300 hover:text-white">
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            {/* Top Menu Items */}
            <div className="hidden md:flex space-x-4">
              {topMenuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-black-300 text-xs hover:text-white hover:text-[14px] flex items-center"
                >
                  {item.title}
                  {item.isNew && (
                    <span className="ml-1 bg-red-500 text-white text-xs px-1 rounded">New</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white text-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-blue-800">Excellence Academy</span>
            </div>

            {/* Main Menu Items */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div 
                  key={item.title} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:bg-blue-800 hover:text-white flex items-center"
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="absolute z-50 left-0 mt-2 w-48 bg-blue-900 rounded-md shadow-lg">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm hover:bg-blue-800 text-white"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Enroll Now Button */}
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-full ml-4 transform hover:scale-105 transition-transform duration-200">
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {/* Top Menu Items for Mobile */}
            <div className="px-2 pt-2 pb-3 border-b border-blue-800">
              {topMenuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800"
                >
                  {item.title}
                  {item.isNew && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-1 rounded">New</span>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Main Menu Items for Mobile */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
                    onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  >
                    <div className="flex justify-between items-center">
                      {item.title}
                      {item.dropdown && <ChevronDown className="h-4 w-4" />}
                    </div>
                  </Link>
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          to={dropItem.path}
                          className="block px-3 py-2 text-sm hover:bg-blue-800"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
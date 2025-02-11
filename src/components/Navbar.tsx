import React from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  // Ref for storing the timeout id
  const hideTimeout = React.useRef<number>();

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
    <nav className=" ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Excellence Academy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div 
                  key={item.title} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white flex items-center"
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
            </div>
          </div>
          
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

      {isOpen && (
        <div className="md:hidden">
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
  );
};

export default Navbar;
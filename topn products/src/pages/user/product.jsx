import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data.json'; // Assuming your JSON file is in the same directory
import '/src/assets/css/product.css';

const Product = () => {
  const [searchValue, setSearchValue] = useState('');
  const [courses, setCourses] = useState(data);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter(course =>
    course.productName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleDropdown = (courseName) => {
    if (selectedCourse === courseName) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setSelectedCourse(courseName);
      setDropdownOpen(true);
    }
  };

  return (
    <div className='coursespage'>
      <div className="menu">
        <div className="menuHeader">
          <h1 className="menuTitle">Product</h1>
          <div className='search-container'>
            <div className='search'>
              <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="menuList">
          {filteredCourses.map((course, index) => (
            <div className='blur-color ' key={index}>
              <div className="menuItem">
                <div className="menuItemImg" /> {/* You can add a background image here if needed */}
                <div className='product-img-details'>
                  <h2 className="menuItemName">{course.productName}</h2>
                </div>
                <p className="stock">Price: ${course.price}</p>
                <div className="menuIcons">
                  <div className='levelcontainer'>
                    <div>
                      <p>{course.rating}</p>
                    </div>
                  </div>
                  <div className='dotcontainer'>
                    <FontAwesomeIcon icon={faEllipsisV} className="ellipsisIcon" onClick={() => toggleDropdown(course.productName)} />
                    {dropdownOpen && selectedCourse === course.productName && (
                      <div className="dropdown">
                        <ul>
                          <li onClick={() => {  }}>Enquiry</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

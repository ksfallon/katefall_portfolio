import React, { useState } from 'react';
import Projects from './Pages/Projects';
import NavigationBar from './NavBar';
import Contact from './Pages/ContactForm'
import About from './Pages/About'
import './PortfolioPage.css'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
    //   if (currentPage === 'Home') {
    //     return <Home />;
    //   }
      if (currentPage === 'About') {
        return <About />;
      }
        if (currentPage === 'Projects') {
        return <Projects />;
        }
      return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}






"use client";
import React, { useState } from 'react';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar';

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavShow = () => {
        setShowNav(true);
    };

    const handleNavHide = () => {
        setShowNav(false);
    };

    return (
        <div>
            <Navbar openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleNavHide} />
        </div>
    );
};

export default ResponsiveNav;

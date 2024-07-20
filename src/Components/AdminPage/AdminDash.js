import React from 'react';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Admin/AdminFooter';
import './AdminDash.css';

function AdminDash() {
  return (
    <div>
      <Header />
      <div className="admin-dash">
        {/* Admin dashboard content will go here */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminDash;
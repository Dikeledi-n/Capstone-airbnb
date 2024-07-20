import React from 'react'
import './ReservationListPage.css'
import ReservationList from '../../Components/ReservationList/ReservationList';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import Footer from '../../Components/Admin/AdminFooter';
import PreFooter from '../../Components/PreFooter/PreFooter';

const ReservationPage = () => {
  return (
    <div>
      <AdminHeader />
      <ReservationList />
      <PreFooter />
      <Footer />
    </div>
  )
};

export default ReservationPage;
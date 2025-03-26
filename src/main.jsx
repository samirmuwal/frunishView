import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Auth/Login.jsx'
import Dasbord from './components/Dasbord.jsx'
import Adminview from './components/UsersAndAdminDetalis/Adminview.jsx'
import Usersview from './components/UsersAndAdminDetalis/Usersview.jsx'
import Countries from './components/Locations/countries.jsx'
import Sliders from './components/Master catalog/Sliders.jsx'
import Cupons from './components/Master catalog/Cupons.jsx'
import Why_choose_us from './components/Master catalog/why-choose-us.jsx'
import Testimonials from './components/Master catalog/Testimonials.jsx'
import Categories from './components/Product catalog/Categories.jsx'
import Materials from './components/Product catalog/Materials.jsx'
import Color from './components/Product catalog/Color.jsx'
import Products from './components/Product catalog/Products.jsx'
import Contact_enquiry from './components/Enquirys/Contact_enquiry.jsx'
import News_letters from './components/Enquirys/News_letters.jsx'
import Payment from './components/Configuration/Payment.jsx'
import Configurations from './components/Configuration/Configurations.jsx'
import { FaG } from 'react-icons/fa6'
import Cmg_page from './components/CMG_Page/Cmg_page.jsx'
import Constant from './components/constantApi/constant.jsx'
import Modal from './components/common/Modal.jsx'






const routes = createBrowserRouter(

  createRoutesFromElements(

    <>
      <Route path="/" element={<Login />} />,
      // Add more routes here...
      <Route path="/" element={<RootLayout />} >
  // Add more routes here...
        <Route path="/" element={<Home />} />

      </Route>

      <Route element={<RootLayout />}>
        <Route path="furniture">
          <Route path="admin-panel" >

            <Route path="dashboard" element={<Dasbord />} />
            <Route path="admin" element={<Adminview />} />
            {/* <Route path="admin/edit/:id" element={<Modal />} /> */}
            <Route path="users" element={<Usersview />} />
            <Route path="countries" element={<Countries />} />
            <Route path="sliders" element={<Sliders />} />
            <Route path="cupons" element={<Cupons />} />
            <Route path="why-choose-us" element={<Why_choose_us />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="categories" element={<Categories />} />
            <Route path="materials" element={< Materials />} />
            <Route path="color" element={<Color />} />
            <Route path="products" element={<Products />} />
            <Route path="contact-enquiry" element={<Contact_enquiry />} />
            <Route path="news-letters" element={<News_letters />} />
            <Route path="payment-gateways" element={<Payment />} />
            <Route path="configurations" element={<Configurations />} />
            <Route path="cms-pages" element={<Cmg_page />} />
            <Route path="faqs" element={<FaG />} />

          </Route>
        </Route>
      </Route>
    </>
  ))

createRoot(document.getElementById('root')).render(
  <>
    <>
      <Constant>
        <RouterProvider router={routes} />
      </Constant>


    </>

  </>,
)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout/Layout';
import { Status404 } from '../pages/Status404/Status404';
import { Home } from '../pages/Home/Home';
import { Login } from '../containers/login/LogIn';
import { SignUp } from '../containers/signUp/SignUp';
import { PasswdRecovery } from '../containers/PasswdRecovery/PasswdRecovery';
import { CreateNewpasswd } from '../containers/CreateNewpasswd/CreateNewpasswd';

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/password-recovery" element={<PasswdRecovery />} />
          <Route exact path="/create-password" element={<CreateNewpasswd />} />
          <Route path="*" element={<Status404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

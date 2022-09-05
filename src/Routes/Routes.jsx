import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/login/LogIn';
import { SignUp } from '../pages/signUp/SignUp';
import { PasswdRecovery } from '../pages/PasswdRecovery/PasswdRecovery';
import { PasswdRecoveryEmail } from '../pages/PasswdRecoveryEmail/PasswdRecoveryEmail';
import { CreateNewPasswd } from '../pages/CreateNewpasswd/CreateNewPasswd';
import { Status404 } from '../pages/Status404/Status404';

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
          <Route exact path="/password-recovery" element={<PasswdRecovery />} />
          <Route
            exact
            path="/password-recovery-email"
            element={<PasswdRecoveryEmail />}
          />
          <Route exact path="/create-password" element={<CreateNewPasswd />} />
          <Route path="*" element={<Status404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

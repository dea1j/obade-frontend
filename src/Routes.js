import React from "react";

import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router
} from "react-router-dom";

import LandingPage from "./components/pages/landingPage/Index";
import SignUp from "./components/auth/SignUp/SignUp";
import SignIn from "./components/auth/SignIn/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";
import NewPassword from "./components/auth/ForgotPassword/NewPassword";

import Dashboard from "./components/pages/dashboard/Dashboard";
import TransactionHistory from "./components/pages/history/TransactionHistory";
import Profile from "./components/pages/profile/Profile";
import MyWallet from "./components/pages/wallet/MyWallet";
import PurchaseAirtime from "./components/pages/purchase/purchaseAirtime";
import PurchaseData from "./components/pages/purchase/purchaseData";
import AirtimeSuccess from "./components/pages/purchase/AirtimeSuccess";
import PersonalInfo from "./components/pages/profile/profile-components/PersonalInfo";
import Support from "./components/pages/profile/profile-components/Support";

// import ProtectedRoute from "./components/ProtectedRoute";
import { UserContextProvider } from "./utils/context/UserContext";


export default function AppRoutes() {
  return (
    <>
    <UserContextProvider>
        <Router>
            <Routes>
                <Route path="/landingPage" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                path="/password-reset"
                element={<NewPassword />}
                />
                <Route path="/" element={<Navigate replace to="/landingPage" />} />
                {/* )Page not found Syntax */}
                <Route path="*" element={<h1>NOT FOUND</h1>} />

                {/* Protected Routes */}
                <Route
                path="/dashboard"
                element={
                    // <ProtectedRoute>
                    <Dashboard />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/purchaseAirtime"
                element={
                    <PurchaseAirtime />
                }
                />
                <Route
                path="/purchaseData"
                element={
                    <PurchaseData />
                }
                />
                <Route
                path="/myWallet"
                element={
                    // <ProtectedRoute>
                    <MyWallet />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/transactionHistory"
                element={
                    // <ProtectedRoute>
                    <TransactionHistory />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/profile"
                element={
                    // <ProtectedRoute>
                    <Profile />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/airtimeSuccess"
                element={
                    // <ProtectedRoute>
                    <AirtimeSuccess />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/personalInfo"
                element={
                    // <ProtectedRoute>
                    <PersonalInfo />
                    // </ProtectedRoute>
                }
                />
                <Route
                path="/support"
                element={
                    // <ProtectedRoute>
                    <Support />
                    // </ProtectedRoute>
                }
                />
            </Routes>
        </Router>
    </UserContextProvider>
    </>
  );
}
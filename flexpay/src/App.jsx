import WHY from './componet/WHY'
import HOW from './componet/HOW'
import Login from "./pages/login"
import Register from "./pages/register"
import Home from './pages/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './layout/Rootlayout'

import MyLending from './pages/my-Lendings'
import WalletPage from './pages/wallet'
import LoanSuggestions from './pages/loanSuggestions'
import KycRegistration from './pages/KYC_Registration'
import LoanRequest from './pages/LoanRequest'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='why-us' element={<WHY />} />
          <Route path='How-it-works' element={<HOW />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='myLending' element={<MyLending />} />
        <Route path='Wallet' element={<WalletPage />} />
        <Route path='LoanSuggestions' element={<LoanSuggestions />} />
        <Route path='Kyc' element={<KycRegistration />} />
        <Route path='Loan-request' element={<LoanRequest />} />
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Dashboard /> */}

    </>
  )
}
export default App

import OnboardingPage from "./Pages/Onboarding"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import SignUpForm from "./Pages/SignUp"
import Home from "./Pages/Home"
import CartPage from "./Pages/CartPage"
import OrderSummary from "./Pages/OrderSummary"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderSummary />} />
      </Routes>
    </div>
  )
}

export default App

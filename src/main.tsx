import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.tsx'
import "./i18n/index.ts"
import Home from './pages/Home.tsx'
import Catalog from './pages/Catalog.tsx'
import Cart from './pages/Cart.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './providers/CartProvider.tsx'
import AuthProvider from './providers/AuthProvider.tsx'
import Laptops from './pages/Laptops.tsx'
import ComponentsPage from './pages/ComponentsPage.tsx'
import Peripherals from './pages/Peripherals.tsx'
import Offers from './pages/Offers.tsx'
import SearchPage from './pages/SearchPage.tsx'
import AccountPage from './pages/AccountPage.tsx'
import LogInPage from './pages/LogInPage.tsx'
import Register from './pages/Register.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element= {<MainLayout />}>
                        <Route index element={<Home/>} />
                        <Route path='catalog' element={<Catalog/>} />
                        <Route path='laptops' element={<Laptops/>} />
                        <Route path='components' element={<ComponentsPage/>} />
                        <Route path='peripherals' element={<Peripherals/>} />
                        <Route path='offers' element={<Offers/>} />
                        <Route path='search' element={<SearchPage/>} />
                        <Route path='cart' element={<Cart/>} />
                        <Route path='account' element={<AccountPage/>} />
                        <Route path='account/login' element={<LogInPage/>} />
                        <Route path='account/register' element={<Register/>} />
                        <Route path='profile' element={<ProtectedRoute />} />
                    </Route>
                </Routes>
            </BrowserRouter>        
        </CartProvider>
    </AuthProvider>
)

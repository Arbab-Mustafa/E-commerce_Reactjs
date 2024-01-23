import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct';
import CartPage from './shop/CartPage';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import ContactPage from './contact/ContactPage.jsx';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Login from './components/login';
import SignUp from './components/Sign-up';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlog />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: 'shop/:id',
        element: <SingleProduct />,
      },
      {
        path: '/cart-page',
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

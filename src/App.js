import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Product.';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendsDetails from './Components/FriendsDetails/FriendsDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          loader : async() =>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path:'/friend/:friendId',
          loader:async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:<FriendsDetails></FriendsDetails>
        },
        {
          path:'posts',
          loader: async() =>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element:<Posts></Posts>
        },
        {
          path:'/post/:postId',
          loader: async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element:<PostDetails></PostDetails>
        }      
      ]
    },
    { path: '/about', element: <About></About> },
    { path: '*', element: <div>This route not found</div> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

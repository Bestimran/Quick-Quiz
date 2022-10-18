
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Static from './Components/Static/Static';
import Topics from './Components/Topics/Topics';



function App() {
  const router = createBrowserRouter([
    {
     path:'/',
     element:<Main></Main>,
     children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'topics',
        element:<Topics></Topics>
      },
      {
        path:'static',
        element:<Static></Static>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }

     ]
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Practice from './Components/Practice/Practice';
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
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topics></Topics>
      },
      {
        path:'static',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Static></Static>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'/topic/:practiceId',
        loader: async ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.practiceId}`);
        },
        element:<Practice></Practice>
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

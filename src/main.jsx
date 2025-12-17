import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Weather from "./pages/Wether.jsx";
import TodoList from "./pages/Todolist.jsx";
import HourPage from "./pages/HourPage.jsx";
import StaffTable from "./components/StaffTable.jsx"
import CurrencyConverter from "./pages/CurrencyConverter.jsx";
import OrderList from "./components/OrderList.jsx";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "weather",
        element : <Weather/>
      },
      {
        path: "todo",
        element : <TodoList/>
      },
      {
        path: "hour",
        element : <HourPage/>
      },
       {
        path: "staff",
        element : <StaffTable/>
      },
      {
        path:"converter",
        element: <CurrencyConverter/>
      },
      {
        path: "orderlist",
        element : <OrderList/>
      },
      {
        path: "product",
        element : <Product/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import UserLayout from "./user/layout";
import Profile from "./user/profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/user',
        Component: UserLayout,
        children: [
            {
                path: '/user/profile',
                Component: Profile,
            }
        ]
    }
])
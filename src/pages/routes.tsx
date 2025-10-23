import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import UserLayout from "./user/layout";
import Profile from "./user/profile";
import Wallet from "./user/wallet";
import Security from "./user/security";
import Sanctions from "./user/sanctions";
import LinkedAccounts from "./user/linked-accounts";

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
            },
            {
                path: '/user/wallet',
                Component: Wallet,
            },
            {
                path: '/user/security',
                Component: Security,
            },
            {
                path: '/user/sanctions',
                Component: Sanctions,
            },
            {
                path: '/user/linked-accounts',
                Component: LinkedAccounts,
            }
        ]
    }
])
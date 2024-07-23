import { createBrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import AdminLayout from "./layout/AdminLayout";
import LoginLayout from "./layout/LoginLayout";
import AdminDashboard from "./pages/admin/dashboard";
import LoginPage from "./pages/login";
import Root from "./pages/main";
import { IMenu } from "./types/menu";

export const adminMenu: IMenu[] = [
  { id: 0, text: "Home", link: "/", isSub: false },
  {
    id: 1,
    text: "Services",
    link: "/about",
    isSub: false,
    subMenus: [
      { id: 4, text: "Home1", link: "/", isSub: true },
      { id: 5, text: "Home2", link: "/", isSub: true },
    ],
  },
  { id: 2, text: "Services", link: "/services", isSub: false },
  { id: 3, text: "Contact", link: "/contact", isSub: false },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminLayout>
        <MainContent>
          <AdminDashboard />
        </MainContent>
      </AdminLayout>
    ),
  },
  {
    path: "/login-page",
    element: (
      <LoginLayout>
        <LoginPage />
      </LoginLayout>
    ),
  },
]);

export default router;

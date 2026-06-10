import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Webdev, Cybersecurite, Gaming, IA, Modelisation, Litterature } from "./pages/realisations.jsx";
import NotFound from './pages/notFound';
import Propos from "./pages/propos.jsx";
import Contacts from "./pages/contacts.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "webdev",
        element: <Webdev />,
      },
      {
        path: "cybersecurite",
        element: <Cybersecurite />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "IA",
        element: <IA />,
      },
      {
        path: "modelisation",
        element: <Modelisation />,
      },
      {
        path: "litterature",
        element: <Litterature />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: "/propos",
    element: <Propos />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

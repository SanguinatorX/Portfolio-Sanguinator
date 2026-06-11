import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Webdev, Cybersecurite, Gaming, IA, Modelisation, Litterature } from "./components/realisations.jsx";
import NotFound from './components/notFound';
import Propos from "./components/propos.jsx";
import Contacts from "./components/contacts.jsx";

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

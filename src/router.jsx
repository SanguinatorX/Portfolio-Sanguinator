import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Webdev, Cybersecurite, Gaming, IA, Modelisation, Litterature } from "./pages/realisations.jsx";
import NotFound from './pages/notFound';
import Feedback from "./pages/feedback.jsx";
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
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Webdev, Cybersecurite, Gaming, IA, Modelisation, Litterature } from "./realisations.jsx";
import NotFound from './notFound';

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
]);

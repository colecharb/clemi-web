import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
  type RouteProps,
} from 'react-router-dom';
import Page from './components/Page.tsx';
import Navigation from './components/Navigation.tsx';
import FieldNotes from './routes/FieldNotes.tsx';
import Clementina from './routes/Clementina.tsx';
import Sketchbook from './routes/Sketchbook.tsx';
import MessKit from './routes/MessKit.tsx';
import Contact from './routes/Contact.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const ROUTES: (RouteProps & { path: string; name: string })[] = [
  { path: '/', name: 'Clementina', element: <Clementina />, index: true },
  { path: '/field-notes', name: 'Field Notes', element: <FieldNotes /> },
  { path: '/sketchbook', name: 'Sketchbook', element: <Sketchbook /> },
  { path: '/mess-kit', name: 'Mess Kit', element: <MessKit /> },
  { path: '/contact', name: 'Contact', element: <Contact /> },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navigation routes={ROUTES} />
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route
            path={path}
            element={<Page>{element}</Page>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

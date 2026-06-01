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
import FieldGuide from './routes/FieldGuide.tsx';
import Clementina from './routes/Clementina.tsx';
import Sketchbook from './routes/Sketchbook.tsx';
// import MessKit from './routes/MessKit.tsx';
import Contact from './routes/Contact.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import PhotoAlbum from './routes/PhotoAlbum.tsx';
import Kitchen from './routes/Kitchen.tsx';

const ROUTES: (RouteProps & { path: string; name: string })[] = [
  { path: '/', name: 'Clementina', element: <Clementina />, index: true },
  { path: '/field-guide', name: 'The Field Guide', element: <FieldGuide /> },
  { path: '/field-notes', name: 'Work Log', element: <FieldNotes /> },
  { path: '/kitchen', name: 'Kitchen', element: <Kitchen /> },

  { path: '/sketchbook', name: 'Sketchbook', element: <Sketchbook /> },
  { path: '/photo-album', name: 'Photo Album', element: <PhotoAlbum /> },
  // { path: '/mess-kit', name: 'Mess Kit', element: <MessKit /> },
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

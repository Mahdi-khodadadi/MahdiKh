import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { BlogPage, Sections, DefaultLayout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-backg">
        <Routes>
          <Route path="/" element={<DefaultLayout><Sections /></DefaultLayout>} />
          <Route path="/blog" element={<Navigate to="/" />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

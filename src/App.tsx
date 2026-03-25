import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Books from './components/Books';
import Records from './components/Records';
import Checkout from './components/Checkout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/books" element={<Books />} />
              <Route path="/records" element={<Records />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

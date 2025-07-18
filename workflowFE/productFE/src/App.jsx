import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppList from './pages/AppList';
import AppDetail from './pages/AppDetail';
import WorkflowEditor from './pages/WorkflowEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppList />} />
        <Route path="/apps/:appId" element={<AppDetail />} />
        <Route path="/apps/:appId/workflow" element={<WorkflowEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

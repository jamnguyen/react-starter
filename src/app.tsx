import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE } from 'constants/routes';
import { HomePage } from 'pages';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate to={ROUTE.HOME} replace />} />
    </Routes>
  );
}

export default App;

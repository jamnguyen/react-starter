import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from '~/src/constants/routes';
import { HomePage } from '~/src/pages';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate to={ROUTE.HOME} replace />} />
    </Routes>
  );
}

export default Router;

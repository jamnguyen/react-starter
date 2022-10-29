import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '~/src/constants/routes';
import { HomePage, StyleGuidePage } from '~/src/pages';

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME.path} element={<HomePage />} />
      <Route path={ROUTES.STYLE_GUIDE.path} element={<StyleGuidePage />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME.path} replace />} />
    </Routes>
  );
}

export default Router;

import { Navigate, Route, Routes } from 'react-router';
import { LoginView } from '@/views/LoginView/LoginView';
import { TableView } from '@/views/TableView/TableView';
import { NotFoundView } from '@/views/NotFoundView/NotFoundView';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { GuestRoute } from '@/routes/GuestRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <GuestRoute>
            <LoginView />
          </GuestRoute>
        }
      />
      <Route
        path="/table"
        element={
          <ProtectedRoute>
            <TableView />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

AppRouter.displayName = 'AppRouter';

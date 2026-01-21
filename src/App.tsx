import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Intake from "./pages/Intake";
import Notifications from "./pages/Notifications";
import { NotificationsProvider } from "./features/notifications/NotificationsProvider";
import { IntakeProvider } from "./features/intake/IntakeProvider";

export default function App() {
  return (
    <BrowserRouter>
      <IntakeProvider>
        <NotificationsProvider>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/intake" element={<Intake />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </AppLayout>
        </NotificationsProvider>
      </IntakeProvider>
    </BrowserRouter>
  );
}

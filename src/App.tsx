import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthProvider";
import { NetworkStatusProvider } from "@/context/NetworkStatusProvider";
import { AppRouter } from "@/routes/AppRouter";
import { OfflineDialog } from "@/components/OfflineDialog";

const App = () => {
  return (
    <BrowserRouter>
      <NetworkStatusProvider>
        <AuthProvider>
          <AppRouter />
          <OfflineDialog />
        </AuthProvider>
      </NetworkStatusProvider>
    </BrowserRouter>
  );
};

App.displayName = "App";

export default App;

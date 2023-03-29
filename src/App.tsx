import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Layout } from "./Layout";
import { NavBar } from "./components/NavBar";
import { queryClient } from "./services/queryClient";
import Divider from "antd/es/divider";
import { DrawerProvider } from "./contexts/DrawerContext";
import { GeneralProvider } from "./contexts/GeneralContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GeneralProvider>
        <DrawerProvider>
          <Layout>
            <NavBar />
            <Divider type="horizontal" className="my-0 border" />
            <div className="pt-6 max-[910px]:pt-4">
              <Outlet />
            </div>
          </Layout>
        </DrawerProvider>
      </GeneralProvider>
    </QueryClientProvider>
  );
}

export default App;

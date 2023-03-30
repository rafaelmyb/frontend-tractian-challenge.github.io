import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import Divider from "antd/es/divider";
import { Layout } from "./Layout";
import { NavBar } from "./components/extendedComponents";
import { queryClient } from "./services/queryClient";
import { DrawerProvider, GeneralProvider } from "./contexts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GeneralProvider>
        <DrawerProvider>
          <Layout>
            <NavBar />
            <Divider type="horizontal" className="my-0 border" />
            <div className="pt-6 h-full max-[910px]:pt-4">
              <Outlet />
            </div>
          </Layout>
        </DrawerProvider>
      </GeneralProvider>
    </QueryClientProvider>
  );
}

export default App;

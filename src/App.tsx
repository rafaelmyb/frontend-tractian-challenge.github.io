import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./services/queryClient";
import { DrawerProvider, GeneralProvider, ModalsProvider } from "./contexts";
import { Layout } from "./layout";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GeneralProvider>
        <ModalsProvider>
          <DrawerProvider>
            <Layout>
              <Outlet />
            </Layout>
          </DrawerProvider>
        </ModalsProvider>
      </GeneralProvider>
    </QueryClientProvider>
  );
}

export default App;

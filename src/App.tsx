import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Layout } from "./Layout";
import { NavBar } from "./components/NavBar";
import { queryClient } from "./services/queryClient";
import Divider from "antd/es/divider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <NavBar />
        <Divider type="horizontal" className="my-0 border" />
        <div className="pt-8">
          <Outlet />
        </div>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

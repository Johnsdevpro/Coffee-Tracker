import { Loader } from "lucide-react";
import CoffeeForm from "./components/CoffeeForm";
import { DialogProvider } from "./components/DialogProvider";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { globalUser, globalData, isLoading } = useAuth();
  const isAuthenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length;

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );

  return (
    <>
      <DialogProvider>
        <Layout isAuthenticated={isAuthenticated}>
          <Hero />
          <CoffeeForm isAuthenticated={isAuthenticated} />
          {isAuthenticated && isLoading && (
            <div className="flex flex-col mt-3 items-center justify-center">
              <Loader className="text-orange-500 text-lg md:text-2xl animate-spin" />
            </div>
          )}
          {isAuthenticated && isData && authenticatedContent}
        </Layout>
      </DialogProvider>
    </>
  );
};

export default App;

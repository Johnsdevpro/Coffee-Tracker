import CoffeeForm from "./components/CoffeeForm";
import { DialogProvider } from "./components/DialogProvider";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { globalUser, globalData } = useAuth();
  const isAuthenticated = false;
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
          {globalUser && authenticatedContent}
        </Layout>
      </DialogProvider>
    </>
  );
};

export default App;

import Header from "./component/header";
import Footer from "./component/footer";
import Shop from "./component/Shop";
import {ContextProvider} from "./context"



function App() {
  return (
    <>
    

          <Header />
          <ContextProvider>
          <Shop/>
          </ContextProvider>
          
          <Footer />
  
    </>
  );
}

export default App;

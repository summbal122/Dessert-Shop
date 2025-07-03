import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
const App = () => {
  return (
    <main>
      <Provider store={appStore}>
        <Header/>
      <Body/>
      <Footer/> 
      </Provider>

     
    </main>
  );
};

export default App;

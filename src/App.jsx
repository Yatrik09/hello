import Table from "./component/Table";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Table/>} />
  </Routes>
  </BrowserRouter>
  )
}
export default App
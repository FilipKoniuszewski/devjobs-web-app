import { Routes, Route } from "react-router-dom";
import { JobPage } from "./components/JobPage/JobPage";
import { JobsListPage } from "./components/JobsListPage/JobsListPage";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/devjobs-web-app/' element={<JobsListPage />} />
        <Route path='/devjobs-web-app/:offerId' element={<JobPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { JobPage } from "./components/JobPage/JobPage";
import { JobsListPage } from "./components/JobsListPage/JobsListPage";
import { Layout } from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<JobsListPage />} />
        <Route path=':id' element={<JobPage />} />
      </Route>
    </Routes>
  );
};

export default App;

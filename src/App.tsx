import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import GlobalFallback from "./pages/fallback/GlobalFallback";

function App() {
  return <RouterProvider router={router} fallbackElement={<GlobalFallback />} />;
}

export default App;

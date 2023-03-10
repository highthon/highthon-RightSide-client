import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./shared/styles/global.style";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);

reportWebVitals();

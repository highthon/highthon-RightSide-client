import styled from "styled-components";
import Router from "./components/Router/Router";

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>

  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;

import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomerPage from "./components/customerPage/customerPage";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <CustomerPage />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </QueryClientProvider>
  );
}

export default App;

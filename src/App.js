import { TodoProvider } from "./context";
import Container from "./container";
function App() {
  return (
    <TodoProvider>
      <Container />
    </TodoProvider>
  );
}
export default App;

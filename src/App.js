import { SocketContext, socket } from "./context/socket";
import Chat from "./components/chat";

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Chat />
    </SocketContext.Provider>
  );
};

export default App;

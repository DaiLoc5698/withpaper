import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  PaperEmbeddedWalletSdk,
  RecoveryShareManagement,
} from "@paperxyz/embedded-wallet-service-sdk";

function App() {
  const [paperManaged, setPaperManaged] = useState();
  useEffect(() => {
    const paperManaged = new PaperEmbeddedWalletSdk({
      clientId: "578407dc-6957-409e-832c-25b5a48a58ab",
      chain: "Mumbai",
      advancedOptions: {
        recoveryShareManagement: RecoveryShareManagement.AWS_MANAGED,
      },
    });
    setPaperManaged(paperManaged);
  }, []);

  const loginWithPaperModal = async () => {
    try {
      await paperManaged?.auth.loginWithPaperModal();
    } catch (e) {
      console.log(".......e", e);
      // use cancelled login flow
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ fontSize: "20px", padding: "6px 20px" }}
          onClick={loginWithPaperModal}
        >
          Login WithPaper Modal
        </button>
      </header>
    </div>
  );
}

export default App;

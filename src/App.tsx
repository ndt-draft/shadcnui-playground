import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-evenly">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-zinc-700 text-yellow-200 p-2 mb-4">Vite + React</h1>
      <Card className="bg-primary text-primary-foreground mb-4">
        <CardContent>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Alert>
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription>
              Edit <code>src/App.tsx</code> and save to test HMR
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      <p className="bg-yellow-200 text-blue-600 p-2">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

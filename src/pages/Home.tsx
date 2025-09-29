import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AccordionDemo } from "@/components/test-components/Accordion-Demo";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button>konichiwa</Button>
      <h1>Vite + React</h1>
      <p className="text-2xl" data-test="fundamental-header">
        This P tag has a tag: `data-test="fundamental-header"`
      </p>
      <Button variant={"secondary"} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <div className="w-[70%]">
        <AccordionDemo />
      </div>
    </>
  );
}

export default Home;

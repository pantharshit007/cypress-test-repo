import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function Forms() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <div className="bg-slate-100 text-black h-[230px] p-3 rounded-md">
      <h1 className="text-4xl underline my-2">Testing Forms</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-lg border-2 p-4 border-black"
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-test="email-input"
          />
        </label>
        <Button data-test="subscribe-btn" type="submit">
          Subscribe
        </Button>
      </form>

      {email && <p className="text-2xl">submitted email: {email}</p>}
    </div>
  );
}

export default Forms;

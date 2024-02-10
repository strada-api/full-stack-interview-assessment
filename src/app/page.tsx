"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import destinationExample from "@/data/example-destination";
import sourceExample from "@/data/example-source";
import { CheckIcon, ListXIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const defaultSource = JSON.stringify(sourceExample, null, 2);
  const defaultDestination = JSON.stringify(destinationExample, null, 2);

  const [sourceSObj, setSourceObj] = useState();
  const [sourceDObj, setDObj] = useState();
  // console.log(sourceSObj);
  // console.log(sourceDObj);
  return (
    <div>
      <main className="flex max-w-5xl min-h-screen  items-center p-12 m-auto">
        <JsonValidator title="Source" setObject={setSourceObj} />
        <JsonValidator title="Destination" setObject={setDObj} />
      </main>
      <Button
        onClick={() => {
          mapJson(sourceSObj);
          mapJson(sourceDObj);
        }}
        disabled={!sourceSObj || !sourceDObj}
      >
        Next
      </Button>
    </div>
  );
}

const JsonValidator = ({ title, setObject }: { title: string }) => {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  return (
    <div className="p-10 w-1/2">
      <p className="mb-4 font-bold">{title}</p>
      <Textarea
        onChange={(e) => {
          setText(e.target.value);
          try {
            const pd = JSON.parse(e.target.value);
            setObject(pd);
            setValid(true);
          } catch {
            setObject(undefined);
            setValid(false);
          }
        }}
        rows={25}
      />
      {valid ? (
        <div className="flex text-green-500">
          <CheckIcon />
          <p>Valid JSON</p>{" "}
        </div>
      ) : (
        <div className="flex text-red-500">
          <XIcon />
          <p>Invalid JSON</p>
        </div>
      )}
    </div>
  );
};

const mapJson = (json: string) => {
  const output = { type: "object", properties: {} };
  // const json = JSON.parse(jsonStr);
  Object.entries(json).map(([key, value]) => {
    const type = typeof value;

    if (type === "object") {
      const properties = {};
      Object.entries(value).map(([k1, v1]) => {
        properties[k1] = typeof v1;
      });
      output.properties[key] = { type, properties };
    } else {
      output.properties[key] = { type };
    }
  });
  console.log(output);
};

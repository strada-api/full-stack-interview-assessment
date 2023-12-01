"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import sourceExample from "@/data/example-source"
import destinationExample from "@/data/example-destination"
import { ChangeEventHandler, useState } from "react"


export default function Home() {
  const defaultSource = JSON.stringify(sourceExample, null, 2)
  const defaultDestination = JSON.stringify(destinationExample, null, 2)

  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")

  const onChangeSource: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const value = event.target.value
    try {
      JSON.parse(value)
    } catch (error) {
    } finally {
      setSource(value)
    }
  }
  const onChangeDestination: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const value = event.target.value
    try {
      JSON.parse(value)
    } catch (error) {
    } finally {
      setDestination(value)
    }
  }

  const defaultTextAreaProps = {
    className: "h-[300px] w-[200px]",
    placeholder: "Paste JSON here",
  }

  return (
    <main className="flex max-w-5xl min-h-screen flex-col items-center p-12 m-auto">
      <div className="z-10 w-full items-center text-sm lg:flex">
        <h2 className="text-xl font-semibold m-auto">Strada Mapper</h2>
      </div>

      <div className="flex space-x-10 mt-4">
        <Textarea onChange={onChangeSource} {...defaultTextAreaProps} value={source} />
        <Textarea onChange={onChangeDestination} {...defaultTextAreaProps} value={destination} />
      </div>

      <div className="mt-6 max-w-md flex justify-end w-full">
        <Button>Submit</Button>
      </div>
    </main>
  )
}

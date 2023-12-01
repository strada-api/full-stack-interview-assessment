import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import destinationExample from "@/data/example-destination"
import sourceExample from "@/data/example-source"
import { ListXIcon } from 'lucide-react';


export default function Home() {
  const defaultSource = JSON.stringify(sourceExample, null, 2)
  const defaultDestination = JSON.stringify(destinationExample, null, 2)

  return (
    <main className="flex max-w-5xl min-h-screen flex-col items-center p-12 m-auto">
    </main>
  )
}

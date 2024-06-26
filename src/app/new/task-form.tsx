import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function TaskForm() {
  async function createTask(formData: FormData) {
    "use server"
    const userName = formData.get("name")
    const description = formData.get("description")
    const priority = formData.get("priority")
    console.log(userName, description, priority)

  }

  return (
    <form action={createTask} >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>Fill out the form below to create a new task</CardDescription>
        </CardHeader>
        <CardContent>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre de la tarea</Label>
              <Input name="name" id="name" placeholder="Name of your task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descripcion</Label>
              <Textarea
                name="description"
                id="description" placeholder="Type your message here" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Prioridad</Label>
              <Select name="priority">
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create task</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

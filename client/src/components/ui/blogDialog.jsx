import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TaskDialog({ onSubmit }) {
  const [featuredImage, setFeaturedImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleCreate = () => {
    onSubmit({ featuredImage, title, content, category });
    setFeaturedImage("");
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Blog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Blog</DialogTitle>
          <DialogDescription>
            Create a new blog by providing a featured image address, title, content and category.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Feature Image" value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} />
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea
          placeholder="Content"
          className="mt-2"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
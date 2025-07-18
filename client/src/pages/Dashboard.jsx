import { useEffect, useState } from "react";
import API from "@/services/api";
import BlogCard from "@/components/ui/blogCard";
import BlogDialog from "@/components/ui/blogDialog";
import Navigationbar from "@/components/ui/navigationBar";
import { toast } from "sonner";

export default function UserDashboard() {
  const [blogs, setBlogs] = useState([]);

  const load = async () => {
    const res = await API.get("/blogs/me");
    setBlogs(res.data);
  };

  useEffect(() => { load(); }, []);

  const createBlog = async (payload) => {
    const res = await API.post("/blogs", payload);
    setBlogs(prev => [res.data, ...prev]);
    toast("Blog created ✔️");
  };

  const deleteBlog = async (id) => {
    await API.delete(`/blogs/${id}`);
    setBlogs(prev => prev.filter(b => b._id !== id));
    toast("Blog deleted 🗑️" );
  };

  return (
    <>
      <Navigationbar />
      <main className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold"> Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your personal blogs</p>
          </div>
          <BlogDialog onSubmit={createBlog} />
        </div>

        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blu-200 dark:border-blue-800">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">User's View</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            You can create, edit, and delete your own blogs. Total blogs: {blogs.length}
          </p>
        </div>

        <section>
          {blogs.map(b => (
            <BlogCard
              key={b._id}
              blog={b}
              onDelete={deleteBlog}
            />
          ))}
        </section>
      </main>
    </>
  );
}
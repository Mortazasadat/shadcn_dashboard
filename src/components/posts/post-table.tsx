import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Post } from "@/types/post";
import posts from "@/data/post";
import { Button } from "../ui/button";
import Link from "next/link";
import { Delete, Edit2, View } from "lucide-react";

interface postTableProps {
  limit?: number;
  title?: string;
}

function PostTable({ limit, title }: postTableProps) {
  const sortedPost: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //filter on limits

  const filterPostLimit = limit ? sortedPost.slice(0, limit) : sortedPost;

  return (
    <div className="mt-10">
      <h2 className="text-2xl pl-3 mb-4 font-semibold">
        {title ? title : "Latest posts"}
      </h2>
      <div className="!overflow-x-scroll lg:px-8">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black dark:text-white">
                Title
              </TableHead>
              <TableHead className="text-black dark:text-white">
                Author
              </TableHead>
              <TableHead className="text-black dark:text-white">Date</TableHead>
              <TableHead className="text-right dark:text-white text-black ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterPostLimit.map((post: Post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium ">{post.title}</TableCell>
                <TableCell> {post.author} </TableCell>
                <TableCell> {post.date} </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-x-1">
                    <Button variant={"outline"} size="icon">
                      <Link href={`/posts/view/${post.id}`}>
                        <View className=" w-5 h-5 dark:text-white transition-all  dark:scale-100" />{" "}
                      </Link>
                    </Button>
                    <Button variant={"outline"} size="icon">
                      <Link href={`/posts/edit/${post.id}`}>
                        <Edit2 className=" w-5 h-5 dark:text-white transition-all  dark:scale-100" />{" "}
                      </Link>
                    </Button>

                    <Dialog>
                      <DialogTrigger>
                        {" "}
                        <Button variant={"outline"} size="icon">
                          <Delete className=" w-5 h-5 dark:text-white transition-all  dark:scale-100" />{" "}
                        </Button>{" "}
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default PostTable;

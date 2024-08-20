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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Post } from "@/types/post";
import posts from "@/data/post";
import { Button } from "../ui/button";
import Link from "next/link";

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
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" outline-none focus:outline-none">
                      {" "}
                      <Button size="sm" className="hover:cursor-pointer ">
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="relative">
                        <Link href={`/posts/view/${post.id}`}>
                          View <span className=" absolute  inset-0" />{" "}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="relative">
                        <Link href={`/posts/edit/${post.id}`}>
                          Edit <span className=" absolute  inset-0" />
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

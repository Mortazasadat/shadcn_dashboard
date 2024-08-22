import BackButton from "@/components/dashboard/back-button";
import PostPagination from "@/components/posts/post-pagination";
import PostTable from "@/components/posts/post-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function PostPage() {
  return (
    <div className="px-5">
      <div className="flex justify-between items-start">
        <BackButton link="/" text="Back" />
        <Button>
          <Link href="posts/new"> New post</Link>
        </Button>
      </div>
      <PostTable title="All posts" />
      <PostPagination />
    </div>
  );
}

export default PostPage;

import BackButton from "@/components/dashboard/back-button";
import PostPagination from "@/components/posts/post-pagination";
import PostTable from "@/components/posts/post-table";
import React from "react";

function PostPage() {
  return (
    <div className="px-5">
      <BackButton link="/" text="Back" />
      <PostTable title="All posts" />
      <PostPagination />
    </div>
  );
}

export default PostPage;

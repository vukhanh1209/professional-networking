"use client";

import isAuth from "@/components/common/isAuth";
import PostedJobDetail from "@/components/page/Customer/Post/PostedJobDetail";

function CustomerPostedJob() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem]">
      <PostedJobDetail />
    </main>
  );
}
export default isAuth(CustomerPostedJob);

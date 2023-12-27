"use client";
import isAuth from "@/components/common/isAuth";
import PostList from "@/components/page/Customer/Post/PostList";

function CustomerHome() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <PostList />
    </main>
  );
}
export default isAuth(CustomerHome);

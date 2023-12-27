"use client";

import isAuth from "@/components/common/isAuth";
import ApplicationDetail from "@/components/page/Customer/Application/ApplicationDetail";

function CustomerApplicationDetail() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <ApplicationDetail />
    </main>
  );
}
export default isAuth(CustomerApplicationDetail);

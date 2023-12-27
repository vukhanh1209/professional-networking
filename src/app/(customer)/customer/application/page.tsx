"use client";
import isAuth from "@/components/common/isAuth";
import ApplicationList from "@/components/page/Customer/Application/ApplicationList";

function CustomerApplication() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <ApplicationList />
    </main>
  );
}

export default isAuth(CustomerApplication);

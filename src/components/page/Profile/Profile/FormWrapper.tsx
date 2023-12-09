"use client";
type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
  onClose: any;
  onSave: any;
  handleSubmit: any;
};

export default function FormWrapper({
  children,
  title,
  onClose,
  onSave,
  handleSubmit,
}: FormWrapperProps) {
  return (
    <div className="fixed top-0 left-0 irght-0 flex w-full items-center justify-center h-screen bg-blur-form z-[100] px-10">
      <form
        onSubmit={handleSubmit(onSave)}
        className="h-fit w-full md:max-w-[50%] bg-white rounded-lg"
      >
        <h1 className="font-bold text-xl text-primary-black py-4 pr-4 pl-8 border-b-2 border-silver-grey">
          {title}
        </h1>
        {children}
        <div className="flex justify-end gap-2 py-3 px-5 border-t border-t-silver-grey">
          <button
            type="button"
            onClick={onClose}
            className="text-rich-grey text-base py-2 px-6 rounded-lg hover:bg-light-grey"
          >
            Hủy
          </button>
          <button
            type="submit"
            onClick={onSave}
            className="text-white bg-primary-red text-base py-2 px-6 rounded-lg hover:bg-dark-red max-w-[140px] w-full"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}

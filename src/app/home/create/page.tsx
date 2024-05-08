import CreateCourseForm from "@/components/CreateCourseForm";
import Lorem from "@/components/Lorem";
import { getAuthSessions } from "@/lib/auth";
import { InfoIcon } from "lucide-react";

type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSessions();
  if (!session?.user) {
    return <Lorem />;
  }

  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center mt-8 text-3xl font-bold text-center sm:text-5xl">
        Start Your Journey
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary rounded-sm">
        <InfoIcon className="w-10 h-10 mr-3 text-blue-400" />
        <div className="">
          Enter the course title which you want to learn. Then specify the
          number of units along with the title that you want to learn and our AI
          will generate the course for you.
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;

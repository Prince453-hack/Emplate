import ConfirmChapters from "@/components/ConfirmChapters";
import { getAuthSessions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Info } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    courseId: string;
  };
};

const CreateChapters = async ({ params: { courseId } }: Props) => {
  const session = await getAuthSessions();
  if (!session?.user) {
    return redirect("/home/gallery");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      unit: {
        include: {
          chapters: true,
        },
      },
    },
  });

  if (!course) {
    return redirect("/home/create");
  }

  return (
    <div className="flex flex-col items-start max-w-xl mx-auto my-16">
      <h5 className="text-sm uppercase text-secondary-foreground/60">
        Course Name
      </h5>
      <h1 className="text-4xl font-bold">{course.name}</h1>
      <div className="flex p-4 mt-5 border-none bg-secondary rounded-sm">
        <Info className="w-12 h-12 mr-3 text-blue-400" />
        <div className="">
          We've generated chapters for each of your units. Look over them and
          then click the button to confirm and continue.
        </div>
      </div>

      <ConfirmChapters course={course} />
    </div>
  );
};

export default CreateChapters;
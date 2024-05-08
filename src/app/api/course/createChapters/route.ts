import { createChapterScheme } from "@/app/validators/course";
import { strict_output } from "@/lib/gpt";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { title, units } = createChapterScheme.parse(body);
    type output = {
      title: string;
      chapters: {
        youtube_search_query: string;
        chapter_title: string;
      }[];
    };

    let output_units: output = await strict_output(
      "You are an AI capable of curating course content, coming up with relevant chapter titles, and finding relevant youtube videos for each chapter",
      new Array(units.length).fill(
        `It is your job to create a course about ${title}. The user has requested to create chapter for each of the units. Then for each chapter, provide a detailed youtube search query that can be used to find an informative educational video for each chapter. Each query should give an educational informative course in youtube`
      ),
      {
        title: "title of the unit",
        chapters:
          "an array of chapters, each chapter should have a youtube search query and a chapter_title key in the JSON format",
      }
    );

    console.log(output_units);
    return NextResponse.json(output_units);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Invalid Body", { status: 400 });
    }
  }
}

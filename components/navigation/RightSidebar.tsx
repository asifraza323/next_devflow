import Routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagsCard from "../cards/TagsCard";

const hotQuestions = [
  { _id: 1, title: "what is useEffect in react.js?" },
  { _id: 2, title: "what is Context API in react.js?" },
  { _id: 3, title: "what is React Query?" },
  { _id: 4, title: "what is custom hooks in react.js?" },
  { _id: 5, title: "what is Redux toolkit?" },
];
const popularTags = [
  { _id: 1, name: "react.js", questions: 100 },
  { _id: 2, name: "javascript", questions: 200 },
  { _id: 3, name: "React Query?", questions: 75 },
  { _id: 4, name: "Next", questions: 150 },
  { _id: 5, name: "Typescript", questions: 50 },
];

const RightSidebar = () => {
  return (
    <section className="p-6 pt-36 custom-scrollbar overflow-y-auto flex flex-col justify-between gap-5 sticky right-0 top-0 shadow-light-300 dark:shadow-none light-border border-l h-screen max-xl:hidden lg:w-[350px] background-light900_dark200">
      <div>
        <h3 className="h3-bold text-light200_dark900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={Routes.PROFILE(question._id.toString())}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-6"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                className="invert-colors"
                alt="chevron-right"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex mt-7 flex-col gap-6">
          {popularTags.map(({ _id, name, questions }) => (
            <TagsCard
              key={_id}
              _id={_id.toString()}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

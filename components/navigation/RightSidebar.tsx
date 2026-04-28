import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";
const hotQuestions = [
  { _id: 1, title: "what is custom hook in React.js?" },
  { _id: 2, title: "how react query works in React.js?" },
  { _id: 3, title: "how to use Redux toolkit?" },
  { _id: 4, title: "what is React Router in React.js?" },
  { _id: 5, title: "what is Context API in React.js?" },
];
const popularTags = [
  { _id: 1, name: "react", questions: 200 },
  { _id: 2, name: "javascript", questions: 150 },
  { _id: 3, name: "typescript", questions: 100 },
  { _id: 4, name: "next", questions: 50 },
  { _id: 5, name: "react query", questions: 75 },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar overflow-y-auto p-6 pt-36 background-light900_dark200 light-border border-l sticky right-0 top-0 shadow-light-300 dark:shadow-none w-[350px] flex flex-col justify-between max-xl:hidden h-screen gap-6">
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id.toString())}
              key={_id}
              className="flex items-center justify-between gap-3 cursor-pointer"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                className="invert-colors"
                alt="chevron"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-15">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
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

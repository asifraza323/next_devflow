import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to learn React.js?",
    description: "I want to learn React.js. Can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/auth-dark.png" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn Javascript?",
    description: "I want to learn Javascript. Can anyone help me?",
    tags: [
      { _id: "1", name: "Javascript" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/auth-dark.png" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        )
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between sm:itesm-center gap-4">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient px-4 py-3 min-h-[46px] !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask Questions</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgUrl="/icons/search.svg"
          placeholder="Search questions"
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <section className="mt-10">
        <div className="flex w-full flex-col gap-6">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question._id} question={question} />
            // <h1 key={question._id}>{question.title}</h1>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

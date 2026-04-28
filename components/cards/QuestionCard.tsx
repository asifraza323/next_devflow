import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Metric from "../Metric";
import TagsCard from "./TagsCard";

interface Props {
  question: Question;
}

const QuestionCard = ({
  question: { _id, author, title, createdAt, upvotes, views, answers, tags },
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold text-dark200_light800 base-semibold line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      {/* Tag */}
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagsCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      {/* Metric */}
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`asked ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyles="body-medium text-dark400_light700"
          isAuthor="true"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answer"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

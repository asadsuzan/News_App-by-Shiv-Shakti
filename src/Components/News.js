import React from "react";
import { useGlobalContext } from "../context";

const News = () => {
  const { hits, nbPages, isLoading, removeNews } = useGlobalContext();

  if (isLoading) {
    return <h1 className="text-center text-2xl">Loading.....</h1>;
  }

  return (

    <div className="news min-h-screen">

      {hits.map((news) => {

        const { title, url, author, num_comments, created_at, objectID } = news;
        const created_date = new Date(created_at).toDateString();

        return (
      
          <div
            className="news_card rounded-lg bg-white shadow-lg p-12  w-3/4 mx-auto mb-10"
            key={objectID}
          >

            <h1 className="text-xl capitalize font-medium mb-2">{title}</h1>

            <p className="mb-2">
              <span className="opacity-50">By</span>{" "}
              <span className="text-gray-500 capitalize font-semibold">
                {author}
              </span>{" "}
              |{" "}
              <span className="text-gray-500 capitalize font-semibold">
                {num_comments}
              </span>{" "}
              <span className="opacity-50">commnnts</span> <br />
              <span className="text-xs font-semibold text-gray-500">
                {" "}
                at {created_date}
              </span>
            </p>

            <div className="card_buttons flex justify-between ">

              <a href={url} target="_balnk" className="text-blue-500">
                Read Story
              </a>

              <a
                className="text-red-500 cursor-pointer"
                onClick={() => removeNews(objectID)}
              >
                Remove
              </a>
            </div>
          </div>

        );
      })}

    </div>

  );
};

export default News;





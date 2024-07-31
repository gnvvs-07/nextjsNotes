import React from "react";
import Feed from "@components/Feed";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to my website
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Share Your Prompts</span>
      </h1>
      <p className="desc text-center">
        This application is a fully developed notes taking application uses
        nextjs and react js
      </p>
      {/* feed components */}
      <Feed/>
    </section>
  );
}

import React from "react";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const test = () => {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: "YOUR-TOKEN",
  });

  octokit.request("GET /orgs/{org}/repos", {
    org: "ORG",
  });
  return (
    <>
      <div className="test"></div>
    </>
  );
};

export default test;

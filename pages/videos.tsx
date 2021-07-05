import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import Knex from "knex";
import type { Video } from "../models/video";

let knex = Knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "dev",
  },
});

export declare interface TestProps {
  videos: Video[];
}

export default function Videos({ videos }: TestProps) {
  return (
    <>
      {videos.map((video) => (
        <div key={video.id}>{video.title}</div>
      ))}
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<TestProps>> {
  let videos = await knex<Video>("surveys_video").select();
  videos = JSON.parse(JSON.stringify(videos));
  return {
    props: {
      videos,
    },
  };
}

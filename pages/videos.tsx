import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import Knex from "knex";

let knex = Knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "dev",
  },
});

type Video = {
  commentCount: number;
  dislikeCount: number;
  id: string;
  likeCount: number;
  owner_id: number;
  privacy: string;
  publishedAt: string;
  subscribersGained: number;
  subscribersLost: number;
  thumbnails: string;
  title: string;
  viewCount: number;
};

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

import React, { useEffect, useState } from "react";
import { TablePage } from "@app/cms-posts/pages";
import { PostsClient } from "@app/cms-posts/api";
import { useRouter } from "next/router";
import Head from "next/head";

export default function WebPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const client = new PostsClient("627c481391a5de075f80a177");

  useEffect(() => {
    client.posts().then(setPosts);
  }, []);

  const onPostClick = (id) => {
    router.push("/posts/" + id);
  };

  const onNewPostClick = async () => {
    const { id } = await client.draft({});
    router.push("/posts/" + id);
  };

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <TablePage
        posts={posts}
        onPostClick={onPostClick}
        onNewPostClick={onNewPostClick}
      />
    </>
  );
}
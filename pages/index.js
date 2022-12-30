import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar";

const key = process.env.NEXT_PUBLIC_API_URL

const graphcms = new GraphQLClient(key);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quine Research</title>
        <meta name="description" content="A blog tutorial made with JAMstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen ">
        <Navbar />
        {posts.map((post) => (
          <Card
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
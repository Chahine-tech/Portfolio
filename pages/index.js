import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";




export default function Home({ repositories }) {
  
  return (
    <ContainerBlock
      title="Chahine Benlahcen - Developer, Creator"
      description="A developer portfolio that gets you a job."
    >
      <Hero />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  
  const repositories = await 
  fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUsername}+sort:author-date-asc`, {
    headers: {
      Accept: "application/vnd.github.v3+json"
    },
  })
  .then(response => response.json())
  .then(async(data) => {

    if(data.message !== undefined) {
      return { success: false }
    }

    const latestSixRepos = await data.items.splice(0, 6)
    return latestSixRepos
  })
  .catch(err => console.log(err));

  return {
    props: {
      repositories,
    },
  };
};
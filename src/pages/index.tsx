import Head from "next/head";
import Title from "components/Title";
import { Container } from "components/Container";
import Image from "components/Image";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { data: "data" },
  };
};

export default function Home({ data }: { data: string }) {
  const theme = useTheme();
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title title="NextJS TypeScript Template" />
      <h1>{data}</h1>
      <Typography variant="h1" color={theme.colors.cyan[200]}>
        cyan 200
      </Typography>
      <Typography variant="h1" color={theme.colors.cyan[400]}>
        cyan 400
      </Typography>
      <Typography variant="h1" color={theme.colors.cyan[600]}>
        cyan 600
      </Typography>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="paragraph" color={theme.colors.cyan[700]}>
        paragraph
      </Typography>

      <Image src="/vercel.svg" alt="vercel" width="100px" height="100px" />
      <Image src="/vercel.svg" alt="vercel" width="100px" height="100px" blur />
    </Container>
  );
}

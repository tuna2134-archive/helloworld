import NextHeadSeo from 'next-head-seo';

import axios from 'axios';


type Article = {
  title: string,
  description: string,
  author_id: number,
};

type Props = {
  articles: Article[];
};

export default function Index({ articles }: Props) {
  return (
    <>
      <NextHeadSeo 
        title="helloworld｜Home"
        description="Hello, World!は初心者が楽しくプログラミングを学習できるサイトです。"
        canonical="https://helloworld.tuna2134.jp"
      />
      <div className="px-16 py-32 text-white bg-gradient-to-r from-sky-500 to-indigo-700">
        <h1 className="text-4xl">Hello, World!</h1>
        <p className="mt-6">それはエンジニアたちが必ず目にする言葉</p>
        <p>このサイトは初心者がプログラミングを学習しながら、楽しくするためのサイトです。</p>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl text-center">記事一覧</h2>
        {articles.map((article: Article) => {
          <div className="mx-[15%]">
            <div className="border-2 rounded-md px-2 py-2 space-y-4">
              <p className="text-2xl font-semibold">{article.title}</p>
              <small>{article.description}</small>
            </div>
          </div>
        })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const req = await axios.get(`${process.env.BACKEND_URL}/api/articles`);
  return {
    props: {
      articles: req.data,
    },
  };
};

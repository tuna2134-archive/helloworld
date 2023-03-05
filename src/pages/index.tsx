import NextHeadSeo from 'next-head-seo';


export default function Index() {
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
        <p>このサイトは初心者にプログラミングを学習しながら、楽しくするためのサイトです。</p>
      </div>
    </>
  )
}

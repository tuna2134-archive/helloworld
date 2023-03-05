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
        <p>このサイトは初心者がプログラミングを学習しながら、楽しくするためのサイトです。</p>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl text-center">記事一覧</h2>
        <div className="mx-[15%]">
          <div>
            <p className="text-2xl font-semibold">ハロー</p>
            <small>概要だよ</small>
          </div>
        </div>
      </div>
    </>
  )
}

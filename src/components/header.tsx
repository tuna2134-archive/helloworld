import Link from "next/link";


export default function Header() {
  const navLinks = [{
    "title": "記事一覧",
    "link": "/",
  }, {
    "title": "サポート",
    "link": "/support",
  }];
  return (
    <header className="sticky top-0 bg-white py-6 border-b">
      <div className="flex justify-between mx-8">
        <div>
          <Link href="/" className="text-2xl font-semibold font-mono">Hello, World!</Link>
        </div>
        <nav className="space-x-6">
          {navLinks.map((navLink, index) => {
            return <Link href={navLink.link} key={index} className="text-black hover:text-green-500">{navLink.title}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}

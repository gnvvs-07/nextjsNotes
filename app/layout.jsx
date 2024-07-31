import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// Meta data
export const metadata = {
  title: "Notes",
  description: "Give some tasks and notes"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app">
          {/* navbar to all children */}
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}

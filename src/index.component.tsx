import "./index.scss";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import List from "@/components/List";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title></title>
      </head>
      <body>
        <s_t3>
          <Header />
          <Nav />
          <div className="w-full md:2-[800px] xl:w-[1280px] m-auto">
            <List />
          </div>
        </s_t3>
      </body>
    </html>
  );
}

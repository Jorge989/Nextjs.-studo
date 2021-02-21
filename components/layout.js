import Navbar from "./navbar";
import Head from 'next/head';
export default function Layout({ children }) {
  <Head>
    <title>
      Head desse layout
    </title>
  </Head>
  return (
    <div>
     <main>
      <Navbar />
 {children}</main>
      <style jsx>
          {`
          div{
              min-height:100vh;
              display: flex;
              flex-direcion: column;
              justify-content: center;
              align-items: center;
    
          }
          main {
              display: flex;
              min-height:100vh;

              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          
          
          `}
          </style>
      <style jsx global>
          
        {`
          html,
           body {
            padding: 0;
            margin: 0;
          }
          *{
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}

//scoped

import Head from 'next/head';
import Title from '../components/title';
import Layout from '../components/layout';
export default function Home(){
    return(
        <Layout>
            <Head>
                <title>
Landing page de posts
                </title>
                <meta name="description" content="Nesse curso de webtutoriais aprendemos sobre NextJS"></meta>
            </Head>
            <Title>Home Page</Title>
            <p>Aprendendo NextJS com Webtutoriais!</p>
            <style>

                {
                    `
                    p{
                        color: darkgray;
                    }
                p:hover {
                    color: darkred;
                }
                    `
                }
            </style>
         </Layout>

    )
}
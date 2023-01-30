
import Head from "next/head";
const MetaTags = ({title}) => {
  return (
    <>
        <Head>
            <title>
                {title}
            </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
            <meta name="description" content="Купить недорого цветы в горшочках или в стаканчиках для себя или в подарок"/>
            <meta name="Keywords" content="HTML, META, метатег, тег, поисковая"/>
        </Head>
    </>
  );
}
export default MetaTags;

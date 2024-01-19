import { QueryClient, QueryClientProvider ,useQuery} from "react-query";
import Head from "next/head";
import "../styles/app.scss";
// import CustomHook from "components/hooks/use-theme";
// import "styles/index.scss";
// import AuthProvider from "../components/hooks/use-auth";
// import { ParallaxProvider } from "react-scroll-parallax";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
// <ParallaxProvider>
//   <QueryClientProvider client={queryClient}>
//     <CustomHook>
//       <AuthProvider>
//         <Component {...pageProps} />
//       </AuthProvider>
//     </CustomHook>
//   </QueryClientProvider>
// </ParallaxProvider>

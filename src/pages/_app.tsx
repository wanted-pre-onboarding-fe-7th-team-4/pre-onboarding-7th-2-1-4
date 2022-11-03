import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/lib/styles";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import queryErrorHandler from "@/lib/utils/queryErrorHandler";
import Layout from "@/Components/Layout";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnWindowFocus: false
    }
  }
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </div>
  );
}

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoinList from "./CoinList";

const queryClient = new QueryClient();

export default function MainCoin() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinList />
    </QueryClientProvider>
  );
}

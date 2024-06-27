"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

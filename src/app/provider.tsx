"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const MainProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>{children}</Suspense>
    </QueryClientProvider>
  );
};

export default MainProvider;

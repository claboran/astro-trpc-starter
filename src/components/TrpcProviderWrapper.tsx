import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {trpcReactClient} from "../client";
import {httpBatchLink} from "@trpc/client";
import superjson from "superjson";
import Greeting from "./Greeting.tsx";

const TrpcProviderWrapper = () => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpcReactClient.createClient({
        links: [
            httpBatchLink({
                url: '/api/trpc',
                transformer: {
                    input: superjson,
                    output: superjson,
                },
            })
        ],
    }));
    return (
      <trpcReactClient.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
              <Greeting />
          </QueryClientProvider>
      </trpcReactClient.Provider>
    );
};
export default TrpcProviderWrapper;

import {createTRPCClient, httpBatchLink} from "@trpc/client";
import type {AppRouter} from "../server";
import superjson from "superjson";
import type {inferRouterInputs, inferRouterOutputs} from "@trpc/server";
import {createTRPCReact} from "@trpc/react-query";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

const trpcReactClient = createTRPCReact<AppRouter>();

const trpcAstroClient = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/api/trpc',
            transformer: {
                input: superjson,
                output: superjson,
            },
        }),
    ],
});

export {trpcAstroClient, trpcReactClient};
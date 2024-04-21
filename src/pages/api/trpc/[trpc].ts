import type {APIRoute} from "astro";
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";
import {appRouter} from "../../../server";
import {createContext} from "../../../trpc-common/context.ts";

export const ALL: APIRoute = ({ request }) => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: appRouter,
        createContext
    });
};
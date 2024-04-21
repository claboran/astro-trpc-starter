import {initTRPC} from "@trpc/server";
import superjson from 'superjson';
import type {Context} from "../trpc-common/context.ts";


const t = initTRPC.context<Context>().create({
    transformer: {
        input: superjson,
        output: superjson,
    }
});

export const router = t.router;

export const appRouter = router({
    greeting: t.procedure.query((): {hello: string} => ({
        hello: 'Hello from trpc!'
    })),
});

export type AppRouter = typeof appRouter;
import {trpcReactClient} from "../client";

const Greeting = () => {
    const greetingQuery = trpcReactClient.greeting.useQuery();

    return (
        <div>
            <h1>{`React Island is saying: ${greetingQuery?.data?.hello}`}</h1>
        </div>
    );
};
export default Greeting;
import { createClient, groq } from "next-sanity";

export async function getSettings() {
    const client = createClient({
        projectId: '8pihc9h7',
        dataset: 'production',
    });

    return client.fetch(
        groq`*[_type == "settings"][0]{
            _id,
            _createdAt,
            footer,
            social
        }`
    );
}
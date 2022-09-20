export default async() => {
    const authors = await queryContent("blog/authors").find();
    const tags = await queryContent("blog/tags").find();

    const getFormattedDate = (date) => {
        console.log(date);
        return new Date(date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "utc",
        });
    };

    const authorDetails = (author) => {
        return authors.find(({ name }) => name === author);
    };

    const tagDetails = (tag) => {
        return tags.find(({ name }) => name === tag);
    };

    return {
        getFormattedDate,
        tagDetails,
        authorDetails,

    }
}
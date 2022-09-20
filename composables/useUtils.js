export default () => {
    const getFormattedDate = (date) => {
        console.log(date);
        return new Date(date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "utc",
        });
    };

    const authorDetails = async (author) => {
        const authors = await queryContent("blog/authors").find();
        return authors.find(({ name }) => name === author);
    };

    const tagDetails = async (tag) => {
        const tags = await queryContent("blog/tags").find();
        return tags.find(({ name }) => name === tag);
    };

    return {
        getFormattedDate,
        tagDetails,
        authorDetails,
    };
};

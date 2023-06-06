const ConvertLanguage = (langauge: string) => {
    const commonMovieLanguages: {[key: string]: string} = {
        en: "English",
        es: "Spanish",
        zh: "Chinese",
        hi: "Hindi",
        ja: "Japanese",
        fr: "French",
        de: "German",
        ru: "Russian",
        ko: "Korean",
        pt: "Portuguese",
        it: "Italian",
        ar: "Arabic",
        tr: "Turkish",
        pl: "Polish",
        nl: "Dutch",
        sv: "Swedish",
        fa: "Persian",
        da: "Danish",
        no: "Norwegian",
        fi: "Finnish",
        he: "Hebrew",
        el: "Greek",
        cs: "Czech",
        th: "Thai",
        id: "Indonesian",
        vi: "Vietnamese",
        hu: "Hungarian",
    };

    return commonMovieLanguages[langauge];
}
export default ConvertLanguage;

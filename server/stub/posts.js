const posts = [
    {
        title: "Post #1",
        description: "This is the first post",
        thumbnail: "https://cdn.pokedx.app/0X43A0C5EB1763A211AA3C05849A617F2EE0452767.png"
    },
    {
        title: "Post #2",
        description: "This is the second post",
        thumbnail: "https://cdn.pokedx.app/0XB27ADAFFB9FEA1801459A1A81B17218288C097CC.png"
    },
    {
        title: "Post #3",
        description: "This is the third post",
        thumbnail: "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
    }
]

module.exports.getPostById = id => posts[id-1];
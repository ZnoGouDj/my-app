
let state = {
    profilePage: {
        posts: [
            { id: 1, post: "Not a spoon, not a fork, but something in between.", likesCount: "125" },
            { id: 2, post: "I LOVE BEING IN CONTINENT!", likesCount: "225" },
            { id: 3, post: "I HAVE WHAT I'M HAVING!", likesCount: "135" },
        ],
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Bodyaaaaa!" },
            { id: 2, message: "I'm wide" },
            { id: 3, message: "I'm in prison" },
            { id: 4, message: "TOSI BOSI" },
        ],
        dialogs: [
            { id: 1, name: "Bogdan" },
            { id: 2, name: "Vladimir" },
            { id: 3, name: "Alexey" },
            { id: 4, name: "Alexandr" }
        ],
    },
    navbarPage: {
        avatars: [
            { id: 1, image: 'https://www.buro247.ua/thumb/670x960_0/local/images/buro/galleries/2018/03/new-name-optimus-gang-3.jpg'},
            { id: 2, image: 'https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg'},
            { id: 3, image: 'https://pbs.twimg.com/profile_images/980761782909272064/h-qrVrmY.jpg'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;
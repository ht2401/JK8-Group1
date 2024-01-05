interface PostInterface {
    id: number,
    title: string
}

interface CommentInterface {
    id: number,
    text: string,
    postId: number
}

const getComments = (): Promise<CommentInterface> => {
    return new Promise((resolve, reject) => {
        const apiUrl = 'http://localhost:3000/comments';

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`API request failed with status: ${response.status}`);
                }
                return response.json() as Promise<CommentInterface>;
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

getComments()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
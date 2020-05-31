export interface post {
    data: string;
    name: string;
}

export interface comment {
    data: string;
    comment: string;
}

export interface video {
    post: post[];
    comment: comment[];
}

export class Post implements post{
    data: string;
    name: string;
    constructor(data: string, name: string){
        this.data = data
        this.name = name
    }
}

export class Comment implements comment{
    data: string;
    comment: string;
    constructor(data: string, comment: string){
        this.data = data
        this.comment = name
    }
}

export class Video implements video{
    post: post[];
    comment: comment[];
    constructor(post: Post[], comment: Comment[]){
        this.post = post
        this.comment = comment
    }
}
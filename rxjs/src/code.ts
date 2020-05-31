import { Observable, of, fromEvent, BehaviorSubject, ReplaySubject, AsyncSubject, from, concat} from "rxjs";
import { map, tap, reduce, switchMap, take, takeWhile, takeLast, mergeMap } from 'rxjs/operators';
import { Post, Comment, Video, video } from '../model/model'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/pluck';

const myObservable = of([1, 2, 3], [8,9]);
let nums = myObservable.subscribe((list:Array<number>) => loop(list))
//var observable = fromEvent(document, 'mousemove')
// setTimeout(()=>{
//     var subscribe = observable.subscribe(
//         (x:any) => addItem(x)
//     )
// }, 2000)


function loop(list:any){
    for (var i in list){
        console.log(list[i])
    }
}

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

/**
 * 
 *  subject
 * 
 */

// var subject = new AsyncSubject()

// subject.subscribe(
//     data => addItem('Observer 1:' + data),
//     err => addItem(err),
//     () => addItem("Observer 1 complated")
// )

// var i = 1;
// var int = setInterval(() => subject.next(i++), 100)

// setTimeout(()=>{
//     var observable2 = subject.subscribe(
//         data => addItem('Observer 2:'+ data)
//     )
//     subject.complete()
// }, 500);

from([
    {first: "Gary", last:"Simon", age:34},
    {first: "jane", last:"Simon", age:34},
    {first: "john", last:"Simon", age:34}
])
    .pluck("first")
    .subscribe((x:any)=>addItem(x))

const source = of("david", "shin")

source
.pipe(
    tap((name:String)=> name.toUpperCase())

)
.subscribe((name:String) => console.log(name))


///////////////////////////////////////////////
// interface post {
//     data: string;
//     name: string;
// }

// interface comment {
//     data: string;
//     comment: string;
// }

// interface video {
//     post: post;
//     comment: comment;
// }

let p1 = new Post("2020-1-2", "shin")
let p2 = new Post("2020-1-3", "david")
let c1 = new Comment("2020-2-2", "hi")
let c2 = new Comment("2020-2-3", "hi this is my 2nd post. today I had...")

const posts = [p1, p2]
    
const comments = [c1, c2]
// const videos =[
//     {
//         posts,
//         comments
//     }
// ]

// const combined = postObs.pipe(
//     switchMap(posts =>{
//         return commentObs
//         .pipe(
//             tap(comments => {
//                 console.log("comment: ", comments);
//                 console.log("posts: ", posts)
//             })
//         );
//     })
// );

//combined.subscribe();

const postObs :Observable<Post[]> = of(posts)
const commentObs:Observable<Comment[]> = of(comments)

/* 
combine postObs and commentObs 
*/
// const video : Observable<video>= postObs.pipe(
//     mergeMap(postobs => {
//         return commentObs.pipe(
//             map(comment =>{
//                 const video: Observable<video> = {
//                     posts : postobs,
//                     commentObs : comment 
//                 };
//                 return video
//             })
//         );
//     })
// );

const video:Observable<Video> = postObs.pipe(
    mergeMap(post =>{
        return commentObs.pipe(
            map(comment => {
                const videos : Video = {
                    post : post,
                    comment : comment
                }
                return videos
            })
        )
    })
)

console.log("video")
video.subscribe(data => console.log(data))

///////////////////////////////////////////////
let counter = 0
const source2 = of(1,2,3,4)
source2.pipe(
    takeWhile(() => counter <= 3)
    )
    .subscribe(() => {
        console.log(counter)
        counter ++;
    })

console.log("takeLast")
source2.pipe(
    takeLast(2)
    )
    .subscribe(data => {
        console.log(data)
    })

///////////////////////////////////////////////
import { AppConstants } from './../../classes/appconstant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/classes/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
   /**array to save the data from the requests */
  posts: any = [];
  url:string=AppConstants.baseURL;
/** constructor used to make object of http to use post requests */
  constructor(private http: HttpClient) { }
/** post a new comment */
  addComment(newComment: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.url+'/api/makeComment?id='+ newComment.resourse_id+'&type='+ newComment.resourse_type + '&body=' + newComment.comment_body, newComment)
  }

/** comments on a specific object and subscribe to the given data */
  commentOnobject(user: string , resourse_id: number , resourse_type: number, comment_body: string
    ): void {
    const newComment: Comments = { user, resourse_id, resourse_type, comment_body } as Comments;
    console.log(newComment);
    this.addComment(newComment)
      .subscribe(data => {this.posts.push(data),
        console.log(data);
      },
      (err: any) => console.log(err));
  }
/** get comments */
  getCommentsList(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.url+'/api/makeComment');
  }

}

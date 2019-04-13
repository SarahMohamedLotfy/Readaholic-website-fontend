import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Likes } from 'src/app/classes/Likes';

/**
 * handles  http requests of followers list

*/
@Injectable({
  providedIn: 'root'
})

export class LikesService {
  /**array to save the data from the requests */
  posts: any = [];
  /** constructor used to make object of http to use post requests */
  constructor(private http: HttpClient) { }

  /** post a new like */
   addLike(newLike: Likes): Observable<Likes> {
    return this.http.post<Likes>('http://localhost:3000/Likes', newLike)
  }
  /** like a specific object wether a review or update */
  likeObject(user: string , resourse_id: number , resourse_type: number
    ): void {
    const newLike: Likes = { user, resourse_id, resourse_type } as Likes;
    console.log(newLike);
    this.addLike(newLike)
      .subscribe(hero => this.posts.push(hero),
      (err: any) => console.log(err));
  }


}

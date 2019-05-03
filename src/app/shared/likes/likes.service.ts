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
  url="http://5cb4a97d.ngrok.io/api/";
  /**array to save the data from the requests */
  posts: any = [];
  /** constructor used to make object of http to use post requests */
  constructor(private http: HttpClient) { }

  /** post a new like */
  addLLike(newLike: Likes): Observable<Likes> {
    return this.http.post<Likes>(this.url+'LikeOrUnLike?id='+ newLike.resourse_id , newLike)
  }
  /** like a specific object wether a review or update */
  likeObject(user: string , resourse_id: number
    ): void {
    const newLike: Likes = {user, resourse_id} as Likes;
    this.addLLike(newLike)
      .subscribe(data => {this.posts.push(data),
        console.log(data);
      },
      (err: any) => console.log(err)
      );
      console.log(newLike);
  }


}

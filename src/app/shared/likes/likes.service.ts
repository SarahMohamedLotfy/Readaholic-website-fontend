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
  addLLike(newLike: Likes): Observable<Likes> {
    return this.http.post<Likes>('http://ec2-52-90-5-77.compute-1.amazonaws.com/api/LikeOrUnLike?id='+newLike.resourse_id+'&type='+newLike.resourse_type, newLike)
  }
  /** like a specific object wether a review or update */
  likeObject(user: string , resourse_id: number , resourse_type: number
    ): void {
    const newLike: Likes = {user, resourse_id, resourse_type} as Likes;
    this.addLLike(newLike)
      .subscribe(data => {this.posts.push(data),
        console.log(data);
      },
      (err: any) => console.log(err)
      );
      console.log(newLike);
  }


}

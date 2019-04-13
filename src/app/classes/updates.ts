/** receive the updates from the json file */

export class updates {
  /** image of book */
image_link:string ;
/** date of update */
updated_at: string ;
rating:number ;
update_type:number;
/** rated,reviewed,liked,commented,added to shelf */
actionText:string;
name:string;
title:string;
body:string;
shelf_type:number ;
author_name:string ;
followed_image_link:string ;
/** avatar of autheticated user*/
img_url:string;
id:number;
likes_count:number;
comments_count:number;
book_id:number;
/** description of book */
 description:string;
  reviews_count:number;
  ratings_count:number;
  ratings_avg:number;
  pages_no:number;
  user_id:number;
  /** in case of type 2 of updates */
  followed_name:string ;
  followed_id:number ;
  rev_user_id:number;
  rev_user_image:string;
  rev_user_imageLink:string;
  shelf:number ;
  auth_user_following:number;
}
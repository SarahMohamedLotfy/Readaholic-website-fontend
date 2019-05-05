export class data {
  /**
        * notification user id
        */
    user_id:number;
     /**
        * notification user name
        */
user_name:string;
 /**
        * notification user image
        */
user_image_link:string;
review_id:number;
 /**
        *only in notification of reviews 
        */
review_user_id:number;
 /**
        * the person who wrote the review
        */
review_user_name:string;
 book_title: string;
  /**
        * notification type(liked.commented.followed)
        */
  type:number;
   /**
        * notification book concerned
        */
  book_id:number;
 
}
 /**
 * Contains the names and types of data that i get from jsonfile of follower
 */
 
 export class followerComponent {
   /**
 * Id of the user that the main user follow .
 */
  id: number;
   /**
 * Name of the user that the main user follow .
 */
  name: string;
  
   /**
 * Image of the user that the main user follow .
 */
image_link: string;
   /**
 * Id of the book tht the user is currently reading .
 */
book_id:number;
/**
* Name of the book tht the user is currently reading .
*/
currently_reading:string; 
/**
* Image of the book tht the user is currently reading .
*/ 
book_image:string;
/**
* Country of the user following the main user  .
*/ 
country :string;
}

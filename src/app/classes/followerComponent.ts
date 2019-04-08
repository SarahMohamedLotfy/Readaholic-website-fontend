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
  image_url: string;
   /**
 * Id of the book tht the user is currently reading .
 */
bookid:number;
/**
* Name of the book tht the user is currently reading .
*/
bookname:string; 
/**
* Image of the book tht the user is currently reading .
*/ 
bookimage:string;
/**
* Country of the user following the main user  .
*/ 
country :string;
}

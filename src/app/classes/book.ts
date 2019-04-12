/** receive the data of book from the json file */

export class book{

/**book id */
id: number; 
/** book title */
title: string;
/** isbn is unique for each book */ 
isbn: number;
/** book image*/
img_url: string;
/** date of publication*/
publication_date: string; 
/**book publisher*/
publisher: string;
/** book langauge*/
language: string;
 /**overview of the book*/
description: string;   
/** number of reviews */
reviews_count: number; 
/** number of ratings */
ratings_count: number;
/** avrage rating of the book*/
ratings_avg: number;
/**link*/ 
// link:string ;   
/**book author id */
author_id: number;
/**book author name */
author_name: string; 
/** number of book pages*/
pages_no: number;
/**@ignore */
created_at: string;
 /**@ignore */
updated_at: string;
/** genre:comedy,tragedy,..etc */
genre: string;  
}
    
/*   id: number;
  title: string;
  isbn: number;
  imageUrl: string;
  pagesNum: number;
  publisher: string;
  publicationDate: string;
  ratingsAvg: number;
  ratingsCount:number;
  reviewsCount: number;
  description: string;
  authorId: number;
  authorName: string;
  genre: string;
  link: string;
*/
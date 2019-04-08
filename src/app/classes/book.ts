/** receive the data of book from the json file */

export class book{
  /**id */
    id: number; 
    /** book title */
    title: string;
  
    /** all info about book */
  /** isbn is unique for each book */ 
    isbn: number;
  /** book image*/
    imageUrl: string;
  /** number of book pages*/
    pagesNum: number;
  /** date of publication*/
    publicationDate: string; 
  /** publisher name*/
    publisher: string;
  /** book langauge*/
    language: string;
  /** avrage rating of the book*/
    ratingsAvg: number;
    /** number of ratings */
    ratingsCount: number;
    /** number of reviews */
    reviewsCount: number;
  /** summry of the book*/
    description: string;    
    authorId: number;
    /** author name of book */
    authorName: string; 
    /** genre:comedy,tragedy,..etc */
    genre: string;  
    /**link*/ 
    link:string ;   
    }
    

/** receive the data of book from the json file */

export class book{
    id: number; 
    title: string;
  
    /** all info about book */
  /** isbn is unique for each book */ 
    isbn: number;
    /** cover of book */
    imageUrl: string;
    pagesNum: number;
    publicationDate: string; 
    publisher: string;
    language: string;
    /** ratings of book */
    ratingsAvg: number;
    ratingsCount: number;
    reviewsCount: number;
    /** description about book */
    description: string;    
    authorId: number;
    /** author name of book */
    authorName: string; 
    /** genre:comedy,tragedy,..etc */
    genre: string;  
    link:string ;   
    }
    

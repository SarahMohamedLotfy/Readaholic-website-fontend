/** receive the data of book from the json file */

export class book{
    id: number; 
    title: string;
    /** isbn is unique for each book */ 
    /** all info about book */

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
    ratingsCount: number;
    reviewsCount: number;
  /** summry of the book*/
    description: string;    
    authorId: number;
    authorName: string; 
    genre: string;  
    link:string ;   
    }
    

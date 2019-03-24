/** receive the data of book from the json file */

export class book{
    id: number; 
    title: string;
  
    /** all info about book */
  /** isbn is unique for each book */ 
    isbn: number;
<<<<<<< HEAD
    /** cover of book */
=======
  /** book image*/
>>>>>>> 7ab2de2a26f792005aee4788da8fab3a21d3495e
    imageUrl: string;
  /** number of book pages*/
    pagesNum: number;
  /** date of publication*/
    publicationDate: string; 
  /** publisher name*/
    publisher: string;
  /** book langauge*/
    language: string;
<<<<<<< HEAD
    /** ratings of book */
    ratingsAvg: number;
    ratingsCount: number;
    reviewsCount: number;
    /** description about book */
=======
  /** avrage rating of the book*/
    ratingsAvg: number;
    ratingsCount: number;
    reviewsCount: number;
  /** summry of the book*/
>>>>>>> 7ab2de2a26f792005aee4788da8fab3a21d3495e
    description: string;    
    authorId: number;
    /** author name of book */
    authorName: string; 
    /** genre:comedy,tragedy,..etc */
    genre: string;  
    link:string ;   
    }
    

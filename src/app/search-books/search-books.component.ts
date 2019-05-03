import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchBooksService } from './search-books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { book } from '../classes/book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service:SearchBooksService,private fb:FormBuilder,private router:Router) {
    this.form=this.fb.group({
      searchBox: ['',[Validators.required]],
      searchType: ['',[Validators.required]]
      });
   }
searchTerm:any;
searchType:string;

books:any=[];
form: FormGroup;
isUser:boolean;
noBooks:boolean =false;
review:any=[];
str:string;
rating:any=[];
temp:any=[];
  ngOnInit() {
    this.activatedRoute.queryParams .subscribe(params => {
     
      this.searchTerm = params['search'];
    this.searchType=params['searchType']});

      if(localStorage.getItem('token') == null){
        this.isUser = false;}
      
      else{
        this.isUser = true;
      }
    
  
     this.searchForBook();


  }

 searchClicked(){

  const val = this.form.value;
    this.router.navigate(['/searchBooks'],{queryParams:{'search':val.searchBox,'searchType':val.searchType}});
    this.searchTerm=val.searchBox;
      console.log(this.searchTerm);
this.searchForBook();

 }
search(term){

  const val = this.form.value;
this.searchTerm=term;
this.searchType='title';
val.searchType='title';
this.searchForBook();
  
  }

  searchForBook()
  {
 
    const val = this.form.value;
      console.log(this.searchTerm);

    if(val.searchType=="author" || this.searchType=="author" )
    this.service.getBookByAuthor(this.searchTerm).subscribe((books:any)=>{
      this.books =books.pages ;

      
     
      this.review=books['book info for me']
      this.temp=this.review;
      
     if(books.pages.length==0){
       this.noBooks=true;
     }
     else
     this.noBooks=false;

      console.log(this.rating);
      },err=>{this.noBooks=true;})
      else if(val.searchType=="ISBN" || this.searchType=="ISBN" )
      {
        this.service.getBookByIsbn(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          this.review=books['book info for me']
          if(books.pages.length==0){
            this.noBooks=true;
          }
          else
          this.noBooks=false;

          },err=>{this.noBooks=true;})
      }
      else if(val.searchType=="genre" || this.searchType=="genre" )
      {
        this.service.getBookByGenre(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          if(books.pages.length==0){
            this.noBooks=true;
          }
          else
          this.noBooks=false;
          this.review=books['book info for me']
          },err=>{this.noBooks=true;})
      }
      else 
      {
        this.service.getBookByTitle(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          this.review=books['book info for me']
          if(books.pages.length==0){
            this.noBooks=true;
          }
          else
          this.noBooks=false;
          },err=>{this.noBooks=true;})
      }
     
  }

  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchBooksService } from './search-books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

books:any=[];
form: FormGroup;
  ngOnInit() {
    this.activatedRoute.queryParams .subscribe(params => {
     
      this.searchTerm = params['search'];});

     this.searchForBook();


  }

 
search(){
  const val = this.form.value;
    this.router.navigate(['/searchBooks'],{queryParams:{'search':val.searchBox}});
    this.searchTerm=val.searchBox;
      console.log(this.searchTerm);
this.searchForBook();
  
  }

  searchForBook()
  {
    const val = this.form.value;
      console.log(this.searchTerm);

    if(val.searchType=="author" )
    this.service.getBookByAuthor(this.searchTerm).subscribe((books:any)=>{
      this.books =books.pages ;
      
      console.log(this.books);
      console.log(books);
      },err=>console.log('nooo'))
      else if(val.searchType=="ISBN" )
      {
        this.service.getBookByIsbn(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          })
      }
      else if(val.searchType=="genre" )
      {
        this.service.getBookByGenre(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          })
      }
      else 
      {
        this.service.getBookByTitle(this.searchTerm).subscribe((books:any)=>{
          this.books =books.pages ;
          
          console.log(this.books);
          console.log(books);
          })
      }
  }
  

}

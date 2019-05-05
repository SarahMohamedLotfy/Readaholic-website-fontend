import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from './comments.service';
import { Comments } from 'src/app/classes/Comments';
import { CommentList } from 'src/app/classes/commentList';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']

})
export class CommentsComponent implements OnInit {
  /** FormGroup to control the commentForm  */
  public CommentForm: FormGroup;
  /** List of Comments */
  CommentListofReview: CommentList[];
  listFlag: number;
  haveTheComment: string;
  /** commetn flag to determine whether the comment button is pressed or not */
  commentFlag = false;
  /** input from parent component to get resource id */
  @Input () resourse_id: number;

  // arraylength = this.CommentListofReview.length;
  constructor( private fb: FormBuilder, private ser: CommentsService ) {
    this.createForm();
   }
  ngOnInit() {
    console.log('got here');
    this.ser.testgetCommentsList(this.resourse_id).subscribe(data => {
          this.CommentListofReview = data;
        //  console.log(this.CommentListofReview);
        },
          // (err: any) => console.log(err)
         );

  }
  createForm() {
    this.CommentForm = this.fb.group({
      content: ['', [
        Validators.required,
        Validators.minLength(1)
      ]]
  });
}
/** change comment button state when click on it */
  toggleComments() {
    this.commentFlag = !this.commentFlag;
  }
  /** submit comment to the server when the Add button is pressed */
     onSubmit() {
           this.ser.commentOnobject(this.resourse_id, this.CommentForm.get('content').value);
           this.CommentForm.reset();
           this.ser.testgetCommentsList(this.resourse_id).subscribe(data => {
            this.CommentListofReview = data;
          //  console.log(this.CommentListofReview);
          },
            // (err: any) => console.log(err)
           );

     }
     deleteComment(Commentid: number) {
      this.ser.deleteComment(Commentid).subscribe((data) => {
           console.log(data);
       //    this.ser.getCommentsList(this.resourse_id).subscribe((posts:any)=>{
        //    (data: CommentList[]) => this.CommentListofReview = data
         // console.log(posts)});
             });
             this.ser.testgetCommentsList(this.resourse_id).subscribe(data => {
              this.CommentListofReview = data;
            //  console.log(this.CommentListofReview);
            },
              // (err: any) => console.log(err)
             );

    }
}

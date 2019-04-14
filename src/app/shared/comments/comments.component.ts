import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from './comments.service';
import { Comments } from 'src/app/classes/Comments';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
 
})
export class CommentsComponent implements OnInit {
  /** FormGroup to control the commentForm  */
  public CommentForm: FormGroup
  /** List of Comments */
  CommentList: Comments[] ;
  /** commetn flag to determine whether the comment button is pressed or not */
  commentFlag: boolean = false;
  /** input from parent component to get user id */
  @Input () user : string;
  /** input from parent component to get resource id */
  @Input () resourse_id : number;

  constructor( private fb: FormBuilder, private ser: CommentsService ) {
    this.createForm();
   }
  ngOnInit() {
   // this.ser.getCommentsList().subscribe((data: Comments[]) => this.CommentList = data);
  }

  createForm(){
    this.CommentForm = this.fb.group({
      content: ['', [
        Validators.required,
        Validators.minLength(1)
      ]]
  })
}
/** change comment button state when click on it */
  toggleComments(){
    this.commentFlag = !this.commentFlag;
  }
  /** submit comment to the server when the Add button is pressed */
     onSubmit()
     {
           this.ser.commentOnobject( this.user, this.resourse_id, 0 , this.CommentForm.get('content').value);
           this.CommentForm.reset();
     }


}

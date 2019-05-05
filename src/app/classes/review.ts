import { data } from './data';

/** receive the data of book from the json file */
export class review {
  /**id of the review */
  id: number;
  /**id of the reviewed book */
  book_id: number;
  /**body of the review */
  body: string;
  /**rating of the book */
  rating: number;
  /**the shelf where the reviewer stores the book */
  shelf_name: string;
  /**number of likes on the review */
  likes_count: number;
  /**number of commnets on the review */
  comments_count: number;
  /**id of the user */
  user_id: number;
  /**name of the user */
  username: string;
  /**image of the user */
  userimagelink: string;
  /**@ignore */
  name: string;
  /**@ignore */
  image_link: string;
  /**@ignore */
  title: string;
}
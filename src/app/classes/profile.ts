import { user_shelves } from './user_shelves';
/** receive the data of profile from the json file */
export class profile {
  /** id of user */
  id: number;
  /** name of user */
  name: string;
  /** user_name of user */
  user_name: string;
  /** link of user */
  link: string;
  /** image of user */
  small_image_url: string ;
  /** information of of user */
  about: string;
  /** age of user */
  age: number;
  /** gender of user */
  gender: string;
  /** location of user */
  location: string;
  /** when the user joined the site */
  joined: string;
  /** last activity of user */
  last_active: string;
  /** shelves of user */
  user_shelves: user_shelves ;
}

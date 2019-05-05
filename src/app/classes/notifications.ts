import { data } from './data';

export class notifications{
    /**
        * notifiation id
        */
n_id:number;
/**
        * read=1 if notification is read
        */
read:number;
/**
        * for checking if the notif action is focused on the auth. user
        */
you:boolean;
/**
        * data of the notifcation itself
        */
data:data;
message:data;

}
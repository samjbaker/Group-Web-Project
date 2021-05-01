export interface Feedbox  {
  user_id: number;
  post_number: number;
  post_text: string;
  timestamp: string;
  likes: number;
  is_fact: boolean;
  fact_ref: string;
  no_comments: number;
  user_info: [{user_id: number;
              user_name: string;
              pic_filename: string}];
  username: string;
}

import * as React from "react";
import { IPost } from "../../../ts/interfaces/post_interfaces";
import Post from "../../Post/Post";

interface IProfilePostsProps {
  posts: IPost[] | null;
}

const ProfilePosts: React.FunctionComponent<IProfilePostsProps> = (props) => {
  return (
    <>
      <div>
        {props.posts &&
          props.posts
            .sort(
              (a, b) =>
                new Date(b.date_created!).getTime() -
                new Date(a.date_created!).getTime()
            )
            .map((post) => <Post post={post} />)}
      </div>
      {!props.posts && (
        <div className="after-loader__block">
          <p>Can't find any posts</p>
        </div>
      )}
    </>
  );
};

export default ProfilePosts;

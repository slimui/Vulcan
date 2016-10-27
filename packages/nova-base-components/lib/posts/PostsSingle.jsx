import Telescope from 'meteor/nova:lib';
import React from 'react';
import { DocumentContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

const PostsSingle = (props, context) => {
  return <Telescope.components.PostsSingleContainer postId={props.params._id} component={Telescope.components.PostsPage} />
};

PostsSingle.displayName = "PostsSingle";

module.exports = PostsSingle;
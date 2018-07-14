import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const PostBox = styled.div`
	width: 98%;
	height: auto;
	border-radius: 10px;
	background-color: rgb(104, 108, 79);
	margin: 3% auto;
	padding: 0% 3%;
	font-family: 'Josefin Slab', serif;
`;

export default class Post extends Component {
  render() {
    let title = this.props.post.title
    if (this.props.isDraft) {
      title = `${title} (Draft)`
    }

    return (
      <PostBox>
      <Link className="no-underline ma1" to={`/post/${this.props.post.id}`}>
        <h2 className="f3 black-80 fw4 lh-solid">{title}</h2>
        <p className="black-80 fw3">{this.props.post.text}</p>
      </Link>
      </PostBox>
    )
  }
}

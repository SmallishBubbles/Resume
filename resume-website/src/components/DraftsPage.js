import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import styled from 'styled-components';

const BlogBox = styled.div`
	width: 95%;
	height: auto;
	min-height: 95vh;
	border-radius: 10px;
	background-color: rgb(22, 83, 150, 0.75);
	margin: auto;
	padding: 3%;
	font-family: 'Josefin Slab', serif;
`;

const Title = styled.h1`
  text-align: center;
  margin: auto;
  font-family: 'Sacramento', cursive;
`;


export default class DraftsPage extends Component {
  render() {
    return (
      <BlogBox>
      <Query query={DRAFTS_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }
          return (
            <Fragment>
              <div className="flex justify-between items-center">
                <Title>Drafts</Title>
              </div>
              {data.drafts &&
                data.drafts.map(draft => (
                  <Post
                    key={draft.id}
                    post={draft}
                    refresh={() => refetch()}
                    isDraft={!draft.isPublished}
                  />
                ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
      </BlogBox>
    )
  }
}

export const DRAFTS_QUERY = gql`
  query DraftsQuery {
    drafts {
      id
      text
      title
      isPublished
    }
  }
`

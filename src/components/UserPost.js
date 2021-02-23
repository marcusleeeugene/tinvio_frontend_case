import React from 'react';

import '../pages/Global.css';

import Card from 'react-bootstrap/Card'

export default function UserPost({ userPost, searchContent }) {

  if (userPost.length == 0) {
    return <h2> Please select a user! </h2>
  } else {
    return (
      <div>
        {userPost.map((post) => {
          if (searchContent == "" || post.title.includes(searchContent))  {
            return (
              <Card style={{ height: '6rem', margin: '5px' }}>
                <Card.Body>
                  <Card.Text className="bold longText"> {post.title} </Card.Text>
                  <Card.Text className="longText"> {post.body} </Card.Text>
                </Card.Body>
              </Card>
            );
          }
        })}}
      </div>
    );
  }
}

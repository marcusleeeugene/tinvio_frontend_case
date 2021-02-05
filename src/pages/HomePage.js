import React, { useState, useEffect } from 'react';

import './HomePage.css';

import UserInfo from '../components/UserInfo.js';
import SelectUser from '../components/SelectUser.js';
import UserPost from '../components/UserPost.js';
import image from '../tinvio-fe-case-intern-assets/image.jpg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function HomePage() {
  const [user, setUser] = useState(0);
  const [userList, setUserList] = useState([]);
  const [post, setPost] = useState([]);

  // Get list of users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUserList(data);
      });
  });

  // When a user is selected in dropdown box
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        let tempPost = [];
        data.forEach((post) => {
          if (post.userId == user.id) {
            tempPost.push(post);
          }
        });
        setPost(tempPost);
      });
  }, [user]);

  const retrieveUser = (user) => {
    setUser(user);
  };

  return (
    <Container>
      <Row id="dropDown">
        <SelectUser userList={userList} retrieveUser={retrieveUser}></SelectUser>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title> {user.name} </Card.Title>
              <Card.Text>
                <UserInfo id="userInfo" userInfo={user}></UserInfo>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '30rem' }} className="scroll">
            <Card.Body>
              <Card.Title> {user == 0 ? "" : user.name.split(" ")[0] + "'s Posts"} </Card.Title>
              <Card.Text> {post.length + " POSTS"} </Card.Text>
              <UserPost userPost={post}></UserPost>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

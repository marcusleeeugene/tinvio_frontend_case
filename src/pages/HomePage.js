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
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/Form'

function HomePage() {
  const [user, setUser] = useState(0);
  const [userList, setUserList] = useState([]);
  const [post, setPost] = useState([]);
  const [searchContent, setSearchContent] = useState("");

  // Get list of users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUserList(data);
      });
  }, []);

  // useEffect(() => {
  //
  // }, [searchContent])

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

  const handleChange = (event) => {
    setSearchContent(event.target.value)
  }

  return (
    <Container>
      <Row id="dropDown">
        <SelectUser userList={userList} retrieveUser={retrieveUser}></SelectUser>
      </Row>
      <Row>
        <Col md={6} sm={12}>
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
        <Col md={6} sm={12}>
          <Card style={{ width: '30rem' }} className="scroll">
            <Card.Body>
              <Card.Title> {user == 0 ? "" : user.name.split(" ")[0] + "'s Posts"} </Card.Title>
              <Card.Text> {post.length + " POSTS"} </Card.Text>
              <input type="text" id="searchBox" name="fname" value={searchContent} onChange={handleChange}/>
              <UserPost userPost={post} searchContent={searchContent}></UserPost>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

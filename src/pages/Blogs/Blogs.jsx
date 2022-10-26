import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h3 className='text-center bg-secondary p-2 text-white'>Welcome to my Blog</h3>
                <Card className='m-3'>
                    <Card.Header as="h5">Question #1</Card.Header>
                    <Card.Body>
                        <Card.Title>what is cors?</Card.Title>
                        <Card.Text>
                            CORS stand for Cross-Origin Resource Sharing. CORS is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.The same-origin security policy forbids cross-origin access to resources.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Header as="h5">Question #2</Card.Header>
                    <Card.Body>
                        <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                        <Card.Text>
                        Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
                        <br />
                        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Header as="h5">Question #3</Card.Header>
                    <Card.Body>
                        <Card.Title>How does the private route work?</Card.Title>
                        <Card.Text>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Header as="h5">Question #4</Card.Header>
                    <Card.Body>
                        <Card.Title> What is Node? How does Node work?</Card.Title>
                        <Card.Text>
                        Node.js is an open source server environment. Node. js is sometimes misunderstood by developers as a backend framework that is exclusively used to construct servers. This is not the case; Node. js can be used on the frontend as well as the backend. <br /> Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
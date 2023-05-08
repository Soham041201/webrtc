# WebRTC Project - README

This is a simple MERN stack project that utilizes WebRTC technology to enable real-time communication between two clients in a peer-to-peer fashion. The project has a React front-end and Express back-end, and the back-end is only used as a signalling server to send ICE candidate data between two clients.

## Prerequisites

Before running the project, you need to have the following installed on your machine:

- Node.js (v14 or higher)
- NPM (v7 or higher)
- MongoDB (v4 or higher)

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository by running the following command in your terminal:
```
git clone https://github.com/your-username/webrtc-project.git
```
2. Navigate to the project directory:
3. Install the dependencies:




This will start the React front-end on port 3000
## Usage

To use the application, follow the steps below:

1. Open the application in two different tabs or browsers.

2. In the first tab or browser, enter a username and click the `Connect` button.

3. In the second tab or browser, enter a different username and click the `Connect` button.

4. Once both clients are connected, click the `Call` button in one of the clients to initiate a call.

5. The other client will receive the call and can choose to accept or reject it.

6. If the call is accepted, both clients can now communicate with each other in real-time.

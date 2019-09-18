//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



//Create a React component
//Blogpost approval card
const App = () => {
  return (
    <div>

      <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Jack"
          timeAgo="Today at 16:45"
          commentText="No way!"
          profilePic={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ste"
          timeAgo="Today at 13:22"
          commentText="Yes way!"
          profilePic={faker.image.avatar()}
         />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dale"
          timeAgo="Yesterday at 22:43"
          commentText="Haha Ste!"
          profilePic={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
    </div>

  );
}

//Take the React component and show it on screen
ReactDOM.render(
  <App />, document.querySelector('#root')
);

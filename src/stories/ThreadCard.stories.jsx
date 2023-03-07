/* eslint-disable react/jsx-props-no-spreading */
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ThreadCard from '../components/ThreadCard';

const stories = {
  title: 'ThreadCard',
  component: ThreadCard,
};

export default stories;

function TemplateStory(args) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<ThreadCard {...args} />} />
      </Routes>
    </MemoryRouter>
  );
}

const WithTypeSuccess = TemplateStory.bind({});
WithTypeSuccess.args = {
  id: '1',
  title: 'Belajar React',
  body: '<p>Siapa yang lagi belajar react??</p>',
  category: 'Study',
  createdAt: '2023-03-07T09:00:00.000Z',
  upVotesBy: ['user1', 'user2'],
  downVotesBy: ['user3'],
  totalComments: 5,
  upvote: () => {},
  downvote: () => {},
  authUser: 'user1',
  user: {
    id: 'user1',
    name: 'Ajeng',
    avatar: 'https://example.com/avatar.jpg',
  },
};

export { WithTypeSuccess };

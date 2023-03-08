/* eslint-disable react/jsx-props-no-spreading */
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import '../index.css';

const stories = {
  title: 'LoginInput',
  component: LoginInput,
};

export default stories;

function TemplateStory(args) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LoginInput {...args} />} />
      </Routes>
    </MemoryRouter>
  );
}

const WithTypeSuccess = TemplateStory.bind({});
WithTypeSuccess.args = {
  login: () => {},
};

export { WithTypeSuccess };

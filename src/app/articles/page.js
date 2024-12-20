import Nav from '../../components/nav';
import routes from '../../constants/routes';

export const metadata = {
  description:
    'Tips, tutorials, useful resources, thoughts and questions around front-end development tools and languages.',
  title: 'Articles | Ronan Levesque',
};

const Articles = () => (
  <>
    <Nav text="Back to Homepage" textLink={routes.HOME} />
  </>
);

export default Articles;

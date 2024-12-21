import cx from 'classnames';
import PropTypes from 'prop-types';

import ListItem from '@/components/list-item';

const JobsList = ({ data }) => (
  <ul className="m-0 list-none p-0">
    {data.map((item) => (
      <ListItem key={`${item.company} - ${item.job}`}>
        <span
          className={cx(
            'block ~p-8/12',
            'xxs:flex xxs:items-center xxs:justify-between'
          )}
        >
          <p
            className={cx(
              'm-0 pr-12 font-libre ~text-16/18',
              'sm:flex sm:grow sm:items-center'
            )}
          >
            <span className="~w-200/260 block text-zircon">{item.company}</span>
            <span className="block italic text-manatee">{item.job}</span>
          </p>
          <span
            className={cx(
              'font-roboto-mono inline-flex text-right text-manatee ~text-14/16',
              'xxs:shrink-0'
            )}
          >
            {item.start} – {item.end}
          </span>
        </span>
      </ListItem>
    ))}
  </ul>
);

JobsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        company: PropTypes.string.isRequired,
        end: PropTypes.number.isRequired,
        job: PropTypes.string.isRequired,
        start: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default JobsList;

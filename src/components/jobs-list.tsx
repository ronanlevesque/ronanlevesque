import cx from 'classnames';

import ListItem from '@/components/list-item';

type JobsListProps = {
  data: Array<{
    company: string;
    end: number;
    job: string;
    start: number;
  }>;
};

const JobsList = ({ data }: JobsListProps) => (
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
            <span className="block text-zircon ~w-200/260">{item.company}</span>
            <span className="block italic text-manatee">{item.job}</span>
          </p>
          <span
            className={cx(
              'inline-flex text-right font-roboto-mono text-manatee ~text-14/16',
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

export default JobsList;

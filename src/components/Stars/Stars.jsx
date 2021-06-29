import classNames from 'classnames';

const StarImg = ({ filled }) => (
  <svg
    className={classNames('star-item_icon', { filled })}
    height="28"
    viewBox="0 0 18 18"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
    <path d="M0 0h18v18H0z" fill="none" />
  </svg>
);

const Star = ({ filled }) => (
  <li className="star-item">
    <StarImg filled={filled} />
  </li>
);

export function Stars({ count }) {
  if (typeof count !== 'number' || count < 1 || count > 5) return null;

  const roundedCount = Math.round(count);
  const starList = [...Array(5)].map((_, i) => (
    <Star filled={i < roundedCount} key={i} />
  ));

  return <ul className="star-list">{starList}</ul>;
}

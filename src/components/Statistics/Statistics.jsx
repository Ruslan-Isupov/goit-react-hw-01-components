import css from './Statistics.module.css';
import PropTypes from 'prop-types';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {' '}
        {stats.map(statistic => {
          return (
            <li
              className={css.item}
              key={statistic.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{statistic.label}</span>
              <span className={css.percentage}>{statistic.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

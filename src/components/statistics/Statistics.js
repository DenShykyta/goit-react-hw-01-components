import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                <li className={css.item} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>))}
            </ul>  
        </section>
            );

};            

Statistics.propType = {
    title: PropTypes.string,
  }
import statistics from "Data/statistics.json";
export const Statistics = (prop) => {
    return statistics.map( (statistic) => {
   return  <li className="item" key = {statistic.id}>
      <span className="label">{statistic.label}</span>
      <span className="percentage">{statistic.percentage}</span>
    </li>
    
  }  )
}
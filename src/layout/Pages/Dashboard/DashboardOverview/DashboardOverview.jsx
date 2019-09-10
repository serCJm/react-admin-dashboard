import React, { useState } from "react";
import ContainerDimensions from "react-container-dimensions";
import InteractiveChart from "../../../../components/graphs/InteractiveChart";
import DashboardOverviewToggles from "./DashboardOverviewToggles";
import DashboardOverviewRevenue from "./DashboardOverviewRevenue";

const data = [
  {
    date: new Date("2009-01-01T08:00:00.000Z"),
    number: 17
  },
  {
    date: new Date("2009-02-01T08:00:00.000Z"),
    number: 43
  },
  {
    date: new Date("2009-03-01T08:00:00.000Z"),
    number: 5
  },
  {
    date: new Date("2009-04-01T07:00:00.000Z"),
    number: 82
  },
  {
    date: new Date("2009-05-01T07:00:00.000Z"),
    number: 34
  },
  {
    date: new Date("2009-06-01T07:00:00.000Z"),
    number: 27
  },
  {
    date: new Date("2009-07-01T07:00:00.000Z"),
    number: 76
  },
  {
    date: new Date("2009-08-01T07:00:00.000Z"),
    number: 39
  },
  {
    date: new Date("2009-09-01T07:00:00.000Z"),
    number: 5
  },
  {
    date: new Date("2009-10-01T07:00:00.000Z"),
    number: 78
  },
  {
    date: new Date("2009-11-01T07:00:00.000Z"),
    number: 50
  },
  {
    date: new Date("2009-12-01T08:00:00.000Z"),
    number: 48
  },
  {
    date: new Date("2010-01-01T08:00:00.000Z"),
    number: 4
  },
  {
    date: new Date("2010-02-01T08:00:00.000Z"),
    number: 95
  },
  {
    date: new Date("2010-03-01T08:00:00.000Z"),
    number: 62
  },
  {
    date: new Date("2010-04-01T07:00:00.000Z"),
    number: 7
  },
  {
    date: new Date("2010-05-01T07:00:00.000Z"),
    number: 62
  },
  {
    date: new Date("2010-06-01T07:00:00.000Z"),
    number: 5
  },
  {
    date: new Date("2010-07-01T07:00:00.000Z"),
    number: 3
  },
  {
    date: new Date("2010-08-01T07:00:00.000Z"),
    number: 38
  },
  {
    date: new Date("2010-09-01T07:00:00.000Z"),
    number: 87
  },
  {
    date: new Date("2010-10-01T07:00:00.000Z"),
    number: 40
  },
  {
    date: new Date("2010-11-01T07:00:00.000Z"),
    number: 84
  },
  {
    date: new Date("2010-12-01T08:00:00.000Z"),
    number: 67
  },
  {
    date: new Date("2011-01-01T08:00:00.000Z"),
    number: 41
  },
  {
    date: new Date("2011-02-01T08:00:00.000Z"),
    number: 12
  },
  {
    date: new Date("2011-03-01T08:00:00.000Z"),
    number: 94
  },
  {
    date: new Date("2011-04-01T07:00:00.000Z"),
    number: 46
  },
  {
    date: new Date("2011-05-01T07:00:00.000Z"),
    number: 98
  },
  {
    date: new Date("2011-06-01T07:00:00.000Z"),
    number: 55
  },
  {
    date: new Date("2011-07-01T07:00:00.000Z"),
    number: 63
  },
  {
    date: new Date("2011-08-01T07:00:00.000Z"),
    number: 70
  },
  {
    date: new Date("2011-09-01T07:00:00.000Z"),
    number: 27
  },
  {
    date: new Date("2011-10-01T07:00:00.000Z"),
    number: 47
  },
  {
    date: new Date("2011-11-01T07:00:00.000Z"),
    number: 60
  },
  {
    date: new Date("2011-12-01T08:00:00.000Z"),
    number: 61
  },
  {
    date: new Date("2012-01-01T08:00:00.000Z"),
    number: 99
  },
  {
    date: new Date("2012-02-01T08:00:00.000Z"),
    number: 66
  },
  {
    date: new Date("2012-03-01T08:00:00.000Z"),
    number: 55
  },
  {
    date: new Date("2012-04-01T07:00:00.000Z"),
    number: 89
  },
  {
    date: new Date("2012-05-01T07:00:00.000Z"),
    number: 38
  },
  {
    date: new Date("2012-06-01T07:00:00.000Z"),
    number: 77
  },
  {
    date: new Date("2012-07-01T07:00:00.000Z"),
    number: 94
  },
  {
    date: new Date("2012-08-01T07:00:00.000Z"),
    number: 11
  },
  {
    date: new Date("2012-09-01T07:00:00.000Z"),
    number: 52
  },
  {
    date: new Date("2012-10-01T07:00:00.000Z"),
    number: 41
  },
  {
    date: new Date("2012-11-01T07:00:00.000Z"),
    number: 37
  },
  {
    date: new Date("2012-12-01T08:00:00.000Z"),
    number: 4
  },
  {
    date: new Date("2013-01-01T08:00:00.000Z"),
    number: 9
  },
  {
    date: new Date("2013-02-01T08:00:00.000Z"),
    number: 66
  },
  {
    date: new Date("2013-03-01T08:00:00.000Z"),
    number: 29
  },
  {
    date: new Date("2013-04-01T07:00:00.000Z"),
    number: 57
  },
  {
    date: new Date("2013-05-01T07:00:00.000Z"),
    number: 29
  },
  {
    date: new Date("2013-06-01T07:00:00.000Z"),
    number: 59
  },
  {
    date: new Date("2013-07-01T07:00:00.000Z"),
    number: 32
  },
  {
    date: new Date("2013-08-01T07:00:00.000Z"),
    number: 13
  },
  {
    date: new Date("2013-09-01T07:00:00.000Z"),
    number: 62
  },
  {
    date: new Date("2013-10-01T07:00:00.000Z"),
    number: 97
  },
  {
    date: new Date("2013-11-01T07:00:00.000Z"),
    number: 58
  },
  {
    date: new Date("2013-12-01T08:00:00.000Z"),
    number: 67
  },
  {
    date: new Date("2014-01-01T08:00:00.000Z"),
    number: 59
  },
  {
    date: new Date("2014-02-01T08:00:00.000Z"),
    number: 85
  },
  {
    date: new Date("2014-03-01T08:00:00.000Z"),
    number: 1
  },
  {
    date: new Date("2014-04-01T07:00:00.000Z"),
    number: 66
  },
  {
    date: new Date("2014-05-01T07:00:00.000Z"),
    number: 10
  },
  {
    date: new Date("2014-06-01T07:00:00.000Z"),
    number: 85
  },
  {
    date: new Date("2014-07-01T07:00:00.000Z"),
    number: 36
  },
  {
    date: new Date("2014-08-01T07:00:00.000Z"),
    number: 14
  },
  {
    date: new Date("2014-09-01T07:00:00.000Z"),
    number: 88
  },
  {
    date: new Date("2014-10-01T07:00:00.000Z"),
    number: 14
  },
  {
    date: new Date("2014-11-01T07:00:00.000Z"),
    number: 78
  },
  {
    date: new Date("2014-12-01T08:00:00.000Z"),
    number: 79
  },
  {
    date: new Date("2015-01-01T08:00:00.000Z"),
    number: 62
  },
  {
    date: new Date("2015-02-01T08:00:00.000Z"),
    number: 53
  },
  {
    date: new Date("2015-03-01T08:00:00.000Z"),
    number: 33
  },
  {
    date: new Date("2015-04-01T07:00:00.000Z"),
    number: 23
  },
  {
    date: new Date("2015-05-01T07:00:00.000Z"),
    number: 60
  },
  {
    date: new Date("2015-06-01T07:00:00.000Z"),
    number: 73
  },
  {
    date: new Date("2015-07-01T07:00:00.000Z"),
    number: 43
  },
  {
    date: new Date("2015-08-01T07:00:00.000Z"),
    number: 76
  },
  {
    date: new Date("2015-09-01T07:00:00.000Z"),
    number: 0
  },
  {
    date: new Date("2015-10-01T07:00:00.000Z"),
    number: 32
  },
  {
    date: new Date("2015-11-01T07:00:00.000Z"),
    number: 58
  },
  {
    date: new Date("2015-12-01T08:00:00.000Z"),
    number: 5
  }
];

const DashboardOverview = () => {
  const [interactiveChart, setInteractiveChart] = useState(true);

  // const data = useMemo(() => computeData(), []);

  // function computeData() {
  //   const dates = timeMonths(new Date("2009-01-01"), new Date("2015-12-31"));
  //   const data = [];
  //   for (let i = 0; i < dates.length; i++) {
  //     const dataEntry = {};
  //     const newNumber = Math.round(Math.random() * 100);
  //     dataEntry.date = dates[i];
  //     dataEntry.number = newNumber;
  //     data.push(dataEntry);
  //   }
  //   console.dir(data);
  //   return data;
  // }

  function handleInteractiveChart() {
    setInteractiveChart(prevState => !prevState);
  }

  let interactiveChartClass = "interactive-show";
  let intChartToggle = "intChartToggle";
  if (!interactiveChart) {
    interactiveChartClass = "interactive-hide";
    intChartToggle = "intChartToggle hide";
  }

  return (
    <div className="dashboard-overview">
      <h1>Chart of Total Users</h1>
      <p>Period: 2009 and 2015</p>
      <div className={interactiveChartClass}>
        <ContainerDimensions>
          {({ width }) => (
            <InteractiveChart
              data={data}
              width={width}
              height={300}
              tooltipClass="rect-tooltip"
            />
          )}
        </ContainerDimensions>
      </div>
      <p className="time-label">Time</p>
      <h2 className={intChartToggle} onClick={handleInteractiveChart}>
        Total Users
      </h2>
      <div className="dashboard-overview-extra">
        <DashboardOverviewToggles />
        <DashboardOverviewRevenue />
      </div>
    </div>
  );
};

export default DashboardOverview;

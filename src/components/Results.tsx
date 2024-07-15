const Results = ({
  percentage,
  timePercentage,
  hoursToGetBackOnTrack,
}: {
  percentage: number;
  timePercentage: number;
  hoursToGetBackOnTrack: number;
}) => {
  return (
    <div className="flex flex-col text-center gap-3 mt-12 text-xl">
      <h2 className="text-4xl">Results</h2>
      <p>
        You are currently <b>{percentage.toFixed(2)}%</b> to your goal
      </p>
      <p>
        As of today, the event is <b>{timePercentage.toFixed(2)}%</b> through
      </p>
      <p>
        Therefore you would need to complete{" "}
        <b>{hoursToGetBackOnTrack.toFixed(2)}</b> hours per day to reach your
        goal by the end of the event (August 31st)
      </p>
    </div>
  );
};

export default Results;

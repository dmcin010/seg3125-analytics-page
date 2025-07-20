import './MetricCard.css';

export default function MetricCard({ label, value }) {
  return (
    <div className="metric-card">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
}

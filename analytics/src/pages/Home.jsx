export default function Home() {
  return (
    <div className="text-center">
      <h1 className="page-title">Welcome to My Dashboard</h1>

      <p className="lead">
        Dive into interactive visualizations and compare data with ease.
      </p>
      <p className="text-muted mb-5">
        Use the navigation bar to view charts and toggle language settings.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <a href="/charts" className="btn btn-primary">
          📊 View Charts
        </a>
      </div>
    </div>
  );
}

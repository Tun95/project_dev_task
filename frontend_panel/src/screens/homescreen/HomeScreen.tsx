import { Helmet } from "react-helmet-async";

function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>my Dashboard</div>
    </div>
  );
}

export default HomeScreen;

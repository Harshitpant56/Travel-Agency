import { Header, StatsCard, TripCard } from "../../../components";

const dashboard = () => {
  const user = { name: "Harshit" };
  const dashboardStats = {
    totalUsers: 12450,
    usersJoinded: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 150, lastMonth: 250 },
    userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
  };
  const { totalUsers, usersJoinded, totalTrips, tripsCreated, userRole } =
    dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Track activity, trends and popular destination in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoinded.currentMonth}
            lastmonthCount={usersJoinded.lastMonth}
          />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastmonthCount={tripsCreated.lastMonth}
          />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Active Users"
            total={userRole}
            currentMonthCount={userRole.currentMonth}
            lastmonthCount={userRole.lastMonth}
          />
        </div>
      </section>

      <TripCard />
    </main>
  );
};

export default dashboard;

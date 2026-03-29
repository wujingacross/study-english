import { TopNavBar } from "./components/TopNavBar";
import { SideNavBar } from "./components/SideNavBar";
import { PracticeSession } from "./components/PracticeSession";

function App() {
  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main className="lg:ml-64 pt-24 px-6 lg:px-12 pb-12">
        <PracticeSession />
      </main>
      {/* Contextual FAB Suppression (FAB is only for starting actions, suppressed here as we are in active session) */}
      {/* <FloatingActionButton /> */}
    </>
  );
}

export default App;

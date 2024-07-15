import Form from "@/components/Form";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <h1 className="pt-16 text-6xl text-center">
        Arcade Goal Progress Checker
      </h1>
      <div>
        <p className="text-center text-xl pt-8">
          This is a simple tool to check your progress on percent to your ticket
          goal
        </p>
        <p className="text-center text-xl pt-4">
          It will also tell you how many hours you need to do a week to complete
          it in time
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Home;

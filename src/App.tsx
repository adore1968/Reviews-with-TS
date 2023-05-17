import Review from "./components/Review";

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main>
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="min-w-min sm:max-w-xl">
            <h1 className="mb-12 text-center text-2xl underline underline-offset-8 sm:text-4xl">
              Our Reviews
            </h1>
            <Review />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

const Hero = () => {
  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-slate-50">

      <div className="max-w-7xl px-8 text-center">

        <h2 className="text-6xl font-extrabold leading-tight">

          Software Quality
          <br />

          <span className="text-blue-600">
            Assurance Engineer
          </span>

        </h2>

        <p className="mt-8 text-xl text-gray-600">

          Passionate about Manual Testing,
          Bug Reporting,
          API Testing,
          Test Case Design
          and delivering high-quality software.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button
            className="rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
          >
            View Projects
          </button>

          <button
            className="rounded-xl border border-blue-600 px-8 py-4 text-blue-600 hover:bg-blue-50"
          >
            Download Resume
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;
function AboutSection() {
  const profileUrl =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-adc48.appspot.com/o/profile.jpg?alt=media&token=b7e183b7-b09a-42c1-8dc5-fff6f76068df';

  return (
    <div
      id="about"
      className="grid grid-cols-[20px_1fr_20px] border-accent border mx-3 mb-12"
    >
      {/* Header */}
      <div className="border-r border-accent"></div>
      <h1 className="uppercase font-mono tracking-wider text-center py-1 border-b border-accent">
        BIO
      </h1>
      <div className="border-l border-accent"></div>
      <div className="border-r border-accent"></div>
      {/* BIO */}
      <div className="flex flex-col md:flex-row md:gap-12 items-center p-4 md:p-8 lg:p-16 text-center">
        <img
          src={profileUrl}
          alt=""
          className="max-w-[12rem] md:max-w-[16rem] rounded-full my-6"
        />
        <div className="md:text-left p-4">
          <h1 className="text-2xl lg:text-4xl font-mono my-4">Hi there! 👋</h1>
          <p className="font-mono text-sm lg:text-lg mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ea
            quam repellat magnam expedita voluptates unde error doloremque
            dolore a, in exercitationem.
          </p>
          <p className="font-mono text-sm lg:text-lg mb-4 leading-relaxed">
            Exercitationem doloribus alias fugiat quos quaerat quo corporis.
            Commodi provident corporis, quasi quibusdam tenetur atque inventore
            deserunt, quidem cupiditate reprehenderit minima culpa esse
            exercitationem magnam tempore ut.
          </p>
        </div>
      </div>
      <div className="border-l border-accent"></div>
    </div>
  );
}

export default AboutSection;

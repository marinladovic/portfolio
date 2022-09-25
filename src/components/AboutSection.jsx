function AboutSection() {
  const profileUrl =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-adc48.appspot.com/o/profile.jpg?alt=media&token=b7e183b7-b09a-42c1-8dc5-fff6f76068df';

  return (
    <div
      id="about"
      className="grid grid-cols-[20px_1fr_20px] border-accent border mx-3 mb-24"
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
            My name is <span className="font-bold">Marin</span>, I'm a 30 year
            old web developer based in{' '}
            <span className="font-bold">Zagreb, Croatia.</span> I fell in love
            with programming in 2011, during my university studies. I really
            enjoy building good looking and functional web applications that are
            fully responsive and easy to use.
          </p>
          <p className="font-mono text-sm lg:text-lg mb-4 leading-relaxed">
            As an ex military officer, I'm a very disciplined and organized
            person. I'm also a big fan of learning new things and I'm always
            looking for new challenges.
          </p>
          <p className="font-mono text-sm lg:text-lg mb-4 leading-relaxed">
            These days I mostly work with{' '}
            <span className="font-bold">React</span>
            {', '}
            <span className="font-bold">TailwindCSS</span>
            {', and '}
            <span className="font-bold">Firebase</span>, but I'm also familiar
            with <span className="font-bold">TypeScript</span>
            {', '}
            <span className="font-bold">NodeJS</span>
            {', '}
            <span className="font-bold">Express</span>
            {', '}
            <span className="font-bold">MongoDB</span>
            {', '}
            <span className="font-bold">MySQL</span>
            {', '}
            <span className="font-bold">SASS</span>
            {', and '}
            <span className="font-bold">Figma</span>.
          </p>
        </div>
      </div>
      <div className="border-l border-accent"></div>
    </div>
  );
}

export default AboutSection;

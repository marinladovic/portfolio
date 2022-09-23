import profile_image from '../assets/profile.jpg';

function AboutSection() {
  return (
    <div className="border-accent border mx-3 mb-12">
      <h1 className="uppercase font-mono tracking-wider text-center py-1 border-b border-accent">
        About me
      </h1>
      <div className="flex flex-col items-center p-4">
        <img
          src={profile_image}
          alt=""
          className="max-w-[50%] rounded-full my-6"
        />
        <h1 className="text-2xl font-mono my-4">Hi there! 👋</h1>
        <p className="font-mono text-sm mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ea
          quam repellat magnam expedita voluptates unde error doloremque dolore
          a, in exercitationem.
        </p>
        <p className="font-mono text-sm mb-6 leading-relaxed">
          Exercitationem doloribus alias fugiat quos quaerat quo corporis.
          Commodi provident corporis, quasi quibusdam tenetur atque inventore
          deserunt, quidem cupiditate reprehenderit minima culpa esse
          exercitationem magnam tempore ut.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;

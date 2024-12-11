import React from 'react';

const About = () => {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="text-lg space-y-4">
        <p>
          Hi, I'm <span className="font-semibold">Your Name</span>, a passionate software developer with a focus on creating intuitive and beautiful web applications. I specialize in frontend development using modern technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p>
          I started my journey in web development a few years ago, and since then, I've built several projects that have helped me grow both as a developer and as a designer. I'm always excited about learning new things and pushing the boundaries of what I can create.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, reading tech blogs, or spending time with my family and friends.
        </p>
        <p>
          I'm always looking for new opportunities to grow and collaborate with like-minded developers and creatives. Feel free to reach out if you'd like to work together!
        </p>
      </div>
    </section>
  );
};

export default About;

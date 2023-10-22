import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Mark Tellez',
      role: 'Principle Researcher',
      image: 'https://devmentor.live/headshot.png',
      url: "https://devmentor.live/authors/marktellez/",
      bio: "Mark is a Software Architect and AI Researcher with a storied history in automating all the things and is very interested in using AI advancements to break the current model of economics.",
      quote: "Is Generative AI (K) or is it (L)? Is it both? Neither? I am deeply interested."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 prose">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-4 ">
            <a href={member.url}>
              <img
                src={member.image}
                alt={member.name}
                className=" h-48 object-fill rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold prose">{member.name}</h2>
                <p className="text-gray-600 prose">{member.role}</p>
                <p className="text-gray-500 py-2 text-sm prose border-gray-200 border-t-[1px] border-b-[1px] my-2">{member.bio}</p>
                <p className="text-gray-500 font-medium prose py-2 text-sm italic relative my-6 ml-3">
                  <span className="text-6xl leading-none prose font-serif -top-3 -left-6 absolute">&ldquo;</span>
                  {member.quote}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

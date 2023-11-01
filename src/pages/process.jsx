import React from 'react';

const Process = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 prose">Research Process</h1>

      {/* Background */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Background</h2>
        <p className="prose">
          In a technological epoch characterized by rapid advances in Artificial Intelligence (AI)
          and the imminent advent of Artificial General Intelligence (AGI), this project aims to
          identify and exploit "glitches in the matrix"—market inefficiencies or tasks that can be
          automated and monetized. The project aims to make AI a competitor in the market, thereby
          setting a new precedent for AI-driven economic activities.
        </p>
      </section>

      {/* Research Planning and Undertaking */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Planning and Undertaking</h2>
        <p className="prose">
          Our approach will involve the development of a comprehensive framework to facilitate
          communication and long-term memory storage among AAIAs. Small autonomous teams of these
          agents will be formed and improved through advanced algorithms, including genetic algorithms.
          These teams will then identify, automate, and monetize market inefficiencies or tasks.
        </p>
      </section>

      {/* Weekly Updates */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Weekly Updates</h2>
        <p className="prose">
          Weekly updates on the research progress will be uploaded to a secure website portal.
          Access will be authenticated via ownership of our custom token in a Metamask wallet.
        </p>
      </section>

      {/* Monthly Reports */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Monthly Reports</h2>
        <p className="prose">
          Monthly reports detailing the findings, revenue generation, and progress will also be
          made available in the same secure website portal. The reports will be downloadable assets
          within the portal.
        </p>
      </section>

      {/* References/Sources */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">References/Sources</h2>
        <ul className="list-disc pl-6 prose">
          <li>
            <a href="https://arxiv.org/abs/xxxx.xxxxx" target="_blank" rel="noopener noreferrer">
              Microsoft AutoGen Project and Paper
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2307.07924" target="_blank" rel="noopener noreferrer">
              ChatDev Project and Paper
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Process;

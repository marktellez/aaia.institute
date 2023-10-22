import React from 'react';

const Process = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 prose">Research Process</h1>

      {/* Background */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Background</h2>
        <p className="prose">
          Provide background information about the research project, its objectives, and its significance.
        </p>
      </section>

      {/* Research Planning and Undertaking */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Planning and Undertaking</h2>
        <p className="prose">
          Describe the steps and methodologies that will be employed in planning and undertaking the research.
        </p>
      </section>

      {/* Weekly Updates */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Weekly Updates</h2>
        <p className="prose">
          Explain the methods that will be used for providing weekly updates on the research progress.
        </p>
      </section>

      {/* Monthly Reports */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 prose">Monthly Reports</h2>
        <p className="prose">
          Outline the procedures for generating and disseminating monthly reports on the research.
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

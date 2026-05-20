<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div class="page">
    <PageHeader title="Call for Papers" subtitle="DAI 2026" />

    <div class="container call-for-papers">
      <section class="intro">
        <h2>Call for Papers</h2>
        <p>DAI 2026 invites the submission of original research papers exploring distributed artificial intelligence, multi-agent systems, and intelligent agents. We seek novel contributions that address foundational challenges, system design, learning, coordination, economics, embodiment, and scientific applications through the lens of the conference&rsquo;s seven areas.</p>
      </section>

      <section class="overview">
        <h3>Conference Overview</h3>
        <p>This conference will bring together researchers working on distributed intelligence and agent-based computing. Accepted papers will be reviewed through a dual-blind process and published in the conference proceedings. Selected papers may also be presented as oral talks or posters at the DAI 2026 conference in Hong Kong.</p>
      </section>

      <section class="topics">
        <h3>Topics of Interest</h3>
        <p>Submissions are invited in the following seven areas:</p>
        <ol>
          <li>
            <strong>Agent Engineering & Infrastructure (AEI)</strong>
            <p>Research on agent platforms, engineering practices, deployment infrastructure, toolchains, runtime systems, debugging, verification, reliability, and security for agent-based systems.</p>
          </li>
          <li>
            <strong>Foundations of Agent Learning (FAL)</strong>
            <p>Theory and algorithms for agent learning, representation learning, optimization, generalization, transfer, robustness, adversarial learning, and interpretability.</p>
          </li>
          <li>
            <strong>Self-Evolving & Self-Improving Agents (SESA)</strong>
            <p>Work on self-improving agents, lifelong learning, continual adaptation, autonomous model evolution, meta-learning, self-optimization, and agents that evolve over time.</p>
          </li>
          <li>
            <strong>Multi-Agent Coordination & Cooperation (MACC)</strong>
            <p>Studies of coordination, cooperation, communication, distributed planning, consensus, negotiation, team formation, and collaborative decision-making among agents.</p>
          </li>
          <li>
            <strong>Game Theory, Economics & Agent Markets (GEAM)</strong>
            <p>Contributions in game-theoretic reasoning, mechanism design, incentives, market modeling, resource allocation, auctions, pricing, fairness, and agent-based economic systems.</p>
          </li>
          <li>
            <strong>Embodied Multi-Agent Systems (EMAS)</strong>
            <p>Research on physically or virtually embodied agents, robotics, perception-action loops, multi-agent interaction in environments, simulation, and real-world deployment.</p>
          </li>
          <li>
            <strong>Science of AI & AI for Science (SAIS)</strong>
            <p>Work that uses AI to advance scientific discovery, or research that studies AI scientifically, including applications in natural sciences, engineering, healthcare, and sustainability.</p>
          </li>
        </ol>
      </section>

      <section class="submission">
        <h3>Submission Information</h3>
        <p>Authors are invited to submit full papers describing original research results. Submissions should be written in English and should clearly explain the technical contribution, empirical evaluation, and relevance to distributed AI. All papers must adhere to the conference formatting guidelines and the dual-blind review policy.</p>
        <p>Papers will be reviewed by area chairs and program committee members. DAI 2026 intends to use OpenReview for paper submission and review, enabling public discussion after the initial review process.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

.call-for-papers {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.call-for-papers section {
  margin-bottom: 32px;
}

.call-for-papers h2,
.call-for-papers h3 {
  color: var(--primary-dark);
}

.call-for-papers ol {
  padding-left: 20px;
}

.call-for-papers li {
  margin-bottom: 18px;
}

.call-for-papers li p,
.call-for-papers .intro p,
.call-for-papers .submission p,
.call-for-papers .note p {
  margin: 8px 0 0;
  color: var(--text-light);
  line-height: 1.7;
}
</style>

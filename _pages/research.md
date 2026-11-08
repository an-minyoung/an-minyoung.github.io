---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 4
research_editorial: true
description: Research by Minyoung An on gender, skilled migration, career trajectories, political identity, and social policy. Publications, working papers, and current projects.
_styles: |
  .post-header {
    display: none;
  }
---

<div class="research-editorial">
  <p class="research-kicker">Research agenda · Gender, institutions, inequality</p>
  <h1>How institutions shape consequential choices</h1>
  <p class="research-intro">I study how gender and institutional inequality shape migration, professional opportunity, and political identity. My research brings together population and survey data, computational methods, and interviews to connect individual decisions with the social contexts in which they are made.</p>

  <nav class="research-jump-links" aria-label="Research sections">
    <a href="#migration">Migration</a>
    <a href="#careers">Careers</a>
    <a href="#identity">Identity</a>
    <a href="#publications">Publications</a>
    <a href="#policy">Policy reports</a>
    <a href="#new-projects">New projects</a>
  </nav>

{% for theme in site.data.research %}

<section class="research-theme" id="{{ theme.id }}" aria-labelledby="{{ theme.id }}-heading">
<div class="research-index" aria-hidden="true">0{{ forloop.index }}</div>
<div class="research-theme-content">
<h2 id="{{ theme.id }}-heading">{{ theme.name }}</h2>
<p class="research-question">{{ theme.question }}</p>
<p>{{ theme.summary }}</p>
{% for paper in theme.papers %}
<article class="research-paper">
<div>
<h3>{{ paper.title }}</h3>
{% if paper.collaborators %}<p class="research-meta">With {{ paper.collaborators }}</p>{% endif %}
{% if paper.authors %}<p class="research-meta">{{ paper.authors }}</p>{% endif %}
{% if paper.award %}<p class="research-award"><i class="fa-solid fa-award" aria-hidden="true"></i> {{ paper.award }}</p>{% endif %}
</div>
<span class="research-status">{{ paper.status }}</span>
</article>
{% endfor %}
</div>
</section>
{% endfor %}

  <section class="research-section" id="publications" aria-labelledby="publications-heading">
    <p class="research-kicker">Peer-reviewed work</p>
    <h2 id="publications-heading">Publications</h2>
    {% for paper in site.data.publications %}
      <article class="publication-entry">
        <p class="research-meta">{{ paper.authors }} · {{ paper.year }}</p>
        <h3><a href="{{ paper.url }}">{{ paper.title }}</a></h3>
        <p><em>{{ paper.journal }}</em> {{ paper.citation }}.</p>
        <p class="research-meta">{{ paper.note }} <a href="{{ paper.url }}">DOI: {{ paper.doi }}</a> · <a href="{{ paper.record_url }}">Article record</a></p>
      </article>
    {% endfor %}
  </section>

  <section class="research-section" id="policy" aria-labelledby="policy-heading">
    <p class="research-kicker">Applied research</p>
    <h2 id="policy-heading">Policy reports</h2>
    <p>I contributed to research on social expenditure, charitable giving, welfare finance, and social capital at the Korea Institute for Health and Social Affairs (2017–2018). These collaborative technical reports are in Korean; English headings use official titles or descriptive translations.</p>
    {% for report in site.data.policy_reports %}
      <article class="publication-entry">
        <p class="research-meta">{{ report.year }} · {{ report.institution }}</p>
        <h3>{% if report.url %}<a href="{{ report.url }}">{{ report.title }}</a>{% else %}{{ report.title }}{% endif %}</h3>
        <p class="research-meta" lang="ko">{{ report.korean_title }}</p>
        {% if report.authors %}<p class="research-meta" lang="ko">{{ report.authors }}</p>{% endif %}
        <p class="research-meta"><a href="{{ report.url }}">Official report record</a>{% if report.pdf_url %} · <a href="{{ report.pdf_url }}">{{ report.pdf_label }}</a>{% endif %}</p>
      </article>
    {% endfor %}
  </section>

  <section class="research-future" id="new-projects" aria-labelledby="new-projects-heading">
    <div class="research-future-header">
      <div>
        <p class="research-kicker">Developing at Stanford</p>
        <h2 id="new-projects-heading">New directions</h2>
      </div>
      <a class="research-affiliation" href="https://aparc.fsi.stanford.edu/people/minyoung" aria-label="Minyoung An’s Stanford profile">
        <img src="{{ '/assets/img/stanford-wordmark.png' | relative_url }}" alt="Stanford" width="426" height="91" loading="lazy">
      </a>
    </div>
    <article class="research-future-item">
      <h3>Gender inequality, online discourse, and migration intentions</h3>
      <p>How do discussions of gender inequality in social media and online forums relate to migration intentions? This developing project explores computational approaches to studying the connection between public discourse and migration decisions.</p>
    </article>
    <article class="research-future-item">
      <h3>International scholars and gendered academic trajectories</h3>
      <p>This project examines the career pathways and experiences of international scholars from East Asia, focusing on gender, professional opportunity, and connections across national academic communities.</p>
    </article>
    <p class="research-meta">Read more about this agenda on my <a href="https://aparc.fsi.stanford.edu/people/minyoung">Stanford profile</a>.</p>
  </section>
</div>

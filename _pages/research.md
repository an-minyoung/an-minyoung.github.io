---
layout: page
title: Research
permalink: /research/
---

I've always been fascinated by social structural constraints imposed on individuals and how they deepen existing inequality. My research examines these multilevel effects and how they shape individual decisions. Specifically, during my PhD programs, my research focuses on how gender — both as an individual attribute and as an institutional force — shapes decision-making processes, such as migration, career development, and identity formation, and in turn, perpetuate social inequality.

## How does gender shape migration decisions?

{% for project in site.projects %}
{% if project.category == "gender-migration" %}
<div class="project">
    <div class="thumbnail">
        <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | prepend: site.baseurl | prepend: site.url }}{% endif %}"{% if project.redirect %} target="_blank"{% endif %}>
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}
{% endfor %}

## How does gender shape career trajectories?

{% for project in site.projects %}
{% if project.category == "gender-career" %}
<div class="project">
    <div class="thumbnail">
        <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | prepend: site.baseurl | prepend: site.url }}{% endif %}"{% if project.redirect %} target="_blank"{% endif %}>
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}
{% endfor %}

## How does gender shape identity formation?

{% for project in site.projects %}
{% if project.category == "gender-identity" %}
<div class="project">
    <div class="thumbnail">
        <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | prepend: site.baseurl | prepend: site.url }}{% endif %}"{% if project.redirect %} target="_blank"{% endif %}>
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}
{% endfor %}

## Future Research

* How do expressions of gender inequality in social media and online forums correlate with migration intentions, and what can this reveal about the gendered nature of migration decision-making processes?
  
  - This project will employ Natural Language Processing techniques, including word embedding models, to analyze large-scale textual data from social media and online forums. The aim is to quantify the semantic distance between expressions of gender inequality and migration intentions, providing new insights into how gendered social contexts shape migration decisions.

* In what ways do gender dynamics influence the academic trajectories, assimilation processes, and contributions of international scholars within local and global academic communities?
  
  - This comprehensive, long-term project will examine international scholars' academic trajectories and assimilation processes, with a particular focus on gendered dynamics. The research will investigate scholars' reception in local and international academia, their contributions to productivity and innovation, and patterns of assimilation or marginalization within academic communities.

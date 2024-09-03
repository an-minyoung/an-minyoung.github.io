---
layout: page
title: Research
permalink: /research/
---

I've always been fascinated by social structural constraints imposed on individuals and how they deepen existing inequality. My research examines these multilevel effects and how they shape individual decisions. Specifically, during my PhD programs, my research focuses on how gender, both as an individual attribute and as an institutional force, shapes decision-making processes, such as migration, career development, and identity formation, and in turn, perpetuate social inequality.

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

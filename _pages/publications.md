---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications %}
  {% if post.title != "The Impact of the Change of Trade Patterns on China’s Energy Industry" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

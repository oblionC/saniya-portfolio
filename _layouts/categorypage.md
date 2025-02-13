---
layout: base
---
{% for post in site.posts %}
  {% if post.path contains 'core-samples' %}
     ..your code
  {% endif %}
{% endfor %}  
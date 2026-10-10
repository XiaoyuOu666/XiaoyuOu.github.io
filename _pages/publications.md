---
layout: page
permalink: /publications/
title: Publications
description: First-author and collaborative work in wireless communications.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications publication-page">
<section class="publication-group" aria-labelledby="first-author-heading">
<h2 id="first-author-heading">First-author papers</h2>
{% bibliography --group_by year --query @*[authorship=first]* %}
</section>
<section class="publication-group" aria-labelledby="collaborative-heading">
<h2 id="collaborative-heading">Collaborative papers</h2>
{% bibliography --group_by none --query @*[authorship=collaborative]* %}
</section>
</div>

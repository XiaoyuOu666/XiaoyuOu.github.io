---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<div class="publications publication-list publication-cards">
<section class="publication-group" aria-labelledby="first-author-heading">
<h2 id="first-author-heading">First-author papers</h2>
{% bibliography --group_by year --template publication_card --query @*[authorship=first]* %}
</section>
<section class="publication-group" aria-labelledby="collaborative-heading">
<h2 id="collaborative-heading">Collaborative papers</h2>
{% bibliography --group_by none --template publication_card --query @*[authorship=collaborative]* %}
</section>
</div>

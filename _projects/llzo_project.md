---
layout: page
title: Solid Electrolyte
description: A symmetric Hebb-Wagner method to measure the electron conductivity of LLZTO
img: assets/img/llzo_cover.png
importance: 2
category: work
related_publications: false
---

## Introduction

In this project, a symmetric Hebb-Wagner method was presented to address the challenge of accurately measuring the electron conductivity of LLZTO, a promising solid electrolyte for solid-state lithium-ion batteries, under different bias voltage, test duration, and temperature. This project was conducted in collaboration with a senior doctorial student [Guoyao Li](https://www.researchgate.net/profile/Li-Guoyao), supervised by Prof. [Huanan Duan](https://en.smse.sjtu.edu.cn/people_detail/195) of [School of Materials Science and Engineering](https://en.smse.sjtu.edu.cn/) at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/).

This was a [PRP project](https://uitp.sjtu.edu.cn/innovation/index.html) (an undergraduate research project) of the school. The method was based on the graduation thesis of Guoyao. My contribution included the preparation of LLZTO pellets, structural and electrochemical characterization, data analysis, writing, and a final thesis defense.

However, the project was not completed due to the COVID-19 pandemic. No paper is published for this work since the lack of data. And the project was not continued after a [paper](https://doi.org/10.1002/aenm.202204098) almost identical to our work was published.

## Methods

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig1.jpg" title="LLZTO pellets" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig3.jpg" title="Sintered to form shape" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig2.jpg" title="Sintered after coating" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Preparation of LLZTO samples
</div>

The LLZTO samples were prepared by powder sintering. After sintering, both sides of the samples were coated with a thin layer of silver, which acted as blocking electrodes that impede the movement of ions.

The samples were then tested in a electrochemical workstation Solartron 1960. CA curves and EIS curves were measured. Besides, XRD (Japan Rigaku 0.05° min-1，10-70°) and SEM were used (USA Sirion) to characterize the structure and surface morphology of the samples. The Archimedes method was used to measure the density of the samples. The ion conductivity and electron conductivity of samples were calculated based on the equations below:

$$
\sigma = \frac{L}{R \cdot S} = \frac{4 I L}{\pi E_i d^2}
$$

## Results

The XRD and SEM results showed that the samples were successfully prepared. The relative density of samples are measured to be around 90% and showed good consistency.

The electrochemical results are as follows.

### Electron conducticities under different test duration

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig5.jpg" title="I-t curves under different duration" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig4.jpg" title="EC under different duration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Measured electron conductivities under bias voltages from 1V to 5V and holds for 1, 2, and 10 hours
</div>

The electron cunductivities are calculated by the stable current derived from I-t curves. At shorter test duration, because the lithium ion are not adequately accumulated at the surface of blocking electrode, the measured electron conductivities are contributed by both electrons and residual ions, which leads to a higher electron conductivity. While at longer test duration, up to 10 hours, the electron conductivities are lower and more independent of the bias voltage.

### Electron conductivities under different bias voltage

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig6.jpg" title="EC under different bias voltage" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Measured electron conductivities of 3 samples under bias voltages from 1V to 5V and holds 10 hours
</div>

Although the electron cunductivities of different samples are different, they have the same trend of decreasing with the increase of bias voltage. When bias voltage is higher than 3V, the electron conductivity stops increasing and remains stable. It can be inferred that a low bias voltage is not capable of gathering lithium ions at the surface of blocking electrode, leading to errors in the measurement of electron conductivity.

### Electron conductivities under different temperature

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llzo_fig7.jpg" title="EC under different temperature" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Measured electron conductivities under temperature from 20°C to 500°C under bias voltage of 1V
</div>

The electron conductivities of different temperature is fitted by the equation,

$$
\frac{I}{e^u - 1} \cdot \frac{L F}{R A} = \sigma_e e^{-u} T + \sigma_h
$$

It can be seen that the electron conductivity decreases with the increase of temperature, because the mobility of ions increases with the increase of temperature, which leads to faster accumulation and causes less error to the measured results. The electron cunductivity of LLZTO at room temperature can be calculated from the linear fitted lines.

## Conclusion

In this work, the electron cunductivity of LLZTO under various conditions are measured by a symmetric Hebb-Wagner method. The reason to the variation of electron conductivity under different test duration, bias voltage, and temperature are analyzed.

From this project, not only did I learn basic knowledge of solid-state electrolytes and several characterization methods, but I also learned a lesson about what it is like to do research and how to face failure. Although the project was not completed, I still appreciate the opportunity to participate in this project and the guidance of my supervisor.

I was also inspired by the failure of this project. I realized that methods with high efficiency are very crucial in research. And I began to explore the combination of machine learning, data-based methods, and simulations in the field of materials science.

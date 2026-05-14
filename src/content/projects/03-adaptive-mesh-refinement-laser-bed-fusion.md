---
order: 3
title: "Adaptive mesh refinement accelerated simulation of laser-bed fusion"
figure:
  imageName: "pf_cover.png"
  caption: "Fig 3 | Phase distribution visualization of a simulated bulk specimen produced by laser fusion."
paragraphs:
  - 'In this project, I am working as a research assistant in Prof. <a href="https://smse.sjtu.edu.cn/people/detail/39">Hong Liu</a>’s group at Shanghai Jiao Tong University. We introduced a two-step adaptive mesh refinement (AMR) approach to accelerate the phase field simulation of the microstructure evolution in laser-based addtive manufacturing.'
  - 'Although phase field models are widely used in phase distribution simulation, the mesh size needs to be adequately small to simulate the nucleation and growth process, which leads to extensive computational time and cost as consequences. We developed a two-step AMR strategy that, when there is nucleus formation inside a coarse grid, the grid will be automatically refined to fine mesh. In the opposite, if the fine mesh inside a coarse grid is mostly occupied by one phase, the grid will then be coarsened back. In this way, we are able to simulate the nucleation process while maintaining low amount of grids. This projects is still under development.'
---

---
title: "Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging"
collection: publications
category: manuscripts
permalink: "/publication/2024-early-stopping-criteria-for-training-generative-adversarial-networks-in-biomedical-imaging"
date: 2024-01-01
venue: "TBD"
paperurl: "https://arxiv.org/pdf/2405.20987"
bibtex: "@article{saad2024early,  title={Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging}, author={Saad, Muhammad Muneeb and Rehmani, Mubashir Husain and O'Reilly, Ruairi}, journal={arXiv preprint arXiv:2405.20987}, year={2024}}"
citation: "Saad, Muhammad Muneeb and Rehmani, Mubashir Husain and O'Reilly, Ruairi} (2024). “Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging.” TBD."
---

## Abstract

Generative Adversarial Networks (GANs) have high computational costs to train their complex architectures. Throughout the training process, GANs' output is analyzed qualitatively based on the loss and synthetic images' diversity and quality. Based on this qualitative analysis, training is manually halted once the desired synthetic images are generated. By utilizing an early stopping criterion, the computational cost and dependence on manual oversight can be reduced yet impacted by training problems such as mode collapse, non-convergence, and instability. This is particularly prevalent in biomedical imagery, where training problems degrade the diversity and quality of synthetic images, and the high computational cost associated with training makes complex architectures increasingly inaccessible. This work proposes a novel early stopping criteria to quantitatively detect training problems, halt training, and reduce the computational costs associated with synthesizing biomedical images. Firstly, the range of generator and discriminator loss values is investigated to assess whether mode collapse, non-convergence, and instability occur sequentially, concurrently, or interchangeably throughout the training of GANs. Secondly, utilizing these occurrences in conjunction with the Mean Structural Similarity Index (MS-SSIM) and Frechet Inception Distance (FID) scores of synthetic images forms the basis of the proposed early stopping criteria. This work helps identify the occurrence of training problems in GANs using low-resource computational cost and reduces training time to generate diversified and high-quality synthetic images.

[Paper](https://arxiv.org/pdf/2405.20987) [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=86x5oQgAAAAJ&sortby=pubdate&citation_for_view=86x5oQgAAAAJ:rO6llkc54NcC)

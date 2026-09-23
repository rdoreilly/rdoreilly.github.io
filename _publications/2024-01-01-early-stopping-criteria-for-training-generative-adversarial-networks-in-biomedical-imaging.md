---
title: "Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging"
collection: publications
category: manuscripts
permalink: "/publication/2024-early-stopping-criteria-for-training-generative-adversarial-networks-in-biomedical-imaging"
date: 2024-01-01
venue: "2024 35th Irish Signals and Systems Conference (ISSC)"
paperurl: "https://doi.org/10.1109/ISSC61953.2024.10603268"
bibtex: "@inproceedings{saad2024early, title={Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging}, author={Saad, Muhammad Muneeb and Rehmani, Mubashir Husain and O'Reilly, Ruairi}, booktitle={2024 35th Irish Signals and Systems Conference (ISSC)}, year={2024}, doi={10.1109/ISSC61953.2024.10603268}}"
citation: "Saad, Muhammad Muneeb; Rehmani, Mubashir Husain; O'Reilly, Ruairi (2024). “Early Stopping Criteria for Training Generative Adversarial Networks in Biomedical Imaging.” 2024 35th Irish Signals and Systems Conference (ISSC). DOI: 10.1109/ISSC61953.2024.10603268."
---

## Abstract

Generative Adversarial Networks (GANs) have high computational costs to train their complex architectures. Throughout the training process, GANs' output is analyzed qualitatively based on the loss and synthetic images' diversity and quality. Based on this qualitative analysis, training is manually halted once the desired synthetic images are generated. By utilizing an early stopping criterion, the computational cost and dependence on manual oversight can be reduced yet impacted by training problems such as mode collapse, non-convergence, and instability. This is particularly prevalent in biomedical imagery, where training problems degrade the diversity and quality of synthetic images, and the high computational cost associated with training makes complex architectures increasingly inaccessible. This work proposes a novel early stopping criteria to quantitatively detect training problems, halt training, and reduce the computational costs associated with synthesizing biomedical images. Firstly, the range of generator and discriminator loss values is investigated to assess whether mode collapse, non-convergence, and instability occur sequentially, concurrently, or interchangeably throughout the training of GANs. Secondly, utilizing these occurrences in conjunction with the Mean Structural Similarity Index (MS-SSIM) and Frechet Inception Distance (FID) scores of synthetic images forms the basis of the proposed early stopping criteria. This work helps identify the occurrence of training problems in GANs using low-resource computational cost and reduces training time to generate diversified and high-quality synthetic images.

[Paper](https://doi.org/10.1109/ISSC61953.2024.10603268) [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=86x5oQgAAAAJ&sortby=pubdate&citation_for_view=86x5oQgAAAAJ:rO6llkc54NcC)

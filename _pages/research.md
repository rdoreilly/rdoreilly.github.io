---
title: "Research"
permalink: /research/
author_profile: true
---

I work on engineering AI-intensive software that people can trust. Most of the applied work is in healthcare, where decisions must be traceable and where data quality, bias and uncertainty have direct consequences.

## Explainable and fair AI

How good is an explanation, and for what? This strand evaluates model-agnostic explanations (which neighbourhood of data an explanation is built from, and whether it is sufficient and necessary for the decision being explained) and audits models for bias across patient subgroups.

- Pawar, O'Shea, Costello, Beder & O'Reilly (2024). [Optimal Neighborhood Contexts in Explainable AI: An Explanandum-Based Evaluation](https://doi.org/10.1109/OJCS.2024.3389781). *IEEE Open Journal of the Computer Society*.
- Bahamazava & O'Reilly (2025). [FAIR-MED: Bias Detection and Fairness Evaluation in Healthcare Focused XAI](https://doi.org/10.1007/978-3-032-08317-3_18). *xAI 2025*, Springer CCIS.

## Generative AI

Generative models can fill gaps in scarce biomedical datasets, but only if the synthetic images are realistic and varied. This strand covers training problems such as mode collapse, when to stop training, and what the common quality metrics do and do not tell you.

- Saad, O'Reilly & Rehmani (2024). [A Survey on Training Challenges in Generative Adversarial Networks for Biomedical Image Analysis](https://doi.org/10.1007/s10462-023-10624-y). *Artificial Intelligence Review*.
- Saad, Rehmani & O'Reilly (2026). [Adaptive Input-image Normalization for Solving the Mode Collapse Problem in GAN-based X-ray Images](https://doi.org/10.1016/j.bspc.2025.108333). *Biomedical Signal Processing and Control*.

## Human factors and affective computing

This strand models emotion, personality and stress from physiological and behavioural data such as ECG, skin conductance, speech and facial expression, with attention to signal quality and to how well results transfer between datasets.

- Donovan, Johnson, de Róiste & O'Reilly (2025). [Investigating the Relationships Between Basic Emotions and the Big Five Personality Traits and Their Sub-Traits](https://doi.org/10.1111/jopy.13027). *Journal of Personality*.
- Dair, Dockray & O'Reilly (2026). [Towards Dataset Agnostic ECG Signal Quality Assessments for Psychophysiological Analysis](https://doi.org/10.1027/0269-8803/a000357). *Journal of Psychophysiology*.

I also work on the software underneath: distributed and cloud-native platforms and reproducible ML pipelines, for example [VolumeScaler](https://doi.org/10.21105/joss.08846), a Kubernetes controller published in the *Journal of Open Source Software*.

## Current project: XFAIR-MED {#xfair-med}

**Explainable Fairness Audit and Interoperability in Medical AI.** High overall accuracy does not mean a clinical AI model is reliable for every patient group. XFAIR-MED is building an open-source, model-agnostic audit framework for breast-cancer AI that checks the data, the model and its explanations across demographic, clinical and molecular subgroups. Findings are treated as signals for expert investigation, not as automatic evidence of unfairness. The project extends the FAIR-MED framework.

- **Fellow:** Dr Katsiaryna Bahamazava, ROSETTA Postdoctoral Fellow, University of Limerick
- **Supervision:** Dr Katie Crowley (University of Limerick; Lero) and Dr Ruairí O'Reilly (MTU; Lero)
- **Duration:** 11 May 2026 – 10 May 2028
- **Funding:** ROSETTA MSCA COFUND, coordinated by the University of Galway, with co-funding from Lero, the Research Ireland Centre for Software

*This project has received funding from the European Union's Horizon Europe research and innovation programme under the Marie Skłodowska-Curie grant agreement No. 101126578.*

## Selected talks

- **Agentic AI: Smart Help or Digital Chaos?** Pint of Science Ireland, Cork, 2026
- **Building Trustworthy and Equitable AI.** Society of Actuaries in Ireland, 2025
- **Life is Not Fair — Should AI Be?** Pint of Science Ireland, Cork, 2025
- **Human-Centred XAI.** Keynote, ICHI 2024
- **Evaluating Synthesized Biomedical Imagery.** ML Dublin @ EY, 2023
- **AI in Medicine & Healthcare.** CMMHC 2023

Earlier conference presentations are on the [talks page](/talks/).

## Collaboration

I am a funded investigator in the **Lero** and **ADAPT** Research Ireland centres and a member of the **Riomh** research group at MTU. I am glad to hear from researchers, clinicians and companies working on trustworthy AI and AI-intensive software systems.

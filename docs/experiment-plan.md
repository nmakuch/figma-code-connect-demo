# Experiment presentation: Figma Code Connect

Suggested title: **Figma Code Connect: a small feasibility experiment**

## Framing

The current design system's integration has not been evaluated in this experiment. A standalone library keeps the first test small enough to understand the workflow and identify the next questions.

Research question: Can explicit mappings from Figma component properties to component APIs improve the accuracy and usability of developer handoff examples?

Hypothesis: A developer inspecting a mapped Button or Link can obtain a usage example whose component, props, and text match the selected design instance.

Scope: Two components, a React repository, a Figma library, and authored CLI templates. Record the environment, entitlement, and CLI version used. This experiment does not evaluate AI/MCP output quality unless a separate AI test is added.

## Six-slide outline

| Slide | Content | Evidence to show |
| --- | --- | --- |
| 1. Problem and question | How do developers find the correct component and its props from a design? | One unconnected Figma instance and its Inspect output |
| 2. Test setup | Two code components, their Figma equivalents, and two mapping templates | Repository and small Figma library |
| 3. Mapping contract | Variant, Size, State, Label, and New tab | Property mapping table from README |
| 4. Live demonstration | Change a Button and Link instance; inspect the resulting usage examples | Figma Dev Mode, then the working local components |
| 5. Findings | Record what worked, what needed manual mapping, and actual setup time | Completed observation table below |
| 6. Next decision | Assess one real component with someone familiar with the production codebase | Questions about APIs, ownership, and maintenance |

## Live demonstration script (about 5 minutes)

1. Show the code repository. Open Button.tsx and point out variant, size, and the inherited native disabled attribute. Open Link.tsx and point out href, variant, and newTab.
2. Show the Figma library with its exposed properties. Explain that property names and types are intentionally aligned for a controlled first test.
3. Open Button.figma.ts. Highlight the library-node URL, the source path, and the State-to-Boolean mapping.
4. Select a Button instance. Start with Primary / Medium / Default and `Save changes`. Inspect it in Dev Mode.
5. Switch to Design mode if needed. Change to Secondary / Small / Disabled and label `Continue`. Return to Dev Mode and check each prop and the text in the snippet.
6. Select a Link instance, change Default to Muted, and enable New tab. Confirm the prop and label output. Point out that href is a fixed demonstration destination chosen in the template.
7. Show the local playground. Compare the same props with the real rendered Button and Link. Demonstrate that disabled prevents activation and that the Link retains native anchor behavior.
8. Describe the maintenance boundary: instance values update the snippet through the published template; changes to the mapping itself require editing and republishing it.

Publish and rehearse before presenting. You can show the publish command as part of the explanation without making live token entry part of the presentation. Capture a short recording of the successful Figma interaction as a backup after completing the live integration.

## Observation table

Fill this in after running the Figma integration. The starter's local build does not supply these results.

| Test | Expected result | Actual result | Pass / issue |
| --- | --- | --- | --- |
| Select Button | Correct component and import shown | | |
| Primary → Secondary | variant changes to secondary | | |
| Medium → Small | size changes to small | | |
| Default → Disabled | disabled changes to true | | |
| Label → Continue | children changes to Continue | | |
| Select Link | Correct component and import shown | | |
| Default → Muted | variant changes to muted | | |
| New tab off → on | newTab changes to true | | |
| Instance in consumer file | Same mapped output is available | | |
| Copy snippet into src consumer | Resolves imports and renders the expected component | | |
| Edit mapping, then republish | Updated template is available in Dev Mode | | |

Record these timings separately: component implementation, Figma component construction, mapping work, access/setup troubleshooting, and publishing. A small aligned demo does not provide a reliable estimate for an existing system.

## Findings you can report after testing

- Whether all designed property combinations produced usable code examples.
- Which design properties required a different code name or type.
- What needed manual setup and what developers could reuse afterwards.
- How much effort changed imports, APIs, or Figma properties would require.
- Which questions remain about the production design system.

## Questions for the production follow-up

- Which implementation should examples target: Web Components, a framework wrapper, or another supported entry point?
- What are the real Button and Link APIs and import conventions?
- How closely do the library properties match those APIs, including children/slots, state, icons, and destinations?
- Who maintains and reviews the mappings alongside component changes?
- Which developer handoff tasks would benefit enough to justify upkeep?

The template format is framework-agnostic. A Web Component pilot can follow this experiment once the actual tags, attributes, imports, and usage conventions have been checked.

## Suggested closing statement

“This experiment evaluates the Code Connect workflow with two deliberately simple components. If the mappings produce useful examples, the next step is to assess one component from our current design system with a developer who knows its implementation.”

Use conditional wording until the live Figma tests have passed. Do not present the local playground's reference snippets as evidence of a published Figma connection.

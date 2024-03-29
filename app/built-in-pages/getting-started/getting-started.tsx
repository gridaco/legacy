import { BoringDocument } from "@boring.so/document-model";
import { _demo_wnv } from "../../built-in-demos";

export const getting_started_document = new BoringDocument({
  id: "built-in/getting-started",
  title: `Getting Started`,
  content: `
<h1>Upload your first design</h1>
<p>You can upload design from figma via running the plugin on it. Or the quick handy way is to use the link importer below.</p>
<br/>
<br/>
<h1>Too much? - Quick start (30 Seconds)</h1>
<p>Grida is an open source software for Ultimate productivity for startups & application creation. With built-in powerful text editor engine and graphics engine based on Skia 2D Graphics library, we provide the most effecient way to design, to develop the app and to manage the contents Live.</p>
<p>Here, you can copy & paste <a href="${_demo_wnv._DEMO_NWV_MAIN_PAGE_DESIGN_FIGMA_URL}" target="_blank">this url</a> if you don't have your figma design yet.</p>
<import-design-with-url></import-design-with-url>
<br/>
<img src="https://grida-app-builtin-pages.s3.us-west-1.amazonaws.com/getting-started/resources/how-to-copy-link-of-design-in-figma.min.gif" />
  `,
});

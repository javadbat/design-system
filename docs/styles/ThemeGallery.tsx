import React from "react";
import { composeStories } from "@storybook/react-vite";
import { ColorItem, ColorPalette } from "@storybook/addon-docs/blocks";
import * as ButtonStyles from "../../modules/jb-button/stories/Styles.stories";
import * as CalendarStyles from "../../modules/jb-calendar/stories/Styles.stories";
import * as CheckboxStyles from "../../modules/jb-checkbox/stories/Styles.stories";
import * as DateInputStyles from "../../modules/jb-date-input/stories/Styles.stories";
import * as FileInputStyles from "../../modules/jb-file-input/stories/Styles.stories";
import * as ImageInputStyles from "../../modules/jb-image-input/stories/Styles.stories";
import * as InputStyles from "../../modules/jb-input/stories/Styles.stories";
import * as LoadingStyles from "../../modules/jb-loading/stories/Styles.stories";
import * as ModalStyles from "../../modules/jb-modal/stories/Styles.stories";
import * as NotificationStyles from "../../modules/jb-notification/stories/Styles.stories";
import * as PinInputStyles from "../../modules/jb-pin-input/stories/Styles.stories";
import * as PopoverStyles from "../../modules/jb-popover/stories/Styles.stories";
import * as QRCodeStyles from "../../modules/jb-qrcode/stories/Styles.stories";
import * as SelectStyles from "../../modules/jb-select/stories/Styles.stories";
import * as SwitchStyles from "../../modules/jb-switch/stories/Styles.stories";
import * as TextareaStyles from "../../modules/jb-textarea/stories/Styles.stories";
import * as TimeInputStyles from "../../modules/jb-time-input/stories/Styles.stories";
import * as TimePickerStyles from "../../modules/jb-time-picker/stories/Styles.stories";
import antDesignCss from "./ant-design.css?raw";
import auroraCss from "./aurora.css?raw";
import bootstrapCss from "./bootstrap.css?raw";
import candyCss from "./candy.css?raw";
import carbonCss from "./carbon.css?raw";
import cupertinoCss from "./cupertino.css?raw";
import fluentCss from "./fluent.css?raw";
import forestCss from "./forest.css?raw";
import materialCss from "./material.css?raw";
import porcelainCss from "./porcelain.css?raw";
import sunsetCss from "./sunset.css?raw";
import terminalCss from "./terminal.css?raw";

type ThemeKey =
  | "material"
  | "ant-design"
  | "bootstrap"
  | "cupertino"
  | "fluent"
  | "carbon"
  | "aurora"
  | "forest"
  | "sunset"
  | "porcelain"
  | "candy"
  | "terminal";

type ComponentStyleCollection = {
  group: string;
  label: string;
  styles: Record<string, React.ComponentType>;
};

export const themes: Record<ThemeKey, {
  name: string;
  storyKey: string;
  file: string;
  description: string;
  tokens: Record<string, string>;
}> = {
  "material": {
    name: "Material",
    storyKey: "Material",
    file: "material.css",
    description: "A practical Google-style recipe with clean white surfaces, blue focus states, and rounded controls.",
    tokens: {
      "--jb-primary": "#1967d2",
      "--jb-primary-hover": "#174ea6",
      "--jb-primary-pressed": "#185abc",
      "--jb-text-primary": "#1f1f1f",
      "--jb-text-secondary": "#3c4043",
      "--jb-background": "#f8fafd",
      "--jb-surface": "#ffffff",
      "--jb-surface-hover": "#e8f0fe",
      "--jb-border-color": "#dadce0",
      "--jb-focus-color": "#1967d2",
      "--jb-radius": "1rem",
    },
  },
  "ant-design": {
    name: "Ant Design",
    storyKey: "AntDesign",
    file: "ant-design.css",
    description: "A compact enterprise UI recipe with crisp blue actions, restrained borders, and moderate radius.",
    tokens: {
      "--jb-primary": "#1677ff",
      "--jb-primary-hover": "#4096ff",
      "--jb-primary-pressed": "#0958d9",
      "--jb-text-primary": "#262626",
      "--jb-text-secondary": "#595959",
      "--jb-background": "#f5f5f5",
      "--jb-surface": "#ffffff",
      "--jb-surface-hover": "#e6f4ff",
      "--jb-border-color": "#f0f0f0",
      "--jb-focus-color": "#1677ff",
      "--jb-radius": "0.5rem",
    },
  },
  "bootstrap": {
    name: "Bootstrap",
    storyKey: "Bootstrap",
    file: "bootstrap.css",
    description: "A familiar web-app recipe with Bootstrap blue, simple panels, and predictable form styling.",
    tokens: {
      "--jb-primary": "#0d6efd",
      "--jb-primary-hover": "#0b5ed7",
      "--jb-primary-pressed": "#0a58ca",
      "--jb-text-primary": "#212529",
      "--jb-text-secondary": "#495057",
      "--jb-background": "#f8f9fa",
      "--jb-surface": "#ffffff",
      "--jb-surface-hover": "#e9ecef",
      "--jb-border-color": "#dee2e6",
      "--jb-focus-color": "#0d6efd",
      "--jb-radius": "0.5rem",
    },
  },
  "cupertino": {
    name: "Cupertino",
    storyKey: "Cupertino",
    file: "cupertino.css",
    description: "An Apple-inspired recipe with soft translucent surfaces, blue accents, and generous corners.",
    tokens: {
      "--jb-primary": "#007aff",
      "--jb-primary-hover": "#006ee6",
      "--jb-primary-pressed": "#005ecb",
      "--jb-text-primary": "#1d1d1f",
      "--jb-text-secondary": "#3a3a3c",
      "--jb-background": "#f2f2f7",
      "--jb-surface": "oklch(99% 0.01 250 / 0.92)",
      "--jb-surface-hover": "#e5e5ea",
      "--jb-border-color": "oklch(90% 0.01 250 / 0.8)",
      "--jb-focus-color": "#007aff",
      "--jb-radius": "0.75rem",
    },
  },
  "fluent": {
    name: "Fluent",
    storyKey: "Fluent",
    file: "fluent.css",
    description: "A Microsoft-style recipe with neutral surfaces, square-friendly radius, and calm blue focus.",
    tokens: {
      "--jb-primary": "#0078d4",
      "--jb-primary-hover": "#106ebe",
      "--jb-primary-pressed": "#005a9e",
      "--jb-text-primary": "#201f1e",
      "--jb-text-secondary": "#323130",
      "--jb-background": "#f3f2f1",
      "--jb-surface": "#f8f8f8",
      "--jb-surface-hover": "#edebe9",
      "--jb-border-color": "#e1dfdd",
      "--jb-focus-color": "#0078d4",
      "--jb-radius": "0.5rem",
    },
  },
  "carbon": {
    name: "Carbon",
    storyKey: "Carbon",
    file: "carbon.css",
    description: "A dark, squared-off recipe for dense product tools and technical dashboards.",
    tokens: {
      "--jb-primary": "#0f62fe",
      "--jb-primary-hover": "#4589ff",
      "--jb-primary-pressed": "#0043ce",
      "--jb-text-primary": "#f4f4f4",
      "--jb-text-secondary": "#c6c6c6",
      "--jb-background": "#161616",
      "--jb-surface": "#262626",
      "--jb-surface-hover": "#393939",
      "--jb-border-color": "#525252",
      "--jb-focus-color": "#78a9ff",
      "--jb-radius": "0",
    },
  },
  "aurora": {
    name: "Aurora",
    storyKey: "Aurora",
    file: "aurora.css",
    description: "A cinematic dark recipe with cool teal accents and soft luminous surfaces.",
    tokens: {
      "--jb-primary": "#7de4d3",
      "--jb-primary-hover": "#a99cff",
      "--jb-primary-pressed": "#55c8bb",
      "--jb-text-primary": "#edf7ff",
      "--jb-text-secondary": "#d7e5f2",
      "--jb-background": "#10151f",
      "--jb-surface": "#192233",
      "--jb-surface-hover": "oklch(100% 0 0 / 0.12)",
      "--jb-calendar-surface-bg": "radial gradients + dark linear surface",
      "--jb-border-color": "oklch(100% 0 0 / 0.12)",
      "--jb-focus-color": "#7de4d3",
      "--jb-radius": "0.85rem",
    },
  },
  "forest": {
    name: "Forest",
    storyKey: "Forest",
    file: "forest.css",
    description: "A deep green recipe with warm gold accents and editorial surfaces.",
    tokens: {
      "--jb-primary": "#f3d36a",
      "--jb-primary-hover": "#ffd98a",
      "--jb-primary-pressed": "#d9b84f",
      "--jb-text-primary": "#f4f0df",
      "--jb-text-secondary": "#dbe8d1",
      "--jb-background": "#163024",
      "--jb-surface": "#21382d",
      "--jb-surface-hover": "oklch(88% 0.08 130 / 0.16)",
      "--jb-calendar-surface-bg": "green linear-gradient surface",
      "--jb-border-color": "oklch(94% 0.06 105 / 0.18)",
      "--jb-focus-color": "#f3d36a",
      "--jb-radius": "0.75rem",
    },
  },
  "sunset": {
    name: "Sunset",
    storyKey: "Sunset",
    file: "sunset.css",
    description: "A warm rose and amber recipe for expressive product moments.",
    tokens: {
      "--jb-primary": "#ffd166",
      "--jb-primary-hover": "#ffb26b",
      "--jb-primary-pressed": "#f09d48",
      "--jb-text-primary": "#fff7ef",
      "--jb-text-secondary": "#ffe8da",
      "--jb-background": "#412553",
      "--jb-surface": "#8a3f56",
      "--jb-surface-hover": "oklch(100% 0 0 / 0.16)",
      "--jb-calendar-surface-bg": "rose radial + sunset linear surface",
      "--jb-border-color": "oklch(100% 0 0 / 0.18)",
      "--jb-focus-color": "#ffd166",
      "--jb-radius": "1rem",
    },
  },
  "porcelain": {
    name: "Porcelain",
    storyKey: "Porcelain",
    file: "porcelain.css",
    description: "A light blue-white recipe for polished admin and content-heavy forms.",
    tokens: {
      "--jb-primary": "#276c9d",
      "--jb-primary-hover": "#1c5a86",
      "--jb-primary-pressed": "#174a70",
      "--jb-text-primary": "#1c3045",
      "--jb-text-secondary": "#40586e",
      "--jb-background": "#edf4fb",
      "--jb-surface": "#ffffff",
      "--jb-surface-hover": "#e4f0f9",
      "--jb-calendar-surface-bg": "white-to-blue linear-gradient surface",
      "--jb-border-color": "#d6e3ef",
      "--jb-focus-color": "#276c9d",
      "--jb-radius": "0.625rem",
    },
  },
  "candy": {
    name: "Candy",
    storyKey: "Candy",
    file: "candy.css",
    description: "A playful pink recipe with pill-shaped controls and soft surfaces.",
    tokens: {
      "--jb-primary": "#ec4899",
      "--jb-primary-hover": "#f472b6",
      "--jb-primary-pressed": "#db2777",
      "--jb-text-primary": "#423047",
      "--jb-text-secondary": "#6e5575",
      "--jb-background": "#fff7fb",
      "--jb-surface": "#f7f0ff",
      "--jb-surface-hover": "#ffe0ef",
      "--jb-calendar-surface-bg": "pink and blue radial gradients",
      "--jb-border-color": "#ffd5e8",
      "--jb-focus-color": "#ec4899",
      "--jb-radius": "999px",
    },
  },
  "terminal": {
    name: "Terminal",
    storyKey: "Terminal",
    file: "terminal.css",
    description: "A high-contrast terminal recipe for technical or developer-facing examples.",
    tokens: {
      "--jb-primary": "#62ff93",
      "--jb-primary-hover": "#a3ffba",
      "--jb-primary-pressed": "#3ce572",
      "--jb-text-primary": "#d6ffe3",
      "--jb-text-secondary": "#9ce7b7",
      "--jb-background": "#05080d",
      "--jb-surface": "#0d1117",
      "--jb-surface-hover": "#13251b",
      "--jb-calendar-surface-bg": "terminal linear-gradient surface",
      "--jb-border-color": "#243b2f",
      "--jb-focus-color": "#62ff93",
      "--jb-radius": "0.25rem",
    },
  },
};

const componentStyles: ComponentStyleCollection[] = [
  { group: "Actions", label: "Button", styles: composeStories(ButtonStyles) },
  { group: "Form Controls", label: "Checkbox", styles: composeStories(CheckboxStyles) },
  { group: "Form Controls", label: "Input", styles: composeStories(InputStyles) },
  { group: "Form Controls", label: "Pin Input", styles: composeStories(PinInputStyles) },
  { group: "Form Controls", label: "Select", styles: composeStories(SelectStyles) },
  { group: "Form Controls", label: "Switch", styles: composeStories(SwitchStyles) },
  { group: "Form Controls", label: "Textarea", styles: composeStories(TextareaStyles) },
  { group: "Pickers", label: "Calendar", styles: composeStories(CalendarStyles) },
  { group: "Pickers", label: "Date Input", styles: composeStories(DateInputStyles) },
  { group: "Pickers", label: "Time Input", styles: composeStories(TimeInputStyles) },
  { group: "Pickers", label: "Time Picker", styles: composeStories(TimePickerStyles) },
  { group: "Feedback", label: "Loading", styles: composeStories(LoadingStyles) },
  { group: "Feedback", label: "Notification", styles: composeStories(NotificationStyles) },
  { group: "Overlays", label: "Modal", styles: composeStories(ModalStyles) },
  { group: "Overlays", label: "Popover", styles: composeStories(PopoverStyles) },
  { group: "Media", label: "File Input", styles: composeStories(FileInputStyles) },
  { group: "Media", label: "Image Input", styles: composeStories(ImageInputStyles) },
  { group: "Media", label: "QR Code", styles: composeStories(QRCodeStyles) },
];

const componentGroups = Array.from(new Set(componentStyles.map((component) => component.group)));

const themeCssSources: Record<ThemeKey, string> = {
  "material": materialCss,
  "ant-design": antDesignCss,
  "bootstrap": bootstrapCss,
  "cupertino": cupertinoCss,
  "fluent": fluentCss,
  "carbon": carbonCss,
  "aurora": auroraCss,
  "forest": forestCss,
  "sunset": sunsetCss,
  "porcelain": porcelainCss,
  "candy": candyCss,
  "terminal": terminalCss,
};

const officialColorTokenPattern = /^--jb-(black|white|highlight|neutral(?:-\d+)?|primary(?:-(?:dark|light|contrast|hover|pressed|subtle))?|secondary(?:-(?:dark|light|contrast|hover|pressed|subtle))?|red(?:-(?:dark|light|contrast|hover|pressed|subtle))?|green(?:-(?:dark|light|contrast|hover|pressed|subtle))?|yellow(?:-(?:dark|light|contrast|hover|pressed|subtle))?|text-primary|text-secondary|text-contrast)$/;

const customColorTokenDescriptions: Record<string, string> = {
  "--jb-text-disabled": "Disabled labels, values, icons, placeholder-like text, and unavailable calendar days.",
  "--jb-background": "Outer page background and the base color behind full theme previews.",
  "--jb-surface": "Cards, panels, popovers, modal bodies, and calm control backgrounds.",
  "--jb-surface-hover": "Hover or selected-adjacent surfaces such as calendar day hover, menu hover, and soft fills.",
  "--jb-calendar-surface-bg": "Calendar and date-input popover surface treatment when the theme needs a richer background.",
  "--jb-border-color": "Shared border, divider, inset outline, and subtle stroke color across recipes.",
  "--jb-focus-color": "Focus rings, active trigger icons, selected accents, and keyboard-visible states.",
  "--jb-success": "Positive/status accent, especially calendar today markers and small success-like indicators.",
};

type TokenEntry = {
  token: string;
  value: string;
};

type OfficialColorGroup = {
  title: string;
  subtitle: string;
  colors: Record<string, string>;
};

function parseCustomProperties(css: string): TokenEntry[] {
  const tokens: TokenEntry[] = [];
  const propertyRegex = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let match: RegExpExecArray | null;

  while ((match = propertyRegex.exec(css)) !== null) {
    tokens.push({
      token: match[1],
      value: match[2].replace(/\s+/g, " ").trim(),
    });
  }

  return tokens;
}

function isOfficialColorToken(token: string) {
  return officialColorTokenPattern.test(token);
}

function isCustomColorToken(token: string) {
  return Object.hasOwn(customColorTokenDescriptions, token);
}

function getTokenValue(tokens: TokenEntry[], tokenName: string) {
  return tokens.find(({ token }) => token === tokenName)?.value;
}

function getOfficialColorGroups(tokens: TokenEntry[]): OfficialColorGroup[] {
  const groups: OfficialColorGroup[] = [];
  const primaryColors: Record<string, string> = {};
  const primaryMap = [
    ["main", "--jb-primary"],
    ["hover", "--jb-primary-hover"],
    ["pressed", "--jb-primary-pressed"],
    ["light", "--jb-primary-light"],
    ["dark", "--jb-primary-dark"],
    ["subtle", "--jb-primary-subtle"],
    ["contrast", "--jb-primary-contrast"],
  ];

  primaryMap.forEach(([label, token]) => {
    const value = getTokenValue(tokens, token);
    if (value) {
      primaryColors[label] = value;
    }
  });

  if (Object.keys(primaryColors).length > 0) {
    groups.push({
      title: "primary",
      subtitle: "--jb-primary, --jb-primary-[name]",
      colors: primaryColors,
    });
  }

  const textColors: Record<string, string> = {};
  const textMap = [
    ["primary", "--jb-text-primary"],
    ["secondary", "--jb-text-secondary"],
    ["contrast", "--jb-text-contrast"],
  ];

  textMap.forEach(([label, token]) => {
    const value = getTokenValue(tokens, token);
    if (value) {
      textColors[label] = value;
    }
  });

  if (Object.keys(textColors).length > 0) {
    groups.push({
      title: "text",
      subtitle: "--jb-text-primary, --jb-text-secondary, --jb-text-contrast",
      colors: textColors,
    });
  }

  const singleColors: Record<string, string> = {};
  const singleMap = [
    ["black", "--jb-black"],
    ["white", "--jb-white"],
    ["highlight", "--jb-highlight"],
  ];

  singleMap.forEach(([label, token]) => {
    const value = getTokenValue(tokens, token);
    if (value) {
      singleColors[label] = value;
    }
  });

  if (Object.keys(singleColors).length > 0) {
    groups.push({
      title: "single",
      subtitle: "--jb-black, --jb-white, --jb-highlight",
      colors: singleColors,
    });
  }

  return groups;
}

function TokenValue({ value }: { value: string }) {
  const canPreview = value.startsWith("#") || value.startsWith("oklch") || value.startsWith("hsl") || value.startsWith("rgb");

  return (
    <>
      {canPreview ? (
        <span style={{
          display: "inline-block",
          width: 16,
          height: 16,
          marginInlineEnd: 8,
          borderRadius: 4,
          background: value,
          border: "1px solid oklch(0% 0 0 / 0.14)",
          verticalAlign: "middle",
        }} />
      ) : null}
      <code>{value}</code>
    </>
  );
}

export function ThemeTokenTable({ theme }: { theme: ThemeKey }) {
  const tokens = parseCustomProperties(themeCssSources[theme]);
  const officialColorGroups = getOfficialColorGroups(tokens.filter(({ token }) => isOfficialColorToken(token)));
  const customColorTokens = tokens.filter(({ token }) => isCustomColorToken(token));

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <section>
        <h3>Official Color Tokens</h3>
        <p>
          These variables are part of the official <code>jb-core</code> color system. See{" "}
          <a href="?path=/docs/theme-colors--docs"><code>/docs/theme-colors</code></a>{" "}
          for the full palette and generated variants.
        </p>
        <ColorPalette>
          {officialColorGroups.map(({ title, subtitle, colors }) => (
            <ColorItem key={title} title={title} subtitle={subtitle} colors={colors} />
          ))}
        </ColorPalette>
      </section>

      <section>
        <h3>Style-Only Color Tokens</h3>
        <p>
          These tokens are local to the custom style recipes. They are not part of the official
          <code> jb-core </code> color palette, so each one is documented with where it is used.
        </p>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Value in this style</th>
              <th>Used as a color for</th>
            </tr>
          </thead>
          <tbody>
            {customColorTokens.map(({ token, value }) => (
              <tr key={token}>
                <td><code>{token}</code></td>
                <td><TokenValue value={value} /></td>
                <td>{customColorTokenDescriptions[token]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export function ThemePage({
  theme,
  children,
}: {
  theme: ThemeKey;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const themeTokens = parseCustomProperties(themeCssSources[theme]);
    const docsWrapper = document.querySelector(".storybook-docs");
    const themeTargets = [document.documentElement, document.body];
    const previousTokenValues = new Map<HTMLElement, Map<string, string>>();

    docsWrapper?.classList.add("custom-theme-doc-wrapper");
    themeTargets.forEach((target) => {
      target.classList.add(`${theme}-style`, "custom-theme-doc-wrapper");
      const targetPreviousValues = new Map<string, string>();
      themeTokens.forEach(({ token, value }) => {
        targetPreviousValues.set(token, target.style.getPropertyValue(token));
        target.style.setProperty(token, value);
      });
      previousTokenValues.set(target, targetPreviousValues);
    });

    return () => {
      docsWrapper?.classList.remove("custom-theme-doc-wrapper");
      themeTargets.forEach((target) => {
        target.classList.remove(`${theme}-style`, "custom-theme-doc-wrapper");
        previousTokenValues.get(target)?.forEach((previousValue, token) => {
          if (previousValue) {
            target.style.setProperty(token, previousValue);
          } else {
            target.style.removeProperty(token);
          }
        });
      });
    };
  }, [theme]);

  return (
    <div
      className={`${theme}-style custom-theme-doc-page`}
      style={{
        display: "grid",
        gap: "1.5rem",
        margin: "-1.5rem",
        minHeight: "100vh",
        padding: "1.5rem",
        background: "var(--jb-background)",
        color: "var(--jb-text-primary)",
      }}
    >
      <style>{`
        html.custom-theme-doc-wrapper,
        body.custom-theme-doc-wrapper,
        body.custom-theme-doc-wrapper :where(#storybook-docs, .storybook-docs, .sbdocs-wrapper, .sbdocs-content, .docs-story) {
          background: var(--jb-background) !important;
          color: var(--jb-text-primary) !important;
        }

        body.custom-theme-doc-wrapper :where(.sbdocs-wrapper, .sbdocs-content) {
          min-height: 100vh;
        }

        body.custom-theme-doc-wrapper :where(.sbdocs-preview, .docblock-source) {
          background: var(--jb-surface) !important;
          border-color: var(--jb-border-color) !important;
        }

        .custom-theme-doc-page,
        .custom-theme-doc-page :where(h1, h2, h3, h4, h5, h6, p, li, td, th, figcaption, blockquote) {
          color: var(--jb-text-primary) !important;
        }

        .custom-theme-doc-page :where(a) {
          color: var(--jb-focus-color) !important;
        }

        .custom-theme-doc-page :where(table) {
          background: var(--jb-background) !important;
          color: var(--jb-text-primary) !important;
          border-color: var(--jb-border-color) !important;
        }

        .custom-theme-doc-page :where(thead tr) {
          background: var(--jb-surface) !important;
        }

        .custom-theme-doc-page :where(tbody tr) {
          background: var(--jb-background) !important;
        }

        .custom-theme-doc-page :where(tbody tr:nth-of-type(even)) {
          background: var(--jb-surface-hover) !important;
        }

        .custom-theme-doc-page :where(th) {
          background: var(--jb-surface) !important;
          color: var(--jb-text-primary) !important;
          border-color: var(--jb-border-color) !important;
        }

        .custom-theme-doc-page :where(td) {
          background: transparent !important;
          color: var(--jb-text-primary) !important;
          border-color: var(--jb-border-color) !important;
        }

        .custom-theme-doc-page :where(code) {
          color: var(--jb-text-primary) !important;
          background: var(--jb-surface) !important;
          border: 1px solid var(--jb-border-color);
          border-radius: 0.25rem;
          padding: 0.05rem 0.25rem;
        }

        .custom-theme-doc-page :where(.docblock-colorpalette, .docblock-colorpalette *) {
          color: var(--jb-text-primary) !important;
        }
      `}</style>
      {children}
    </div>
  );
}

export function ThemeGallery({ theme }: { theme: ThemeKey }) {
  const config = themes[theme];
  return (
    <div className={`${theme}-style`} style={{
      display: "grid",
      gap: "1.25rem",
      width: "min(100%, 90rem)",
    }}>
      {componentGroups.map((group) => (
        <section key={group} style={{ display: "grid", gap: "0.85rem" }}>
          <h2 style={{
            margin: 0,
            color: "var(--jb-text-primary)",
            fontSize: "1.15rem",
            lineHeight: 1.3,
          }}>
            {group}
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 28rem))",
            gap: "1.25rem",
            alignItems: "start",
            justifyContent: "start",
          }}>
            {componentStyles.filter((component) => component.group === group).map((component) => {
              const StylePreview = component.styles[config.storyKey];
              return (
                <section
                  key={component.label}
                  className={`${theme}-style`}
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    minWidth: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    maxWidth: "100%",
                  }}
                >
                  <h3 style={{
                    margin: 0,
                    color: "var(--jb-text-primary)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    textAlign: "center",
                  }}>
                    {component.label}
                  </h3>
                  <div style={{ minWidth: 0, maxWidth: "100%", overflow: "visible" }}>
                    {StylePreview ? <StylePreview /> : null}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

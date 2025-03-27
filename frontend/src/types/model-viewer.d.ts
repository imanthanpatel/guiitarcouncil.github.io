// src/types/model-viewer.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          alt?: string;
          "auto-rotate"?: boolean | string;
          "camera-controls"?: boolean | string;
          "background-color"?: string;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
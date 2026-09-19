// GENERATED FILE - do not edit by hand. Source: tokens/tokens.json (`npm run build`).
const tokens = {
  "meta": {
    "name": "Articulink",
    "description": "Articulink brand design tokens. This file is the single source of truth: edit it, then run `npm run build` to regenerate css/tokens.css, css/tailwind.css, and js/.",
    "website": "https://articulink.com",
    "guide": "https://github.com/Articulink/brand/tree/main/guide"
  },
  "color": {
    "core": {
      "tide": {
        "value": "#037DE4",
        "description": "The core brand color. When in doubt, lean in to Tide."
      },
      "surf": {
        "value": "#1E96FC",
        "description": "Secondary blue for backgrounds and hover states of Tide elements."
      },
      "abyss": {
        "value": "#012A4D",
        "description": "Used exclusively for typography (and card backgrounds in dark mode)."
      },
      "cloud": {
        "value": "#FFFFFF",
        "description": "Primary background color; text on dark backgrounds."
      }
    },
    "blueScale": {
      "breeze": {
        "value": "#F7FBFF",
        "description": "Gentle off-white for secondary backgrounds and subtle contrast."
      },
      "mist": {
        "value": "#E4F2FE",
        "description": "Borders, dividers, and card outlines."
      },
      "bubble": {
        "value": "#AFD9FD",
        "description": "Playful accents and inactive UI elements. Never use for text on light backgrounds."
      },
      "lagoon": {
        "value": "#013F74",
        "description": "Secondary text and subtle emphasis."
      },
      "depths": {
        "value": "#01355E",
        "description": "Borders and card backgrounds in dark mode."
      },
      "trench": {
        "value": "#001C33",
        "description": "The darkest value, reserved for dark-mode page backgrounds."
      }
    },
    "accent": {
      "sunshine": {
        "value": "#FCDE1E",
        "description": "Warmth and joy. Use sparingly for highlights and celebrations."
      },
      "coral": {
        "value": "#FC1E96",
        "description": "Energy and playfulness in illustrations and accents."
      },
      "sunset": {
        "value": "#FC6F1E",
        "description": "Warmth; good for call-to-action highlights."
      },
      "jellyfish": {
        "value": "#C11EFC",
        "description": "A touch of magic for special moments and features."
      },
      "kelp": {
        "value": "#96FC1E",
        "description": "Natural energy in illustrations and playful elements."
      },
      "seafoam": {
        "value": "#1EFCC8",
        "description": "Calm tropical waters; refreshing accents."
      }
    },
    "pressed": {
      "tideDeep": {
        "value": "#0369C1",
        "description": "Pressed/bottom-border state for Tide."
      },
      "sunshineDeep": {
        "value": "#D4A90E",
        "description": "Pressed/bottom-border state for Sunshine."
      },
      "mistDeep": {
        "value": "#C9DFF5",
        "description": "Pressed/bottom-border state for Mist."
      }
    },
    "feedback": {
      "info": {
        "value": "#3B82F6",
        "description": "Helpful information, tips, and neutral guidance."
      },
      "success": {
        "value": "#22C55E",
        "description": "Positive actions, completed states, and achievements."
      },
      "warning": {
        "value": "#F59E0B",
        "description": "Cautions, pending states, and important notices."
      },
      "error": {
        "value": "#EF4444",
        "description": "Errors, destructive actions, and critical alerts."
      }
    },
    "feedbackBg": {
      "infoBg": {
        "value": "#EFF6FF",
        "description": "Info badge background."
      },
      "successBg": {
        "value": "#F0FDF4",
        "description": "Success badge background."
      },
      "warningBg": {
        "value": "#FFFBEB",
        "description": "Warning badge background."
      },
      "errorBg": {
        "value": "#FEF2F2",
        "description": "Error badge background."
      }
    },
    "feedbackText": {
      "infoText": {
        "value": "#1D4ED8",
        "description": "Info badge text (darker for contrast)."
      },
      "successText": {
        "value": "#15803D",
        "description": "Success badge text (darker for contrast)."
      },
      "warningText": {
        "value": "#B45309",
        "description": "Warning badge text (darker for contrast)."
      },
      "errorText": {
        "value": "#B91C1C",
        "description": "Error badge text (darker for contrast)."
      }
    },
    "semantic": {
      "primary": {
        "ref": "tide",
        "description": "Primary actions: buttons, links, active states."
      },
      "primaryDeep": {
        "ref": "tideDeep",
        "description": "Primary pressed state."
      },
      "secondary": {
        "ref": "sunshine",
        "description": "Accent actions and highlights."
      },
      "secondaryDeep": {
        "ref": "sunshineDeep",
        "description": "Accent pressed state."
      },
      "background": {
        "ref": "cloud",
        "description": "Page background."
      },
      "foreground": {
        "ref": "abyss",
        "description": "Headings and primary text."
      },
      "textSecondary": {
        "ref": "lagoon",
        "description": "Body and secondary text."
      },
      "textMuted": {
        "value": "#5A7FA0",
        "description": "Muted, de-emphasized text."
      },
      "border": {
        "ref": "mist",
        "description": "Default border color."
      }
    }
  },
  "dark": {
    "description": "Overrides applied under the `.dark` class. Page background becomes Abyss, text becomes Breeze; Mist and Breeze remap to their dark equivalents so borders and secondary surfaces keep working.",
    "overrides": {
      "background": {
        "ref": "abyss"
      },
      "foreground": {
        "ref": "breeze"
      },
      "mist": {
        "ref": "lagoon"
      },
      "breeze": {
        "ref": "depths"
      }
    }
  },
  "font": {
    "display": {
      "family": "Nunito",
      "stack": "'Nunito', 'Poppins', sans-serif",
      "cssVar": "--font-nunito",
      "source": "https://fonts.google.com/specimen/Nunito",
      "usage": "H1-H3, hero text, card titles. The logo wordmark is Nunito ExtraBold."
    },
    "sans": {
      "family": "Poppins",
      "stack": "'Poppins', system-ui, sans-serif",
      "cssVar": "--font-poppins",
      "source": "https://fonts.google.com/specimen/Poppins",
      "usage": "Body text, UI, H4-H6."
    },
    "handwrite": {
      "family": "Caveat",
      "stack": "'Caveat', cursive",
      "cssVar": "--font-caveat",
      "source": "https://fonts.google.com/specimen/Caveat",
      "usage": "Eyebrow labels and playful annotations. Never body text."
    },
    "mono": {
      "family": "SF Mono",
      "stack": "ui-monospace, 'SF Mono', 'Fira Code', monospace",
      "cssVar": null,
      "source": null,
      "usage": "Code snippets."
    }
  },
  "fontWeight": {
    "regular": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700,
    "extrabold": 800
  },
  "typeScale": [
    {
      "name": "Display",
      "sizePx": 60,
      "font": "display",
      "weight": "extrabold"
    },
    {
      "name": "Heading 1",
      "sizePx": 36,
      "font": "display",
      "weight": "bold"
    },
    {
      "name": "Heading 2",
      "sizePx": 24,
      "font": "display",
      "weight": "bold"
    },
    {
      "name": "Heading 3",
      "sizePx": 20,
      "font": "sans",
      "weight": "semibold"
    },
    {
      "name": "Body",
      "sizePx": 16,
      "font": "sans",
      "weight": "regular"
    },
    {
      "name": "Small",
      "sizePx": 14,
      "font": "sans",
      "weight": "regular"
    },
    {
      "name": "Caption",
      "sizePx": 12,
      "font": "sans",
      "weight": "regular"
    }
  ],
  "spacing": {
    "basePx": 4,
    "scalePx": [
      0,
      4,
      8,
      12,
      16,
      20,
      24,
      32,
      40,
      48,
      64,
      80,
      96
    ]
  },
  "radius": {
    "none": "0px",
    "sm": "2px",
    "default": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px"
  },
  "breakpoints": {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536
  },
  "motion": {
    "duration": {
      "instant": {
        "value": "0ms",
        "usage": "Color changes, opacity."
      },
      "fast": {
        "value": "150ms",
        "usage": "Micro-interactions, hovers."
      },
      "normal": {
        "value": "300ms",
        "usage": "Standard transitions."
      },
      "slow": {
        "value": "500ms",
        "usage": "Complex animations."
      },
      "slower": {
        "value": "700ms",
        "usage": "Page transitions."
      }
    },
    "easing": {
      "easeOut": {
        "value": "cubic-bezier(0, 0, 0.2, 1)",
        "usage": "Enter animations."
      },
      "easeIn": {
        "value": "cubic-bezier(0.4, 0, 1, 1)",
        "usage": "Exit animations."
      },
      "easeInOut": {
        "value": "cubic-bezier(0.4, 0, 0.2, 1)",
        "usage": "General transitions."
      },
      "spring": {
        "value": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "usage": "Playful bounces."
      }
    }
  }
};

const colors = {
  "tide": "#037DE4",
  "surf": "#1E96FC",
  "abyss": "#012A4D",
  "cloud": "#FFFFFF",
  "breeze": "#F7FBFF",
  "mist": "#E4F2FE",
  "bubble": "#AFD9FD",
  "lagoon": "#013F74",
  "depths": "#01355E",
  "trench": "#001C33",
  "sunshine": "#FCDE1E",
  "coral": "#FC1E96",
  "sunset": "#FC6F1E",
  "jellyfish": "#C11EFC",
  "kelp": "#96FC1E",
  "seafoam": "#1EFCC8",
  "tideDeep": "#0369C1",
  "sunshineDeep": "#D4A90E",
  "mistDeep": "#C9DFF5",
  "info": "#3B82F6",
  "success": "#22C55E",
  "warning": "#F59E0B",
  "error": "#EF4444",
  "infoBg": "#EFF6FF",
  "successBg": "#F0FDF4",
  "warningBg": "#FFFBEB",
  "errorBg": "#FEF2F2",
  "infoText": "#1D4ED8",
  "successText": "#15803D",
  "warningText": "#B45309",
  "errorText": "#B91C1C",
  "primary": "#037DE4",
  "primaryDeep": "#0369C1",
  "secondary": "#FCDE1E",
  "secondaryDeep": "#D4A90E",
  "background": "#FFFFFF",
  "foreground": "#012A4D",
  "textSecondary": "#013F74",
  "textMuted": "#5A7FA0",
  "border": "#E4F2FE"
};

const fonts = {
  "display": {
    "family": "Nunito",
    "stack": "'Nunito', 'Poppins', sans-serif",
    "cssVar": "--font-nunito",
    "source": "https://fonts.google.com/specimen/Nunito",
    "usage": "H1-H3, hero text, card titles. The logo wordmark is Nunito ExtraBold."
  },
  "sans": {
    "family": "Poppins",
    "stack": "'Poppins', system-ui, sans-serif",
    "cssVar": "--font-poppins",
    "source": "https://fonts.google.com/specimen/Poppins",
    "usage": "Body text, UI, H4-H6."
  },
  "handwrite": {
    "family": "Caveat",
    "stack": "'Caveat', cursive",
    "cssVar": "--font-caveat",
    "source": "https://fonts.google.com/specimen/Caveat",
    "usage": "Eyebrow labels and playful annotations. Never body text."
  },
  "mono": {
    "family": "SF Mono",
    "stack": "ui-monospace, 'SF Mono', 'Fira Code', monospace",
    "cssVar": null,
    "source": null,
    "usage": "Code snippets."
  }
};

const fontWeights = {
  "regular": 400,
  "medium": 500,
  "semibold": 600,
  "bold": 700,
  "extrabold": 800
};

const typeScale = [
  {
    "name": "Display",
    "sizePx": 60,
    "font": "display",
    "weight": "extrabold"
  },
  {
    "name": "Heading 1",
    "sizePx": 36,
    "font": "display",
    "weight": "bold"
  },
  {
    "name": "Heading 2",
    "sizePx": 24,
    "font": "display",
    "weight": "bold"
  },
  {
    "name": "Heading 3",
    "sizePx": 20,
    "font": "sans",
    "weight": "semibold"
  },
  {
    "name": "Body",
    "sizePx": 16,
    "font": "sans",
    "weight": "regular"
  },
  {
    "name": "Small",
    "sizePx": 14,
    "font": "sans",
    "weight": "regular"
  },
  {
    "name": "Caption",
    "sizePx": 12,
    "font": "sans",
    "weight": "regular"
  }
];

const spacing = {
  "basePx": 4,
  "scalePx": [
    0,
    4,
    8,
    12,
    16,
    20,
    24,
    32,
    40,
    48,
    64,
    80,
    96
  ]
};

const radius = {
  "none": "0px",
  "sm": "2px",
  "default": "4px",
  "md": "6px",
  "lg": "8px",
  "xl": "12px",
  "2xl": "16px",
  "3xl": "24px"
};

const breakpoints = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};

const motion = {
  "duration": {
    "instant": {
      "value": "0ms",
      "usage": "Color changes, opacity."
    },
    "fast": {
      "value": "150ms",
      "usage": "Micro-interactions, hovers."
    },
    "normal": {
      "value": "300ms",
      "usage": "Standard transitions."
    },
    "slow": {
      "value": "500ms",
      "usage": "Complex animations."
    },
    "slower": {
      "value": "700ms",
      "usage": "Page transitions."
    }
  },
  "easing": {
    "easeOut": {
      "value": "cubic-bezier(0, 0, 0.2, 1)",
      "usage": "Enter animations."
    },
    "easeIn": {
      "value": "cubic-bezier(0.4, 0, 1, 1)",
      "usage": "Exit animations."
    },
    "easeInOut": {
      "value": "cubic-bezier(0.4, 0, 0.2, 1)",
      "usage": "General transitions."
    },
    "spring": {
      "value": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      "usage": "Playful bounces."
    }
  }
};

module.exports = { tokens, colors, fonts, fontWeights, typeScale, spacing, radius, breakpoints, motion };

/* @ds-bundle: {"format":4,"namespace":"AxoftDesignSystem_00998b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dab58db8832b","components/core/Button.jsx":"fb8841403a8c","components/core/Card.jsx":"3d43358cb8e9","components/core/IconButton.jsx":"719785027c06","components/core/Logo.jsx":"54dcb375e40b","components/core/Pill.jsx":"7f0933f98212","components/core/SectionTitle.jsx":"0394a046dd09","components/core/StatBlock.jsx":"1e545d3ece8d","components/core/Tag.jsx":"2a32ab949b0d","components/forms/Checkbox.jsx":"d6191c9e0375","components/forms/Input.jsx":"e95937bb4bb1","components/forms/Radio.jsx":"c402bbf570a0","components/forms/Select.jsx":"921627cc8ddb","components/forms/Switch.jsx":"cb6a6ca26f7a","components/navigation/Breadcrumbs.jsx":"4105afc11c23","components/navigation/Tabs.jsx":"8d4061712ff3","slides/slides.jsx":"1f3d1567089a","ui_kits/landing/Header.jsx":"c22524d1ede9","ui_kits/landing/Home.jsx":"e32b82841bdf","ui_kits/landing/PartnerForm.jsx":"f5d75a8003d9","ui_kits/landing/VendorPage.jsx":"ac79d8359f59"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AxoftDesignSystem_00998b = window.AxoftDesignSystem_00998b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  status = "info",
  children,
  style,
  ...rest
}) {
  const map = {
    info: ["var(--axo-cyan-050)", "var(--axo-cyan-700)"],
    success: ["var(--axo-green-050)", "var(--axo-green-700)"],
    warning: ["#FDF3E4", "#8A5A12"],
    danger: ["#FCEBEE", "#A32138"],
    neutral: ["var(--axo-grey-050)", "var(--text-muted)"]
  };
  const [bg, fg] = map[status];
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: bg,
      color: fg,
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--weight-semibold)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: "var(--font-core)",
  fontWeight: "var(--weight-semibold)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)",
  lineHeight: 1
};
const sizes = {
  sm: {
    fontSize: "var(--fs-body-sm)",
    padding: "8px 16px",
    minHeight: "32px"
  },
  md: {
    fontSize: "var(--fs-body)",
    padding: "12px 24px",
    minHeight: "44px"
  },
  lg: {
    fontSize: "var(--fs-body-lg)",
    padding: "16px 32px",
    minHeight: "52px"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onDark = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  children,
  onClick,
  style,
  ...rest
}) {
  const [state, setState] = React.useState("idle");
  const skins = {
    primary: {
      background: "var(--accent-strong)",
      color: "var(--axo-navy)",
      borderColor: "var(--accent-strong)"
    },
    secondary: {
      background: "var(--accent)",
      color: "var(--axo-navy)",
      borderColor: "var(--accent)"
    },
    outline: {
      background: "transparent",
      color: onDark ? "var(--axo-white)" : "var(--accent-hover)",
      borderColor: onDark ? "var(--border-on-dark)" : "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: onDark ? "var(--axo-white)" : "var(--text-heading)",
      borderColor: "transparent"
    }
  };
  const hovers = {
    primary: {
      background: "var(--axo-green-700)",
      borderColor: "var(--axo-green-700)"
    },
    secondary: {
      background: "var(--accent-hover)",
      borderColor: "var(--accent-hover)"
    },
    outline: {
      background: onDark ? "rgba(255,255,255,.10)" : "var(--axo-teal-050)",
      borderColor: "var(--accent-hover)"
    },
    ghost: {
      background: onDark ? "rgba(255,255,255,.10)" : "var(--axo-grey-050)"
    }
  };
  const s = {
    ...base,
    ...sizes[size],
    ...skins[variant],
    ...(state === "hover" && !disabled ? hovers[variant] : null),
    ...(state === "press" && !disabled ? {
      transform: "translateY(1px)",
      background: variant === "primary" ? "#006B4A" : variant === "secondary" ? "var(--accent-pressed)" : undefined
    } : null),
    ...(disabled ? {
      opacity: .45,
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("idle"),
    onMouseDown: () => setState("press"),
    onMouseUp: () => setState("hover"),
    onClick
  };
  const Tag = href ? "a" : "button";
  return React.createElement(Tag, {
    style: s,
    href,
    disabled: href ? undefined : disabled,
    ...handlers,
    ...rest
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = "outline",
  title,
  eyebrow,
  media,
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const skins = {
    outline: {
      background: "transparent",
      border: "1px solid var(--border-accent)",
      color: "var(--text-body)"
    },
    solid: {
      background: "var(--surface-accent)",
      border: "1px solid var(--surface-accent)",
      color: "var(--axo-white)"
    },
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-md)"
    },
    glass: {
      background: "var(--surface-glass)",
      border: "1px solid var(--border-on-dark)",
      color: "var(--axo-white)",
      backdropFilter: "blur(14px)"
    }
  };
  const s = {
    borderRadius: "var(--radius-lg)",
    padding,
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    ...skins[variant],
    ...style
  };
  const titleColor = variant === "solid" || variant === "glass" ? "var(--axo-white)" : "var(--text-heading)";
  return React.createElement("div", {
    style: s,
    ...rest
  }, media ? React.createElement("div", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, media) : null, eyebrow ? React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: variant === "outline" || variant === "light" ? "var(--text-accent)" : "rgba(255,255,255,.8)"
    }
  }, eyebrow) : null, title ? React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--fs-h4)",
      lineHeight: "var(--lh-heading)",
      color: titleColor
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  label,
  onDark = false,
  size = 44,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = {
    width: size,
    height: size,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-pill)",
    border: "1px solid " + (onDark ? "var(--border-on-dark)" : "var(--border-subtle)"),
    background: hover && !disabled ? onDark ? "rgba(255,255,255,.12)" : "var(--axo-teal-050)" : onDark ? "var(--surface-glass)" : "var(--surface-card)",
    color: onDark ? "var(--axo-white)" : "var(--text-heading)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? .45 : 1,
    transition: "background var(--dur-fast) var(--ease-standard)",
    padding: 0,
    ...style
  };
  return React.createElement("button", {
    "aria-label": label,
    style: s,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  tone = "color",
  height = 32,
  base = "",
  style,
  ...rest
}) {
  const file = {
    color: "logo-axoft.svg",
    white: "logo-axoft-white.svg",
    navy: "logo-axoft-mono-navy.svg"
  }[tone];
  return React.createElement("img", {
    src: (base ? base.replace(/\/$/, "") + "/" : "") + "assets/logo/" + file,
    alt: "Axoft",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  tone = "teal",
  children,
  style,
  ...rest
}) {
  const tones = {
    teal: {
      background: "var(--axo-teal)",
      color: "var(--axo-white)"
    },
    green: {
      background: "var(--axo-green)",
      color: "var(--axo-white)"
    },
    navy: {
      background: "var(--axo-navy)",
      color: "var(--axo-white)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-accent)",
      boxShadow: "inset 0 0 0 1px var(--border-accent)"
    }
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "14px 20px",
      borderRadius: "var(--radius-lg)",
      fontSize: "var(--deck-body)",
      lineHeight: "var(--lh-body)",
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  lead,
  onDark = false,
  size = "h2",
  rule = true,
  style,
  ...rest
}) {
  const sizes = {
    hero: "var(--fs-display)",
    h1: "var(--fs-h1)",
    h2: "var(--fs-h2)",
    h3: "var(--fs-h3)"
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    },
    ...rest
  }, React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: sizes[size],
      lineHeight: "var(--lh-heading)",
      letterSpacing: size === "hero" ? "var(--ls-tight)" : "var(--ls-normal)",
      color: onDark ? "var(--axo-white)" : "var(--text-heading)",
      margin: 0
    }
  }, children), rule ? React.createElement("div", {
    style: {
      width: "64px",
      height: "3px",
      borderRadius: "2px",
      background: "var(--grad-accent-line)"
    }
  }) : null, lead ? React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: onDark ? "var(--text-inverse-muted)" : "var(--text-muted)",
      maxWidth: "62ch",
      margin: 0
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  accent = "green",
  onDark = false,
  align = "start",
  style,
  ...rest
}) {
  const colors = {
    green: "var(--axo-green)",
    teal: "var(--axo-teal)",
    cyan: "var(--axo-cyan)",
    navy: "var(--axo-navy)"
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      ...style
    },
    ...rest
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--fs-display)",
      lineHeight: 1,
      color: onDark && accent === "navy" ? "var(--axo-white)" : colors[accent]
    }
  }, value), React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: onDark ? "var(--text-inverse-muted)" : "var(--text-muted)",
      maxWidth: "22ch"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  active = false,
  onDark = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 16px",
    borderRadius: "var(--radius-pill)",
    fontSize: "var(--fs-body-sm)",
    cursor: onClick ? "pointer" : "default",
    background: active ? "var(--axo-navy)" : hover ? onDark ? "rgba(255,255,255,.12)" : "var(--axo-teal-050)" : onDark ? "var(--surface-glass)" : "var(--surface-subtle)",
    color: active ? "var(--axo-white)" : onDark ? "var(--axo-white)" : "var(--text-body)",
    border: "1px solid " + (active ? "var(--axo-navy)" : onDark ? "var(--border-on-dark)" : "var(--border-subtle)"),
    transition: "background var(--dur-fast) var(--ease-standard)",
    ...style
  };
  return React.createElement(onClick ? "button" : "span", {
    type: onClick ? "button" : undefined,
    "aria-pressed": onClick ? active : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      fontSize: "var(--fs-body)",
      color: onDark ? "var(--axo-white)" : "var(--text-body)",
      ...style
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: "20px",
      height: "20px",
      margin: 0,
      cursor: "inherit"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      flex: "none",
      width: "20px",
      height: "20px",
      marginTop: "2px",
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (checked ? "var(--accent)" : onDark ? "var(--border-on-dark)" : "var(--border-strong)"),
      background: checked ? "var(--accent)" : onDark ? "var(--surface-glass)" : "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, checked ? React.createElement("span", {
    style: {
      width: "10px",
      height: "5px",
      borderLeft: "2px solid #fff",
      borderBottom: "2px solid #fff",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  }) : null), React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  onDark = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useMemo(() => "in" + Math.random().toString(36).slice(2, 8), []);
  const box = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-core)",
    fontSize: "var(--fs-body)",
    color: onDark ? "var(--axo-white)" : "var(--text-body)",
    background: onDark ? "var(--surface-glass)" : "var(--surface-card)",
    padding: "12px 16px",
    minHeight: "44px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--accent)" : onDark ? "var(--border-on-dark)" : "var(--border-subtle)"),
    outline: focus ? "2px solid var(--focus-ring)" : "none",
    outlineOffset: "2px",
    opacity: disabled ? .5 : 1,
    transition: "border-color var(--dur-fast) var(--ease-standard)",
    ...style
  };
  return React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "var(--axo-white)" : "var(--text-heading)"
    }
  }, label) : null, React.createElement("input", {
    id: rid,
    type,
    value,
    onChange,
    placeholder,
    disabled,
    style: box,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  }), error || hint ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger)" : onDark ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  onDark = false,
  value,
  style,
  ...rest
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      fontSize: "var(--fs-body)",
      color: onDark ? "var(--axo-white)" : "var(--text-body)",
      ...style
    }
  }, React.createElement("input", {
    type: "radio",
    name,
    value,
    checked,
    onChange,
    disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: "20px",
      height: "20px",
      margin: 0,
      cursor: "inherit"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      flex: "none",
      width: "20px",
      height: "20px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + (checked ? "var(--accent)" : onDark ? "var(--border-on-dark)" : "var(--border-strong)"),
      background: onDark ? "var(--surface-glass)" : "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)"
    }
  }) : null), React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  onDark = false,
  placeholder = "Выберите",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useMemo(() => "se" + Math.random().toString(36).slice(2, 8), []);
  const box = {
    width: "100%",
    boxSizing: "border-box",
    appearance: "none",
    fontFamily: "var(--font-core)",
    fontSize: "var(--fs-body)",
    color: onDark ? "var(--axo-white)" : "var(--text-body)",
    background: onDark ? "var(--surface-glass)" : "var(--surface-card)",
    padding: "12px 40px 12px 16px",
    minHeight: "44px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid " + (focus ? "var(--accent)" : onDark ? "var(--border-on-dark)" : "var(--border-subtle)"),
    opacity: disabled ? .5 : 1,
    ...style
  };
  return React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "var(--axo-white)" : "var(--text-heading)"
    }
  }, label) : null, React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, React.createElement("select", {
    id: rid,
    value,
    onChange,
    disabled,
    style: box,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label))), React.createElement("span", {
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      width: "8px",
      height: "8px",
      borderRight: "2px solid var(--accent)",
      borderBottom: "2px solid var(--accent)",
      transform: "translateY(-70%) rotate(45deg)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      fontSize: "var(--fs-body)",
      color: onDark ? "var(--axo-white)" : "var(--text-body)",
      ...style
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: "20px",
      height: "20px",
      margin: 0,
      cursor: "inherit"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      flex: "none",
      width: "44px",
      height: "24px",
      borderRadius: "var(--radius-pill)",
      padding: "2px",
      background: checked ? "var(--accent-strong)" : onDark ? "rgba(255,255,255,.24)" : "var(--axo-grey-300)",
      transition: "background var(--dur-base) var(--ease-standard)",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transform: "translateX(" + (checked ? "20px" : "0") + ")",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  })), React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onDark = false,
  style,
  ...rest
}) {
  return React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontSize: "var(--fs-body-sm)",
      flexWrap: "wrap",
      ...style
    },
    ...rest
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label || it;
    return React.createElement(React.Fragment, {
      key: label
    }, last ? React.createElement("span", {
      style: {
        color: onDark ? "var(--axo-white)" : "var(--text-heading)",
        fontWeight: "var(--weight-semibold)"
      }
    }, label) : React.createElement("a", {
      href: it.href || "#",
      style: {
        color: onDark ? "var(--text-inverse-muted)" : "var(--link)",
        borderBottom: "none"
      }
    }, label), last ? null : React.createElement("span", {
      style: {
        color: onDark ? "rgba(255,255,255,.4)" : "var(--axo-grey-300)"
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const active = value !== undefined ? value : items[0] && (items[0].value || items[0]);
  return React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid " + (onDark ? "var(--border-on-dark)" : "var(--border-subtle)"),
      ...style
    },
    ...rest
  }, items.map(it => {
    const v = it.value || it,
      l = it.label || it,
      on = v === active;
    return React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 0",
        fontFamily: "var(--font-core)",
        fontSize: "var(--fs-body)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-regular)",
        color: on ? onDark ? "var(--axo-white)" : "var(--text-heading)" : onDark ? "var(--text-inverse-muted)" : "var(--text-muted)",
        borderBottom: "2px solid " + (on ? "var(--accent)" : "transparent"),
        marginBottom: "-1px"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/slides.jsx
try { (() => {
/* Образцы слайдов корпоративного шаблона Axoft 2025. 1280x720. */
const A = "../assets/";
function Slide({
  tone = "light",
  children,
  noLogo = false,
  style
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1280,
      height: 720,
      overflow: "hidden",
      fontFamily: "var(--font-core)",
      background: dark ? "url(" + A + "backgrounds/bg-dark-gradient.png) center/cover" : "url(" + A + "backgrounds/bg-light-gradient.png) center/cover",
      color: dark ? "var(--text-inverse)" : "var(--text-body)",
      ...style
    }
  }, children, noLogo ? null : /*#__PURE__*/React.createElement("img", {
    src: A + "logo/" + (dark ? "logo-axoft-white.svg" : "logo-axoft.svg"),
    alt: "Axoft",
    style: {
      position: "absolute",
      left: 12,
      bottom: 12,
      height: 22
    }
  }));
}
function SlideTitle({
  children,
  tone = "light"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 51,
      fontSize: "var(--deck-subhead)",
      lineHeight: 1.2,
      color: tone === "dark" ? "var(--text-inverse)" : "var(--text-heading)"
    }
  }, children);
}
function TitleSlide({
  title = "Название презентации",
  name = "Имя Фамилия",
  role = "Должность",
  contact = "name@axoftglobal.ru"
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/globe-wire-lg.png",
    style: {
      position: "absolute",
      right: -160,
      top: -80,
      width: 760,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 240,
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-hero)",
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 4,
      borderRadius: 2,
      background: "var(--grad-accent-line)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--deck-body)",
      color: "var(--text-inverse-muted)",
      lineHeight: 1.7
    }
  }, name, /*#__PURE__*/React.createElement("br", null), role, /*#__PURE__*/React.createElement("br", null), contact)));
}
function SectionSlide({
  title = "Образец открывающего слайда",
  kicker = "Раздел 01"
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/swirl-teal.png",
    style: {
      position: "absolute",
      right: 40,
      top: 120,
      width: 520
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 230,
      maxWidth: 600,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-hero)",
      lineHeight: 1.1,
      color: "var(--axo-navy)"
    }
  }, title)));
}
function BlocksSlide({
  title = "Заголовок",
  note = "Тезис краткого содержания (при необходимости)",
  blocks
}) {
  const b = blocks || [{
    name: "Название блока 1",
    items: ["Перечень характеристик", "Перечень характеристик"],
    icon: "q3/router.png"
  }, {
    name: "Название блока 2",
    items: ["Перечень характеристик", "Перечень характеристик"],
    icon: "q3/industrial-server.png"
  }, {
    name: "Название блока 3",
    items: ["Перечень характеристик", "Перечень характеристик", "Перечень характеристик"],
    icon: "q3/cloud.png"
  }];
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SlideTitle, null, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 114,
      right: 60,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24
    }
  }, b.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.name,
    style: {
      border: "1px solid var(--border-accent)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "icons/" + x.icon,
    style: {
      width: 96,
      height: 96,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-block-title)",
      lineHeight: 1.15,
      color: "var(--axo-navy)"
    }
  }, x.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, x.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--axo-teal)",
      color: "#fff",
      borderRadius: "var(--radius-lg)",
      padding: "14px 18px",
      fontSize: "var(--deck-body)"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      bottom: 36,
      fontSize: "var(--deck-body-sm)",
      color: "var(--text-muted)"
    }
  }, note));
}
function DefinitionsSlide({
  title = "Заголовок",
  items
}) {
  const it = items || [{
    term: "Прибыль",
    text: "показатель эффективности бизнеса, его способности генерировать доход."
  }, {
    term: "Денежный поток",
    text: "показатель жизнеспособности компании, её способности платить по счетам."
  }, {
    term: "Метод начисления",
    text: "доходы и расходы учитываются в момент возникновения, а не оплаты."
  }, {
    term: "Кассовый метод",
    text: "учитывается фактическое движение денег по счетам компании."
  }];
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SlideTitle, {
    tone: "dark"
  }, title), /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/rings.png",
    style: {
      position: "absolute",
      right: -120,
      bottom: -140,
      width: 560,
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 140,
      width: 760,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, it.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.term,
    style: {
      background: "var(--surface-glass)",
      border: "1px solid var(--border-on-dark)",
      backdropFilter: "blur(14px)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-lead)",
      color: "#fff"
    }
  }, x.term), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--deck-body)",
      color: "var(--text-inverse-muted)",
      lineHeight: 1.45
    }
  }, "– " + x.text)))));
}
function StatsSlide({
  title = "Заголовок",
  stats
}) {
  const s = stats || [{
    v: "2004",
    l: "год основания Axoft"
  }, {
    v: "20+",
    l: "лет на ИТ-рынке"
  }, {
    v: "ТОП-25",
    l: "крупнейших поставщиков SaaS по оценке CNews"
  }];
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SlideTitle, null, title), /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/globe-wide.png",
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 1280,
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 200,
      right: 60,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, s.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.v,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 88,
      lineHeight: 1,
      color: "var(--axo-green)"
    }
  }, x.v), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 3,
      borderRadius: 2,
      background: "var(--grad-accent-line)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--deck-body)",
      color: "var(--text-muted)",
      maxWidth: "22ch"
    }
  }, x.l)))));
}
function ThesisSlide({
  thesis = "Только комплексный анализ обоих показателей даёт полную и достоверную картину финансового здоровья.",
  note = "краткое пояснение"
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/sphere-teal-swirl.png",
    style: {
      position: "absolute",
      right: -100,
      top: 80,
      width: 600
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 200,
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-lead)",
      lineHeight: 1.35
    }
  }, thesis), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--deck-body)",
      color: "var(--text-inverse-muted)"
    }
  }, note)));
}
function ClosingSlide({
  name = "Имя Фамилия",
  role = "Должность",
  contact = "name@axoftglobal.ru"
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "graphics/orbit-torus.png",
    style: {
      position: "absolute",
      right: -80,
      bottom: -120,
      width: 620
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60,
      top: 260,
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--deck-hero)"
    }
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--deck-body)",
      color: "var(--text-inverse-muted)",
      lineHeight: 1.7
    }
  }, name, /*#__PURE__*/React.createElement("br", null), role, /*#__PURE__*/React.createElement("br", null), contact)));
}
Object.assign(window, {
  Slide,
  SlideTitle,
  TitleSlide,
  SectionSlide,
  BlocksSlide,
  DefinitionsSlide,
  StatsSlide,
  ThesisSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
const {
  Logo,
  Button,
  Tag
} = window.AxoftDesignSystem_00998b;
function SiteHeader({
  route,
  go
}) {
  const items = [["home", "Направления"], ["vendor", "Вендоры"], ["partner", "Стать партнёром"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(14,20,37,.86)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px var(--page-pad-x)",
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      border: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 26,
    base: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      marginLeft: 16,
      flex: 1
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      border: "none",
      fontSize: "var(--fs-body-sm)",
      color: route === k ? "var(--axo-white)" : "var(--text-inverse-muted)",
      fontWeight: route === k ? 600 : 400
    }
  }, l))), /*#__PURE__*/React.createElement(Tag, {
    onDark: true
  }, "Axoft Online"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => go("partner")
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--axo-navy-900)",
      color: "var(--text-inverse-muted)",
      padding: "48px var(--page-pad-x)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 24,
    base: "../.."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      maxWidth: "34ch"
    }
  }, "\u0426\u0435\u043D\u0442\u0440 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439. \u041D\u0430 \u0418\u0422-\u0440\u044B\u043D\u043A\u0435 \u0441 2004 \u0433\u043E\u0434\u0430.")), [["Дистрибуция", ["ИТ-дистрибуция", "Логистика", "Финансовые сервисы", "Axoft Online"]], ["Сервисы", ["Аудит процессов ИБ", "Проектирование инфраструктуры", "Внедрение", "Техническое сопровождение"]], ["Экспертиза", ["Техническая экспертиза", "Маркетинговая экспертиза", "Исследования Axoft", "Сообщества"]]].map(([t, ls]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--axo-white)",
      fontWeight: 600,
      fontSize: "var(--fs-body-sm)"
    }
  }, t), ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      border: "none",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-inverse-muted)"
    }
  }, l))))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Home.jsx
try { (() => {
const {
  Button,
  Card,
  SectionTitle,
  StatBlock,
  Tag,
  Badge,
  Pill
} = window.AxoftDesignSystem_00998b;
const AA = "../../assets/";
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "url(" + AA + "backgrounds/bg-dark-gradient.png) center/cover",
      color: "var(--text-inverse)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AA + "graphics/globe-wire-lg.png",
    style: {
      position: "absolute",
      right: -120,
      top: -60,
      width: 640,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "96px var(--page-pad-x) 104px",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: "var(--container-max)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onDark: true
  }, "\u0418\u0422-\u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F"), /*#__PURE__*/React.createElement(Tag, {
    onDark: true
  }, "\u0418\u0411"), /*#__PURE__*/React.createElement(Tag, {
    onDark: true
  }, "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display)",
      lineHeight: 1.1,
      letterSpacing: "var(--ls-tight)",
      color: "var(--axo-white)",
      maxWidth: "20ch",
      margin: 0
    }
  }, "\u0426\u0435\u043D\u0442\u0440 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-inverse-muted)",
      maxWidth: "56ch",
      margin: 0
    }
  }, "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430\u043C \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0442\u044C, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0432\u043D\u0435\u0434\u0440\u044F\u0442\u044C \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435 \u0418\u0422- \u0438 \u0418\u0411-\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u2014 \u043E\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439 \u0434\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("partner")
  }, "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onDark: true,
    onClick: () => go("vendor")
  }, "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C \u0432\u0435\u043D\u0434\u043E\u0440\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "2004",
    label: "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441",
    accent: "teal"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "\u0422\u041E\u041F-25",
    label: "\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 SaaS \u043F\u043E \u043E\u0446\u0435\u043D\u043A\u0435 CNews",
    accent: "cyan"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "300+",
    label: "\u0432\u0435\u043D\u0434\u043E\u0440\u043E\u0432 \u0432 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435",
    accent: "green"
  }))));
}
function Directions() {
  const items = [{
    t: "ИТ-инфраструктура",
    i: "q3/industrial-server.png",
    d: "Серверы, СХД, виртуализация и облачные платформы под задачи заказчика."
  }, {
    t: "Информационная безопасность",
    i: "q3/ip-camera.png",
    d: "SIEM, NGFW, защита конечных точек, аудит процессов ИБ и построение SOC."
  }, {
    t: "Оборудование",
    i: "q3/router.png",
    d: "Сетевое и промышленное оборудование, логистика и финансовые сервисы."
  }, {
    t: "Облако",
    i: "q3/cloud.png",
    d: "AxoftCloud: сервис-провайдинг и управляемые сервисы для партнёров."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "88px var(--page-pad-x)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "h1",
    lead: "\u0427\u0435\u0442\u044B\u0440\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 Axoft \u0434\u0435\u0440\u0436\u0438\u0442 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C."
  }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 24
    }
  }, items.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    variant: "outline",
    title: x.t,
    media: /*#__PURE__*/React.createElement("img", {
      src: AA + "icons/" + x.i,
      style: {
        width: 88,
        height: 88,
        objectFit: "contain"
      }
    })
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, x.d))))));
}
function Services() {
  const rows = [["Аудит процессов ИБ", "Оценка зрелости, модель угроз, план развития"], ["Проектирование инфраструктуры", "Аудит, архитектура, спецификация оборудования"], ["Внедрение", "Пилот, миграция, ввод в эксплуатацию"], ["Техническое сопровождение", "Линия поддержки, регламенты, SLA"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      padding: "88px var(--page-pad-x)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "h2",
    lead: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0430\u0440\u0442\u043D\u0451\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0431\u0440\u0435\u043D\u0434\u043E\u043C."
  }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0418\u0422-\u0441\u0435\u0440\u0432\u0438\u0441\u044B"), /*#__PURE__*/React.createElement("img", {
    src: AA + "graphics/gear-3d.png",
    style: {
      width: 260,
      height: 260,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, rows.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h4)",
      color: "var(--text-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, d))))));
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--grad-dark)",
      color: "var(--text-inverse)",
      padding: "72px var(--page-pad-x)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AA + "graphics/torus-knot.png",
    style: {
      position: "absolute",
      right: 24,
      top: -40,
      width: 340,
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h2)",
      color: "var(--axo-white)"
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-inverse-muted)",
      margin: 0
    }
  }, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0437\u0430\u0434\u0430\u0447\u0435 \u2014 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("partner")
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")));
}
Object.assign(window, {
  Hero,
  Directions,
  Services,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/PartnerForm.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Button,
  SectionTitle,
  Card
} = window.AxoftDesignSystem_00998b;
const AP = "../../assets/";
function PartnerForm() {
  const [sent, setSent] = React.useState(false);
  const [role, setRole] = React.useState("reseller");
  const [ok, setOk] = React.useState(false);
  const [news, setNews] = React.useState(true);
  const [email, setEmail] = React.useState("");
  if (sent) return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px var(--page-pad-x)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AP + "graphics/plus-badge-3d.png",
    style: {
      width: 160,
      height: 160,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement(SectionTitle, {
    size: "h2",
    rule: false
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 Axoft \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px var(--page-pad-x) 96px",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "h1",
    lead: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043C \u043A \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435, \u0434\u0430\u0434\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 Axoft Online \u0438 \u043D\u0430\u0437\u043D\u0430\u0447\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430."
  }, "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C"), /*#__PURE__*/React.createElement("img", {
    src: AP + "icons/q3/handshake.png",
    style: {
      width: 280,
      height: 280,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "light",
    padding: "32px",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    placeholder: "\u041E\u041E\u041E \xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\xBB"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u041D\u041D",
    placeholder: "7725049922"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    placeholder: "name@company.ru",
    value: email,
    onChange: e => setEmail(e.target.value),
    error: email && !/@/.test(email) ? "Проверьте адрес" : undefined,
    hint: "\u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 Axoft Online"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
    options: ["ИТ-инфраструктура", "Информационная безопасность", "Оборудование", "Облако"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, "\u0422\u0438\u043F \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "role",
    label: "\u0420\u0435\u0441\u0435\u043B\u043B\u0435\u0440",
    checked: role === "reseller",
    onChange: () => setRole("reseller")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "role",
    label: "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440",
    checked: role === "si",
    onChange: () => setRole("si")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "role",
    label: "\u0412\u0435\u043D\u0434\u043E\u0440",
    checked: role === "vendor",
    onChange: () => setRole("vendor")
  }))), /*#__PURE__*/React.createElement(Switch, {
    label: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0430\u0439\u0434\u0436\u0435\u0441\u0442 Axoft \u041E\u0431\u043D\u043E\u0432\u0438\u0441\u044C",
    checked: news,
    onChange: e => setNews(e.target.checked)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !ok,
    onClick: () => setSent(true)
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
Object.assign(window, {
  PartnerForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/PartnerForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/VendorPage.jsx
try { (() => {
const {
  Card,
  SectionTitle,
  Tabs,
  Badge,
  Button,
  Tag,
  Breadcrumbs,
  Pill
} = window.AxoftDesignSystem_00998b;
const AV = "../../assets/";
function VendorPage({
  go
}) {
  const [tab, setTab] = React.useState("Продукты");
  const [filter, setFilter] = React.useState("Все");
  const vendors = [{
    n: "Платформа виртуализации",
    s: "success",
    t: "ИТ-инфраструктура",
    i: "q3/industrial-server.png"
  }, {
    n: "NGFW и защита периметра",
    s: "success",
    t: "ИБ",
    i: "q3/router.png"
  }, {
    n: "SIEM и мониторинг",
    s: "info",
    t: "ИБ",
    i: "q3/data-processing.png"
  }, {
    n: "Промышленные шлюзы",
    s: "neutral",
    t: "Оборудование",
    i: "q3/pos-terminal.png"
  }, {
    n: "Облачный хаб",
    s: "success",
    t: "Облако",
    i: "q3/cloud.png"
  }, {
    n: "Защита конечных точек",
    s: "info",
    t: "ИБ",
    i: "q3/bolt.png"
  }];
  const shown = filter === "Все" ? vendors : vendors.filter(v => v.t === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-inverse)",
      padding: "40px var(--page-pad-x) 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    onDark: true,
    items: [{
      label: "Главная",
      href: "#"
    }, "Портфель вендоров"]
  }), /*#__PURE__*/React.createElement(SectionTitle, {
    onDark: true,
    size: "h1",
    lead: "Software \u0438 hardware, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430 \u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u041F\u041E."
  }, "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C \u0432\u0435\u043D\u0434\u043E\u0440\u043E\u0432"), /*#__PURE__*/React.createElement(Tabs, {
    onDark: true,
    items: ["Продукты", "Сервисы", "Обучение"],
    value: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "48px var(--page-pad-x) 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, ["Все", "ИТ-инфраструктура", "ИБ", "Оборудование", "Облако"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, shown.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.n,
    variant: "light",
    title: v.n,
    media: /*#__PURE__*/React.createElement("img", {
      src: AV + "icons/" + v.i,
      style: {
        width: 72,
        height: 72,
        objectFit: "contain"
      }
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: v.s
  }, v.s === "success" ? "В реестре ПО" : v.s === "info" ? "Новый вендор" : "Под запрос"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, v.t)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {
      alignSelf: "flex-start",
      paddingLeft: 0
    },
    onClick: () => go("partner")
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F")))))));
}
Object.assign(window, {
  VendorPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/VendorPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

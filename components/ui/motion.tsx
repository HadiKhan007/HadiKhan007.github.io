import React from "react";

type MotionLikeProps = {
  children?: React.ReactNode;
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  layout?: unknown;
  onHoverStart?: unknown;
  onHoverEnd?: unknown;
} & React.HTMLAttributes<HTMLElement>;

function stripMotionProps(props: MotionLikeProps) {
  const {
    initial,
    animate,
    exit,
    transition,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    layout,
    onHoverStart,
    onHoverEnd,
    ...rest
  } = props;
  void initial;
  void animate;
  void exit;
  void transition;
  void whileHover;
  void whileTap;
  void whileInView;
  void viewport;
  void layout;
  void onHoverStart;
  void onHoverEnd;
  return rest;
}

type MotionProxy = Record<string, React.FC<MotionLikeProps>>;

export const motion = new Proxy({} as MotionProxy, {
  get: (_target, tag: string) => {
    const Component: React.FC<MotionLikeProps> = (props) => {
      const safeProps = stripMotionProps(props);
      return React.createElement(tag, safeProps, props.children);
    };
    Component.displayName = `MotionLite(${String(tag)})`;
    return Component;
  },
});

export function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

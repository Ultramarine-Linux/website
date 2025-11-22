//? https://react.i18next.com/latest/trans-component
// do something similar to ↑

import { Children, cloneElement, isValidElement } from "react";

type Props = {
  children: React.ReactNode;
  t: string;
};

/**
 * A fake version of `<Trans>` in `react-i18next` with *very different* behaviour.
 *
 * You feed in a list of empty elements in `<Trans>`. The structure will follow the translation strings.
 *
 * @example ```tsx
 * <Trans t={t("test", { user: "John" })}>
 *   <b />
 *   <a href="https://example.com" />
 * </Trans>
 * ```
 * With `"test": "Hello <1>{{user}}</1>, welcome to <2><1>my site</1></2>."`, the above element will become:
 * ```tsx
 * <b>Hello John</b>, welcome to <a href="https://example.com"><b>my site</b></a>.
 * ```
 *
 * @param children the list of tags.
 * @param t return value of t()
 * @returns ReactNode
 */
const Trans: React.FunctionComponent<Props> = ({ children, t }: Props) => {
  // find /<\/(\d+)>/g, where group 1 parse to int is largest
  const maxTagId = t
    .match(/<\/(\d+)>/g)
    ?.reduce((acc, cur) => Math.max(acc, parseInt(cur.slice(2, -1))), 0);
  const realchildren = Children.toArray(children).filter((child) =>
    isValidElement(child),
  );
  if (maxTagId > realchildren.length) {
    return t; // syntax error
  }

  let contents = [];
  const tagStack = [];
  let ch_idx = 0;
  while (ch_idx < t.length) {
    if (t.substring(ch_idx, ch_idx + 2) == "\\<") {
      contents.push("<");
      ch_idx += 2;
      continue;
    }
    if (t.substring(ch_idx, ch_idx + 2) == "</") {
      let j = 0;
      while (t[++j + ch_idx] != ">" && j + ch_idx < t.length);
      const tagNumber = Number.parseInt(t.substring(ch_idx + 2, ch_idx + j));
      ch_idx += j + 1;
      if (Number.isNaN(tagNumber)) {
        contents.push(t.substring(ch_idx, ch_idx + j));
        continue;
      }
      let { p, l } = tagStack.pop();
      if (tagNumber != p) {
        return t; // syntax error
      }
      contents.push(
        cloneElement(
          realchildren[p - 1],
          {},
          ...contents.splice(l, contents.length - l),
        ),
      );
      continue;
    }
    if (t[ch_idx] == "<") {
      let j = 0;
      while (t[++j + ch_idx] != ">" && j + ch_idx < t.length);
      const tagNumber = Number.parseInt(t.substring(ch_idx + 1, ch_idx + j));
      ch_idx += j + 1;
      if (Number.isNaN(tagNumber)) {
        contents.push(t.substring(ch_idx, ch_idx + j));
        continue;
      }
      tagStack.push({ p: tagNumber, l: contents.length });
      contents.push(""); // in order to splice later, contents inside a new tag element must start fresh
      continue;
    }
    if (typeof contents[contents.length - 1] === "string") {
      contents[contents.length - 1] += t[ch_idx++];
    } else {
      contents.push(t[ch_idx++]);
    }
  }

  return <>{contents}</>;
};

export default Trans;

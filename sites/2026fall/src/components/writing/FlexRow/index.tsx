import type { ParentProps } from "solid-js";
import "./FlexRow.css";

export namespace FlexRow {
  export type Props = ParentProps<{
    title: string
  }>;
}

export const FlexRow = (props: FlexRow.Props) => {
  return (<div class="flex-row">
    {props.children}
  </div>);
}
import type { ParentProps } from "solid-js";
import "./Submit.css";

export namespace Submit {
  export type Props = ParentProps<{
    title: string
  }>;
}

export const Submit = (props: Submit.Props) => {
  return (<div class="submit-instructions">
    <div class="submit-body">
      {props.children}
    </div>
  </div>);
}